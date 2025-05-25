// src/pages/api/contacto.ts
import type { APIRoute } from "astro";
import { Resend } from 'resend';
import { createEmailTemplate } from "../../utils/emailTemplate";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
    try {
        // Verificar que la API key esté configurada
        if (!import.meta.env.RESEND_API_KEY) {
            console.error('RESEND_API_KEY no está configurada');
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Error de configuración del servidor'
                }),
                {
                    status: 500,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Obtener los datos del formulario
        const formData = await request.formData();

        // Extraer los valores
        const nombre = formData.get('nombre')?.toString() || '';
        const email = formData.get('email')?.toString() || '';
        const asunto = formData.get('asunto')?.toString() || '';
        const mensaje = formData.get('mensaje')?.toString() || '';

        // Validación básica
        if (!nombre || !email || !asunto || !mensaje) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Todos los campos son requeridos'
                }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Validación de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'El formato del email no es válido'
                }),
                {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Configuración del email
        const emailConfig = {
            // IMPORTANTE: Usar un dominio verificado en Resend
            from: 'onboarding@resend.dev', // Usa este por defecto o tu dominio verificado
            to: [import.meta.env.EMAIL_DESTINO || 'tu-email@ejemplo.com'],
            replyTo: email,
            subject: `Nuevo mensaje de contacto: ${asunto}`,
            html: createEmailTemplate({ nombre, asunto, email, mensaje }),
        };

        console.log('Enviando email con configuración:', {
            from: emailConfig.from,
            to: emailConfig.to,
            subject: emailConfig.subject
        });

        // Enviar el email usando Resend
        const { data, error } = await resend.emails.send(emailConfig);

        if (error) {
            console.error('Error de Resend:', error);

            // Manejar errores específicos de Resend
            if (error.message?.includes('Invalid from address')) {
                return new Response(
                    JSON.stringify({
                        success: false,
                        message: 'Error de configuración del dominio de envío'
                    }),
                    {
                        status: 500,
                        headers: { 'Content-Type': 'application/json' }
                    }
                );
            }

            throw new Error(error.message || 'Error desconocido de Resend');
        }

        console.log('Email enviado exitosamente:', data);

        return new Response(
            JSON.stringify({
                success: true,
                message: '¡Mensaje enviado correctamente! Te responderemos pronto.',
                data: data
            }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            }
        );

    } catch (error) {
        console.error('Error en el endpoint de contacto:', error);

        return new Response(
            JSON.stringify({
                success: false,
                message: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.',
                error: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
            }),
            {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
};