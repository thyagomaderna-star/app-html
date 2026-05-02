const topics = [
    {
        category: "HTML Básico",
        id: "html-intro",
        title: "Estructura Básica",
        theory: `
            <h3>La Anatomía de HTML</h3>
            <p>HTML (HyperText Markup Language) es el lenguaje que usa tu navegador para saber qué elementos mostrar en pantalla. Imagina que es el "esqueleto" de una casa.</p>
            <p>Las páginas web usan <strong>etiquetas</strong>, que son palabras encerradas en corchetes angulares: <code>&lt;html&gt;</code>. Casi todas se abren y luego se cierran con una barra: <code>&lt;/html&gt;</code>.</p>
            <p><strong>¿Para qué sirve cada cosa?</strong></p>
            <ul>
                <li><code>&lt;!DOCTYPE html&gt;</code>: Le avisa al navegador "¡Este archivo es web moderna!".</li>
                <li><code>&lt;html&gt;</code>: Es la etiqueta principal que abraza a toda la página.</li>
                <li><code>&lt;head&gt;</code>: Es el "cerebro". Aquí va la información oculta, como el título de la pestaña.</li>
                <li><code>&lt;body&gt;</code>: Es el "cuerpo". <strong>¡Aquí va todo lo que el usuario SÍ ve!</strong> (Textos, imágenes).</li>
                <li><code>&lt;h1&gt;</code>: Significa "Heading 1", es el Título Principal más grande.</li>
            </ul>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. Mira el código en el panel de al lado. Nota que el texto está dentro de <code>&lt;body&gt;</code>.<br>
                2. Cambia el texto "¡Hola Mundo!" dentro del <code>&lt;h1&gt;</code> por tu propio nombre (Ej: <code>&lt;h1&gt;Página de Juan&lt;/h1&gt;</code>).<br>
                3. Haz clic en <strong>"Ejecutar Código"</strong> para ver tu cambio en la Vista Previa.
            </div>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>Mi Primer Sitio</title>\n  </head>\n  <body>\n    <h1>¡Hola Mundo!</h1>\n    <p>Este es mi primer sitio web.</p>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Qué etiqueta HTML se utiliza para el encabezado principal (el más grande)?", options: ["<header>", "<h6>", "<head>", "<h1>"], correctAnswer: 3 },
            { question: "¿Qué etiqueta envuelve a todo el contenido visible de la página?", options: ["<html>", "<body>", "<head>", "<content>"], correctAnswer: 1 }
        ]
    },
    {
        category: "HTML Básico",
        id: "html-text",
        title: "Etiquetas de Texto",
        theory: `
            <h3>Dando formato al texto</h3>
            <p>Ahora que ya sabes que todo el contenido visual va dentro de <code>&lt;body&gt;</code>, vamos a escribir.</p>
            <p><strong>¿Para qué sirven estas etiquetas?</strong></p>
            <ul>
                <li><code>&lt;p&gt;</code> (Párrafo): Sirve para escribir bloques de texto normales. Envuelve tus oraciones aquí.</li>
                <li><code>&lt;strong&gt;</code> (Negrita): Si quieres que unas palabras resalten, las envuelves con esto.</li>
                <li><code>&lt;em&gt;</code> (Cursiva/Énfasis): Inclina el texto para darle un tono especial.</li>
                <li><code>&lt;br&gt;</code> (Salto de línea): Rompe la línea hacia abajo (como presionar Enter). ¡No necesita etiqueta de cierre!</li>
            </ul>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. Borra el código existente dentro del body y escribe un nuevo párrafo: <code>&lt;p&gt;Me encanta programar&lt;/p&gt;</code>.<br>
                2. Pon la palabra "programar" en negrita. Debería quedar así: <code>&lt;p&gt;Me encanta &lt;strong&gt;programar&lt;/strong&gt;&lt;/p&gt;</code>.<br>
                3. Dale a "Ejecutar Código".
            </div>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <body>\n    <p>Este es un párrafo normal.</p>\n    <p>Este párrafo contiene <strong>texto importante</strong> y <em>texto enfatizado</em>.</p>\n    <p>Una línea...<br>Y otra línea debajo.</p>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Qué etiqueta se utiliza para dar importancia fuerte a un texto (negrita semántica)?", options: ["<b>", "<strong>", "<important>", "<em>"], correctAnswer: 1 },
            { question: "¿Qué etiqueta usarías para hacer un salto de línea sin crear un nuevo párrafo?", options: ["<break>", "<newline>", "<br>", "<p>"], correctAnswer: 2 }
        ]
    },
    {
        category: "HTML Básico",
        id: "html-lists",
        title: "Listas",
        theory: `
            <h3>Organizando información</h3>
            <p>Las listas son fundamentales para agrupar ítems relacionados.</p>
            <ul>
                <li><strong>Desordenadas (Viñetas):</strong> Contenedor <code>&lt;ul&gt;</code>.</li>
                <li><strong>Ordenadas (Números):</strong> Contenedor <code>&lt;ol&gt;</code>.</li>
                <li><strong>Ítems:</strong> Cada elemento de la lista SIEMPRE va dentro de una etiqueta <code>&lt;li&gt;</code>.</li>
            </ul>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. Tienes una lista ordenada con 3 películas.<br>
                2. Añade un cuarto elemento (<code>&lt;li&gt;</code>) con tu película favorita al final.<br>
                3. Debajo de todo, crea una nueva lista DESORDENADA (<code>&lt;ul&gt;</code>) e inventa 2 tareas pendientes usando <code>&lt;li&gt;</code>.<br>
                4. Ejecuta el código para ver tus nuevas listas.
            </div>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <body>\n    <h3>Mi lista de compras (Desordenada)</h3>\n    <ul>\n      <li>Manzanas</li>\n      <li>Pan</li>\n      <li>Leche</li>\n    </ul>\n\n    <h3>Mis top 3 películas (Ordenada)</h3>\n    <ol>\n      <li>El Padrino</li>\n      <li>Matrix</li>\n      <li>Inception</li>\n    </ol>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Qué etiqueta define cada elemento (ítem) dentro de una lista?", options: ["<ul>", "<ol>", "<li>", "<list>"], correctAnswer: 2 },
            { question: "Si quieres crear una lista numerada (1, 2, 3), ¿cuál es el contenedor correcto?", options: ["<ul>", "<ol>", "<li>", "<dl>"], correctAnswer: 1 }
        ]
    },
    {
        category: "HTML Básico",
        id: "html-links-imgs",
        title: "Enlaces e Imágenes",
        theory: `
            <h3>Conectando la Web</h3>
            <p>Los enlaces y las imágenes hacen que la web sea interactiva y visual.</p>
            <ul>
                <li><strong>Enlaces:</strong> Se usa <code>&lt;a href="url"&gt;Texto del enlace&lt;/a&gt;</code>. El atributo <code>href</code> dice hacia dónde viajas.</li>
                <li><strong>Imágenes:</strong> Se usa <code>&lt;img src="url" alt="descripción"&gt;</code>. El atributo <code>src</code> es la ruta de la foto y <code>alt</code> el texto para ciegos. ¡No tiene etiqueta de cierre!</li>
            </ul>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. Modifica el enlace existente para que lleve a "https://www.google.com" cambiando su atributo <code>href</code>.<br>
                2. Cambia el atributo <code>alt</code> de la imagen a "Foto de prueba".<br>
                3. Ejecuta el código y haz clic en tu nuevo enlace.
            </div>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <body>\n    <h2>Recursos</h2>\n    <p>Visita <a href="https://developer.mozilla.org/es/" target="_blank">MDN Web Docs</a>.</p>\n    \n    <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300" alt="Código HTML">\n  </body>\n</html>`,
        quiz: [
            { question: "¿Cuál es el atributo correcto para especificar la URL de un enlace en la etiqueta <a>?", options: ["src", "link", "href", "url"], correctAnswer: 2 },
            { question: "¿Qué atributo se usa en la etiqueta <img> para mostrar texto alternativo si la imagen no carga?", options: ["title", "description", "alt", "src"], correctAnswer: 2 }
        ]
    },
    {
        category: "HTML Intermedio",
        id: "html-tables",
        title: "Tablas",
        theory: `
            <h3>Datos Tabulares</h3>
            <p>Las tablas muestran datos como en Excel, estructurados en filas y columnas:</p>
            <ul>
                <li><code>&lt;table&gt;</code>: El contenedor general de toda la tabla.</li>
                <li><code>&lt;tr&gt;</code> (Table Row): Define una FILA horizontal.</li>
                <li><code>&lt;th&gt;</code> (Table Header): Celda de encabezado (suele verse en negrita).</li>
                <li><code>&lt;td&gt;</code> (Table Data): Celda normal con datos.</li>
            </ul>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. Observa que hay 3 filas (<code>&lt;tr&gt;</code>). La primera es el encabezado.<br>
                2. Añade una CUARTA fila <code>&lt;tr&gt;</code> al final de la tabla.<br>
                3. Dentro de esa nueva fila, agrega dos celdas <code>&lt;td&gt;</code> con tu propio Nombre y Edad.<br>
                4. Ejecuta el código para ver si apareces en la tabla.
            </div>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <style>table, th, td { border: 1px solid black; border-collapse: collapse; padding: 5px; }</style>\n  <body>\n    <table>\n      <tr>\n        <th>Nombre</th>\n        <th>Edad</th>\n      </tr>\n      <tr>\n        <td>Ana</td>\n        <td>25</td>\n      </tr>\n      <tr>\n        <td>Juan</td>\n        <td>30</td>\n      </tr>\n    </table>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Qué etiqueta define una FILA en una tabla HTML?", options: ["<td>", "<tr>", "<th>", "<table>"], correctAnswer: 1 },
            { question: "¿Qué etiqueta define una celda de ENCABEZADO en una tabla?", options: ["<td>", "<tr>", "<th>", "<thead>"], correctAnswer: 2 }
        ]
    },
    {
        category: "HTML Intermedio",
        id: "html-forms",
        title: "Formularios",
        theory: `
            <h3>Interactuando con el Usuario</h3>
            <p>Los formularios (<code>&lt;form&gt;</code>) son la forma nativa de pedir datos al usuario (Logins, Contacto, etc).</p>
            <p>Usamos la etiqueta <code>&lt;input&gt;</code>, que cambia su forma según el atributo <code>type</code>:</p>
            <ul>
                <li><code>type="text"</code>: Caja de texto normal.</li>
                <li><code>type="password"</code>: Oculta los caracteres (ideal para contraseñas).</li>
                <li><code>type="email"</code>: Fuerza que tenga formato de correo (@).</li>
                <li><code>type="submit"</code>: Crea un botón que envía el formulario.</li>
            </ul>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. Dentro de <code>&lt;form&gt;</code>, crea un nuevo input para pedir el correo electrónico.<br>
                2. Escribe esto justo encima del botón Enviar:<br> <code>&lt;label&gt;Correo: &lt;input type="email" required&gt;&lt;/label&gt;&lt;br&gt;&lt;br&gt;</code><br>
                3. Ejecuta el código, intenta enviar el formulario con un correo inválido y observa cómo el navegador lo bloquea automáticamente.
            </div>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <body>\n    <h2>Registro</h2>\n    <form onsubmit="alert('Enviado'); return false;">\n      <label>Nombre: <input type="text" required></label><br><br>\n      <label>Contraseña: <input type="password" required></label><br><br>\n      <button type="submit">Enviar</button>\n    </form>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Qué etiqueta agrupa las opciones de entrada de datos?", options: ["<input>", "<form>", "<fieldset>", "<group>"], correctAnswer: 1 },
            { question: "¿Qué tipo de input oculta los caracteres tipeados por el usuario?", options: ["text", "hidden", "secret", "password"], correctAnswer: 3 }
        ]
    },
    {
        category: "HTML Avanzado",
        id: "html-semantic",
        title: "Semántica HTML5",
        theory: `
            <h3>Estructura con Significado</h3>
            <p>Antes, los desarrolladores usaban <code>&lt;div&gt;</code> para todo. HTML5 trajo etiquetas semánticas para que Google y los lectores de pantalla entiendan de qué trata cada parte.</p>
            <ul>
                <li><code>&lt;header&gt;</code>: El encabezado superior (logo, menú).</li>
                <li><code>&lt;nav&gt;</code>: Los links de navegación principal.</li>
                <li><code>&lt;main&gt;</code>: El contenido principal único (solo 1 por página).</li>
                <li><code>&lt;footer&gt;</code>: El pie de página (derechos de autor).</li>
            </ul>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. Mira cómo está estructurado el código del Blog con estas etiquetas.<br>
                2. Agrega una nueva sección <code>&lt;section&gt;</code> dentro de la etiqueta <code>&lt;main&gt;</code>.<br>
                3. Dentro de ella, pon un título <code>&lt;h2&gt;Sobre Mí&lt;/h2&gt;</code> y un <code>&lt;p&gt;</code> describiéndote.<br>
                4. Ejecuta el código para ver tu nueva sección añadida.
            </div>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <body>\n    <header>\n      <h1>Mi Blog</h1>\n      <nav><a href="#">Inicio</a> | <a href="#">Acerca de</a></nav>\n    </header>\n    <main>\n      <section>\n        <h2>Último Artículo</h2>\n        <p>Contenido del artículo...</p>\n      </section>\n    </main>\n    <footer>\n      <p>&copy; 2026 Mi Blog</p>\n    </footer>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Qué etiqueta es la más adecuada para envolver los enlaces principales del sitio web?", options: ["<header>", "<section>", "<nav>", "<main>"], correctAnswer: 2 },
            { question: "¿Dónde debería ir típicamente la información de copyright al final de la página?", options: ["<bottom>", "<footer>", "<end>", "<aside>"], correctAnswer: 1 }
        ]
    },
    {
        category: "CSS Básico",
        id: "css-intro",
        title: "Selectores y Colores",
        theory: `
            <h3>Dando Estilo a la Web</h3>
            <p>CSS funciona con <strong>Selectores</strong> (a quién le doy estilo) y <strong>Declaraciones</strong> (qué estilo le doy).</p>
            <ul>
                <li><strong>Etiqueta:</strong> <code>h1 { color: red; }</code> afecta a todos los h1.</li>
                <li><strong>Clase (.):</strong> <code>.destacado { background: blue; }</code> (Se usa con <code>class="destacado"</code>).</li>
                <li><strong>ID (#):</strong> <code>#especial { font-size: 20px; }</code> (Único por página, usa <code>id="especial"</code>).</li>
            </ul>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. En la etiqueta <code>&lt;style&gt;</code>, cambia el color de <code>h1</code> a <code>green</code>.<br>
                2. Crea una nueva regla para la clase <code>.destacado</code> y ponle <code>color: white;</code>.<br>
                3. Ejecuta el código para ver cómo cambian los colores de los textos.
            </div>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      h1 { color: #333; }\n      .destacado { background-color: yellow; padding: 5px; }\n      #especial { color: blue; }\n    </style>\n  </head>\n  <body>\n    <h1>Aprendiendo CSS</h1>\n    <p>Párrafo normal.</p>\n    <p class="destacado">Clase "destacado".</p>\n    <p id="especial">ID "especial".</p>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Cómo se selecciona una clase llamada 'boton' en CSS?", options: ["#boton", ".boton", "boton", "*boton"], correctAnswer: 1 },
            { question: "¿Qué selector usarías si un elemento tiene el atributo id='cabecera'?", options: [".cabecera", "cabecera", "#cabecera", "@cabecera"], correctAnswer: 2 }
        ]
    },
    {
        category: "CSS Básico",
        id: "css-box-model",
        title: "El Modelo de Caja",
        theory: `
            <h3>Todo es un rectángulo</h3>
            <p>En CSS, cada elemento es una caja rodeada de capas invisibles:</p>
            <ol>
                <li><strong>Contenido:</strong> Tu texto o imagen.</li>
                <li><strong>Padding (Relleno):</strong> Espacio interno. Empuja el contenido hacia adentro, pero mantiene el fondo.</li>
                <li><strong>Border (Borde):</strong> La línea que envuelve la caja.</li>
                <li><strong>Margin (Margen):</strong> Espacio externo. Empuja a las OTRAS cajas lejos.</li>
            </ol>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. Cambia el <code>padding</code> de la <code>.caja</code> de 20px a <code>50px</code>. Nota cómo la caja "engorda" por dentro.<br>
                2. Cambia el <code>margin</code> de 30px a <code>0px</code>. Nota cómo las cajas se pegan entre sí.<br>
                3. Ejecuta el código para ver el Modelo de Caja en acción.
            </div>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .caja {\n        background-color: lightblue;\n        width: 200px;\n        padding: 20px;\n        border: 5px solid darkblue;\n        margin: 30px;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="caja">Soy una caja con padding, borde y margen.</div>\n    <div class="caja">Soy otra caja. Observa el margen que nos separa.</div>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Qué propiedad crea espacio transparente DENTRO del borde del elemento?", options: ["margin", "spacing", "padding", "border"], correctAnswer: 2 },
            { question: "¿Qué propiedad empuja a otros elementos hacia afuera creando espacio externo?", options: ["padding", "margin", "spacing", "outline"], correctAnswer: 1 }
        ]
    },
    {
        category: "CSS Básico",
        id: "css-typography",
        title: "Tipografía",
        theory: `
            <h3>Estilizando Textos</h3>
            <p>El diseño tipográfico es crucial para una buena lectura:</p>
            <ul>
                <li><code>font-family</code>: El tipo de letra (Arial, sans-serif).</li>
                <li><code>font-size</code>: Tamaño (16px, 2rem).</li>
                <li><code>font-weight</code>: Grosor (normal, bold).</li>
                <li><code>text-align</code>: Alineación (left, center, right).</li>
            </ul>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. En la regla del <code>h1</code>, agrega <code>color: darkred;</code>.<br>
                2. En la regla del <code>p</code>, cambia <code>font-weight: 400;</code> por <code>bold</code>.<br>
                3. Cambia el <code>text-align</code> del h1 a <code>left</code>.<br>
                4. Ejecuta el código para ver tu nueva tipografía.
            </div>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      body {\n        font-family: 'Segoe UI', sans-serif;\n        color: #333;\n      }\n      h1 {\n        text-align: center;\n        font-size: 2.5rem;\n      }\n      p {\n        line-height: 1.6;\n        font-weight: 400;\n      }\n    </style>\n  </head>\n  <body>\n    <h1>Tipografía Web</h1>\n    <p>El buen diseño tipográfico es crucial para que los usuarios puedan leer tu contenido cómodamente sin forzar la vista.</p>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Qué propiedad se utiliza para cambiar el tipo de letra de un texto?", options: ["text-style", "font-weight", "font-family", "text-font"], correctAnswer: 2 },
            { question: "¿Qué valor usarías en font-weight para hacer que la letra se vea más gruesa (negrita)?", options: ["bold", "normal", "italic", "underline"], correctAnswer: 0 }
        ]
    },
    {
        category: "CSS Intermedio",
        id: "css-positioning",
        title: "Posicionamiento",
        theory: `
            <h3>Moviendo elementos libremente</h3>
            <p>La propiedad <code>position</code> te permite romper las reglas del flujo normal:</p>
            <ul>
                <li><code>relative</code>: Se mueve usando <code>top</code> o <code>left</code>, pero deja su espacio original vacío. Sirve como "ancla".</li>
                <li><code>absolute</code>: Flota y se ubica en relación a su padre (si el padre es relative).</li>
                <li><code>fixed</code>: Queda clavado en la pantalla, aunque hagas scroll.</li>
            </ul>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. Observa cómo el hijo (rojo) está posicionado absolutamente dentro del padre (gris).<br>
                2. Cambia <code>top: 20px;</code> por <code>bottom: 0;</code> y <code>right: 20px;</code> por <code>left: 0;</code> en la clase <code>.hijo</code>.<br>
                3. Ejecuta el código. ¡Verás que el cuadrado rojo se movió a la esquina inferior izquierda!
            </div>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .padre { position: relative; height: 150px; background: #ddd; }\n      .hijo { \n        position: absolute; \n        top: 20px; \n        right: 20px; \n        background: red; \n        color: white; \n        padding: 10px; \n      }\n    </style>\n  </head>\n  <body>\n    <div class="padre">\n      Soy el padre (relative)\n      <div class="hijo">Soy el hijo (absolute)</div>\n    </div>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Qué valor de position hace que un elemento se quede pegado a la pantalla aunque hagas scroll?", options: ["absolute", "relative", "static", "fixed"], correctAnswer: 3 },
            { question: "¿Cuál es el valor por defecto de la propiedad position en todos los elementos HTML?", options: ["relative", "absolute", "static", "fixed"], correctAnswer: 2 }
        ]
    },
    {
        category: "CSS Intermedio",
        id: "css-flexbox",
        title: "Flexbox",
        theory: `
            <h3>Diseños Flexibles Unidimensionales</h3>
            <p>Flexbox es la herramienta moderna para alinear elementos. Se aplica al contenedor (padre) usando <code>display: flex;</code>.</p>
            <ul>
                <li><code>justify-content</code>: Alinea los hijos horizontalmente (center, space-between).</li>
                <li><code>align-items</code>: Alinea los hijos verticalmente (center, flex-start).</li>
                <li><code>flex-direction</code>: Cambia si los hijos se apilan en fila (row) o columna (column).</li>
            </ul>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. En la clase <code>.container</code>, cambia <code>justify-content: space-around;</code> por <code>justify-content: center;</code>.<br>
                2. Agrégale también a <code>.container</code> la propiedad <code>gap: 10px;</code>.<br>
                3. Ejecuta el código. Verás que las cajas ahora están pegadas en el centro con una pequeña separación.
            </div>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .container {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        background: #1e293b;\n        height: 100px;\n      }\n      .box { width: 50px; height: 50px; background: #3b82f6; color: white; display:flex; justify-content:center; align-items:center; }\n    </style>\n  </head>\n  <body>\n    <div class="container">\n      <div class="box">1</div>\n      <div class="box">2</div>\n      <div class="box">3</div>\n    </div>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Qué propiedad de Flexbox se utiliza para centrar elementos verticalmente (cuando la dirección es row)?", options: ["align-content", "justify-content", "vertical-align", "align-items"], correctAnswer: 3 },
            { question: "Si aplicas `justify-content: space-between;`, ¿qué pasará con los elementos?", options: ["Se centrarán", "El primer y último elemento se pegarán a los bordes", "Se pegarán a la izquierda", "Ocuparán todo el ancho"], correctAnswer: 1 }
        ]
    },
    {
        category: "CSS Avanzado",
        id: "css-grid",
        title: "CSS Grid",
        theory: `
            <h3>Layouts Bidimensionales</h3>
            <p>Grid es el rey de los layouts complejos. Permite organizar elementos en filas y columnas al mismo tiempo.</p>
            <ul>
                <li><code>display: grid;</code>: Activa el modo cuadrícula.</li>
                <li><code>grid-template-columns</code>: Define cuántas columnas hay y su ancho. La unidad <code>fr</code> (fracción) reparte el espacio equitativamente.</li>
                <li><code>gap</code>: Crea canales de separación entre columnas y filas.</li>
            </ul>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. Cambia <code>grid-template-columns: 1fr 2fr 1fr;</code> por <code>grid-template-columns: 1fr 1fr;</code> (solo 2 columnas del mismo tamaño).<br>
                2. Cambia el <code>gap: 10px;</code> a <code>gap: 30px;</code>.<br>
                3. Ejecuta el código para ver cómo tu cuadrícula ahora tiene 2 columnas idénticas y más separadas.
            </div>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .grid {\n        display: grid;\n        grid-template-columns: 1fr 2fr 1fr; /* 3 columnas */\n        gap: 10px;\n      }\n      .item { background: #8b5cf6; color: white; padding: 20px; text-align: center; }\n    </style>\n  </head>\n  <body>\n    <div class="grid">\n      <div class="item">Columna 1</div>\n      <div class="item">Columna 2 (Más ancha)</div>\n      <div class="item">Columna 3</div>\n      <div class="item">Fila 2, Col 1</div>\n      <div class="item">Fila 2, Col 2</div>\n    </div>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Qué unidad introdujo Grid que significa 'una fracción del espacio disponible'?", options: ["px", "fr", "%", "em"], correctAnswer: 1 },
            { question: "¿Qué propiedad define el espacio de separación entre las celdas de una grilla?", options: ["margin", "padding", "gap", "spacing"], correctAnswer: 2 }
        ]
    },
    {
        category: "CSS Avanzado",
        id: "css-responsive",
        title: "Diseño Responsivo",
        theory: `
            <h3>Media Queries</h3>
            <p>El diseño responsivo adapta tu web al tamaño de pantalla del usuario (celular, tablet, PC).</p>
            <p>Se logra con <code>@media</code>, que inyecta reglas de CSS de forma condicional.</p>
            <ul>
                <li><code>max-width: 600px</code>: Aplica si la pantalla es de 600px <strong>o menos</strong> (Enfoque Desktop-First).</li>
                <li><code>min-width: 768px</code>: Aplica si la pantalla es de 768px <strong>o más</strong> (Enfoque Mobile-First).</li>
            </ul>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. En la regla <code>@media (max-width: 400px)</code>, cambia el color de fondo (<code>background</code>) a <code>blue</code>.<br>
                2. Ejecuta el código.<br>
                3. Mueve la línea vertical que separa el editor de la vista previa para "achicar" la pantalla virtual. ¡Verás cómo la caja cambia a azul al achicarse!
            </div>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .caja {\n        width: 100%;\n        background: #10b981;\n        padding: 20px;\n        color: white;\n        text-align: center;\n        box-sizing: border-box;\n      }\n      /* ¡Prueba achicar el panel de vista previa! */\n      @media (max-width: 400px) {\n        .caja {\n          background: #ef4444;\n          font-size: 12px;\n        }\n      }\n    </style>\n  </head>\n  <body>\n    <div class="caja">Achica la pantalla para verme rojo.</div>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Qué regla de CSS se usa para aplicar estilos basados en el tamaño de la pantalla?", options: ["@screen", "@media", "@responsive", "@viewport"], correctAnswer: 1 },
            { question: "En el enfoque Mobile-First, ¿qué condición de @media se usa típicamente para aplicar estilos cuando la pantalla CRECE?", options: ["max-width", "min-width", "device-width", "orientation"], correctAnswer: 1 }
        ]
    },
    {
        category: "CSS Avanzado",
        id: "css-transitions",
        title: "Transiciones y Efectos",
        theory: `
            <h3>Añadiendo Vida a la Web</h3>
            <p>Las animaciones sutiles son la diferencia entre una página aburrida y una profesional.</p>
            <ul>
                <li><code>:hover</code>: Una pseudo-clase que se activa cuando pasas el mouse por encima.</li>
                <li><code>transition: [propiedad] [tiempo]</code>: Hace que el cambio de estilo dure un tiempo (ej. 0.3s) en lugar de ser instantáneo.</li>
                <li><code>transform: scale(1.1)</code>: Hace que el elemento crezca un 10%.</li>
            </ul>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. Cambia el tiempo de <code>transition: background 0.3s, transform 0.2s;</code> a <code>2s</code> en ambos. Esto hará la animación en cámara lenta.<br>
                2. En <code>.boton:hover</code>, añade <code>border-radius: 50px;</code>.<br>
                3. Ejecuta el código y pasa el mouse. ¡El botón se volverá una píldora redonda lentamente!
            </div>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .boton {\n        background: #3b82f6;\n        color: white;\n        padding: 15px 30px;\n        border: none;\n        border-radius: 8px;\n        cursor: pointer;\n        font-size: 16px;\n        /* Transición suave */\n        transition: background 0.3s, transform 0.2s;\n      }\n      .boton:hover {\n        background: #2563eb;\n        transform: scale(1.1); /* Lo hace 10% más grande */\n      }\n    </style>\n  </head>\n  <body>\n    <button class="boton">¡Pasa el mouse encima!</button>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Qué pseudo-clase se usa para aplicar estilos cuando el usuario pasa el mouse sobre un elemento?", options: [":active", ":focus", ":hover", ":mouse"], correctAnswer: 2 },
            { question: "¿Qué propiedad de CSS permite definir la duración y suavidad de un cambio de estilo?", options: ["transition", "transform", "animate", "scale"], correctAnswer: 0 }
        ]
    },
    {
        category: "Integración con Django",
        id: "django-templates-intro",
        title: "Django Templates: Variables",
        theory: `
            <h3>Renderizado en el Servidor</h3>
            <p>Con <strong>Django</strong>, el backend (Python) genera el HTML dinámicamente usando el <strong>Django Template Language (DTL)</strong>.</p>
            <p>Para imprimir una variable que viene desde Python, la envuelves en llaves dobles: <code>{{ nombre_variable }}</code>.</p>
            <p><em>(En esta plataforma lo verás escrito tal cual, pero en la vida real Django lo reemplazaría por datos antes de mandarlo al usuario).</em></p>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. Imagina que Python nos envía una variable llamada <code>saldo_cuenta</code>.<br>
                2. Agrega un nuevo párrafo que diga "Tu saldo es:" e imprime la variable usando llaves dobles: <code>{{ saldo_cuenta }}</code>.<br>
                3. Ejecuta el código para ver cómo quedaría tu plantilla lista para Django.
            </div>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <body>\n    <h2>Perfil de Usuario</h2>\n    <!-- Django reemplazará esto con el valor real desde Python -->\n    <p>Nombre de usuario: <strong>{{ nombre_usuario }}</strong></p>\n    <p>Nivel actual: {{ nivel_usuario }}</p>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Cuál es la sintaxis correcta en Django para imprimir el valor de una variable en HTML?", options: ["{ variable }", "[[ variable ]]", "{{ variable }}", "<?php echo variable; ?>"], correctAnswer: 2 },
            { question: "¿Quién se encarga de procesar las plantillas DTL y convertirlas en HTML final?", options: ["El navegador del usuario", "JavaScript", "El servidor Backend con Django (Python)", "El archivo CSS"], correctAnswer: 2 }
        ]
    },
    {
        category: "Integración con Django",
        id: "django-templates-logic",
        title: "Django Templates: Lógica",
        theory: `
            <h3>Etiquetas de Plantilla (Template Tags)</h3>
            <p>Django te permite usar condicionales (If) y bucles (For) directamente en el HTML usando la sintaxis <code>{% etiqueta %}</code>.</p>
            <ul>
                <li><strong>Condiciones:</strong> <code>{% if user.is_authenticated %} Bienvenido {% endif %}</code></li>
                <li><strong>Bucles:</strong> <code>{% for item in lista %} ... {% endfor %}</code> sirve para iterar sobre datos de la Base de Datos.</li>
            </ul>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. Miremos el bloque <code>{% if usuario_es_premium %}</code>.<br>
                2. Añade un <code>{% elif esta_en_periodo_de_prueba %}</code> justo antes del <code>{% else %}</code>, e imprime un párrafo: <code>&lt;p&gt;Te quedan 3 días de prueba&lt;/p&gt;</code>.<br>
                3. Ejecuta el código para ver la plantilla terminada.
            </div>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <body>\n    <h2>Tus Tareas</h2>\n    <ul>\n      <!-- Django iterará sobre la lista 'tareas' que viene de Python -->\n      {% for tarea in tareas %}\n        <li>{{ tarea.nombre }}</li>\n      {% endfor %}\n    </ul>\n\n    {% if usuario_es_premium %}\n      <p style="color: gold;">¡Gracias por ser Premium!</p>\n    {% else %}\n      <button>Actualizar a Premium</button>\n    {% endif %}\n  </body>\n</html>`,
        quiz: [
            { question: "¿Qué etiqueta de Django usarías para recorrer una lista de productos y mostrar un HTML por cada uno?", options: ["{% loop productos %}", "{% for producto in productos %}", "{{ for producto in productos }}", "<for each='producto'>"], correctAnswer: 1 },
            { question: "¿Cómo se cierra correctamente una estructura condicional en Django Templates?", options: ["{% end %}", "</body>", "{% endif %}", "{{ endif }}"], correctAnswer: 2 }
        ]
    },
    {
        category: "Integración con Django",
        id: "django-forms",
        title: "Formularios y Seguridad",
        theory: `
            <h3>Formularios y Seguridad</h3>
            <p>Para enviar datos al servidor Django usando HTML, el formulario debe usar el método POST.</p>
            <p><strong>Seguridad Crítica:</strong> Para evitar ataques de falsificación (CSRF), Django rechaza cualquier formulario POST que no contenga su token de seguridad oculto.</p>
            <p>Para incluirlo, siempre debes poner <code>{% csrf_token %}</code> dentro de tus etiquetas <code>&lt;form&gt;</code>.</p>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. El formulario actual ya tiene el <code>{% csrf_token %}</code>.<br>
                2. Añade un nuevo campo al formulario llamado "Categoría" usando un <code>&lt;select name="categoria"&gt;</code> con dos <code>&lt;option&gt;</code> ("General" y "Ayuda").<br>
                3. Ejecuta el código. ¡Ahora tienes un formulario completo y seguro listo para Django!
            </div>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <body>\n    <h2>Crear Nuevo Post</h2>\n    <!-- El formulario envía los datos directamente a la vista de Django -->\n    <form method="POST" action="/crear-post/">\n      <!-- ¡Obligatorio en Django por seguridad! -->\n      {% csrf_token %}\n      \n      <label>Título:</label><br>\n      <input type="text" name="titulo" required><br><br>\n      \n      <label>Contenido:</label><br>\n      <textarea name="contenido"></textarea><br><br>\n      \n      <button type="submit">Guardar Post</button>\n    </form>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Qué etiqueta de Django es obligatoria dentro de un formulario HTML para evitar ataques?", options: ["{% security_pass %}", "{% protect %}", "{% csrf_token %}", "{{ csrf }}"], correctAnswer: 2 },
            { question: "En un entorno Django tradicional (sin JavaScript), ¿qué atributo de la etiqueta <form> le dice a Django a qué URL enviar los datos?", options: ["action", "src", "href", "link"], correctAnswer: 0 }
        ]
    },
    {
        category: "Backend: Python y Django",
        id: "python-oop",
        title: "Python: Clases y Objetos",
        language: "python",
        theory: `
            <h3>Programación Orientada a Objetos</h3>
            <p>En Python, usamos <code>class</code> para definir "moldes" que crean objetos.</p>
            <ul>
                <li><strong>Clase:</strong> El molde (ej. <code>class Perro:</code>).</li>
                <li><strong>Método __init__:</strong> La función constructora que inicializa los atributos del objeto al crearlo.</li>
                <li><strong>self:</strong> Hace referencia al objeto mismo que se está usando. ¡Obligatorio en cada método!</li>
            </ul>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. El código del editor ahora es código Python real.<br>
                2. Agrega un nuevo atributo llamado <code>self.edad = edad</code> en el <code>__init__</code>.<br>
                3. Modifica la creación del objeto para incluir la edad: <code>mi_perro = Mascota("Firulais", "Perro", 5)</code>.<br>
                4. Ejecuta el código. Verás una terminal simulada.
            </div>
        `,
        initialCode: `class Mascota:\n    def __init__(self, nombre, especie):\n        self.nombre = nombre\n        self.especie = especie\n        \n    def saludar(self):\n        return f"Hola, soy {self.nombre} y soy un {self.especie}"\n\n# Creando un objeto\nmi_perro = Mascota("Firulais", "Perro")\nprint(mi_perro.saludar())`,
        quiz: [
            { question: "¿Qué palabra clave se usa para definir una nueva clase en Python?", options: ["function", "def", "class", "object"], correctAnswer: 2 },
            { question: "¿Cuál es el primer parámetro que DEBE recibir cualquier método dentro de una clase en Python?", options: ["this", "self", "init", "objeto"], correctAnswer: 1 }
        ]
    },
    {
        category: "Backend: Python y Django",
        id: "django-models",
        title: "Django: Modelos (Base de Datos)",
        language: "python",
        theory: `
            <h3>Tablas como Clases</h3>
            <p>Django utiliza un ORM (Object-Relational Mapping). En lugar de escribir código SQL complejo, creas Clases de Python y Django crea las tablas en la Base de Datos automáticamente.</p>
            <ul>
                <li><strong>models.Model:</strong> Toda clase de base de datos debe heredar de esta.</li>
                <li><strong>models.CharField:</strong> Un campo para texto corto (como un nombre).</li>
                <li><strong>models.IntegerField:</strong> Un campo numérico entero.</li>
            </ul>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. Estás definiendo la tabla <code>Usuario</code> en el archivo <code>models.py</code>.<br>
                2. Agrega un nuevo campo llamado <code>edad</code> usando <code>models.IntegerField()</code>.<br>
                3. Ejecuta el código para simular la subida al servidor de base de datos.
            </div>
        `,
        initialCode: `from django.db import models\n\nclass Usuario(models.Model):\n    nombre = models.CharField(max_length=100)\n    correo = models.EmailField(unique=True)\n    fecha_registro = models.DateTimeField(auto_now_add=True)\n    \n    def __str__(self):\n        return self.nombre`,
        quiz: [
            { question: "¿De qué clase debe heredar cualquier modelo de Base de Datos en Django?", options: ["django.Database", "models.Model", "orm.Table", "db.Class"], correctAnswer: 1 },
            { question: "¿Qué ventaja principal ofrece el ORM de Django?", options: ["Hace la web más rápida", "Evita escribir SQL permitiendo usar clases de Python", "Reemplaza al HTML y CSS", "Genera colores automáticamente"], correctAnswer: 1 }
        ]
    },
    {
        category: "Backend: Python y Django",
        id: "django-forms-py",
        title: "Django: Formularios (forms.py)",
        language: "python",
        theory: `
            <h3>Formularios en Python</h3>
            <p>Además del HTML, Django maneja los formularios desde Python para poder validarlos de forma segura antes de que lleguen a la Base de Datos.</p>
            <ul>
                <li><strong>forms.Form:</strong> Crea un formulario libre.</li>
                <li><strong>forms.ModelForm:</strong> ¡Magia pura! Analiza tu Modelo de Base de Datos y crea el HTML y las validaciones automáticamente por ti.</li>
            </ul>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-left: 4px solid var(--primary); border-radius: 4px; margin-top: 15px;">
                <strong>👨‍💻 Tu Misión en el Editor:</strong><br>
                1. Tienes un <code>ModelForm</code> configurado para el modelo <code>Usuario</code>.<br>
                2. En la lista de <code>fields</code>, agrega el campo <code>'edad'</code>.<br>
                3. Ejecuta el código. ¡Django hará todo el trabajo pesado de generar el HTML del input de edad!
            </div>
        `,
        initialCode: `from django import forms\nfrom .models import Usuario\n\nclass UsuarioForm(forms.ModelForm):\n    class Meta:\n        model = Usuario\n        # Django creará inputs HTML para estos campos automáticamente\n        fields = ['nombre', 'correo']`,
        quiz: [
            { question: "¿Qué clase de Django genera automáticamente campos de formulario basados en un Modelo de la Base de Datos?", options: ["forms.HtmlForm", "forms.AutoForm", "forms.ModelForm", "models.Form"], correctAnswer: 2 },
            { question: "En un ModelForm, ¿qué atributo de la clase Meta define qué columnas de la base de datos se mostrarán al usuario?", options: ["fields", "inputs", "columns", "show_data"], correctAnswer: 0 }
        ]
    }
];

