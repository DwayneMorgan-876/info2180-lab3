
window.onload= function board(){

box = document.getElementById("board").children;

for ( let i=0; i<box.length;i++){
	box[i].classList.add("class","square");	
	currentPlayer();
	hover();
	}

}



let player = [];


function currentPlayer() {
    let box = document.querySelectorAll("#board div");
    for (let i = 0; i < box.length; i++) {
        box[i].onclick = function() {

            if(player.length === 0 && box[i].innerHTML === "") {
                box[i].classList.add("square", "X");
                box[i].innerHTML = "X";
                player.push("X");

                checkWinner();
                restartGame();



            }
            else {
                if (player[player.length - 1] === "X" && box[i].innerHTML === ""){
                    box[i].classList.add("square", "O");
                    box[i].innerHTML = "O";
                    player.push("O");
                    
                    checkWinner();
                    restartGame();



                }
                else if (player[player.length - 1] === "O" && box[i].innerHTML === ""){
                    box[i].classList.add("square", "X");
                    box[i].innerHTML = "X";
                    player.push("X");
              

                    checkWinner();
                    restartGame();

                }
            }
        }
    }
}


function hover() {
    let box = document.getElementById("board").children;

    for (let i = 0; i < box.length; i++) {
        box[i].onmouseover = function() {

            box[i].classList.toggle("hover", true)

        }
        box[i].onmouseout = function() {

            box[i].classList.toggle("hover", false)

        }
    }

}

function restartGame() {
    let squares = document.querySelectorAll("#board div");
    document.getElementsByClassName("btn")[0].addEventListener("click", function() {
        for (let i= 0; i < squares.length; i++) {
            squares[i].innerHTML = "";
        }

     	document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O.";
        document.getElementById("status").classList.remove("you-won");
    });
}

function checkWinner() {
    let box = document.getElementById("board").children;

     if (box[0].textContent !== "" && box[0].textContent === "O" && box[1].textContent === "O" && box[2].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
     if (box[3].textContent !== "" && box[3].textContent === "O" && box[4].textContent === "O" && box[5].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
     if (box[6].textContent !== "" && box[6].textContent === "O" && box[7].textContent === "O" && box[8].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
     if (box[2].textContent !== "" && box[2].textContent === "O" && box[4].textContent === "O" && box[6].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
     if (box[0].textContent !== "" && box[0].textContent === "O" && box[4].textContent === "O" && box[8].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
     if (box[0].textContent === "O" && box[0].textContent !== "" && box[3].textContent === "O" && box[6].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
     if (box[1].textContent !== "" && box[1].textContent === "O" && box[4].textContent === "O" && box[7].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
     if (box[2].textContent !== "" && box[2].textContent === "O" && box[5].textContent === "O" && box[8].textContent === "O") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
    }
    if (box[0].textContent !== "" && box[0].textContent === "X" && box[1].textContent === "X" && box[2].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
    }
     if (box[3].textContent !== "" && box[3].textContent === "X" && box[4].textContent === "X" && box[5].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
    }

     if (box[3].textContent !== "" && box[3].textContent === "X" && box[4].textContent === "X" && box[5].textContent === "X") {
        update.classList.add("status.you-won::before", "status", "you-won", "#status.you-won::after");
        update.innerHTML = "Congratulations! X is the Winner!";
    }
     if (box[6].textContent !== "" && box[6].textContent === "X" && box[7].textContent === "X" && box[8].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
    }
     if (box[2].textContent !== "" && box[2].textContent === "X" && box[4].textContent === "X" && box[6].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
    }
     if (box[0].textContent !== "" && box[0].textContent === "X" && box[4].textContent === "X" && box[8].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
    }
     if (box[0].textContent !== "" && box[0].textContent === "X" && box[3].textContent === "X" && box[6].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
    }
     if (box[1].textContent !== "" && box[1].textContent === "X" && box[4].textContent === "X" && box[7].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
    }
     if (box[2].textContent !== "" && box[2].textContent === "X" && box[5].textContent === "X" && box[8].textContent === "X") {
        document.getElementById("status").classList.add("you-won");
        document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
    }
}
