# Pausa Lectora

Formulario de un campo y vista previa de un correo de bienvenida sobre lectura. El envío se realiza desde el navegador con EmailJS.

## Configurar EmailJS

1. En EmailJS conecta un servicio de correo. El Service ID del proyecto ya está en `public/index.html`.
2. Crea una plantilla en **Email Templates**. En **To Email** escribe `{{email}}`, en el asunto escribe `¡Bienvenido a Pausa Lectora!` y pega el HTML de `public/bienvenida.html` en el editor HTML de la plantilla. Guarda los cambios.
3. Copia el **Template ID** y la **Public Key** de tu cuenta. En `public/index.html`, completa `templateId` y `publicKey`. No uses la clave privada en el navegador.
4. Cada vez que edites `public/bienvenida.html`, actualiza también el HTML en EmailJS: la vista previa y la plantilla de EmailJS son copias separadas.

## Ejecutar

Con Node.js 18 o superior, ejecuta `npm start` y abre http://localhost:3000. Introduce tu dirección y pulsa el botón. Que EmailJS acepte la solicitud no confirma que el mensaje haya llegado a la bandeja de entrada.

El correo contiene cinco secciones identificadas en el HTML: logo, saludo, contenido, botón CTA y footer. Este ejemplo no guarda una lista de contactos ni envía campañas. Para usarlo públicamente, revisa las opciones de protección contra abusos de EmailJS.
