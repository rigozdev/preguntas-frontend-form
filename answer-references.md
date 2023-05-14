# Explicación de preguntas "difíciles"

## Pregunta 6
### Revosar doc. test.js (ejercicio 6)

Las funciones **.bind()**, **.apply()**, y **.call()** son **métodos de las funciones** en JavaScript que nos **permiten modificar el valor de this en el contexto de la función** y **también nos permiten invocar la función con argumentos específicos**.

* **Función .bind()**

    El método .bind() nos permite crear una nueva función con un this vinculado a un objeto específico. En otras palabras, el método .bind() crea una copia de la función original y establece el valor de this en el objeto que se proporciona como argumento. El valor de this se mantiene constante en la nueva función, independientemente de cómo se invoque la función.

        const persona = {
            nombre: 'Juan',
            saluda: function() {
                console.log(`Hola, mi nombre es ${this.nombre}`);
            }
        }   

        const otraPersona = {
            nombre: 'Pedro'
        }

        const saludoJuan = persona.saluda.bind(persona); // Crea una nueva
        función con un `this` vinculado a `persona`

        saludoJuan(); // Hola, mi nombre es Juan

        const saludoPedro = persona.saluda.bind(otraPersona); // Crea una
        nueva función con un `this` vinculado a `otraPersona`

        saludoPedro(); // Hola, mi nombre es Pedro

* **Función .apply()**

    El método .apply() nos permite invocar una función con un valor específico de this y con argumentos en forma de un arreglo.

        function suma(a, b, c) {
            return a + b + c;
        }

        const arreglo = [1, 2, 3];

        const resultado = suma.apply(null, arreglo); // Invoca la función
        `suma` con los argumentos del arreglo

        console.log(resultado); // 6
    En este ejemplo, null se usa como el valor de this porque la función suma no depende de un objeto específico.

* **Función .call()**

    El método .call() es similar al método .apply(), pero los argumentos se pasan como una lista separada por comas en lugar de un arreglo.

        function resta(a, b) {
            return a - b;
        }

        const resultado = resta.call(null, 4, 2); // Invoca la función
        `resta` con los argumentos 4 y 2

        console.log(resultado); // 2
Al igual que con el método .apply(), null se usa como el valor de this porque la función resta no depende de un objeto específico.

Tipo de funciones
Los métodos .bind(), .apply(), y .call() son métodos de las funciones en JavaScript, lo que significa que son funciones específicas que se pueden aplicar a cualquier otra función. Estos métodos nos permiten manipular el valor de this y los argumentos de una función para crear funciones más flexibles y reutilizables.


## Pregnta 9
### Funciones de de "Primera Clase" en JavaScript
En JavaScript, las funciones son consideradas de primera clase (también conocidas como ciudadanas de primera clase) porque **son tratadas como cualquier otra variable**, lo que significa que pueden ser asignadas a variables, pasadas como argumentos a otras funciones, devueltas como valores de otras funciones y almacenadas en estructuras de datos como arrays u objetos.

Esto significa que **las funciones en JavaScript pueden ser utilizadas de manera muy flexible y poderosa**. Por ejemplo, **puedes asignar una función a una variable y luego pasar esa variable como argumento a otra función**. También puedes definir una función dentro de otra función y luego devolverla como valor, lo que se conoce como una función de orden superior.

El nombre "**de primera clase**" se debe a que **las funciones son tratadas igual que otras entidades primitivas en el lenguaje**, como los números, las cadenas y los objetos. Las funciones de primera clase permiten escribir código más conciso y expresivo, y son una característica fundamental de los lenguajes de programación modernos y funcionales como JavaScript.

Aquí hay un ejemplo de cómo se puede utilizar una función como un valor de variable y pasarla como argumento a otra función:

    function sum(a, b) {
        return a + b;
    }

    const myFunc = sum;

    console.log(myFunc(2, 3)); // Output: 5

    function multiply(a, b, func) {
        return func(a, b) * 2;
    }

    console.log(multiply(2, 3, sum)); // Output: 10



## Pregunta 10
### Tipo de función anónima vs closure

    function sum() { // Función externa que devuelve una función interna
        const a = 5; // Variable local definida en la función externa
    
        // Función interna que toma un parámetro "b"
        return function(b) {
            return a + b; // La función interna tiene acceso a la variable "a" definida en la función externa
        };
    }
En este caso, la función devuelta por sum es una función interna anónima que toma un parámetro b. Sin embargo, el hecho de que la función sea anónima no tiene nada que ver con su clasificación como closure.