// State
let completedTopics = JSON.parse(localStorage.getItem('htmlCssCompletedTopics')) || [];
let currentTopicIndex = -1;
let currentQuizIndex = 0; // Para manejar múltiples preguntas

// DOM Elements
const navMenu = document.getElementById('nav-menu');
const currentTopicTitle = document.getElementById('current-topic-title');
const theoryContent = document.getElementById('theory-content');
const workspaceContainer = document.getElementById('workspace-container');
const quizContainer = document.getElementById('quiz-container');
const codeEditor = document.getElementById('code-editor');
const runCodeBtn = document.getElementById('run-code-btn');
const resetCodeBtn = document.getElementById('reset-code-btn');
const previewFrame = document.getElementById('preview-frame');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');

let editorInstance = null;
let codeSaveTimeout;

// Initialize
function init() {
    renderMenu();
    updateProgress();
    
    // Auto-select first uncompleted topic or first topic
    let topicToLoad = 0;
    for (let i = 0; i < topics.length; i++) {
        if (!completedTopics.includes(topics[i].id)) {
            topicToLoad = i;
            break;
        }
    }
    loadTopic(topicToLoad);

    // Events
    runCodeBtn.addEventListener('click', runCode);
    resetCodeBtn.addEventListener('click', resetCode);
    
    // Initialize CodeMirror
    editorInstance = CodeMirror.fromTextArea(codeEditor, {
        mode: 'htmlmixed',
        theme: 'dracula',
        lineNumbers: true,
        autoCloseTags: true,
        autoCloseBrackets: true,
        indentUnit: 4,
        lineWrapping: true
    });

    // Auto-run code with debounce and save to localStorage
    editorInstance.on('change', () => {
        clearTimeout(codeSaveTimeout);
        codeSaveTimeout = setTimeout(() => {
            runCode();
            if (currentTopicIndex >= 0) {
                const topicId = topics[currentTopicIndex].id;
                localStorage.setItem(`code_${topicId}`, editorInstance.getValue());
            }
        }, 500);
    });
}

