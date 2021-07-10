var guestName = document.querySelector('span');
var nameButton = document.querySelector('button');

guestName.textContent = 'гость';

function SetGuestName() {
    let WUName = prompt('Как тебя зовут?', 'гость');
    if (WUName == 0) {
        WUName = 'гость';
    } else {
        localStorage.setItem('span', WUName);
        guestName.textContent = WUName;
    }
}

nameButton.onclick = function() {
    SetGuestName();
}