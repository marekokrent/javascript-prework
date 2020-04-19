document.addEventListener("DOMContentLoaded", function() {

const buttonRock = document.querySelector("#button1"),
      buttonPaper = document.querySelector("#button2"),
      buttonScissors = document.querySelector("#button3");



function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}



function printMessage(msg){
       
    const div = document.createElement('div');
    div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function printMessage2(msg){
       
    const div = document.createElement('div');
    div.innerHTML = msg;
	document.getElementById('result').appendChild(div);
}


function nameAssignment(Number){
    if (Number == '1') {
    return 'kamień';
    } else if (Number == '2') {
    return 'papier';
    } else if (Number == '3') {
    return 'nożyce';
    }
}

let computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana cyfra to: ' + randomNumber);

computerMove = nameAssignment(randomNumber);
console.log('przypisano zmienna:' + computerMove);


//var playerMove, playerInput;



/*
do {

playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wpisana cyfra to: ' + playerInput);
clearMessages();

if (playerInput <= '3' && playerInput >= '1') {
    playerMove = nameAssignment(playerInput);
  } else {
    playerMove = 'nieznany ruch';
    printMessage('Nie wpisałeś/aś cyfry 1, 2 lub 3');true

console.log('przypisano zmienna:' + playerMove);

*/



/*
switch (randomNumber + playerInput) {

    case ('12') :
        winSelect = 'wygrał player';console.log (computerMove + playerMove);
    case ('13') :
        winSelect = 'wygrał computer';
    break;

    case ('21') :
        winSelect = 'wygrał computer';
    break;

    case ('23') :
        winSelect = 'wygrał player';
    break;

    case ('31') :
        winSelect = 'wygrał player';
    break;

    case ('32') :
        winSelect = 'wygrał computer';
    break;

}
*/



function checkWinner(computerMove,playerMove) {
    let winner;
    if (computerMove == playerMove) {
        winner = 'remis';
    } else {

        if (computerMove + playerMove == 'kamieńpapier') {
            winner = 'wygrał player';

        } else if (computerMove + playerMove == 'papiernożyce') {
            winner = 'wygrał player';
        } else if (computerMove + playerMove == 'nożycekamień') {
            winner = 'wygrał player';
        } else {
            winner = 'wygrał computer';
        }
    } 
    return winner;
}




function displayResult(computerMove, playerMove){
    if (playerMove != 'nieznany ruch') {
        printMessage('Zagrałem: ' + computerMove + '   Twój ruch to: ' + playerMove + '   Wynik : ' + checkWinner(computerMove,playerMove));
    }
}

function buttonClicked (playerMove){
    clearMessages();
    displayResult(computerMove, playerMove);
    printMessage2(counterPlay(checkWinner(computerMove,playerMove))); 
    randomNumber = Math.floor(Math.random() * 3 + 1);
    computerMove = nameAssignment(randomNumber);
    

}

let step = 0;

function counterPlay(won){
    
    step = step +1;
    let numberAttempts = 'Próba nr '+step+' '+won;
    return numberAttempts

}

buttonRock.addEventListener("click",function(){buttonClicked('kamień')});
buttonPaper.addEventListener("click",function(){buttonClicked('papier')});
buttonScissors.addEventListener("click",function(){buttonClicked('nożyce')});
})