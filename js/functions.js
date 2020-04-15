function printMessage(msg){
	var div = document.createElement('div');
    div.innerText = msg;
    

	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
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

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana cyfra to: ' + randomNumber);

computerMove = nameAssignment(randomNumber);
console.log('przypisano zmienna:' + computerMove);



var playerMove, playerInput;




do {

playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wpisana cyfra to: ' + playerInput);
clearMessages();

if (playerInput <= '3' && playerInput >= '1') {
    playerMove = nameAssignment(playerInput);
  } else {
    playerMove = 'nieznany ruch';
    printMessage('Nie wpisałeś/aś cyfry 1, 2 lub 3');
    
  }

} while (playerMove == 'nieznany ruch');


console.log('przypisano zmienna:' + playerMove);

var winSelect;

if (randomNumber == playerInput) {
    winSelect = 'remis';

}

/*
switch (randomNumber + playerInput) {

    case ('12') :
        winSelect = 'wygrał player';
    break;

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

if (randomNumber + playerInput == '12') {
    winSelect = 'wygrał player';

} else if (randomNumber + playerInput == '23') {
    winSelect = 'wygrał player';
} else if (randomNumber + playerInput == '31') {
    winSelect = 'wygrał player';
} else {
    winSelect = 'wygrał computer';
} 

console.log (randomNumber + playerInput);

if (playerMove != 'nieznany ruch') {

  printMessage('Zagrałem: ' + computerMove + '   Twój ruch to: ' + playerMove + '   Wynik : ' + winSelect);

}