function renderMenu() {
    navMenu.innerHTML = '';
    
    // Group topics by category
    const categories = {};
    topics.forEach((topic, index) => {
        if (!categories[topic.category]) categories[topic.category] = [];
        categories[topic.category].push({ ...topic, index });
    });

    Object.keys(categories).forEach(category => {
        const catEl = document.createElement('div');
        catEl.className = 'nav-category';
        catEl.textContent = category;
        navMenu.appendChild(catEl);

        categories[category].forEach(topic => {
            const itemEl = document.createElement('button'); // Better A11y than a div
            itemEl.className = `nav-item ${completedTopics.includes(topic.id) ? 'completed' : ''}`;
            itemEl.onclick = () => loadTopic(topic.index);
            itemEl.innerHTML = `
                <div class="status-icon" aria-hidden="true"></div>
                <span>${topic.title}</span>
            `;
            
            if (currentTopicIndex === topic.index) {
                itemEl.classList.add('active');
                itemEl.setAttribute('aria-current', 'page');
            }
            
            navMenu.appendChild(itemEl);
        });
    });
}

function loadTopic(index) {
    if (index < 0 || index >= topics.length) return;
    currentTopicIndex = index;
    const topic = topics[index];

    // Update UI
    currentTopicTitle.textContent = topic.title;
    theoryContent.innerHTML = topic.theory;
    
    // Load saved code or initial code
    const savedCode = localStorage.getItem(`code_${topic.id}`);
    const codeToLoad = savedCode !== null ? savedCode : topic.initialCode;
    
    if (editorInstance) {
        editorInstance.setOption('mode', topic.language === 'python' ? 'python' : 'htmlmixed');
        editorInstance.setValue(codeToLoad);
        setTimeout(() => editorInstance.refresh(), 100);
    } else {
        codeEditor.value = codeToLoad;
    }
    
    // Reset Quiz state
    currentQuizIndex = 0;
    
    // Show containers
    workspaceContainer.style.display = 'grid';
    quizContainer.style.display = 'block';
    
    // Re-trigger animations
    document.querySelectorAll('.animate-fade-in').forEach(el => {
        el.style.animation = 'none';
        el.offsetHeight; /* trigger reflow */
        el.style.animation = null; 
    });

    renderMenu();
    runCode();
    renderQuiz();
}

