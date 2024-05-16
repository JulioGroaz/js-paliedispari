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