La función devuelta por sum es un closure porque tiene acceso a la variable a definida en la función externa, incluso después de que la función externa haya finalizado su ejecución. La función interna "cierra" sobre la variable a, lo que significa que la variable a es accesible en el ámbito de la función interna incluso después de que la función externa haya devuelto la función interna.

Por lo tanto, la respuesta correcta es la opción b - closure.


## Pregunta 11
### Ciclo y asincronía con promesa

Primero, se crea una instancia de una promesa llamada unaPromesa. Esta promesa se crea con una función que tiene dos parámetros, resolve y reject. En este caso, la promesa se resuelve después de 300 milisegundos en la función setTimeout. Dentro de setTimeout, se imprime el mensaje "Salida 0" y se llama a la función resolve con el argumento "resolved". Además, justo antes de la llamada a setTimeout, se imprime el mensaje "Salida 1".

Después de la definición de unaPromesa, se define una función asincrónica llamada randomResponse. Dentro de randomResponse, se imprime el mensaje "Salida 2". Luego, se usa la palabra clave await para esperar a que unaPromesa se resuelva y se almacena el resultado en una variable llamada response. Finalmente, se imprime el mensaje "Fin - " seguido del valor de response.

Finalmente, se llama a la función randomResponse y se imprime el mensaje "Salida 3".

El ciclo de ejecución es el siguiente:

1. Se define unaPromesa.
2. Se define randomResponse.
3. Se llama a randomResponse.
4. Se imprime "Salida 2".
5. Se espera a que unaPromesa se resuelva (espera de 300 milisegundos).
6. Se imprime "Salida 1".
7. Se imprime "Salida 0".
8. Se resuelve unaPromesa con el valor "resolved".
9. Se imprime "Fin - resolved".
10. Se imprime "Salida 3".

Como puedes observar, el mensaje "Salida 1" se imprime antes del mensaje "Salida 0", lo que indica que setTimeout no bloquea la ejecución del código y se ejecuta en segundo plano. Además, await hace que la función randomResponse se detenga temporalmente hasta que se resuelva la promesa unaPromesa. De esta manera, se puede esperar a que una operación asíncrona termine antes de continuar con la ejecución del código.

    // Se crea una promesa que se resuelve después de 300ms
    const unaPromesa = new Promise((resolve, reject) => {
    // Se agrega un temporizador para que la promesa se resuelvadespués de 300ms
    setTimeout(() => {
        console.log('Salida 0'); // Se imprimirá después de 300ms
        resolve('resolved'); // La promesa se resuelve con el valor 'resolved'
    }, 300);
    console.log('Salida 1'); // Se imprimirá inmediatamente después de que la promesa se crea
    });

    // Se define una función asincrónica que utiliza la promesa definida anteriormente
    const randomResponse = async () => {
    console.log('Salida 2'); // Se imprimirá inmediatamente después de que la función se llama
    const response = await unaPromesa; // Se espera a que la promesa se resuelva y se asigna el valor a la variable response
    console.log('Fin - ', response); // Se imprimirá después de que la promesa se resuelva
    };

    randomResponse(); // Se llama a la función definida anteriormente
    console.log('Salida 3');


## Pregunta 14
### Patrones de "Responsive Desing"

Los patrones de diseño de "**Tiny Tweaks**", "**Mostly Fluid**", "**Column Drop**", "**Layout Shifter**" y "**Off Canvas**" son todos patrones de diseño de Responsive Design. Estos patrones se utilizan en la construcción de diseños web que se adaptan a diferentes tamaños de pantalla y dispositivos. El Responsive Design utiliza principalmente HTML y CSS, aunque también puede involucrar JavaScript en algunos casos. Por lo tanto, las opciones b, c y d no son correctas, ya que no están relacionadas con estos patrones de diseño en particular.

* **Tiny Tweaks**: Esta técnica se basa en hacer pequeños ajustes a la apariencia y disposición de los elementos del sitio web en diferentes tamaños de pantalla, sin cambiar la estructura o el orden de los mismos. Por ejemplo, aumentar el tamaño de fuente de un texto, cambiar la posición de un botón, o modificar el espaciado entre elementos.

* **Mostly Fluid**: Esta técnica se basa en usar un diseño de ancho fijo para el contenido principal del sitio web, y dejar los elementos secundarios (como menús o barras laterales) con ancho variable, para que se adapten a diferentes tamaños de pantalla. De esta forma, se mantiene la estructura y el orden del contenido principal, mientras que los elementos secundarios se acomodan según sea necesario.

