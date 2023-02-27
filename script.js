const start = document.getElementById('start')
const startScreen = document.getElementById('start-screen')
const gameScreen = document.getElementById('gameScreen')
const gameOver = document.getElementById('gameOver')
const tryagain = document.getElementById('tryAgain')
const gameWin = document.getElementById('gameWin')
const playAgain = document.getElementById('playAgain')
var winAudio = new Audio('./assets/winaudio.mp3')
let fields = document.querySelectorAll('.general')
var acerto = new Audio('./assets/acerto.mp3')
var erro = new Audio('./assets/erro.mp3')
var musicaFundo = new Audio('./assets/musicadefundo.mp3')
let diamonds = ['./assets/bomb.svg', './assets/yellowdiamond.svg', './assets/reddiamond.svg', './assets/purplediamond.svg', './assets/purplediamond.svg', './assets/yellowdiamond.svg', './assets/purplediamond.svg', './assets/yellowdiamond.svg', './assets/reddiamond.svg']

fields.forEach((field) => {
    field.addEventListener('click', () => {
        if(!field.querySelector('img')){
            const diamond = document.createElement('img')
            let randomDiamond = parseInt(Math.random() * diamonds.length)
            diamond.src = diamonds[randomDiamond]
            diamond.style.width = '100%'
            field.appendChild(diamond)
            diamonds.pop()
            if(diamond.src.includes('bomb')){
                erro.play()
                erro.currentTime = 0
                musicaFundo.pause()
                document.body.classList.add('shake')
                setTimeout(() => {gameScreen.style.display = 'none'}, 0200)
                setTimeout(() => {gameOver.style.display = 'flex'}, 0500)
                setTimeout(() => {gameOver.style.opacity = '1'}, 650)
                // checar se ganhou
                }else if(diamonds.length == 1){
                    setTimeout(() => {gameScreen.style.display = 'none'}, winAudio.play(), 0200)
                    setTimeout(() => {gameWin.style.display = 'flex'}, 0750)
                    setTimeout(() => {gameWin.style.opacity = '1'}, 750)
                }else acerto.play(), acerto.currentTime = 0 
                
            }
                
    })
})

playAgain.addEventListener('click', restartAgain)
function restartAgain(){
    fields.forEach((field) => {
        document.body.classList.remove('shake')
        winAudio.pause()
        if(field.querySelector('img')){
        field.removeChild(field.querySelector('img'))
        }
        gameWin.style.display = 'none'
        setTimeout(() => {gameScreen.style.display = 'flex'}, 0500)
        setTimeout(() => {gameScreen.style.opacity = '1'}, 0750)
        musicaFundo.play()
        diamonds = ['./assets/bomb.svg', './assets/yellowdiamond.svg', './assets/reddiamond.svg', './assets/purplediamond.svg', './assets/purplediamond.svg', './assets/yellowdiamond.svg', './assets/purplediamond.svg', './assets/yellowdiamond.svg', './assets/reddiamond.svg']
    })
}

tryagain.addEventListener('click', restart)
function restart(){
    document.body.classList.remove('shake')
    fields.forEach((field) => {
        if(field.querySelector('img')){
        field.removeChild(field.querySelector('img'))
        }
        gameOver.style.display = 'none'
        setTimeout(() => {gameScreen.style.display = 'flex'}, 0500)
        setTimeout(() => {gameScreen.style.opacity = '1'}, 0750)
        musicaFundo.play()
        diamonds = ['./assets/bomb.svg', './assets/yellowdiamond.svg', './assets/reddiamond.svg', './assets/purplediamond.svg', './assets/purplediamond.svg', './assets/yellowdiamond.svg', './assets/purplediamond.svg', './assets/yellowdiamond.svg', './assets/reddiamond.svg']
    })
}

start.addEventListener('click', () => {
    musicaFundo.play()
    //some a tela inicial
    startScreen.style.opacity = '0'
    setTimeout(() => {startScreen.style.display = 'none'}, 0500)  
    // aparece a tela de jogo
    setTimeout(() => {gameScreen.style.display = 'flex'}, 0500)
    setTimeout(() => {gameScreen.style.opacity = '1'}, 0750)
})
console.log(diamonds)

