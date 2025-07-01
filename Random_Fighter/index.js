let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    let fighter1 = pickRandomFighter()
    let fighter2 = pickRandomFighter()
    stageEl.textContent=fighter1+" vs "+fighter2
})

function pickRandomFighter(){
    let randomIndex=Math.floor(Math.random()*fighters.length)
    return fighters[randomIndex]
}

console.log(pickRandomFighter())
