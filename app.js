const rock= document.getElementById('rock')
const paper= document.getElementById('paper')
const scissors= document.getElementById('scissors')
const gameSection= document.getElementById('game-section')
const reset= document.getElementById("reset")

let resultItem= document.createElement('div')
    resultItem.className='result'
    gameSection.appendChild(resultItem)

let result

const options = [rock,paper,scissors];

const randomIndex = Math.floor(Math.random() * options.length);

// Select the random option
const randomOption = options[randomIndex];

function game(){

    if(rock && randomOption=== rock){
        result="tie"
    }
    if(rock && randomOption=== paper){
        result="comp-won"
    }
    if(rock && randomOption=== scissors){
        result="you won"
    }

    if(scissors && randomOption=== rock){
        result="comp-won"
    }
    if(scissors && randomOption=== paper){
        result="you won"
    }
    if(scissors && randomOption=== scissors){
        result="tie"
    }

    if(paper && randomOption=== rock){
        result="you won"
    }
    if(paper && randomOption=== scissors){
        result="comp-won"
    }
    if(paper && randomOption=== paper){
        result="tie"
    } 
    
    resultItem.innerText=result
}


function resetGame(){
    location.reload()
}

rock.addEventListener("click",game)
paper.addEventListener("click",game)
scissors.addEventListener("click",game)

reset.addEventListener('click',resetGame)




