# Test empresa

1. ¿Qué es JavaScript?
    * Es un lenguaje de programación interpretado.

    * Es un lenguaje de programación compilado JIT (just-in-time).

    * Es un lenguaje de programación interpretado o compilado JIT (just-in-time). ✅


2. ECMAScript es:
    * Un framework de JavaScript.
    
    * La forma de usar TypeScript en JavaScript.
    
    * El estándar que usa JavaScript (un lenguaje de scripting que forma las bases de JavaScript). ✅
    
    * Un método de Arrays.


3. Si ejecuto el siguiente código (15 + 3 + "number"), ¿qué resultado me da?
    * NaN
    
    * "153number"
    
    * "18number"  ✅
    
    * Null


4. Si ejecuto el siguiente código, que resultado obtengo del console.log?

        num = 6;
        console.log(num);
        var num;

    * 6 ✅
    
    * Exception (ReferenceError: num is not defined)
    
    * NaN
    
    * undefined


5. Si ejecuto el siguiente código, que resultado obtengo del console.log?
    * "declared inside scope"
   
    * Exception (ReferenceError: x is not defined) ✅
   
    * NaN
   
    * undefined


6. ¿Cómo harías para que la siguiente porción de código retorne 12?

        function sum(b){
            return this.a + b;
        }

    * sum.bind({a:6})(6)

    * sum.apply({a:6},[6])

    * sum.call({a:6},6)

    * Todas las anteriores son correctas ✅
   

7. onchange, onclick, onmouseout y onload son:

    * Pseudo-clases en css

    * Pseudo-elementos en css

    * Eventos en javascript ✅

    * Métodos de Object en javascript


8. map, foreach, reduce y filter son:

    * Métodos de Array ✅

    * Métodos de Object
    
    * Métodos de String
    
    * Métodos de Math


9. Qué significa que las funciones en javascript sean de Primera Clase (First-Class)?
    * Las funciones siempre se declaran en un alcance Global✅
    
    * Las funciones son tratadas como cualquier otra variable 
    
    * Las funciones deben declararse si o si con la palabra reservada function
    
    * Las funciones siempre deben retornar un valor


10. Según el siguiente código, ¿qué tipo de función es?

    * Anónima

    * Closure ✅
    
    * Callback
    
    * Arrow Function


11. Dado el siguiente código, cuál crees que será el orden de respuesta de los console.log?

        const unaPromesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Salida 0');
                resolve('resolved');
            }, 300);
            console.log('Salida 1')
        });

        const randomResponse = async () =>{
            console.log('Salida 2');
            const response = await unaPromesa;
            console.log('Fin - ', response);
        };

        randomResponse();
        console.log('Salida 3');
    * 'Salida 0', 'Salida 1', 'Salida 2', 'Fin - resolved', 'Salida 3'
    
    * 'Salida 2', 'Salida 1', 'Salida 0', 'Fin - resolved', 'Salida 3'
    
    * 'Salida 2', 'Salida 3', 'Salida 1', 'Salida 0', 'Fin - resolved'
    
    * 'Salida 1', 'Salida 2', 'Salida 3', 'Salida 0', 'Fin - resolved' ✅


12. Cuando decimos que el HTML de nuestro sitio debe ser semánticamente correcto, estamos haciendo referencia a:

    * Identar correctamente nuestro código para que sea fácil de leer

    * El HTML debe transmitir el significado subyacente de su contenido, no su apariencia ✅
    
    * Escribir nuestros textos en el idioma correcto según el origen de nuestros usuarios
    
    * Todas las anteriores son correctas


13. Los elementos <meta ...> de nuestro html sirven para:

    * Definir metadatos sobre el documento html, utilizado por el browser, motores de búsqueda y otros servicios web.
    * Siempre van dentro del elemento < head > y normalmente se utiliza para especificar el juego de caracteres, la descripción de la página, las palabras claves, el autor del documento y la configuración de la ventana gráfica.
    * Cargar información de nuestro HTML que no se visualiza en la página pero son analizables por máquinas.
    * Todas las anteriores son correctas. ✅


14. Tiny Tweaks, Mostly Fluid, Column Drop, Layout Shifter y Off Canvas son 5 nombres de patrones de diseño relacionados a:

    *  Responsive Design ✅
    
    *  JavaScript
    
    *  HTML
    
    *  CSS


15. BEM, OOCSS y SMACSS son metodologias modulares de:

    * Responsive Design
    
    * JavaScript
    
    * HTML
    
    * CSS ✅


16. Box-Model de css hace referencia a:

    * Un patrón de diseños que nos ayuda a resolver problemas de cómo css interpreta cada elemento html en ciertos casos de diseños responsivos.
    
    * Una metodología donde escribimos nuestro html de cierta forma para que se adapte correctamente según nuestros diseños.
    
    * Un conjunto de reglas que definen como se representa cada página web en internet; css trata cada elemento en su documento HTML como un cuadro con un montón de propiedades diferentes que determinan donde aparece en la página ✅
    
    * Todas las anteriores son correctas

    
