let rsl = document.querySelector('#rsl');
let crl = document.querySelector('#crl');
let kvn = document.querySelector('#kvn');
let msgScore = document.querySelector('#msgScore')


rsl.addEventListener('click', () => {
    playerChoice = 1
    console.log(playerChoice)
    cpuChoice = Math.floor(Math.random()*3) + 1;
    console.log(cpuChoice)
    if (cpuChoice == 1 ) {
        msgScore.innerHTML = 'égalité';
    } else if (cpuChoice == 2 ) { 
        msgScore.innerHTML = 'Russell a gagné contre Carl';
    } else {
        msgScore.innerHTML = 'Russel a perdu contre Kevin';
    }
    
});

crl.addEventListener('click', () => {
    playerChoice = 2
    console.log(playerChoice)
    cpuChoice = Math.floor(Math.random()*3) + 1;
    console.log(cpuChoice)
    if (cpuChoice == 2 ) {
        msgScore.innerHTML = 'égalité';
    } else if (cpuChoice == 3 ) { 
        msgScore.innerHTML = 'Carl a gagné contre Kevin';
    } else {
        msgScore.innerHTML = 'Carle a perdu contre Russell';
    }
});


kvn.addEventListener('click', () => {
    playerChoice = 3
    console.log(playerChoice)
    cpuChoice = Math.floor(Math.random()*3) + 1;
    console.log(cpuChoice)
    if (cpuChoice == 3 ) {
        msgScore.innerHTML = 'égalité';
    } else if (cpuChoice == 1 ) { 
        msgScore.innerHTML = 'Kevin a gagné contre Russell';
    } else {
        msgScore.innerHTML = 'Kevin a perdu contre Carl';
    }
});

