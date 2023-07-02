function priceChange() {
    var currency1Array = document.getElementById("Currency1");
    var currency1 = currency1Array.options[Currency1.selectedIndex].text;

    var currency2Array = document.getElementById("Currency2");
    var currency2 = currency2Array.options[Currency2.selectedIndex].text;

    var amount = (document.getElementById("amount").value);
    var currency1p = 0;
    var currency2p = 0;
    var abbreviation;
    var value;

    let Currencies = [
        ['Euro', .72],
        ['US Dollar', .79],
        ['Canadian Dollar', 1],
        ['BitCoin Digital Currency', .000020],
        ['Etherium Digital Currency', .00030]];

    for (let i = 0; i < Currencies.length; i++) {
     if (currency1==Currencies[i][0]) {currency1p=Currencies[i][1];}
     if (currency2==Currencies[i][0]) {currency2p=Currencies[i][1];
         switch(currency2) {
             case "Euro": abbreviation = "EUR"; break;
             case "US Dollar": abbreviation = "USD"; break;
             case "Canadian Dollar": abbreviation = "CAD"; break;
             case "BitCoin Digital Currency": abbreviation = "BTC"; break;
             case "Etherium Digital Currency": abbreviation = "ETH"; break;
             default: abbreviation = "";
         }
     }
}

     if (amount == 0) {document.getElementById("amount").style.backgroundColor = "#f1c9d2";}
     else {document.getElementById("amount").style.backgroundColor = "white";}
         if (currency1 == "--Choose Currency --") {document.getElementById("Currency1").style.backgroundColor = "#f1c9d2";}
         else {document.getElementById("Currency1").style.backgroundColor = "white";}
             if (currency2 == "--Choose Currency --") {document.getElementById("Currency2").style.backgroundColor = "#f1c9d2";}
             else {document.getElementById("Currency2").style.backgroundColor = "white";}

    value = ((amount*currency2p)/currency1p).toFixed(2);

    if (value!="NaN" || value!="Infinity"){
    document.getElementById("value").value = "$"+value+abbreviation+" ("+(currency2p/currency1p).toFixed(6)+":1)";}
    if (value==0 || currency1 == "--Choose Currency --" || currency2 == "--Choose Currency --"){
        document.getElementById("value").value = "";}
    if (currency1 === currency2) {document.getElementById("Currency2").style.backgroundColor = "#f1c9d2";
        document.getElementById("Currency1").style.backgroundColor = "#f1c9d2";document.getElementById("value").value = "";}
}

