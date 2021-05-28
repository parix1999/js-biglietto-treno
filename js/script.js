alert('Ciao sono javascript e sono al tuo servizio! Ti calcolerò il prezzo del tuo biglietto!')
alert('Se ha meno di 18 anni hai un 20% di sconto, mentre, se ne hai più di 65 un 40% ;)');

var numberKm = prompt('Quanti km devi fare ?');
var age = prompt('Quanti anni hai ?');

var outputElement = document.getElementById('prezzo-treno');

// inizio calcoli con il if

if (age >= 18 && age<65){
    var calcTicket = numberKm * 0.21;
    outputElement.innerHTML = (calcTicket.toFixed(2)); 

}else if (age<18){
    var calcTicket = numberKm * 0.21;
    var discount = calcTicket * 0.20;
    var finalPrice = calcTicket - discount;
    outputElement.innerHTML = (finalPrice.toFixed(2));

}else if (age>=65){
    var calcTicket = numberKm * 0.21;
    var scontoOver = calcTicket * 0.40;
    var finalOver = calcTicket - scontoOver;
    outputElement.innerHTML = (finalOver.toFixed(2));

}else{
    outputElement.innerHTML = 'Devi inserimi solo il numero dei km e della tua età altrimenti non funziono'
}


