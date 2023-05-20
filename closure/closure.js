
function myCalculator(){
    let savedCoins = 0;
    function countCoins(coins){
        savedCoins += coins;
        console.log('I have ' + savedCoins + ' in my account')
    };
    return countCoins;
};

const myMoneyBox = myCalculator();

myMoneyBox(5)
myMoneyBox(10)