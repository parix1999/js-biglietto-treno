alert('Ciao sono javascript e sono al tuo servizio! Ti calcolerò il prezzo del tuo biglietto!')
alert('Se ha meno di 18 anni hai un 20% di sconto, mentre, se ne hai più di 65 un 40% ;)');

var numberKm = prompt('Quanti km devi fare ?');
var age = prompt('Quanti anni hai ?');

var outputElement = document.getElementById('prezzo-treno');

// inizio calcoli con il if

if (age >= 18 && age<65){
    var calcAdult = numberKm * 0.21;
    outputElement.innerHTML = (calcAdult.toFixed(2)); 

}else if (age<18){
    var priceMinorenni = numberKm * 0.21;
    var discount = priceMinorenni * 0.20;
    var finalPrice = priceMinorenni - discount;
    outputElement.innerHTML = (finalPrice.toFixed(2));
}