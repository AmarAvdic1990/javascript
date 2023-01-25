let number = 23;
console.log(number);



const numbers = [23, 25, 26, 120];
console.log(numbers[1]);

 


const nbaPlayers = new Array("Jordan", "Jokić", 23, 15, "Kukoč");
console.log(nbaPlayers);



function start(){

    const fruitItems = [];
    fruitItems[0] = prompt("Unesite neko voce");
    fruitItems[1] = prompt("Unesite neko voce");
    fruitItems[2] = prompt("Unesite neko voce");
    fruitItems[3] = prompt("Unesite neko voce");
    fruitItems[4] = prompt("Unesite neko voce");
    console.log(fruitItems);

    let htmlText = "<ol>";
    htmlText = htmlText + "<li>" + fruitItems[0] + "</li>";
    htmlText = htmlText + "<li>" + fruitItems[1] + "</li>";
    htmlText = htmlText + "<li>" + fruitItems[2] + "</li>";
    htmlText = htmlText + "<li>" + fruitItems[3] + "</li>";
    htmlText = htmlText + "<li>" + fruitItems[4] + "</li>";

    htmlText = htmlText + "</ol>";
    document.getElementById("voce").innerHTML = htmlText;


    

}





