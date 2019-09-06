let kaarten = document.querySelectorAll(".gooi");
// !! Array-like object
let title = document.querySelector(".title");
let playerCard = document.querySelector(".playerCard");
let computerCard = document.querySelector(".computerCard");
let keuze = "";
let toeval = "";

kaarten.forEach(function (elem) {
    elem.addEventListener("click", function () {
        keuze = (elem.id);
        console.log(keuze);
    });
});

document.getElementById("wieWint").addEventListener("click", function () {
    console.log(keuze)
    let kaartenArr = Array.prototype.slice.call(kaarten);
    // Use slice to convert array-like to array
    toeval = kaartenArr[Math.floor(Math.random() * (kaarten.length))].id;
    console.log(toeval);

    if (toeval === keuze) {
        title.innerHTML = "Opternieft!";
        playerCard.style.backgroundImage = "url('/rock-scissors-paper/img/gelijk2.png')";
        computerCard.style.backgroundImage = "url('/rock-scissors-paper/img/gelijk2.png')";
    } else if (toeval === "steen" && keuze === "schaar") {
        title.innerHTML = "Ik win, loser!";
        playerCard.style.backgroundImage = "url('/rock-scissors-paper/img/steen.jpg')";
        computerCard.style.backgroundImage = "url('/rock-scissors-paper/img/schaar.jpg')";
    } else if (toeval === "papier" && keuze === "steen") {
        title.innerHTML = "Ik win, loser!";
        playerCard.style.backgroundImage = "url('/rock-scissors-paper/img/papier.jpg')";
        computerCard.style.backgroundImage = "url('/rock-scissors-paper/img/steen.jpg')";
    } else if (toeval === "schaar" && keuze === "papier") {
        title.innerHTML = "Ik win, loser!";
        playerCard.style.backgroundImage = "url('/rock-scissors-paper/img/schaar.jpg')";
        computerCard.style.backgroundImage = "url('/rock-scissors-paper/img/papier.jpg')";
    } else if (toeval === "steen" && keuze === "papier") {
        title.innerHTML = "Godverdomme, gij speelt vals!";
        playerCard.style.backgroundImage = "url('/rock-scissors-paper/img/steen.jpg')";
        computerCard.style.backgroundImage = "url('/rock-scissors-paper/img/papier.jpg')";
    } else if (toeval === "schaar" && keuze === "steen") {
        title.innerHTML = "Godverdomme, gij speelt vals!";
        playerCard.style.backgroundImage = "url('/rock-scissors-paper/img/schaar.jpg')";
        computerCard.style.backgroundImage = "url('/rock-scissors-paper/img/steen.jpg')";
    } else if (toeval === "papier" && keuze === "schaar") {
        title.innerHTML = "Godverdomme, gij speelt vals!";
        playerCard.style.backgroundImage = "url('/rock-scissors-paper/img/papier.jpg')";
        computerCard.style.backgroundImage = "url('/rock-scissors-paper/img/schaar.jpg')";
    }
    document.getElementById("opnieuw").addEventListener("click", function () {
        location.reload();
    })

});


/*


switch (result){
            /*default:
                result.innerHTML = "Gij speelt vals!";
                break;
case
(toeval === keuze)
:
result.innerHTML = "Opternieft!";
break;

case1(toeval === "steen" && keuze === "schaar")
:

result.innerHTML = "Ik win, loser!";
console.log('ik win , loser')

break;

case2(toeval === "papier" && keuze === "steen")
:
console.log('ik win , loser')
result.innerHTML = "Ik win, loser!";
break;

case3(toeval === "schaar" && keuze === "papier")
:
result.innerHTML = "Ik win, loser!";
console.log('ik win , loser')
break;

case4(toeval === "schaar" && keuze === "steen")
:
result.innerHTML = "Godverdomme, gij speelt vals!";
break;

case5(toeval === "steen" && keuze === "papier")
:
result.innerHTML = "Godverdomme, gij speelt vals";
break;

case6(toeval === "papier" && keuze === "schaar")
:
result.innerHTML = "Godverdomme, gij speelt vals";
break;


}


if (toeval == keuze) {
    result.innerHTML = "Opternieft!";
}
if ((toeval == "steen") && (keuze == "schaar")) {
    result.innerHTML = "Ik win, loser!";
}
if ((toeval == "papier") && (keuze == "steen")) {
    result.innerHTML = "Ik win, loser!";
}


let toeval = kaartenArr.sort(function (a, b) {
    return 0.5 - Math.random()
});
var random = items[Math.floor(Math.random() * items.length)]

let steen = document.getElementById("steen");
let papier = document.getElementById("papier");
let schaar = document.getElementById("schaar");

function keuzeSpeler() {
}

*/

