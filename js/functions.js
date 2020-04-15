function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
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

playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wpisana cyfra to: ' + playerInput);



if (playerInput <= '3' && playerInput >= '1') {
    playerMove = nameAssignment(playerInput);
  } else {
    playerMove = 'nieznany ruch';
  }

console.log('przypisano zmienna:' + playerMove);

if (playerMove != 'nieznany ruch') {

  printMessage('Zagrałem ' + computerMove + ' Twój ruch to: ' + playerMove + ' Wynik');

}
