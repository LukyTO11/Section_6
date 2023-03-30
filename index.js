/* lesson 1 */

/* // SETTING THE STAGE
const player = "LUKY"
const opponent = "TO"
const game = "AmazingFighter"
let points = 0
let hasWon = true

// PLAYING THE GAME
points += 100
hasWon = false

// ANNOUNCING THE WINNER
if (hasWon) {
    console.log(`${player} got ${points} points and won the ${game} game!`)
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`)
} */


/* lesson 2 */

/* let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

function logItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
logItems(myCourses) */


/* lesson 3 */

/* let myCredits = localStorage.getItem("myCredits")
console.log(myCredits) */


/* lesson 4 */

/* let data = [
    {
        player: "Jane",
        score: 52
    },
    {
        player: "Mark",
        score: 41
    }
]

const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
    console.log(data[0].score)
}) */


/* lesson 5 */

/* function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    const lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "
        }
    }
    return baseString
}

const sentence = generateSentence("highest mountains", ["Mount Everest", "K2"])
console.log(sentence) */


/* lesson 6 */

const imgs = [
    "img/hip1.jpg",
    "img/hip2.jpg",
    "img/hip3.jpg" 
]

const container = document.getElementById("container")

function renderImages(){
    let imgsDOM = ""
    for (let i = 0; i < imgs.length; i++) {
        imgsDOM += `<img alt="Employee in the company" class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDOM
}

renderImages()
