// hoisting
nombre = 'Achu'
console.log(nombre)

// como JS lo interpreta
let nombre; // asigna el valor undefined
nombre = 'Claudia';
console.log(nombre)

// modo stricto
// se debe declarar y asignar 
'use strict';
nombre = 'Maravelous';
console.log(nombre);

function myName(){
    'use strict';
    nombre = 'Maravelous';
    return nombre
};

console.log(myName())