function runCode() {
    const code = editorInstance ? editorInstance.getValue() : codeEditor.value;
    const iframeDoc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    iframeDoc.open();
    
    const currentTopic = currentTopicIndex >= 0 ? topics[currentTopicIndex] : null;
    if (currentTopic && currentTopic.language === 'python') {
        const escapedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        iframeDoc.write(`
            <div style="font-family: monospace; padding: 20px; background: #282a36; color: #f8f8f2; height: 100vh; margin: 0; box-sizing: border-box;">
                <h3 style="color: #50fa7b; margin-top: 0; font-family: sans-serif;">Terminal / Backend Simulado</h3>
                <p style="color: #6272a4; font-family: sans-serif;">Este es un archivo Python (.py). En producción, esto se ejecuta en el servidor (Django), no en el navegador HTML.</p>
                <hr style="border-color: #444; margin-bottom: 20px;">
                <pre style="color: #ff79c6; font-size: 14px;">${escapedCode}</pre>
                <p style="color: #8be9fd; margin-top: 20px; font-weight: bold;">[Servidor Iniciado Correctamente]</p>
            </div>
        `);
    } else {
        iframeDoc.write(code);
    }
    iframeDoc.close();
}

function resetCode() {
    if (currentTopicIndex < 0) return;
    if (confirm('¿Estás seguro de que quieres borrar tu código y restaurar el original?')) {
        const topic = topics[currentTopicIndex];
        localStorage.removeItem(`code_${topic.id}`);
        if (editorInstance) {
            editorInstance.setValue(topic.initialCode);
        } else {
            codeEditor.value = topic.initialCode;
        }
        runCode();
    }
}

