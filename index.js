let firstCard = 10
let secondCard =11 


let sum = firstCard + secondCard
console.log(sum)

if (sum < 21){
    console.log("do you want to draw a new card?")
}else if (sum === 21 ){
    console.log("huraah! you have got the blackjack")
}else if (sum > 21 ){
    console.log("you are out of the game")
}