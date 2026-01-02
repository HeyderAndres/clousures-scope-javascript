function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`Money Box sin clousure: ${saveCoins}`);
    
}

moneyBox(5);
moneyBox(10);

// el codigo anterior no funciona porque se espera que la variable saveCoins mantenga su valor entre llamados a la funcion moneyBox.
// para lograr esto, necesitamos usar un clousure.

function moneyBoxClousure(nameBox) {
    let saveCoins = 0;

    return function(coins){
        saveCoins += coins;
        console.log(`Money Box ${nameBox}: $${saveCoins}`);
    }
}

const myMoneyBox = moneyBoxClousure("myMoneyBox");
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(15);

const myMoneyBox2 = moneyBoxClousure("myMoneyBox2");
myMoneyBox2(10);
myMoneyBox2(20);