// variables
var a; // declaracion
var b = 'b'; // declaracion y asignacion
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion y asignacion

// global scope
var fruit = 'Apple'; //global


function bestFruit() {
    console.log(fruit)
}

bestFruit();


function countries() {
    country = 'Colombia'; // global porque no tiene var, let o const.
    console.log(country)
}

