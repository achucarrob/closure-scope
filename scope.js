// var esta en desuso, utilizo de forma a ejemplificar

var a; // decalarar una funcion
var b = b; //declarar y asignar
b = "bb"; // reasignar
var a = 'aa' // redeclarar

function greeting(name){
    userName = name; // global scope

    console.log('Hello,' + userName)
};

greeting('Carlos')
console.log(userName)

// ####

function greeting(name){
    let userName = name; // local scope

    console.log('Hello,' + userName)
};

greeting('Carlos')
console.log(userName) // userName is not defined