/* # Mail
Crea un array di email;
Chiedi all’utente la sua email.
controlla che sia nella lista di chi può accedere
Stampa un messaggio appropriato in console sull’esito del controllo. */

const savedEmails = ['primaemail@gmail.com', 'secondaemail@gmail.com', 'emailacaso@gmail.com', 'testemail@gmail.com'];

const userEmail = prompt('Inserisci qui la tua email');
console.log(userEmail);

if (userEmail === savedEmails) {
    console.log(`Benvenuto ${userEmail}`);
} else {
    console.log('La tua mail non risulta registrata.');
}