/**
 * Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.
 */

function randomNumberRange(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}

for (let i = 0; i<20; i++){
    console.log(randomNumberRange(5, 10));
}