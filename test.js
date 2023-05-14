/*

* 3. Si ejecuto el siguiente código (15 + 3 + "number"), ¿qué resultado me da?

? a.-NaN
? b.-"153number"
? c.-"18number"
? d.-Null

*/

// console.log((15 + 3 + "number")); // c.- "18number"

/* 

* 4. Si ejecuto el siguiente código, que resultado obtengo del console.log?

    num = 6;
    console.log(num);
    var num;

    ? a.- 6
    ? b.-Exception (ReferenceError: num is not defined)
    ? c.-NaN
    ? d.-undefined

*/

// !num = 6;
// !console.log(num);
// !var num;


/* 

* 5 Si ejecuto el siguiente código, que resultado obtengo del console.log?

    function exampleFunction() {
        var x = "declared inside scope";
    }
    console.log(x);

    ? a.- "declared inside scope"
    ? b.- Exception (ReferenceError: x is not defined)
    ? c.- NaN
    ? d.- undefined

*/

// !function exampleFunction() {
// !   var x = "declared inside scope";
// !}
// !console.log(x);


/* 

 * 6 ¿Cómo harías para que la siguiente porción de código retorne 12?

    !function sum(b){
    !    return this.a + b;
    !}

    ? a.- sum.bind({a:6})(6)
    ? b.- sum.apply({a:6},[6])
    ? c.- sum.call({a:6},6)
    ? d.- Todas las anteriores son correctas

*/

/* 

* Dado el siguiente código, cuál crees que será el orden de respuesta de los console.log?


*/

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