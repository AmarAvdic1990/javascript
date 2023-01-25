function pozdravnaFunkcija() {

    let ime = prompt("Unesite iem : ");

    let prezime = prompt("Unesite prezime: ");

    let punoIme = ime.concat(' ', prezime);
    alert(punoIme);

}


function pretrazi() {


    let text = prompt("Unesi tekst koji zelis pretraziti : ");
    let position = text.indexOf("Banana");
    alert("Banana je locirana na poziciji: " + position);

}