* **Column Drop**: Esta técnica se basa en tener una disposición de varias columnas de contenido en pantallas grandes, y luego ir eliminando o reordenando columnas a medida que el ancho de pantalla disminuye. Por ejemplo, si en una pantalla grande hay tres columnas de contenido, en una pantalla mediana se pueden mostrar solo dos columnas, y en una pantalla pequeña solo una.

* **Layout Shifter**: Esta técnica se basa en tener diferentes diseños de página para diferentes tamaños de pantalla, y cambiar entre ellos a medida que el ancho de pantalla cambia. Por ejemplo, en una pantalla grande se puede tener una disposición de tres columnas, en una pantalla mediana una disposición de dos columnas, y en una pantalla pequeña una disposición de una sola columna.

* **Off Canvas**: Esta técnica se basa en mostrar elementos secundarios (como menús o barras laterales) fuera de la pantalla en pantallas grandes, y mostrarlos desplegados o ocultos según sea necesario en pantallas pequeñas. Por ejemplo, en una pantalla grande se puede tener un menú lateral que se muestra todo el tiempo, y en una pantalla pequeña se puede ocultar ese menú y mostrar un botón que al hacer clic despliega el menú en una capa que cubre el contenido principal.


## Pregunta 15
### Metodologías de CSS

* **BEM (Block Element Modifier)**: Esta metodología se basa en la creación de bloques independientes que contienen elementos y modificadores. Cada bloque se nombra de manera única y los elementos y modificadores se identifican con el prefijo del bloque. BEM tiene como objetivo crear un código CSS más legible, modular y fácilmente escalable.

* **OOCSS (Object-Oriented CSS)**: Esta metodología se basa en la creación de objetos reutilizables que se aplican a diferentes elementos en una página. Los objetos se crean mediante la separación de la estructura y la piel del CSS. OOCSS tiene como objetivo reducir la cantidad de código repetitivo y mejorar el rendimiento y la escalabilidad del sitio.

* **SMACSS (Scalable and Modular Architecture for CSS)**: Esta metodología se basa en la creación de un sistema de categorización de estilos para facilitar la creación de un CSS escalable y modular. SMACSS propone dividir el CSS en cinco categorías: base, diseño, módulos, estados y temas. Cada categoría tiene sus propias reglas y convenciones para ayudar a mantener el código organizado y escalable.

Cada una de estas metodologías tiene sus propias ventajas y desventajas, y la elección de una u otra dependerá de las necesidades y objetivos de cada proyecto.


## Pregunta 21
### Gulp y Grunt

Gulp y Grunt son dos herramientas de automatización de tareas (task runners) muy populares en el desarrollo web. Ambas permiten automatizar tareas repetitivas en el flujo de trabajo, como la minificación y concatenación de archivos CSS y JavaScript, la optimización de imágenes, la compilación de preprocesadores CSS como Sass o Less, entre otras.

* Grunt fue lanzado en 2012 y es considerado uno de los primeros task runners de su tipo. Su enfoque es configurar y definir tareas mediante un archivo de configuración en formato JavaScript.

* Por otro lado, Gulp fue lanzado en 2014 y se enfoca en un enfoque más "streaming" en el procesamiento de archivos. Utiliza una sintaxis basada en tuberías (pipes) para procesar archivos y se puede configurar con código JavaScript.

Ambas herramientas son muy similares en su propósito y funcionalidad, y la elección entre una u otra suele depender de las preferencias personales del desarrollador o equipo de trabajo.


## Pregunta 23
### Variables y process.nv

Para cargar las variables de entorno de forma correcta en un proyecto de Node, se recomienda utilizar un archivo ``.env.`` Este archivo debe estar en la raíz del proyecto y contener todas las variables de entorno necesarias para el proyecto.

Para cargar estas variables de entorno en el proyecto, se puede utilizar una librería como dotenv, que permite cargar automáticamente todas las variables del archivo .env en el objeto process.env. Para utilizar esta librería, primero se debe instalar con npm:

        npm install dotenv

Luego, en el archivo principal del proyecto, se debe incluir al principio:

        require('dotenv').config();

Con esto, las variables de entorno definidas en el archivo .env estarán disponibles en ``process.env.``


## Pregunta 24
### Diferencias entre **props** y **state (o estado)**

La alternativa más correcta en lineas generals el la letra b, la cual indica que las **props se pasan entre componentes** y los **states o estados son nativos de cada componente**.


## Pregunta 25
### Etapas del **ciclo de vida** de un **componente**

