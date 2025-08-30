console.log("Welcome to Tic Tac Toe")

let music = new Audio ("music.mp3");
let turn = new Audio ("ting.mp3");
let gameover = new Audio ("gameover.mp3");
let Gameover = false;

let Turn = "X";

// Function to change the turn
const changeTurn = () => {
    return Turn === "X" ? "0" : "X";
};

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('box-Text');
    let wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, 135]
    ]

    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
        (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText+" Won";
            Gameover = true;
            document.getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width = "30vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

// Main logic start
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let box_Text = element.querySelector('.box-Text');
    element.addEventListener('click', ()=>{
        if (box_Text.innerText === '' && !Gameover){
            box_Text.innerText = Turn;
            turn.play();
            checkWin();
            if (!Gameover){
                /*
                let isDraw = true;
                let boxtexts2 = document.querySelectorAll('.box-Text');

                boxtexts2.forEach(box=> {
                    if(boxtexts2===""){
                        isDraw = false;
                    }
                });

                if(isDraw) {
                    document.querySelector('.info').innerText = "It's a Draw!"
                    Gameover = true;
                    return;
                }
                    */
                Turn = changeTurn();
                document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
            }
            
        }
    })
})

// Add onclick listner to reset button

reset.addEventListener('click', ()=> {
    let boxtexts = document.querySelectorAll('.box-Text');
    Array.from(boxtexts).forEach(element=> {
        element.innerText = "";
    });

    Turn = "X";
    Gameover = false;
    document.querySelector('.line').style.width = "0";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
    document.getElementsByTagName('img')[0].style.width = "0px";
});