let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard 
let hasBlackJack = false


let isAlive = true
let massage = " "

let massageEl = document.getElementById("massage-el")
//console.log(massageEl)
let sumEl =document.getElementById("sum-el")
//console.log("sumEl")
//let sumEl =document.querySelector("body")




function startGame() {
    sumEl.textContent = "sum : " + sum 
    if (sum <= 20) {
     massage = "Do you want to draw a new card? "
    
} else if (sum === 21) {
    massage = "Wohoo! You've got Blackjack! "
    hasBlackJack = true
    isAlive = false
} else {
    massage  = "You're out of the game! "
    isAlive = false
}


//console.log(hasBlackJack)
//console.log(massage)
massageEl.textContent = massage

}
