

function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

/* Add eventListener to information buttons"*/
const infBtns = [...document.querySelectorAll('.wrapper-inf')];

infBtns.forEach(infBtn =>
    infBtn.addEventListener('click', function () {
        console.log(this);

        infBtn.classList.toggle('visible');

    })
)