PÁGINA SENCILLA PARA MENÚ DIGITAL - AROMACAFÉ

Archivos incluidos:
- index.html: página principal.
- styles.css: diseño visual.
- menu-data.js: aquí se editan productos, precios y categorías.
- app.js: funcionamiento del buscador y filtros.
- assets/menu_aromacafe.pdf: PDF original del menú.
- assets/logo_aromacafe.png: imagen de logo usada en la página.

CÓMO ABRIRLA EN TU COMPUTADORA
1. Descomprime la carpeta.
2. Da doble clic en index.html.

CÓMO PUBLICARLA GRATIS Y USARLA CON QR
Opción fácil: Netlify
1. Entra a https://www.netlify.com/
2. Crea una cuenta gratis.
3. En "Add new site" elige "Deploy manually".
4. Arrastra la carpeta completa aromacafe_menu_web o el contenido de la carpeta.
5. Netlify te dará un enlace tipo: https://aromacafe-menu.netlify.app
6. Ese enlace es el que debes usar para generar el QR estático.

CÓMO MANTENER EL QR PERMANENTE
- El QR debe apuntar al enlace de la página, no al PDF directamente.
- Si cambias precios, solo actualiza menu-data.js y vuelve a subir los archivos al mismo sitio.
- Mientras el enlace del sitio no cambie, el QR seguirá funcionando.

CÓMO EDITAR PRECIOS
1. Abre menu-data.js con Bloc de notas, VS Code o cualquier editor.
2. Busca el producto.
3. Cambia el precio.
4. Guarda.
5. Vuelve a subir la página al mismo sitio.

CÓMO HACER EL QR EN WORD
1. Copia el enlace de tu página publicada.
2. En Word presiona Ctrl + F9.
3. Dentro de las llaves pega:
   DISPLAYBARCODE "https://TU-LINK-AQUI" QR \q 3
4. Presiona F9.

Recomendación:
Usa un QR estático. No uses servicios que digan "QR dinámico gratis" si no quieres depender de pagos o vencimientos.
