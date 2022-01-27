let rsl = document.querySelector('#rsl');
let crl = document.querySelector('#crl');
let kvn = document.querySelector('#kvn');
let msgScore = document.querySelector('#msgScore');
let countCpu = 1;
let countPlayer = 1;
let pointPlayer = document.querySelector('#pointPlayer');
let pointCpu = document.querySelector('#pointCpu');

// let pointPlayers = () => {
//     if (cpuChoice == 0 && playerChoice == 1 || cpuChoice == 1 && ) {
        
//     } else {
        
//     }
// }

rsl.addEventListener('click', () => {
    playerChoice = 1
    console.log(playerChoice)
    cpuChoice = Math.floor(Math.random()*3) + 1;
    console.log(cpuChoice)
    if (cpuChoice == 1 ) {
        msgScore.innerHTML = 'égalité';
    } else if (cpuChoice == 2 ) { 
        msgScore.innerHTML = 'Russell a gagné contre Carl';
        pointPlayer.innerHTML = countPlayer++;
    } else {
        msgScore.innerHTML = 'Russel a perdu contre Kevin';
        pointCpu.innerHTML = countCpu++;
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
        pointPlayer.innerHTML = countPlayer++;
    } else {
        msgScore.innerHTML = 'Carle a perdu contre Russell';
        pointCpu.innerHTML = countCpu++;
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
        pointPlayer.innerHTML = countPlayer++;
    } else {
        msgScore.innerHTML = 'Kevin a perdu contre Carl';
        pointCpu.innerHTML = countCpu++;
    }
});








