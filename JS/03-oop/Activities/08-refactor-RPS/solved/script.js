const userObj = {
    name: prompt("What is your name?"),
    wins: 0,
    losses: 0,
    ties: 0,
    _choice: "",
    askUserChoice(){
        let userChoice = prompt("please choose 'r' for rock, 'p' for paper, or 's' for scissors");
        this._choice = userChoice; 
        return userChoice;
    }
}

const compObj = {
    wins: 0,
    losses: 0,
    ties: 0,
    _choice: "",
    generateCompChoice(){
        let randomNum = Math.floor(Math.random() * 3);
        let compChoice;
        if(randomNum === 0){
            compChoice = "r";
        } else if (randomNum === 1){
            compChoice = "s"
        } else if (randomNum === 2){
            compChoice = "p"
        }

        this._choice = compChoice; 

        return compChoice;
    }
}

const gameObj = {
    gameCounter:1,
    gamesToPlay: prompt("How many games would you like to play?"),
    playGame(){
        this.gameCounter++;
        let userChoice = userObj.askUserChoice();
    let computerChoice = compObj.generateCompChoice();
    alert(`You chose: ${userChoice}\nComputer chose: ${computerChoice}`)

    if ((userChoice === "r" && computerChoice === "s") ||
            (userChoice === "s" && computerChoice === "p") || 
            (userChoice === "p" && computerChoice === "r")) {
            userObj.wins++;
            compObj.losses++;
            alert("You won!")
          } else if (userChoice === computerChoice) {
            userObj.ties++;
            compObj.ties++;
            alert("You tied...")
          } else {
            userObj.losses++;
            compObj.wins++;
            alert("womp womp womp...")
          }

    if(this.gameCounter <= this.gamesToPlay){
        this.playGame();
    } else{
        alert(`Final Standings:
    ${userObj.name} won ${userObj.wins} time(s) and the computer won ${compObj.wins} time(s).
    ${userObj.name} lost ${userObj.losses} time(s) and the computer lost ${compObj.losses} time(s).
    There was ${userObj.ties} tie(s).
    ${(userObj.wins > compObj.wins ? `${userObj.name} Wins!`: `The Computer Wins!`)}`)
    }
    }
}

gameObj.playGame()










