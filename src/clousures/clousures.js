// funcion anidada -> es una función definida dentro de otra función
function greeting() {
    let userName = 'Heider';

    function displayUsername() {
        return `Hello ${userName}`;
    }

    return displayUsername;
}

const g = greeting();
console.log(g);
console.log(g());
