// clousure -> permiten acceder al ambito de una función exterior desde una funcion interior;
// tienes una clousure cuando una función cualquiera accede a una variable fuera de su contexto léxico
// ambito léxico -> es el contexto en el cual una funcion fue creada.
const myGlobal = 0;

function fuera() {
    const b = 1;
    console.log(myGlobal);
    
    function parent() { //funcion interna - clousure
        const c = 2;
        console.log(b, myGlobal);
        
        function child() { //funcion interna - clousure
            console.log(c, b, myGlobal);
        }

        return child();
    }

    return parent();
}

fuera();

