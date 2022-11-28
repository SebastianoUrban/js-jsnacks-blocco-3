// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let somma = 0;

while (somma < 50) {
    const userNumber = parseInt(prompt('inserisci un numero'));
    somma += userNumber;
}

console.log('La somma è : ' + somma)