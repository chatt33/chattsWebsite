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
    console.log("check winner was reached");
    if(document.getElementById("button1TTT").innerText == document.getElementById("button2TTT").innerText && document.getElementById("button2TTT").innerText == document.getElementById("button3TTT").innerText && document.getElementById("button1TTT").innerText != "."){
        document.getElementById("winner").innerText = "Winner:" + document.getElementById("button1TTT").innerText;
        hasWon();
    } else if(document.getElementById("button6TTT").innerText == document.getElementById("button5TTT").innerText && document.getElementById("button5TTT").innerText == document.getElementById("button6TTT").innerText && document.getElementById("button4TTT").innerText != "."){
        document.getElementById("winner").innerText = "Winner:" + document.getElementById("button4TTT").innerText;
        hasWon();
    } else if(document.getElementById("button7TTT").innerText == document.getElementById("button8TTT").innerText && document.getElementById("button8TTT").innerText  == document.getElementById("button9TTT").innerText && document.getElementById("button9TTT").innerText != "."){
        document.getElementById("winner").innerText = "Winner:" + document.getElementById("button8TTT").innerText;
        hasWon();
    } else if(document.getElementById("button1TTT").innerText == document.getElementById("button4TTT").innerText && document.getElementById("button4TTT").innerText == document.getElementById("button7TTT").innerText && document.getElementById("button7TTT").innerText != "."){
        document.getElementById("winner").innerText = "Winner:" + document.getElementById("button4TTT").innerText;
        hasWon();
    } else if(document.getElementById("button2TTT").innerText == document.getElementById("button5TTT").innerText && document.getElementById("button5TTT").innerText == document.getElementById("button8TTT").innerText && document.getElementById("button8TTT").innerText != "."){
        document.getElementById("winner").innerText = "Winner:" + document.getElementById("button5TTT").innerText;
        hasWon();
    } else if(document.getElementById("button3TTT").innerText == document.getElementById("button6TTT").innerText && document.getElementById("button9TTT").innerText == document.getElementById("button6TTT").innerText && document.getElementById("button6TTT").innerText != "."){
        document.getElementById("winner").innerText = "Winner:" + document.getElementById("button6TTT").innerText;
        hasWon();
    } else if(document.getElementById("button1TTT").innerText == document.getElementById("button5TTT").innerText && document.getElementById("button5TTT").innerText == document.getElementById("button9TTT").innerText && document.getElementById("button9TTT").innerText != "."){
        document.getElementById("winner").innerText = "Winner:" + document.getElementById("button5TTT").innerText;
        hasWon();
    }  else if(document.getElementById("button3TTT").innerText == document.getElementById("button5TTT").innerText && document.getElementById("button5TTT").innerText == document.getElementById("button7TTT").innerText && document.getElementById("button7TTT").innerText != "."){
        document.getElementById("winner").innerText = "Winner:" + document.getElementById("button5TTT").innerText;
        hasWon();
    } 
}


function hasWon(){
    console.log("has won was reached");
    for(var i = 1; i < 10; i++ ){
        var button = "button" + i + "TTT";
        console.log(button);
        if(document.getElementById(button).innerText == "."){
            document.getElementById(button).innerText = "°";
            console.log(button);
        }
    }
}

function newgame(){
    for(var i = 1; i < 10; i++ ){
        var button = "button" + i + "TTT";
        console.log(button);
        document.getElementById(button).innerText = ".";
    }
    document.getElementById("winner").innerText = "";
    playersturn = "X";
    marksPlaced = 0;
}