function renderQuiz() {
    const topic = topics[currentTopicIndex];
    // Support both single quiz object and array of quizzes
    const quizzes = Array.isArray(topic.quiz) ? topic.quiz : [topic.quiz];
    const quiz = quizzes[currentQuizIndex];
    
    quizFeedback.innerHTML = '';
    quizOptions.innerHTML = '';
    quizQuestion.textContent = `Pregunta ${currentQuizIndex + 1} de ${quizzes.length}: ` + quiz.question;
    
    quiz.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        // Use textContent to safely render HTML tags as text
        btn.textContent = option;
        btn.onclick = () => handleQuizAnswer(index, quiz.correctAnswer, btn, quizzes.length);
        quizOptions.appendChild(btn);
    });
}

function handleQuizAnswer(selectedIndex, correctIndex, buttonEl, totalQuizzes) {
    // Disable all options
    const allOptions = document.querySelectorAll('.quiz-option');
    allOptions.forEach(opt => opt.style.pointerEvents = 'none');
    
    if (selectedIndex === correctIndex) {
        buttonEl.classList.add('correct');
        
        let nextBtnHtml = '';
        if (currentQuizIndex < totalQuizzes - 1) {
            // There are more questions in this topic
            nextBtnHtml = `<button onclick="nextQuestion()" class="primary-btn" style="margin-left: 15px; background: var(--secondary);">Siguiente Pregunta ➔</button>`;
            quizFeedback.innerHTML = `<span class="feedback-correct">¡Correcto!</span> ${nextBtnHtml}`;
        } else {
            // Completed all questions in this topic
            if (currentTopicIndex < topics.length - 1) {
                nextBtnHtml = `<button onclick="loadTopic(${currentTopicIndex + 1})" class="primary-btn" style="margin-left: 15px; background: var(--accent);">Siguiente Etapa ➔</button>`;
            } else {
                nextBtnHtml = `<span style="margin-left: 15px; color: var(--accent); font-weight: bold;">¡Has completado todos los temas! 🎉</span>`;
            }
            
            quizFeedback.innerHTML = `<span class="feedback-correct">¡Correcto! Excelente trabajo.</span> ${nextBtnHtml}`;
            
            // Mark topic as completed
            const topic = topics[currentTopicIndex];
            if (!completedTopics.includes(topic.id)) {
                completedTopics.push(topic.id);
                localStorage.setItem('htmlCssCompletedTopics', JSON.stringify(completedTopics));
                updateProgress();
                renderMenu();
            }
        }
    } else {
        buttonEl.classList.add('incorrect');
        allOptions[correctIndex].classList.add('correct'); // Show correct answer
        
        const reviewBtn = `<button onclick="restartTopic()" class="primary-btn" style="margin-left: 15px; background: var(--incorrect);">Repasar Teoría y Reiniciar</button>`;
        quizFeedback.innerHTML = `<span class="feedback-incorrect">¡Incorrecto! Debes repasar la teoría.</span> ${reviewBtn}`;
    }
}

function restartTopic() {
    currentQuizIndex = 0;
    document.querySelector('.content-scroll-area').scrollTop = 0;
    renderQuiz();
}

function nextQuestion() {
    currentQuizIndex++;
    renderQuiz();
}

function updateProgress() {
    const percentage = Math.round((completedTopics.length / topics.length) * 100) || 0;
    progressBar.value = percentage; // Updated for <progress> element
    progressBar.textContent = `${percentage}%`; // Fallback for old browsers
    progressText.textContent = `Progreso: ${percentage}%`;
}

// Start app
window.onload = init;