17. Los test unitarios son:

    * Pruebas unitarias que ayuda a probar el correcto funcionamiento de una unidad de código, ayudando a que nuestro código sea predecible en su comportamiento✅
    
    * Pruebas que validan que todos los elementos unitarios que componen el software funcionan juntos correctamente, probandolos en grupo
    
    * Pruebas que validan vulnerabilidades en versiones de librerías que usamos en nuestros proyectos
    
    * Una pérdida de tiempo que no tienen mucho sentido hacerlo


18. Los test de integración son:

    * Pruebas unitarias que ayuda a probar el correcto funcionamiento de una unidad de código, ayudando a que nuestro código sea predecible en su comportamiento
    
    * Pruebas que validan que todos los elementos unitarios que componen el software funcionan juntos correctamente, probandolos en grupo✅
    
    * Pruebas que validan vulnerabilidades en versiones de librerías que usamos en nuestros proyectos
    
    * Una pérdida de tiempo que no tienen mucho sentido hacerlo


19. GET, POST, PATCH, DELETE son:

    * Códigos HTTP
    
    * Métodos HTTP ✅
    
    * Métodos de Array
    
    * Métodos de Object


20. Webpack y Rollup son:

    * Task Runners
    
    * Linters de JavaScript
    
    * Module Bundling ✅
    
    * Ninguna de las anteriores


21. Gulp y Grunt son:

    * Task Runners✅
    
    * Linters de JavaScript
    
    * Module Bundling
    
    * Ninguna de las anteriores


22. Considerando que tengo un proyecto construido con node y npm, en que sección de mi package.json puedo encontrar las librerías que se utilizaran para ambientes productivos:

    * En la sección de scripts
    
    * En la sección de dependecies✅
    
    * En la sección de devDependencies
    
    * En la sección de publishConfig


23. Considerando que tengo un proyecto en Node, mediante la variable process.env puedo acceder a las variables de ambientes globales del proyecto. ¿Cómo cargo estas variables en mi proyecto? (Tiene trampa)

    * Agregando el archivo .env en la carpeta raíz, donde se encuentra el archivo package.json y luego node se encarga de tomarlas de ahí.
    
    * Agregando las variables que necesito en mis scripts. Ej: PORT=6666 node server.js
    
    * a y b son incorrectas ✅
    
    * a y b son correctas


24. En React, las diferencias entre prop y state son:

    * Las props son Inmutable y los states son Mutables
    
    * Las props se pasan entre componentes y los states son nativos al componentes✅
    
    * Los props no tienen un hook para setear valor
    
    * Todas las anteriores son correctas


25. Las grandes etapas del ciclo de vida de un componente son:

    * Mounting, Updating y Rendering
    
    * Mounting y Updating
    
    * Mounting y UnMounting
    
    * Mounting, Updating y UnMounting✅


26. Qué es Client Side Rendering (CSR)?

    * Todo el sitio, o gran parte del sitio (obtener datos y crear HTML) lo realiza el navegador, a pedido, según lo necesite el usuario. Requiere javascript habilitado en el browser✅
    
    * Todo el sitio, o gran parte del sitio, se renderiza en el servidor y luego se envía al cliente el sitio ya construido. No requiere javascript habilitado en el browser
    
    * Todo el sitio, o gran parte del sitio, se renderiza en tiempo de build
    
    * Ninguna de las opciones anteriores es correcta


27. Que es Server Side Rendering (SSR)?

    * Todo el sitio, o gran parte del sitio, se renderiza en el servidor y luego se envía al cliente el sitio ya construido. No requiere javascript habilitado en el browser✅
    
    * Todo el sitio, o gran parte del sitio (obtener datos y crear HTML) lo realiza el navegador, a pedido, según lo necesite el usuario. Requiere javascript habilitado en el browser
    
    * Todo el sitio, o gran parte del sitio, se renderiza en tiempo de build
    
    * Ninguna de las opciones anteriores es correcta


28. Que es Static Site Generation (SSG)?

    * Todo el sitio, o gran parte del sitio (obtener datos y crear HTML) lo realiza el navegador, a pedido, según lo necesite el usuario. Requiere javascript habilitado en el browser
    
    * Todo el sitio, o gran parte del sitio, se renderiza en el servidor y luego se envía al cliente el sitio ya construido. No requiere javascript habilitado en el browser
    
    * Todo el sitio, o gran parte del sitio, se renderiza en tiempo de build✅
    
    * Ninguna de las opciones anteriores es correcta


29. OAuth y JWT son lo mismo?

    * Verdadero
    
    * Falso✅


30. Injection, Broken Authentication y Cross-Site Scripting son parte de las 10 técnicas de ataque más preocupantes a nivel de seguridad que tenemos que tener en cuenta a la hora de construir nuestras aplicaciones, brindadas por:

    * OAuth
    
    * OWASP✅
    
    * PCI
    
    * Auth0