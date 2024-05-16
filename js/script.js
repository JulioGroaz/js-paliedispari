
//primo esercizio: PALINDROMA:

function palindroma (parola){
    let inverseParola = '';
    const string = parola + '';
    for(let i= string.length -1;i>= 0; i-- ){
        inverseParola += string[i];
    }
    
    let risultato;
    if (parola == inverseParola){
        return risultato= true;
    } else {
        return risultato = false;
    }
}

const parolaUtente= prompt('inserisci una parola');
console.log(palindroma(parolaUtente));

//secondo esercizio PARI e DISPARI:

const pariDispari = prompt('Scegli tra: pari o dispari');
const numeroUtente = Number.parseInt(prompt('scegli un numero tra 1-5'),10);

function numeroRandom (){
    return Math.floor(Math.random()*5)+1;
}

let randomNumber = numeroRandom();
console.log('il numero scelto dal computer è:' + randomNumber);


const somma = numeroUtente + randomNumber;
function sommatoriaPD (somma){
    
     if(somma %2 === 0){
        return 'pari';
     } else {
        return 'dispari';
     }
}

let pariODispari = sommatoriaPD(somma);
console.log ('la somma è:'+somma);

if(pariODispari === pariDispari){
    console.log ('HAI VINTO');
} else {
    console.log('HAI PERSO');
}
