let boxes = document.querySelectorAll('.box');
let reset = document.getElementById("resetButton");
let collectedDivs = document.querySelectorAll('div[id]');
const header = document.createElement('h1');
header.textContent = "TIK TAC TOE";
header.style.textAlign = "center"
document.body.prepend(header);
let divArray = [];

collectedDivs.forEach((div) => {
    divArray.push(div)
})
// let img1=document.createElement('img')
// img1.src= "Naruto%27s_Sage_Mode.webp";
//console.log(collectedDivs)
let board = ["", "", "", "", "", "", "", "", ""];


//let gameOver = false;
let switches = true
//if (gameOver != true) {
    boxes.forEach((element, index) => {
        // if(gameOver = !gameOver){
        //     return;
        // }

        //console.log("gameover: " + gameOver)
        element.addEventListener("click", (event) => {
            //    if(gameOver = !gameOver){
            //     return true;
            // }
            //console.log("gameover: " + gameOver)
            if (event.target.textContent !== "") {
                alert("box is filled choose another box")
            }
            else if (event.target.textContent == "" && switches == true) {
                event.target.textContent = "X"
                //event.target.style.backgroundImage = img1

                event.target.style.backgroundColor = "lightcoral"
                board[index] = "X";
                switches = !switches;
                //console.log(board.length)
                //console.log(countOfX)
            }
            else if (event.target.textContent == "" && switches == false) {
                event.target.textContent = "O"
                event.target.style.backgroundColor = "lightBlue"
                board[index] = "O";
                switches = !switches

                //console.log(countOfO)
            }
            //   console.log(board)

            const win = winner(board)
            if (win) {
                //gameOver = true;
                window.alert(win + " wins")
                playAgain()
            }
            else {
                let draw = true;
                board.forEach((box) => {
                    if (box == "") {
                        //console.log(box)
                        draw = false
                    }
                })
                //console.log(draw)
                if (draw) {
                    gameOver = true;
                    window.alert("IT WAS A DRAW")
                    playAgain()
                }
            }
            //return gameOver;
            //console.log(gameOver)
            // console.log(board)
        })

        //console.log(gameOver)
        // console.log(board)

    })


function playAgain() {
    const replay = window.confirm("Do you want to play again?")
    if (replay) {
        resetGame()
    }
    else {
        //gameOver= true;
        // resetGame()
        window.alert("OKAY :(\n Press Restart, whenever you want to play again!!")

    }
    //gameOver = true;
}
function resetGame() {
    //reset.addEventListener("click", () => {
    boxes.forEach((event) => {
        event.textContent = "";
        event.style.backgroundColor = "";
    })
    board = ["", "", "", "", "", "", "", "", ""];
    //gameOver = false;
}
reset.addEventListener("click", () => {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
        if (board[i] == "") {
            count++
            //console.log("count: "+ count)
        }
    }
    if (count >= board.length) {
        window.alert("!!! ALL boxes are empty\n you must select at-least one box before resetting game")
    }
    else {
        //playAgain()
        resetGame()
    }
})



function winner(board) {
    const winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winCombos.length; i++) {
        let combo = winCombos[i];
        let countX = 0;
        let countO = 0;

        for (let j = 0; j < combo.length; j++) {
            let index = combo[j];

            if (board[index] === "X") {
                countX++;
            } else if (board[index] === "O") {
                countO++;
            }
        }

        if (countX === 3) {
            return "X";
        } else if (countO === 3) {
            return "O";
        }
    }

    return false; // no winner yet
}