var bankScore = prompt('Your bank score: ');
var tmpBankScore = bankScore;
var telefonPrice = 2000;
var accessoriesPrice = 100;
var limit = 1000;
var commonScore = 0;
var i = 0;
var TAX_RATE = 0.08;

function tax (score) {
    return score + (score * TAX_RATE);
}

function format (sc) {
    return "$" + sc.toFixed(2);
}

while (telefonPrice < tmpBankScore){
    tmpBankScore -= telefonPrice;
    commonScore += telefonPrice;
    while (i < limit){
        tmpBankScore -= accessoriesPrice;
        commonScore += accessoriesPrice;
        i += accessoriesPrice;
    }
}

commonScore = tax(commonScore);
if (commonScore <= bankScore){
    console.log(alert('You can buy it. Your score: ' + format(commonScore)));
}
else {
    console.log(alert('You can not buy it. You have not got enough money.' + format(commonScore)));
}
