// un bloque es casi cualquier cosa que este entre {}

function fruits(){
    if (true){
        var fruit1 = 'apple'; // function scope
        let fruit2 = 'banana'; // block scope
        const fruit3 = 'melon'; // block scope
    };
    console.log(fruit1) 
    console.log(fruit2) // fruit is not defined
    console.log(fruit3) // fruit is not defined
    };
};

fruits()

// ####

function fruits(){
    if (true){
        var fruit1 = 'apple'; // function scope
        let fruit2 = 'banana'; // block scope
        const fruit3 = 'melon'; // block scope
        console.log(fruit2) 
        console.log(fruit3)
    };
    console.log(fruit1) 
    };
};