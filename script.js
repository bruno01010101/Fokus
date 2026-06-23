const html = document.querySelector('html')
const card = document.querySelector('.app__card');
const img = document.querySelector('.app__image');
const h1 = document.querySelector('.app__title')
const strong = document.querySelector('.app__title-strong')
const btn1 = document.querySelector('.app__card-button--foco')
const btn2 = document.querySelector('.app__card-button--curto')
const btn3 = document.querySelector('.app__card-button--longo')
const temp_foco = 1500;
const temp_curto = 300;
const temp_longo = 900;
const musicaButton = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3')
musica.loop = true
const startPause = document.querySelector('#start-pause')

let tempo = 5

musicaButton.addEventListener('change', (e) => {
    if(musica.paused){
        musica.play()
    }
    else{
        musica.pause()
    }
})

const contagem = (s) => {
    setInterval(() => {
        constroiSegundos(s * 1000)
        s -= 1
    }, 1000)
}

function constroiSegundos(segundos){
    let a = new Date(segundos).toLocaleTimeString("pt-BR", {timeZone: "UTC", hour12: false})
    console.log(a)
}

document.addEventListener(('click'), (e) => {
    const botao = e.target;
    console.log(botao)
    if(botao == btn1){
        mudaAtributos('data-contexto', 'foco')
        btn2.classList.remove('active')
        btn3.classList.remove('active')
        botao.classList.add('active')
    }
    if(botao == btn2){
        mudaAtributos('data-contexto', 'descanso-curto')
        btn1.classList.remove('active')
        btn3.classList.remove('active')
        botao.classList.add('active')
    }
    if(botao == btn3){
        mudaAtributos('data-contexto', 'descanso-longo')
        btn2.classList.remove('active')
        btn1.classList.remove('active')
        botao.classList.add('active')
    }
})

startPause.addEventListener("click", (e) => {
    contagem(900)
})

function mudaAtributos(atributo, atribuicao){
    html.setAttribute(atributo, atribuicao) // método que muda o atributo de uma tag
    img.setAttribute('src', `/imagens/${atribuicao}.png`)
    if (atribuicao === 'foco') h1.innerHTML = `Otimize sua produtividade,<br> <strong class="app__title-strong">Mergulhe no que importa.</strong>`;
    if (atribuicao === 'descanso-curto') h1.innerHTML = `Que tal dar uma respirada?<br> <strong class="app__title-strong">Faça uma pausa curta.</strong>`;
    if (atribuicao === 'descanso-longo') h1.innerHTML = `Hora de voltar a superfície<br> <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
}
