// las funciones tradicionales se pueden invocar antes o despues 
//  arrow function solo se puede definir despues 
// array una variabe que esta dividida en n cantidad 
// es mejor usar array que listas pq ocupan mas espacio 
// En javascript array es una lista 
// lista linqueda o doblemente anidadas significa que tambien tiene la informacion tanto de adelante como de atras 
// for ( let Inicializacion;  Condicion   ; ++){}
// inicializacion while(condicion){ ++}
// INTERPOLACION ${} es poner lo que hay en la variable adentro de las llaves 
// nombres.push es para agregar caracteres a una lista 
// % es un modulo es decir el residuo de la division


// EJEMPLO DE FOR 

// salude();
// function salude() {
//     let nombres = ['juan', 67 , true, 34.4 , null, undefined, {}]
//     for(let i= 0; i< nombres.length; i++){
//         console.log (nombres[ i ])
//     }
// }

// EJEMPLO DE WHILE

// salude();
// function salude() {
//     let nombres = ['juan', 67 , true, 34.4 , null, undefined, {}]
//     let i = 0
//     while (i< nombres.length){
//         console.log(nombres[ i ]);
//         i++;
//     }
// }

// EJEMPLO CON IF 

// if( number $ 2 == 0){
//     return true
// }
// return false 

// EJEMPLO SIN IF 

// return number % 2 === 0 ? `El valor ${number} es par` ; `El valor ${number} es impar`

// let nombres = ["ana","sofia","camila"]

// nombres.push("daniela")

// console.log (nombres.length)
// console.log({nombres, len: nombres.length})

// DADO EL SIGUIENTE ARRAY EL ESTUDIANTE DEBERA ORGANIZAR LOS NUMEROS DEL MENOR AL MAYOR
// [23,45,78,32,12,1,4,8,34,32,1000,34,37,22,0,-4,-6]

// let numeros = [23,45,78,32,12,1,4,8,34,32,1000,34,37,22,0,-4,-6]
// for(let i = 0; i< numeros.lenght -1 ; i++){
//     for( let j = 0; j < numeros.length -i -1; j++){
//         if(numeros[j]> numeros[j+1]){
//             [numeros[j],numeros[j+1]]=[numeros[j+1], numeros[j]];
//         }
//     }
// }
// console.log(numeros)
let e = 1
esPrimo(e)
function esPrimo(valor){
    if (valor == 1){
        return false;
    }
    for(let i = 2; i <= valor; i++){
        if(valor% i==0){
            return false;
        }
    }
    
}
!esPrimo = true

console.log(esPrimo(e))
