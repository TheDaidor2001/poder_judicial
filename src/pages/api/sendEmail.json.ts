import type { APIRoute } from "astro";
import { Resend } from 'resend';
import { createEmailTemplate } from "../../utils/emailTemplate";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
    try {
        // Verificar API key
        if (!import.meta.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY no configurada');
            throw new Error('Error de configuración del servidor');
        }

        const formData = await request.formData();

        // Validar que todos los campos requeridos están presentes
        const requiredFields = ['nombre', 'dip', 'telefono', 'email', 'asunto', 'mensaje'];
        const missingFields = requiredFields.filter(field => !formData.get(field));

        if (missingFields.length > 0) {
            throw new Error(`Faltan campos requeridos: ${missingFields.join(', ')}`);
        }

        // Extraer valores
        const nombre = formData.get('nombre')!.toString();
        const dip = formData.get('dip')!.toString();
        const telefono = formData.get('telefono')!.toString();
        const email = formData.get('email')!.toString();
        const asunto = formData.get('asunto')!.toString();
        const mensaje = formData.get('mensaje')!.toString();
        const archivo = formData.get('archivo') as File | null;

        // Validar email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error('El formato del email no es válido');
        }

        // Procesar archivo adjunto (si existe y es menor a 5MB)
        let attachment = undefined;
        if (archivo && archivo.size > 0) {
            if (archivo.size > 5 * 1024 * 1024) {
                throw new Error('El archivo adjunto no puede exceder los 5MB');
            }

            attachment = [{
                filename: archivo.name,
                content: Buffer.from(await archivo.arrayBuffer()),
                contentType: archivo.type
            }];
        }

        // Crear y enviar email
        const emailHtml = createEmailTemplate({
            nombre,
            dip,
            telefono,
            email,
            asunto,
            mensaje,
            tieneAdjunto: !!attachment
        });

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: [import.meta.env.EMAIL_DESTINO || 'tu-email@ejemplo.com'],
            replyTo: email,
            subject: `Contacto Poder Judicial: ${asunto}`,
            html: emailHtml,
            attachments: attachment
        });

        if (error) {
            console.error('Detalles del error de Resend:', {
                name: error.name,
                message: error.message,
            });
            throw new Error(`Error al enviar el correo: ${error.message}`);
        }

        return new Response(JSON.stringify({
            success: true,
            message: 'Mensaje enviado correctamente'
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Error en el endpoint de contacto:', error);

        return new Response(JSON.stringify({
            success: false,
            message: error instanceof Error ? error.message : 'Error al procesar la solicitud'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};