* Mounting (montaje): cuando se crea el componente y se agrega al DOM.
* Updating (actualización): cuando el componente se actualiza debido a cambios en las props o en el estado.
* Unmounting (desmontaje): cuando el componente se elimina del DOM.

Por lo tanto, la respuesta correcta es "Mounting, Updating y UnMounting".


## Pregunta 28
### Static Site Generation (SSG)

Significa que todo el sitio, o gran parte del sitio, se renderiza en tiempo de build.

En Static Site Generation, el sitio web se construye por adelantado en un proceso de compilación antes de que el usuario acceda al sitio. Los archivos HTML, CSS y JavaScript necesarios se generan de antemano y se almacenan en el servidor web, lo que permite que el sitio se cargue más rápido y reduzca la carga en el servidor.


## Pregunta 29
### OAuth y JWT ¿Qué son?

**OAuth y JWT son dos tecnologías diferentes utilizadas para la autenticación y autorización en aplicaciones web y móviles.**

OAuth es un **protocolo de autorización** que permite a los usuarios otorgar acceso a aplicaciones de terceros sin compartir su contraseña. Con OAuth, el usuario es redirigido al sitio web del proveedor de identidad (como Google o Facebook) para iniciar sesión y luego se le pregunta si desea autorizar la aplicación de terceros a la que se está intentando acceder.

JWT (JSON Web Token) es un **estándar para la creación de tokens** de acceso que se utilizan para la autenticación y autorización en aplicaciones web y móviles. Un JWT consta de tres partes: el encabezado, la carga útil y la firma. La carga útil contiene información sobre el usuario y los permisos que se le han concedido. El token se puede enviar al servidor en cada solicitud para verificar la identidad del usuario y autorizar las acciones solicitadas.


## Pregunta 30
### Broken Authentication y Cross-Site Scripting. Técnicas de ataque más preocupantes en ranking brindado por OWASP


OWASP (**Open Web Application Security Project**) es una organización sin fines de lucro que se dedica a mejorar la seguridad del software y aplicaciones web. Su objetivo es proporcionar información y herramientas para prevenir, detectar y corregir los errores de seguridad en las aplicaciones web.

OWASP publica regularmente una lista de los 10 riesgos de seguridad web más críticos, conocida como "OWASP Top Ten", que se utiliza como una guía de referencia para los desarrolladores y profesionales de la seguridad en la industria. También ofrece guías de seguridad detalladas, herramientas de prueba de seguridad y capacitación en seguridad web.

En resumen, OWASP es una organización importante en la industria de la seguridad de aplicaciones web que tiene como objetivo mejorar la seguridad del software y proporcionar recursos y herramientas útiles para que los desarrolladores y profesionales de la seguridad puedan proteger mejor sus aplicaciones.

### Para completar la información del ranking, las 10 técnicas de ataque más preocupantes a nivel de seguridad, según OWASP (Open Web Application Security Project) son:

1. **Injection**: Se refiere a la inyección de código malicioso en una aplicación web, como por ejemplo SQL injection o XPath injection.

2. **Broken Authentication and Session Management**: Se refiere a vulnerabilidades en el manejo de sesiones y autenticación, como contraseñas débiles, sesiones expiradas o manejo inadecuado de cookies.

3. **Cross-Site Scripting (XSS)**: Se refiere a la inyección de código malicioso en una aplicación web a través de campos de entrada, como formularios o campos de búsqueda.

4. **Broken Access Control**: Se refiere a la falta de protección en la restricción de acceso a recursos y datos, como por ejemplo accesos no autorizados a información confidencial.

5. **Security Misconfiguration**: Se refiere a la configuración incorrecta de la seguridad de una aplicación, como por ejemplo dejar expuestos archivos de configuración o utilizar contraseñas predeterminadas.

6. **Insecure Cryptographic Storage**: Se refiere al almacenamiento inseguro de información confidencial, como contraseñas o información de tarjetas de crédito.

7. **Insufficient Transport Layer Protection**: Se refiere a la falta de protección en la comunicación de datos entre el cliente y el servidor, como por ejemplo utilizar HTTP en lugar de HTTPS.

8. **Unvalidated and Unsanitized Input**: Se refiere a la falta de validación y limpieza de la entrada de datos del usuario, lo que puede permitir la inyección de código malicioso.

9. **Insufficient Security Controls in Third-Party Libraries**: Se refiere a la falta de seguridad en bibliotecas de terceros utilizadas en una aplicación.

10. **Insecure Communications Between Components**: Se refiere a la falta de seguridad en la comunicación entre componentes de una aplicación, lo que puede permitir la interceptación o manipulación de datos.