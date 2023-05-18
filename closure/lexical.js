// closure es cuando una funcion accede a una variable fuera de su contexto
const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    // funcion anidada
    function parent(){
        const parentNumber = 2;
        console.log(myGlobal, myNumber)

        function child(){
            console.log(parentNumber, myGlobal, myNumber)
        };
        return child()
    };
    return parent()
};

myFunction()