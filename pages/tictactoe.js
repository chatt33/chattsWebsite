var playersturn = "X";
var marksPlaced = 0;

function handleButton(number){
    var button = "button" + number + "TTT";
    if(document.getElementById(button).innerText != "."  || marksPlaced == 9) return;
    if(playersturn == "X"){
    document.getElementById(button).innerText = "X";
    playersturn = "O";
    } else {
        document.getElementById(button).innerText = "O";
        playersturn = "X";
    }
    marksPlaced++;
    checkWinner();
}

function checkWinner(){
    for(var i = 0; i <= 9; i = i +3){
        var button = "button" + i + "TTT";
    }
}