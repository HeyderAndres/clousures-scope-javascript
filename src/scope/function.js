function greeting(){
    let userName = 'Heider'; // variable scoped to the function
    console.log(`Hello, ${userName}!`);

    if (userName === 'Heider') {
        console.log(`Welcome back, ${userName}!`);
        
    }

}

greeting();
console.log(userName); // this will throw an error because userName is not defined outside the function;
