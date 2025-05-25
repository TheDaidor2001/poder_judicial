// src/utils/emailTemplate.ts

interface EmailData {
    nombre: string;
    email: string;
    asunto: string;
    mensaje: string;
}

// Función para escapar HTML que funciona en el servidor
function escapeHtml(text: string): string {
    const map: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, (match) => map[match]);
}

export function createEmailTemplate({ nombre, email, asunto, mensaje }: EmailData): string {
    // Escapar todos los datos del usuario
    const nombreSeguro = escapeHtml(nombre);
    const emailSeguro = escapeHtml(email);
    const asuntoSeguro = escapeHtml(asunto);
    const mensajeSeguro = escapeHtml(mensaje).replace(/\n/g, '<br>');

    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo mensaje de contacto</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          background-color: white;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
          background-color: #1a365d;
          color: white;
          padding: 20px;
          margin: -30px -30px 30px -30px;
          border-radius: 8px 8px 0 0;
          text-align: center;
        }
        .field {
          margin-bottom: 20px;
          padding: 15px;
          background-color: #f8f9fa;
          border-left: 4px solid #1a365d;
          border-radius: 4px;
        }
        .field-label {
          font-weight: bold;
          color: #1a365d;
          display: block;
          margin-bottom: 5px;
        }
        .field-value {
          color: #555;
        }
        .message-content {
          background-color: #ffffff;
          padding: 20px;
          border: 1px solid #e9ecef;
          border-radius: 4px;
          margin-top: 10px;
        }
        .footer {
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e9ecef;
          font-size: 12px;
          color: #666;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 Nuevo Mensaje de Contacto</h1>
        </div>
        
        <div class="field">
          <span class="field-label">👤 Nombre:</span>
          <span class="field-value">${nombreSeguro}</span>
        </div>
        
        <div class="field">
          <span class="field-label">✉️ Email:</span>
          <span class="field-value">${emailSeguro}</span>
        </div>
        
        <div class="field">
          <span class="field-label">📋 Asunto:</span>
          <span class="field-value">${asuntoSeguro}</span>
        </div>
        
        <div class="field">
          <span class="field-label">💬 Mensaje:</span>
          <div class="message-content">
            ${mensajeSeguro}
          </div>
        </div>
        
        <div class="footer">
          <p>Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
          <p>Fecha: ${new Date().toLocaleString('es-ES', {
        timeZone: 'America/Mexico_City',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })}</p>
        </div>
      </div>
    </body>
    </html>
  `;
}