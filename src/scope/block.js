function fruits() {
    if (true) {
        var apple = 'apple'; // function-scope
        let kiwi = 'kiwi'; // block-scope
        const banana = 'banana'; // block-scope
        console.log(kiwi);
        console.log(banana);
    }
    
    console.log(apple); 
    

    
}

fruits();