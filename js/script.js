var guestName = document.querySelector('button');
var nameButton = document.querySelector('button');

guestName.textContent = 'Приветствую, гость!';

function SetGuestName() {
    let WUName = prompt('Как тебя зовут?', 'гость');
    if (WUName == '') {
        WUName = 'гость';
    } else {
        localStorage.setItem('span', WUName);
        guestName.textContent = 'Приветствую, ' + WUName + '!';
    }
}

nameButton.onclick = function() {
    SetGuestName();
}