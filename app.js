let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    //rock,paper,scissors
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

const drawGame = () => {
    // console.log("Game was Draw");
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You Loss!");
        msg.innerText = `You Loss! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) => {
    // console.log("User Choice = ", userChoice);  
    //generate compter choice
    const compChoice = genCompChoice();
    // console.log("comp choice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //paper, scissors
           userWin = compChoice === "paper" ? false : true;
        } else if ( userChoice === "paper") {
            // rock, sciccors
           userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
           userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
            // console.log("choice was clicked", userChoice);
            playgame(userChoice);
    });
});