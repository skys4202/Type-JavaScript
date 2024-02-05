const GAME_TIME = 4;
let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;
let words = [];
let checkInterval;


const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('.button');


init();
function init(){
    getWords();
    wordInput.addEventListener('input', checkMatch)

}

// 게임실행
function run(){
    isPlaying = true;
    time = GAME_TIME;
    wordInput.focus();
    scoreDisplay.innerText = 0;
    timeInterval = setInterval(countDown,1000);
    checkInterval = setInterval(checkStatus, 50)
    buttonChange('게임중')
}

function checkStatus(){
    if(!isPlaying && time === 0){
        buttonChange('게임시작')
        clarInterval(checkInterval)
    }
}

// 단어 불러오기
function getWords() {
    words = ['Hello', 'Banana', 'Apple', 'Cherry'];
    buttonChange('게임시작')
}


// 단어일치 체크
function checkMatch (){
        if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
            wordInput.value = "";
            if(!isPlaying){
                return
            }
            score++;
            scoreDisplay.innerText = score;
            time = GAME_TIME;
            const randomIndex = Math.floor(Math.random() * words.length);
            wordDisplay.innerText = words[randomIndex];
        }
    }





function countDown(){
    time > 0? time -- : isPlaying = false;
    if(!isPlaying){
        clearInterval(timeInterval)
    }
    timeDisplay.innerText = time;
}



function buttonChange(text){
    button.innerText = text;
    text === '게임시작' ? button.classList.remove('loading') : button.classList.add('loading')
}