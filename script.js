// alert("message")

// confirm("Are you ready to play?")

var randNum = (Math.floor(Math.random() * 3))

if (confirm("Are you ready to play?")) {

    if (prompt("Rock, Paper, or Scissors").toLowerCase == "R") {
        console.log("yey")
        if (randNum === 0) {
            alert("R")
        } else if (randNum === 1){
            alert("P")
        } else {
            alert("S")
        }
    }

}






