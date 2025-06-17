import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.formData();

        // Validar que todos los campos requeridos están presentes
        const requiredFields = ['nombre', 'dip', 'telefono', 'email', 'asunto', 'mensaje'];
        const missingFields = requiredFields.filter(field => !formData.get(field));

        if (missingFields.length > 0) {
            return new Response(JSON.stringify({
                success: false,
                message: `Faltan campos requeridos: ${missingFields.join(', ')}`
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Extraer valores del formulario
        const nombre = formData.get('nombre')!.toString();
        const dip = formData.get('dip')!.toString();
        const telefono = formData.get('telefono')!.toString();
        const email = formData.get('email')!.toString();
        const asunto = formData.get('asunto')!.toString();
        const mensaje = formData.get('mensaje')!.toString();
        const archivo = formData.get('archivo') as File | null;

        // Validaciones básicas
        if (nombre.length < 3) {
            throw new Error('El nombre debe tener al menos 3 caracteres');
        }

        if (dip.length < 5) {
            throw new Error('El DIP debe tener al menos 5 caracteres');
        }

        if (telefono.length < 8) {
            throw new Error('El teléfono debe tener al menos 8 caracteres');
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error('El formato del email no es válido');
        }

        if (asunto.length < 5) {
            throw new Error('El asunto debe tener al menos 5 caracteres');
        }

        if (mensaje.length < 10) {
            throw new Error('El mensaje debe tener al menos 10 caracteres');
        }

        // Validar archivo si existe
        if (archivo && archivo.size > 0) {
            const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            if (!allowedTypes.includes(archivo.type)) {
                throw new Error('Solo se permiten archivos PDF, DOC o DOCX');
            }

            if (archivo.size > 10 * 1024 * 1024) { // 10MB
                throw new Error('El archivo no puede exceder los 10MB');
            }
        }

        // Crear FormData para enviar a la API externa
        const apiFormData = new FormData();
        apiFormData.append('fullName', nombre);
        apiFormData.append('dni', dip);
        apiFormData.append('phone', telefono);
        apiFormData.append('email', email);
        apiFormData.append('subject', asunto);
        apiFormData.append('message', mensaje);

        // Agregar archivo si existe
        if (archivo && archivo.size > 0) {
            apiFormData.append('attachment', archivo);
        }

        // Obtener la URL de la API desde las variables de entorno
        const API_URL = import.meta.env.PUBLIC_API_URL || 'https://palacio-justicia-api.vercel.app/api';

        // Hacer la petición a la API externa
        const response = await fetch(`${API_URL}/contact/public`, {
            method: 'POST',
            body: apiFormData
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Error al enviar el mensaje');
        }

        return new Response(JSON.stringify({
            success: true,
            message: 'Mensaje enviado correctamente',
            data: result.data
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