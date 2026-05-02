const topics = [
    {
        category: "HTML Básico",
        id: "html-intro",
        title: "Estructura Básica",
        theory: `
            <h3>La Anatomía de HTML</h3>
            <p>HTML (HyperText Markup Language) es el bloque de construcción de la web. Define el significado y la estructura del contenido.</p>
            <p>Todo documento HTML válido requiere una estructura fundamental:</p>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Título de la página&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hola Mundo&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>Mi Primer Sitio</title>\n  </head>\n  <body>\n    <h1>¡Hola Mundo!</h1>\n    <p>Este es mi primer sitio web.</p>\n  </body>\n</html>`,
        quiz: { question: "¿Qué etiqueta HTML se utiliza para el encabezado principal (el más grande)?", options: ["<header>", "<h6>", "<head>", "<h1>"], correctAnswer: 3 }
    },
    {
        category: "HTML Básico",
        id: "html-text",
        title: "Etiquetas de Texto",
        theory: `
            <h3>Dando formato al texto</h3>
            <p>HTML proporciona varias etiquetas para darle significado al texto:</p>
            <ul>
                <li><code>&lt;p&gt;</code>: Define un párrafo.</li>
                <li><code>&lt;strong&gt;</code>: Define texto importante (suele verse en negrita).</li>
                <li><code>&lt;em&gt;</code>: Texto enfatizado (suele verse en cursiva).</li>
                <li><code>&lt;br&gt;</code>: Salto de línea (no lleva etiqueta de cierre).</li>
            </ul>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <body>\n    <p>Este es un párrafo normal.</p>\n    <p>Este párrafo contiene <strong>texto importante</strong> y <em>texto enfatizado</em>.</p>\n    <p>Una línea...<br>Y otra línea debajo.</p>\n  </body>\n</html>`,
        quiz: { question: "¿Qué etiqueta se utiliza para dar importancia fuerte a un texto (negrita semántica)?", options: ["<b>", "<strong>", "<important>", "<em>"], correctAnswer: 1 }
    },
    {
        category: "HTML Básico",
        id: "html-lists",
        title: "Listas",
        theory: `
            <h3>Organizando información</h3>
            <p>Las listas son fundamentales. Existen dos tipos principales:</p>
            <ul>
                <li><strong>Listas Desordenadas (Viñetas):</strong> Usan la etiqueta <code>&lt;ul&gt;</code>.</li>
                <li><strong>Listas Ordenadas (Números):</strong> Usan la etiqueta <code>&lt;ol&gt;</code>.</li>
            </ul>
            <p>Los elementos dentro de cualquier lista se definen con <code>&lt;li&gt;</code>.</p>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <body>\n    <h3>Mi lista de compras (Desordenada)</h3>\n    <ul>\n      <li>Manzanas</li>\n      <li>Pan</li>\n      <li>Leche</li>\n    </ul>\n\n    <h3>Mis top 3 películas (Ordenada)</h3>\n    <ol>\n      <li>El Padrino</li>\n      <li>Matrix</li>\n      <li>Inception</li>\n    </ol>\n  </body>\n</html>`,
        quiz: { question: "¿Qué etiqueta define cada elemento (ítem) dentro de una lista?", options: ["<ul>", "<ol>", "<li>", "<list>"], correctAnswer: 2 }
    },
    {
        category: "HTML Básico",
        id: "html-links-imgs",
        title: "Enlaces e Imágenes",
        theory: `
            <h3>Conectando la Web</h3>
            <p>Los enlaces y las imágenes hacen que la web sea interactiva y visual.</p>
            <ul>
                <li><strong>Enlaces:</strong> Se usa <code>&lt;a href="url"&gt;Texto&lt;/a&gt;</code>.</li>
                <li><strong>Imágenes:</strong> Se usa <code>&lt;img src="url" alt="descripción"&gt;</code>. Nota que no tiene etiqueta de cierre.</li>
            </ul>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <body>\n    <h2>Recursos</h2>\n    <p>Visita <a href="https://developer.mozilla.org/es/" target="_blank">MDN Web Docs</a>.</p>\n    \n    <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=300" alt="Código HTML">\n  </body>\n</html>`,
        quiz: { question: "¿Cuál es el atributo correcto para especificar la URL de un enlace en la etiqueta <a>?", options: ["src", "link", "href", "url"], correctAnswer: 2 }
    },
    {
        category: "HTML Intermedio",
        id: "html-tables",
        title: "Tablas",
        theory: `
            <h3>Datos Tabulares</h3>
            <p>Las tablas estructuran datos en filas y columnas:</p>
            <ul>
                <li><code>&lt;table&gt;</code>: El contenedor principal.</li>
                <li><code>&lt;tr&gt;</code>: Define una fila (table row).</li>
                <li><code>&lt;th&gt;</code>: Define un encabezado de columna.</li>
                <li><code>&lt;td&gt;</code>: Define una celda de datos.</li>
            </ul>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <style>table, th, td { border: 1px solid black; border-collapse: collapse; padding: 5px; }</style>\n  <body>\n    <table>\n      <tr>\n        <th>Nombre</th>\n        <th>Edad</th>\n      </tr>\n      <tr>\n        <td>Ana</td>\n        <td>25</td>\n      </tr>\n      <tr>\n        <td>Juan</td>\n        <td>30</td>\n      </tr>\n    </table>\n  </body>\n</html>`,
        quiz: { question: "¿Qué etiqueta define una FILA en una tabla HTML?", options: ["<td>", "<tr>", "<th>", "<table>"], correctAnswer: 1 }
    },
    {
        category: "HTML Intermedio",
        id: "html-forms",
        title: "Formularios",
        theory: `
            <h3>Interactuando con el Usuario</h3>
            <p>Los formularios permiten a los usuarios enviar datos. Usan <code>&lt;form&gt;</code> y controles <code>&lt;input&gt;</code>.</p>
            <p>Tipos de inputs:</p>
            <ul>
                <li><code>text</code>: Texto corto.</li>
                <li><code>password</code>: Texto oculto.</li>
                <li><code>radio</code>: Opción única.</li>
                <li><code>submit</code>: Botón para enviar.</li>
            </ul>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <body>\n    <h2>Registro</h2>\n    <form onsubmit="alert('Enviado'); return false;">\n      <label>Nombre: <input type="text" required></label><br><br>\n      <label>Contraseña: <input type="password" required></label><br><br>\n      <button type="submit">Enviar</button>\n    </form>\n  </body>\n</html>`,
        quiz: { question: "¿Qué etiqueta agrupa las opciones de entrada de datos?", options: ["<input>", "<form>", "<fieldset>", "<group>"], correctAnswer: 1 }
    },
    {
        category: "HTML Avanzado",
        id: "html-semantic",
        title: "Semántica HTML5",
        theory: `
            <h3>Estructura con Significado</h3>
            <p>En lugar de usar <code>&lt;div&gt;</code> para todo, HTML5 introdujo etiquetas que describen su contenido, ayudando al SEO y la accesibilidad:</p>
            <ul>
                <li><code>&lt;header&gt;</code>: Encabezado del sitio o sección.</li>
                <li><code>&lt;nav&gt;</code>: Menú de navegación.</li>
                <li><code>&lt;main&gt;</code>: Contenido principal único de la página.</li>
                <li><code>&lt;section&gt;</code>: Una sección temática genérica.</li>
                <li><code>&lt;footer&gt;</code>: Pie de página.</li>
            </ul>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <body>\n    <header>\n      <h1>Mi Blog</h1>\n      <nav><a href="#">Inicio</a> | <a href="#">Acerca de</a></nav>\n    </header>\n    <main>\n      <section>\n        <h2>Último Artículo</h2>\n        <p>Contenido del artículo...</p>\n      </section>\n    </main>\n    <footer>\n      <p>&copy; 2026 Mi Blog</p>\n    </footer>\n  </body>\n</html>`,
        quiz: { question: "¿Qué etiqueta es la más adecuada para envolver los enlaces principales del sitio web?", options: ["<header>", "<section>", "<nav>", "<main>"], correctAnswer: 2 }
    },
    {
        category: "CSS Básico",
        id: "css-intro",
        title: "Selectores y Colores",
        theory: `
            <h3>Dando Estilo a la Web</h3>
            <p>CSS usa <strong>selectores</strong> para encontrar elementos HTML y bloques de <strong>declaraciones</strong> para darles estilo.</p>
            <p>Selectores básicos:</p>
            <ul>
                <li><strong>Elemento:</strong> <code>p { color: red; }</code></li>
                <li><strong>Clase (.):</strong> <code>.mi-clase { background: blue; }</code> (Se puede repetir)</li>
                <li><strong>ID (#):</strong> <code>#mi-id { font-size: 20px; }</code> (Único por página)</li>
            </ul>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      h1 { color: #333; }\n      .destacado { background-color: yellow; padding: 5px; }\n      #especial { color: blue; }\n    </style>\n  </head>\n  <body>\n    <h1>Aprendiendo CSS</h1>\n    <p>Párrafo normal.</p>\n    <p class="destacado">Clase "destacado".</p>\n    <p id="especial">ID "especial".</p>\n  </body>\n</html>`,
        quiz: { question: "¿Cómo se selecciona una clase llamada 'boton' en CSS?", options: ["#boton", ".boton", "boton", "*boton"], correctAnswer: 1 }
    },
    {
        category: "CSS Básico",
        id: "css-box-model",
        title: "El Modelo de Caja",
        theory: `
            <h3>Todo es un rectángulo</h3>
            <p>En CSS, cada elemento es una caja compuesta por:</p>
            <ol>
                <li><strong>Content (Contenido):</strong> El texto o imagen.</li>
                <li><strong>Padding (Relleno):</strong> Espacio transparente dentro del borde.</li>
                <li><strong>Border (Borde):</strong> La línea que rodea el padding.</li>
                <li><strong>Margin (Margen):</strong> Espacio transparente fuera del borde.</li>
            </ol>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .caja {\n        background-color: lightblue;\n        width: 200px;\n        padding: 20px;\n        border: 5px solid darkblue;\n        margin: 30px;\n      }\n    </style>\n  </head>\n  <body>\n    <div class="caja">Soy una caja con padding, borde y margen.</div>\n    <div class="caja">Soy otra caja. Observa el margen que nos separa.</div>\n  </body>\n</html>`,
        quiz: { question: "¿Qué propiedad crea espacio transparente DENTRO del borde del elemento?", options: ["margin", "spacing", "padding", "border"], correctAnswer: 2 }
    },
    {
        category: "CSS Básico",
        id: "css-typography",
        title: "Tipografía",
        theory: `
            <h3>Estilizando Textos</h3>
            <p>Propiedades comunes para texto:</p>
            <ul>
                <li><code>font-family</code>: El tipo de fuente (ej. Arial, sans-serif).</li>
                <li><code>font-size</code>: Tamaño de la letra (ej. 16px, 1.2rem).</li>
                <li><code>font-weight</code>: Grosor (ej. normal, bold, 700).</li>
                <li><code>text-align</code>: Alineación (left, center, right).</li>
                <li><code>line-height</code>: Altura de la línea, mejora la legibilidad.</li>
            </ul>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      body {\n        font-family: 'Segoe UI', sans-serif;\n        color: #333;\n      }\n      h1 {\n        text-align: center;\n        font-size: 2.5rem;\n      }\n      p {\n        line-height: 1.6;\n        font-weight: 400;\n      }\n    </style>\n  </head>\n  <body>\n    <h1>Tipografía Web</h1>\n    <p>El buen diseño tipográfico es crucial para que los usuarios puedan leer tu contenido cómodamente sin forzar la vista.</p>\n  </body>\n</html>`,
        quiz: { question: "¿Qué propiedad se utiliza para cambiar el tipo de letra de un texto?", options: ["text-style", "font-weight", "font-family", "text-font"], correctAnswer: 2 }
    },
    {
        category: "CSS Intermedio",
        id: "css-positioning",
        title: "Posicionamiento",
        theory: `
            <h3>Moviendo elementos libremente</h3>
            <p>La propiedad <code>position</code> controla cómo se ubica un elemento:</p>
            <ul>
                <li><code>static</code>: Por defecto, sigue el flujo del documento.</li>
                <li><code>relative</code>: Se mueve relativo a su posición normal.</li>
                <li><code>absolute</code>: Se ubica relativo a su ancestro posicionado más cercano.</li>
                <li><code>fixed</code>: Se fija a la pantalla del navegador (no hace scroll).</li>
            </ul>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .padre { position: relative; height: 150px; background: #ddd; }\n      .hijo { \n        position: absolute; \n        top: 20px; \n        right: 20px; \n        background: red; \n        color: white; \n        padding: 10px; \n      }\n    </style>\n  </head>\n  <body>\n    <div class="padre">\n      Soy el padre (relative)\n      <div class="hijo">Soy el hijo (absolute)</div>\n    </div>\n  </body>\n</html>`,
        quiz: { question: "¿Qué valor de position hace que un elemento se quede pegado a la pantalla aunque hagas scroll?", options: ["absolute", "relative", "static", "fixed"], correctAnswer: 3 }
    },
    {
        category: "CSS Intermedio",
        id: "css-flexbox",
        title: "Flexbox",
        theory: `
            <h3>Diseños Flexibles Unidimensionales</h3>
            <p>Flexbox es perfecto para alinear elementos en filas o columnas.</p>
            <p>Al padre se le aplica <code>display: flex;</code>.</p>
            <ul>
                <li><code>justify-content</code>: Alinea en el eje principal (horizontal por defecto).</li>
                <li><code>align-items</code>: Alinea en el eje transversal (vertical).</li>
                <li><code>flex-direction</code>: Cambia de fila (row) a columna (column).</li>
            </ul>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .container {\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        background: #1e293b;\n        height: 100px;\n      }\n      .box { width: 50px; height: 50px; background: #3b82f6; color: white; display:flex; justify-content:center; align-items:center; }\n    </style>\n  </head>\n  <body>\n    <div class="container">\n      <div class="box">1</div>\n      <div class="box">2</div>\n      <div class="box">3</div>\n    </div>\n  </body>\n</html>`,
        quiz: { question: "¿Qué propiedad de Flexbox se utiliza para centrar elementos verticalmente (cuando la dirección es row)?", options: ["align-content", "justify-content", "vertical-align", "align-items"], correctAnswer: 3 }
    },
    {
        category: "CSS Avanzado",
        id: "css-grid",
        title: "CSS Grid",
        theory: `
            <h3>Layouts Bidimensionales</h3>
            <p>Grid es el sistema de maquetación más poderoso en CSS, permite crear filas y columnas simultáneamente.</p>
            <p>Se define con <code>display: grid;</code>.</p>
            <ul>
                <li><code>grid-template-columns</code>: Define el ancho y número de columnas.</li>
                <li><code>gap</code>: Define el espacio entre las celdas de la grilla.</li>
            </ul>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .grid {\n        display: grid;\n        grid-template-columns: 1fr 2fr 1fr; /* 3 columnas */\n        gap: 10px;\n      }\n      .item { background: #8b5cf6; color: white; padding: 20px; text-align: center; }\n    </style>\n  </head>\n  <body>\n    <div class="grid">\n      <div class="item">Columna 1</div>\n      <div class="item">Columna 2 (Más ancha)</div>\n      <div class="item">Columna 3</div>\n      <div class="item">Fila 2, Col 1</div>\n      <div class="item">Fila 2, Col 2</div>\n    </div>\n  </body>\n</html>`,
        quiz: { question: "¿Qué unidad introdujo Grid que significa 'una fracción del espacio disponible'?", options: ["px", "fr", "%", "em"], correctAnswer: 1 }
    },
    {
        category: "CSS Avanzado",
        id: "css-responsive",
        title: "Diseño Responsivo",
        theory: `
            <h3>Media Queries</h3>
            <p>El diseño responsivo asegura que la página se vea bien en celulares, tablets y monitores.</p>
            <p>Usamos <code>@media</code> para aplicar reglas CSS solo si la pantalla cumple ciertas condiciones (como un ancho máximo).</p>
            <pre><code>@media (max-width: 600px) {
  body { background: red; }
}</code></pre>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .caja {\n        width: 100%;\n        background: #10b981;\n        padding: 20px;\n        color: white;\n        text-align: center;\n        box-sizing: border-box;\n      }\n      /* ¡Prueba achicar el panel de vista previa! */\n      @media (max-width: 400px) {\n        .caja {\n          background: #ef4444;\n          font-size: 12px;\n        }\n      }\n    </style>\n  </head>\n  <body>\n    <div class="caja">Achica la pantalla para verme rojo.</div>\n  </body>\n</html>`,
        quiz: { question: "¿Qué regla de CSS se usa para aplicar estilos basados en el tamaño de la pantalla?", options: ["@screen", "@media", "@responsive", "@viewport"], correctAnswer: 1 }
    },
    {
        category: "CSS Avanzado",
        id: "css-transitions",
        title: "Transiciones y Efectos",
        theory: `
            <h3>Añadiendo Vida a la Web</h3>
            <p>Las transiciones permiten cambiar valores de propiedades de forma suave en un tiempo determinado.</p>
            <p>Suelen usarse junto con pseudo-clases como <code>:hover</code>.</p>
            <ul>
                <li><code>transition</code>: Define la propiedad, duración, y el estilo de animación (ej. ease).</li>
                <li><code>transform</code>: Permite rotar, escalar o trasladar el elemento.</li>
            </ul>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <head>\n    <style>\n      .boton {\n        background: #3b82f6;\n        color: white;\n        padding: 15px 30px;\n        border: none;\n        border-radius: 8px;\n        cursor: pointer;\n        font-size: 16px;\n        /* Transición suave */\n        transition: background 0.3s, transform 0.2s;\n      }\n      .boton:hover {\n        background: #2563eb;\n        transform: scale(1.1); /* Lo hace 10% más grande */\n      }\n    </style>\n  </head>\n  <body>\n    <button class="boton">¡Pasa el mouse encima!</button>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Qué pseudo-clase se usa para aplicar estilos cuando el usuario pasa el mouse sobre un elemento?", options: [":active", ":focus", ":hover", ":mouse"], correctAnswer: 2 }
        ]
    },
    {
        category: "Integración con Django",
        id: "django-templates-intro",
        title: "Django Templates: Variables",
        theory: `
            <h3>Renderizado en el Servidor</h3>
            <p>Con <strong>Django</strong>, no necesitas JavaScript para que tu página sea dinámica. El backend de Python "mezcla" los datos con tu HTML antes de enviarlo al navegador.</p>
            <p>Usamos el <strong>Django Template Language (DTL)</strong>. Para mostrar una variable que viene de Python en tu HTML, se usan llaves dobles: <code>{{ variable }}</code>.</p>
            <p><em>Nota: Aunque el editor de esta plataforma muestra el código en vivo, en un entorno real Django procesa estas etiquetas en el servidor.</em></p>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <body>\n    <h2>Perfil de Usuario</h2>\n    <!-- Django reemplazará esto con el valor real desde Python -->\n    <p>Nombre de usuario: <strong>{{ nombre_usuario }}</strong></p>\n    <p>Nivel actual: {{ nivel_usuario }}</p>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Cuál es la sintaxis correcta en Django para imprimir el valor de una variable en HTML?", options: ["{ variable }", "[[ variable ]]", "{{ variable }}", "<?php echo variable; ?>"], correctAnswer: 2 }
        ]
    },
    {
        category: "Integración con Django",
        id: "django-templates-logic",
        title: "Django Templates: Lógica",
        theory: `
            <h3>Etiquetas de Plantilla (Template Tags)</h3>
            <p>Django te permite usar lógica básica directamente en el HTML usando la sintaxis <code>{% etiqueta %}</code>.</p>
            <ul>
                <li><strong>Condiciones:</strong> <code>{% if condicion %} ... {% endif %}</code></li>
                <li><strong>Bucles:</strong> <code>{% for item in lista %} ... {% endfor %}</code> para mostrar múltiples elementos de una base de datos.</li>
            </ul>
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
            <h3>Formularios sin JavaScript</h3>
            <p>En Django, los formularios HTML tradicionales se usan configurando el <code>method="POST"</code> y la URL de destino en el atributo <code>action</code>.</p>
            <p><strong>Seguridad crítica:</strong> Django requiere que cualquier formulario POST incluya la etiqueta <code>{% csrf_token %}</code> para proteger a tu sitio contra ataques de falsificación de peticiones.</p>
        `,
        initialCode: `<!DOCTYPE html>\n<html>\n  <body>\n    <h2>Crear Nuevo Post</h2>\n    <!-- El formulario envía los datos directamente a la vista de Django -->\n    <form method="POST" action="/crear-post/">\n      <!-- ¡Obligatorio en Django por seguridad! -->\n      {% csrf_token %}\n      \n      <label>Título:</label><br>\n      <input type="text" name="titulo" required><br><br>\n      \n      <label>Contenido:</label><br>\n      <textarea name="contenido"></textarea><br><br>\n      \n      <button type="submit">Guardar Post</button>\n    </form>\n  </body>\n</html>`,
        quiz: [
            { question: "¿Qué etiqueta de Django es obligatoria dentro de un formulario HTML para evitar ataques?", options: ["{% security_pass %}", "{% protect %}", "{% csrf_token %}", "{{ csrf }}"], correctAnswer: 2 },
            { question: "En un entorno Django tradicional (sin JavaScript), ¿qué atributo de la etiqueta <form> le dice a Django a qué URL enviar los datos?", options: ["action", "src", "href", "link"], correctAnswer: 0 }
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
const previewFrame = document.getElementById('preview-frame');
const runCodeBtn = document.getElementById('run-code-btn');
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
            const itemEl = document.createElement('div');
            itemEl.className = `nav-item ${completedTopics.includes(topic.id) ? 'completed' : ''}`;
            itemEl.onclick = () => loadTopic(topic.index);
            itemEl.innerHTML = `
                <div class="status-icon"></div>
                <span>${topic.title}</span>
            `;
            
            if (currentTopicIndex === topic.index) {
                itemEl.classList.add('active');
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
    iframeDoc.write(code);
    iframeDoc.close();
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
        quizFeedback.innerHTML = '<span class="feedback-incorrect">Incorrecto. Revisa la teoría e inténtalo de nuevo.</span>';
        
        // Allow retry after a moment
        setTimeout(() => {
            allOptions.forEach(opt => {
                opt.style.pointerEvents = 'auto';
                opt.classList.remove('incorrect', 'correct');
            });
            quizFeedback.innerHTML = '';
        }, 3000);
    }
}

function nextQuestion() {
    currentQuizIndex++;
    renderQuiz();
}

function updateProgress() {
    const percentage = Math.round((completedTopics.length / topics.length) * 100) || 0;
    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `Progreso: ${percentage}%`;
}

// Start app
window.onload = init;
