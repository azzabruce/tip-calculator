//take the bill-amount and multiply by either 10%, 15%, 20%
var caluclate = document.getElementById("calculate");
var twentyPercentTip = document.getElementById("twentyPercentTip");
var tenPercentTip = document.getElementById("tenPercentTip");

 tenPercentTip.addEventListener("click", function(){
 var amountInput = document.getElementById("billAmount");
 var billAmount = Number(amountInput.value);
 console.log(billAmount);
 var tenPercentTip = billAmount * 0.10;
 var totalTenPercentAmount = tenPercentTip + billAmount; 
 var message = document.getElementById("message");
 message.innerHTML = "You will tip a fair amount of $" + tenPercentTip.toFixed(2) + " and your total would be " +"$"+ totalTenPercentAmount.toFixed(2);

});

fifteenPercentTip.addEventListener("click", function(){
 var fifteenPercentTip = document.getElementById("fifteenPercentTip");
 var amountInput = document.getElementById("billAmount");
 var billAmount = Number(amountInput.value);
 console.log(billAmount);
 var fifteenPercentTip = billAmount * 0.15;
 var totalFifteenPercentAmount = fifteenPercentTip + billAmount; 
 var message2 = document.getElementById("message");
 message.innerHTML = "You will tip a good amount of $" + fifteenPercentTip.toFixed(2) + " and your total would be " +"$"+ totalFifteenPercentAmount.toFixed(2);

});

twentyPercentTip.addEventListener("click", function(){
 var twentyPercentTip = document.getElementById("twentyPercentTip");
 var amountInput = document.getElementById("billAmount");
 var billAmount = Number(amountInput.value);
 console.log(billAmount);
 var twentyPercentTip = billAmount * 0.20;
 var totalTwentyPercentAmount = twentyPercentTip + billAmount; 
 var message3 = document.getElementById("message");
 message.innerHTML = "You will tip a generous amount of $" + twentyPercentTip.toFixed(2) + " and your total would be " +"$"+ totalTwentyPercentAmount.toFixed(2);

});

caluclate.addEventListener("click", function(){
    var tipAmount = document.getElementById("tipAmount");
    var amountInput = document.getElementById("billAmount");
 var billAmount = Number(amountInput.value);
    var tipValue = Number(tipAmount.value);
    var totalAmount =  billAmount+ tipValue; 
     var message3 = document.getElementById("message");
 message.innerHTML = "You will tip an amount of $" + tipValue.toFixed(2) + " and your total would be " +"$"+ totalAmount.toFixed(2);
})
