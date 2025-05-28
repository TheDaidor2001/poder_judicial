import type { APIRoute } from "astro";
import { Resend } from 'resend';
import { createEmailTemplate } from "../../utils/emailTemplate";
import { Buffer } from 'buffer';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
    try {
        // Verificar API key
        if (!import.meta.env.RESEND_API_KEY) {
            throw new Error('RESEND_API_KEY no está configurada');
        }

        // Obtener datos del formulario
        const formData = await request.formData();

        // Extraer valores
        const nombre = formData.get('nombre')?.toString() || '';
        const dip = formData.get('dip')?.toString() || '';
        const telefono = formData.get('telefono')?.toString() || '';
        const email = formData.get('email')?.toString() || '';
        const asunto = formData.get('asunto')?.toString() || '';
        const mensaje = formData.get('mensaje')?.toString() || '';
        const archivo = formData.get('archivo') as File | null;

        // Validaciones básicas
        if (!nombre || !dip || !telefono || !email || !asunto || !mensaje) {
            throw new Error('Todos los campos obligatorios son requeridos');
        }

        // Validar formato de email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error('El formato del email no es válido');
        }

        // Validar tamaño de archivo (máximo 5MB)
        if (archivo && archivo.size > 5 * 1024 * 1024) {
            throw new Error('El archivo adjunto no puede exceder los 5MB');
        }

        // Procesar archivo adjunto si existe
        let attachment = null;
        if (archivo && archivo.size > 0) {
            const fileBuffer = Buffer.from(await archivo.arrayBuffer());
            attachment = {
                filename: archivo.name,
                content: fileBuffer,
                contentType: archivo.type
            };
        }

        // Crear contenido del email
        const emailHtml = createEmailTemplate({
            nombre,
            dip,
            telefono,
            email,
            asunto,
            mensaje,
            tieneAdjunto: !!attachment
        });

        // Configurar y enviar email
        const { data, error } = await resend.emails.send({
            from: 'contacto@tudominio.com', // Usa tu dominio verificado
            to: [import.meta.env.EMAIL_DESTINO || 'tu-email@ejemplo.com'],
            replyTo: email,
            subject: `Contacto Poder Judicial: ${asunto}`,
            html: emailHtml,
            attachments: attachment ? [attachment] : undefined
        });

        if (error) throw error;

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