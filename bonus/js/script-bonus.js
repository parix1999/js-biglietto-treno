alert('Ciao sono javascript e sono al tuo servizio! Ti calcolerò il prezzo del tuo biglietto!')
alert('Se ha meno di 18 anni hai un 20% di sconto, mentre, se ne hai più di 65 un 40% ti calcolo io la tua età aprossimandola ;)');

var numberKm = prompt('Quanti km devi fare ?');
var year = prompt('Scrivimi la tua data di nascita ?');

var age = 2021 - year; 

var outputElement = document.getElementById('prezzo-treno');

// inizio calcoli con il if

if (parseInt(age) >= 18 && age<65){
    var calcTicket = parseInt(numberKm) * 0.21;
    outputElement.innerHTML = (calcTicket.toFixed(2)); 

}else if (parseInt(age)<18){
    var calcTicket = parseInt(numberKm) * 0.21;
    var discount = calcTicket * 0.20;
    var finalPrice = calcTicket - discount;
    outputElement.innerHTML = (finalPrice.toFixed(2));

}else if (parseInt(age)>=65){
    var calcTicket = parseInt(numberKm) * 0.21;
    var scontoOver = calcTicket * 0.40;
    var finalOver = calcTicket - scontoOver;
    outputElement.innerHTML = (finalOver.toFixed(2));

}else{
    outputElement.innerHTML = 'Devi inserimi solo il numero dei km e della tua età, altrimenti non funziono'
}


