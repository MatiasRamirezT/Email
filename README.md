# Pausa Lectora

Formulario de un campo que envía un correo de bienvenida sobre hábitos de lectura mediante Resend. El correo está en `public/bienvenida.html`, usa tablas y CSS inline, y contiene marca, saludo, contenido, botón y pie.

## Cómo ejecutarlo

1. Instala Node.js 18 o superior.
2. Crea una cuenta en [Resend](https://resend.com/), obtiene una clave API y configura un remitente permitido por tu cuenta. Para enviar a otras direcciones, configura un dominio verificado según las instrucciones del proveedor.
3. En la terminal, define las variables y arranca la aplicación:

   ```bash
   export RESEND_API_KEY="tu_clave"
   export EMAIL_FROM="Pausa Lectora <hola@tudominio.com>"
   npm start
   ```

   En PowerShell usa `$env:RESEND_API_KEY="tu_clave"` y `$env:EMAIL_FROM="Pausa Lectora <hola@tudominio.com>"` antes de `npm start`.
4. Abre http://localhost:3000 e introduce tu correo. Un mensaje de éxito indica que el proveedor aceptó la solicitud; no confirma la entrega en bandeja.

No publiques la clave API. Configura los registros de autenticación del dominio siguiendo las indicaciones de tu proveedor antes de usar un remitente propio. El ejemplo envía únicamente el mensaje de bienvenida: no guarda contactos, no crea una lista de marketing y no implementa bajas ni campañas. Antes de añadir envíos recurrentes se necesita gestionar el consentimiento y las bajas, además de proteger el formulario contra abusos.
