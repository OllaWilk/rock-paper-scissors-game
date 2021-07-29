

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

function insertImage(imgPath) {
    const imgPlace = document.querySelector('.img-left');

    let img = document.createElement('img');
    img.src = imgPath;
    imgPlace.appendChild(img);

}

const moves = [['rock', 'img/rock.png'], ['paper', 'img/papper.png']]
const imgPaper = 'img/papper.png';
// const imgRock = 'img/rock.png';
const imgScissors = 'img/scissors.png'
insertImage(imgScissors)

