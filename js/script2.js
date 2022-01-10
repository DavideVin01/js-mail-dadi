// # Gioco dei dadi
/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampare in console i tiri di dado e il risultato. */

let dadoUtente = Math.round(Math.random() * 5 + 1);
console.log(`Il tiro dell'utente è ${dadoUtente}`);

let dadoComputer = Math.round(Math.random() * 5 + 1);
console.log(`Il tiro del Computer è ${dadoComputer}`);

if (dadoUtente > dadoComputer) {
    console.log("Ha vinto l'utente!");
} else if (dadoComputer > dadoUtente) {
    console.log('Ha vinto il Computer!');
} else if (dadoUtente === dadoComputer) {
    console.log('Pareggio.');
}
