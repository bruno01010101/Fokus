const html = document.querySelector('html')
const card = document.querySelector('.app__card');
const img = document.querySelector('.app__image');
const h1 = document.querySelector('app__title')
const btn1 = document.querySelector('.app__card-button--foco')
const btn2 = document.querySelector('.app__card-button--curto')
const btn3 = document.querySelector('.app__card-button--longo')
const botaoIniciar = document.querySelector('.app__card-primary-button');
const temp_foco = 1500;
const temp_curto = 300;
const temp_longo = 900;


document.addEventListener(('click'), (e) => {
    const botao = e.target;
    if(botao == btn1){
        html.setAttribute('data-contexto', 'foco') // método que muda o atributo de uma tag
        btn2.classList.remove('active')
        btn3.classList.remove('active')
        botao.classList.add('active')
    }
    if(botao == btn2){
        html.setAttribute('data-contexto', 'descanso-curto')
        btn1.classList.remove('active')
        btn3.classList.remove('active')
        botao.classList.add('active')
    }
    if(botao == btn3){
        html.setAttribute('data-contexto', 'descanso-longo')
        btn2.classList.remove('active')
        btn1.classList.remove('active')
        botao.classList.add('active')
    }
})