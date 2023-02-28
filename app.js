/* const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
*/


let btnReset = document.querySelector('.reset');
let select = document.querySelector('#to');
let to = Number(select.value);
let gameOn = true;

const p1 = {
    score: 0,
    button: document.querySelector('.btnPlayer1'),
    display: document.querySelector('.scoreplayer1'),
}

const p2 = {
    score: 0,
    button: document.querySelector('.btnPlayer2'),
    display: document.querySelector('.scoreplayer2'),
}


function updateScore(player, opponent) {
    if (gameOn === true) {
        if (gameOn) {
            player.score++;
            player.display.value = player.score;
            player.display.textContent = player.display.value;
            to = Number(select.value);
        }
           
        if (player.score === to) {
            player.display.classList.add('has-background-success'); 
            player.button.classList.add('has-background-success');
            opponent.display.classList.add('has-text-danger'); 
            opponent.button.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            gameOn = false;
        } 
        
    }
    
}


let reset = function () {
    
    gameOn = true;

    for (const p of [p1, p2]) {
        p.score = 0;
        p.display.value = p.score;
        p.display.textContent = p.display.value;
        p.button.classList.remove('has-background-success','has-text-danger');
        p.display.classList.remove('has-background-success', 'has-text-danger');
        p.button.disabled = false;
        
    }


    /* p1.score = 0;
    p2.score = 0;
    p1.display.value = p1.score;
    p1.display.textContent = p1.display.value;
    p2.display.value = p1.score;
    p2.display.textContent = p2.display.value;
    p1.button.classList.remove('has-background-success', 'has-text-danger');
    p2.button.classList.remove('has-background-success','has-text-danger');
    p1.display.classList.remove('has-background-success','has-text-danger');
    p2.display.classList.remove('has-background-success', 'has-text-danger');
    p1.button.disabled = false;
    p2.button.disabled = false; */
    
    
}

select.addEventListener('change', reset)

p1.button.addEventListener('click', function () {
    updateScore(p1,p2)
    
})

p2.button.addEventListener('click', function () {
    updateScore(p2,p1)
    
})

btnReset.addEventListener('click', reset);





/* if (gameOn===true) {
    btnPl1.addEventListener('click', function () {
        if (gameOn) {
            scorePlayer1++;
            scorePl1.value = scorePlayer1;
            scorePl1.textContent = scorePl1.value;
            to = Number(select.value);
        }
           
        if (scorePlayer1 === to) {
            scorePl1.classList.add('has-background-success'); 
            this.classList.add('has-background-success');
            scorePl2.classList.add('has-text-danger'); 
            btnPl2.classList.add('has-text-danger');
            btnPl1.disabled = true;
            btnPl2.disabled = true;
            gameOn = false;
        } 
    })
    
    btnPl2.addEventListener('click', function () {
        if (gameOn) {
            scorePlayer2++;
            scorePl2.value = scorePlayer2;
            scorePl2.textContent = scorePl2.value;
            to = Number(select.value);
        }
           
        if (scorePlayer2 === to) {
            scorePl2.classList.add('has-background-success'); 
            this.classList.add('has-background-success');
            scorePl1.classList.add('has-text-danger'); 
            btnPl1.classList.add('has-text-danger');
            btnPl1.disabled = true;
            btnPl2.disabled = true;
            gameOn = false;
        } 
         
    })
    
} */









