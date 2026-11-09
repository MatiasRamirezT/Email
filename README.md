# Pausa Lectora

Formulario de un campo que envía un correo de bienvenida sobre hábitos de lectura mediante Resend. El correo está en `public/bienvenida.html`, usa tablas y CSS inline, y contiene marca, saludo, contenido, botón y pie.

## Las cinco secciones del correo

En `public/bienvenida.html` están identificadas con comentarios numerados:

1. **Logo:** el símbolo PL y el nombre Pausa Lectora en la franja verde.
2. **Saludo:** «¡Hola, qué bueno tenerte aquí!».
3. **Contenido:** el mensaje de bienvenida y el consejo de leer diez minutos.
4. **Botón CTA:** «Explorar libros gratuitos», que lleva a Project Gutenberg.
5. **Footer:** el nombre del proyecto y la razón por la que se recibió el correo.

Para visualizar la plantilla, inicia la aplicación y abre http://localhost:3000/bienvenida. Esta vista previa no envía ningún correo.

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
