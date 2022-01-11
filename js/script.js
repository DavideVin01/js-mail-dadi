/* # Mail
Crea un array di email;
Chiedi all’utente la sua email.
controlla che sia nella lista di chi può accedere
Stampa un messaggio appropriato in console sull’esito del controllo. */

const displayElement = document.getElementById('display');

const savedEmails = ['davide@gmail.com', 'marcello@gmail.com', 'beatrice@gmail.com', 'carmine@gmail.com'];
console.table(savedEmails);

const userEmail = prompt('Inserisci qui la tua email');
console.log(userEmail);

let isSaved = false;

for (let i = 0; i < savedEmails.length; i++) {
    if (userEmail === savedEmails[i]) {
        console.log(`Email riconosciuta.`);
        isSaved = true;
    }
}

if (isSaved) {
    displayElement.innerText = `Benvenuto ${userEmail}`;
} else {
    displayElement.innerText = `Spiacente, la tua email non risulta registrata.`;
    console.log('Email errata.');
}