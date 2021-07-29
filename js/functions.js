const infBtns = document.querySelector('.wrapper-inf');

infBtns.addEventListener('click', () => {
    console.log('klik');
    infBtns.classList.toggle('visible')
    // infBtns.forEach(infBtn => { console.log('klik') })
})

function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}