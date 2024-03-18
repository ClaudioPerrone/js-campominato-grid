/* 
Campo minato

- L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
- Ogni cella ha un numero progressivo, da 1 a 100.
- Ci saranno quindi 10 caselle per ognuna delle 10 righe.
- Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/


//INPUT DATI
//Generazione campo da gioco
const mainGrid = document.querySelector('#grid');

//richiamo il pulsante play
const msBtn = document.querySelector(".ms-btn");
//Una volta cliccato il tasto play mi fa vedere il cambo da gioco
msBtn.addEventListener('click', function() {
    console.log("btn play clicked");
})

for(let i = 1; i <= 100; i++) {
    const newSquare = generateSquare(i);
    mainGrid.append(newSquare);
}

//ELABORAZIONE DATI

//FUNCTION : GENERE UN QUADRATO
// number: rappresenta un numero
// return: elemento del dom che rappresenta un quadrato
function generateSquare(number) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.innerHTML = `<span>${number}</span>`;
    
    //OUTPUT DATI
    // Gestione del click su ogni qudrato
    newSquare.addEventListener('click', function() {
        this.classList.add('ms-bgc-lightblue');
        console.log("click", newSquare);
    });

    return newSquare;
}