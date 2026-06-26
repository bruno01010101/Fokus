const html = document.querySelector('html')
const card = document.querySelector('.app__card');
const img = document.querySelector('.app__image');
const h1 = document.querySelector('.app__title')
const strong = document.querySelector('.app__title-strong')
const btn1 = document.querySelector('.app__card-button--foco')
const btn2 = document.querySelector('.app__card-button--curto')
const btn3 = document.querySelector('.app__card-button--longo')
const imagemBtn= document.querySelector('.app__card-primary-butto-icon')
const timer = document.querySelector('#timer');
let s = 0;

const musicaButton = document.querySelector('#alternar-musica');
const span = document.querySelector('#start-pause > span');

const temp_foco = 1500;
const temp_curto = 300;
const temp_longo = 900;

const musica = new Audio('./sons/luna-rise-part-one.mp3')
musica.loop = true
const startPause = document.querySelector('#start-pause')
let cronometro = null

let tempo = 5

musicaButton.addEventListener('change', (e) => {
    if(musica.paused){
        musica.play()
    }
    else{
        musica.pause()
    }
})

function constroiSegundos(segundos){
    let a = new Date(segundos).toLocaleTimeString("pt-BR", {timeZone: "UTC", hour12: false})
    timer.innerHTML = a.slice(3);
}

document.addEventListener(('click'), (e) => {
    const botao = e.target;
    if(botao == btn1){
        mudaAtributos('data-contexto', 'foco')
        btn2.classList.remove('active')
        btn3.classList.remove('active')
        botao.classList.add('active')
        timer.textContent = '15:00'
        s = 900;
    }
    if(botao == btn2){
        mudaAtributos('data-contexto', 'descanso-curto')
        btn1.classList.remove('active')
        btn3.classList.remove('active')
        botao.classList.add('active')
        timer.textContent = '05:00'
        s = 300
    }
    if(botao == btn3){
        mudaAtributos('data-contexto', 'descanso-longo')
        btn2.classList.remove('active')
        btn1.classList.remove('active')
        botao.classList.add('active')
        timer.textContent = '25:00'
        s = 1500;
    }
})

startPause.addEventListener("click", (e) => {
    if(cronometro) {
        clearInterval(cronometro)
        cronometro = null
        new Audio('./sons/pause.mp3').play()
        span.textContent = 'Começar';
        imagemBtn.setAttribute('href', './imagens/play_arrow.png')
        return
    }
    
    new Audio('./sons/play.wav').play()
    span.textContent = 'Pausar';
    imagemBtn.setAttribute('href', './imagens/pause.png')
    cronometro = setInterval(() => {
        constroiSegundos(s * 1000)
        s -= 1
        if(s <= 0) {
            clearInterval(cronometro)
            new Audio('./sons/beep.mp3').play()
            return
        }
    }, 1000)
})

function mudaAtributos(atributo, atribuicao){
    html.setAttribute(atributo, atribuicao) // método que muda o atributo de uma tag
    img.setAttribute('src', `/imagens/${atribuicao}.png`)
    if (atribuicao === 'foco') h1.innerHTML = `Otimize sua produtividade,<br> <strong class="app__title-strong">Mergulhe no que importa.</strong>`;
    if (atribuicao === 'descanso-curto') h1.innerHTML = `Que tal dar uma respirada?<br> <strong class="app__title-strong">Faça uma pausa curta.</strong>`;
    if (atribuicao === 'descanso-longo') h1.innerHTML = `Hora de voltar a superfície<br> <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
}
