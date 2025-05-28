interface EmailData {
  nombre: string;
  dip: string;
  telefono: string;
  email: string;
  asunto: string;
  mensaje: string;
  tieneAdjunto: boolean;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;', '<': '&lt;', '>': '&gt;',
    '"': '&quot;', "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

export function createEmailTemplate(data: EmailData): string {
  const formatDate = (date: Date) => date.toLocaleString('es-ES', {
    timeZone: 'Africa/Malabo',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nuevo Mensaje - Poder Judicial</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1a365d; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #fff; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .field { margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
            .field-label { font-weight: bold; color: #1a365d; display: block; margin-bottom: 5px; }
            .field-value { color: #555; }
            .message { background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #777; text-align: center; }
            .badge { display: inline-block; padding: 3px 8px; border-radius: 4px; font-size: 12px; }
            .badge-attachment { background: #e3f2fd; color: #1976d2; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Nuevo Mensaje de Contacto</h1>
                <p>Poder Judicial de Guinea Ecuatorial</p>
            </div>
            
            <div class="content">
                <div class="field">
                    <span class="field-label">Nombre Completo:</span>
                    <span class="field-value">${escapeHtml(data.nombre)}</span>
                </div>
                
                <div class="field">
                    <span class="field-label">Nº de DIP:</span>
                    <span class="field-value">${escapeHtml(data.dip)}</span>
                </div>
                
                <div class="field">
                    <span class="field-label">Teléfono:</span>
                    <span class="field-value">${escapeHtml(data.telefono)}</span>
                </div>
                
                <div class="field">
                    <span class="field-label">Email:</span>
                    <span class="field-value">${escapeHtml(data.email)}</span>
                </div>
                
                <div class="field">
                    <span class="field-label">Asunto:</span>
                    <span class="field-value">${escapeHtml(data.asunto)}</span>
                </div>
                
                ${data.tieneAdjunto ? `
                <div class="field">
                    <span class="field-label">Adjunto:</span>
                    <span class="badge badge-attachment">Documento PDF adjunto</span>
                </div>
                ` : ''}
                
                <div class="field">
                    <span class="field-label">Mensaje:</span>
                    <div class="message">${escapeHtml(data.mensaje).replace(/\n/g, '<br>')}</div>
                </div>
                
                <div class="footer">
                    <p>Este mensaje fue enviado desde el formulario de contacto del sitio web.</p>
                    <p>Fecha y hora: ${formatDate(new Date())}</p>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
}