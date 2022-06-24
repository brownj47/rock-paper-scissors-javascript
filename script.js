
var RPS = ["R", "P", "S"]
var randNum = (Math.floor(Math.random() * RPS.length))
var compChoice = RPS[randNum]
var humanChoice;
var tieCount = 0
var winCount = 0
var lossCount = 0

function startgame() {
    if (confirm("Click OK to play")) {
        humanChoice = prompt("R, P, or S?")
        humanChoice = humanChoice.toUpperCase()
        winorlose()
        scoreboard()
        startgame()
    }
}

function winorlose(){
    if (humanChoice === compChoice) {
        alert("tie")
        tieCount = tieCount +1
    } else if (humanChoice == "R"){
        if (compChoice == "S") {
            alert("VICTORY")
            winCount = winCount +1
        } else {
            alert("DEFEAT")
            lossCount = lossCount +1
        }
    } else if (humanChoice == "P"){
        if (compChoice == "R") {
            alert("VICTORY")
            winCount = winCount +1
        } else {
            alert("DEFEAT")
            lossCount = lossCount +1
        }
    } else if (humanChoice == "S"){
        if (compChoice == "P") {
            alert("VICTORY")
            winCount = winCount +1
        } else {
            alert("DEFEAT")
            lossCount = lossCount +1
        }
    }
    else {
        alert("DEFEAT")
        lossCount = lossCount +1
    }
}

function scoreboard() {
    alert(`Score:
    Wins: ${winCount}
    Losses: ${lossCount}
    Ties: ${tieCount}`)
}

startgame()

