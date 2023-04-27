
const btns = document.querySelectorAll('.btns');
const allCells = document.querySelectorAll('[data-cell-index]');
const cell1 = document.querySelector('button[data-cell-index="1"]');
const cell2 = document.querySelector('button[data-cell-index="2"]');
const cell3 = document.querySelector('button[data-cell-index="3"]');
const cell4 = document.querySelector('button[data-cell-index="4"]');
const cell5 = document.querySelector('button[data-cell-index="5"]');
const cell6 = document.querySelector('button[data-cell-index="6"]');
const cell7 = document.querySelector('button[data-cell-index="7"]');
const cell8 = document.querySelector('button[data-cell-index="8"]');
const cell9 = document.querySelector('button[data-cell-index="9"]');
const pointsPlayer1 = document.querySelector('#player1');
const pointsPlayer2 = document.querySelector('#player2');
const msgWins = document.querySelector('#msgWins');
const boxMsg = document.querySelector('.containerWins');


// PEGA TODOS OS BOTÕES QUE FORAM CLICADOS E MANDA PARA "CHANGESBTNSMARKED" 
btns.forEach((bt) => bt.addEventListener('click', () => { changesBtnsMarked(bt) }));

//ESSA ARRAY TEM A FUNÇÃO DE GUARDAR QUAL BOTÃO FOI CLICADO E DEPOIS NA FUNCTION DRAW-("EMPATE") PEGAMOS A QUANTIDADE DE ITENS SE FOR IGUAL 9 E CHECKERFUNCTION IGUAL A FALSE VAI SER A EMPATE 
let arryDraw = [];

//ESSE OBJETO SERVE PARA ADICIONAR AS PROPRIENDADES E VISUALIZÁ-LAS
let ObjectPosition = {};

//RETORNA O VALOR DA STRING DEFINIDO PARA O JOGADOR
function player1() {
    return "X"
}

function player2() {
    
    return "O";
}

let changePlayer = player1();
let playerSelectcolor = selectedPlayer1Efects()

//VERFICA AS MUDANÇAS DA MARCAÇÃO DOS BOTÕES
function changesBtnsMarked(bt) {
    // ADICIONA NA ARRAY CADA "QUADRADO" QUE FOI CLICADO
    draw(arryDraw.push(bt.textContent));

    //QUNADO UM BOTÃO E CLICADO ELE É MARCADO COM X OU O DEPENDENDO DE QUAL JOGADOR E A VEZ
    bt.textContent = changePlayer;

    //CONDIÇÃO ALTERA O JOGADOR
    if (bt.innerText == 'X') changePlayer = player2(),playerSelectcolor= selectedPlayer2Efects(),removeSelectEfectPlayer1();
    if (bt.innerText == 'O') changePlayer = player1(),playerSelectcolor = selectedPlayer1Efects(),removeSelectEfectPlayer2();


    //ESSA LINHA DE CODIGO FOI INPLAMENTADA PARA RESOLVER UM PROBLEMA OCRRIDO NO CSS, ESSA LINHA FAZ QUE O SINAL "." FIQUE ECSCONDIDO PARA MELHORAR A INTERFACE
    if (bt.textContent != '.') bt.style.color = "#252525";
}

// DELAY DE 1S PARA VERIFICAR O ARRAY DRAW
function draw() {
    setTimeout(() => {
        if (arryDraw.length >= 9) msg(), msgWins.textContent = 'Draw!', msgRemove(), disableAllbuttons(), arryDraw = [];
    },1);
}


//SIMPLES FUNÇÃO PARA DESABILITAR OS BOTÕES e RESETA OUTROS RECURSOS CASO ALGUM JOGADOR FAÇA UMA CONBINAÇÃO CERTA
function disableAllbuttons() {
    btns.forEach((bt) => {

        bt.disabled = true;
        ObjectPosition = {};
        arryDraw = [];

        setTimeout(() => {
            transitionAnimationRemove();
            bt.innerHTML = '.';
            if (bt.innerHTML == '.') bt.style.color = 'transparent'
            bt.disabled = false;
        }, 1500);


    });
}



// CRIA PRORIEDADES PARA INDENTIFICAR OS QUADRADOS QUE ESTAO MARCADOS COM (X, O) OU PLAYER1 E PLAYER2
// O METODO DISABLE E USADO PARA DESABILITAR CADO BOTÃO QUE FOI CLICADO PARA QUE ELE NÃO ALTERE A STRING DE CADA JOGADOR
cell1.addEventListener('click', (e) => {
    if (e.target.innerText == 'X') checkerMarked(ObjectPosition.square_1 = 'Marked with X');
    if (e.target.innerText == 'O') checkerMarked(ObjectPosition.square_1 = 'Marked with O');
    cell1.disabled = true;
})

cell2.addEventListener('click', (e) => {
    if (e.target.innerText == 'X') checkerMarked(ObjectPosition.square_2 = 'Marked with X');
    if (e.target.innerText == 'O') checkerMarked(ObjectPosition.square_2 = 'Marked with O');
    cell2.disabled = true;

})
cell3.addEventListener('click', (e) => {
    if (e.target.innerText == 'X') checkerMarked(ObjectPosition.square_3 = 'Marked with X');
    if (e.target.innerText == 'O') checkerMarked(ObjectPosition.square_3 = 'Marked with O');
    cell3.disabled = true;
});
cell4.addEventListener('click', (e) => {
    if (e.target.innerText == 'X') checkerMarked(ObjectPosition.square_4 = 'Marked with X');
    if (e.target.innerText == 'O') checkerMarked(ObjectPosition.square_4 = 'Marked with O');
    cell4.disabled = true;

})
cell5.addEventListener('click', (e) => {
    if (e.target.innerText == 'X') checkerMarked(ObjectPosition.square_5 = 'Marked with X');
    if (e.target.innerText == 'O') checkerMarked(ObjectPosition.square_5 = 'Marked with O');
    cell5.disabled = true;

})
cell6.addEventListener('click', (e) => {
    if (e.target.innerText == 'X') checkerMarked(ObjectPosition.square_6 = 'Marked with X');
    if (e.target.innerText == 'O') checkerMarked(ObjectPosition.square_6 = 'Marked with O');
    cell6.disabled = true;

})
cell7.addEventListener('click', (e) => {
    if (e.target.innerText == 'X') checkerMarked(ObjectPosition.square_7 = 'Marked with X');
    if (e.target.innerText == 'O') checkerMarked(ObjectPosition.square_7 = 'Marked with O');
    cell7.disabled = true;

})
cell8.addEventListener('click', (e) => {
    if (e.target.innerText == 'X') checkerMarked(ObjectPosition.square_8 = 'Marked with X');
    if (e.target.innerText == 'O') checkerMarked(ObjectPosition.square_8 = 'Marked with O');
    cell8.disabled = true;


})
cell9.addEventListener('click', (e) => {
    if (e.target.innerText == 'X') checkerMarked(ObjectPosition.square_9 = 'Marked with X');
    if (e.target.innerText == 'O') checkerMarked(ObjectPosition.square_9 = 'Marked with O');
    cell9.disabled = true

})



//ACESSAMOS ESSAS PROPRIEDADES DEPOIS DE CRIADAS E VERIFICAMOS SE TEM ALGUMA COMBINAÇÃO QUE FAZ O JOGADOR MAARCAR PONTOS
function checkerMarked() {

    if (
        ObjectPosition.square_1 == 'Marked with X' && ObjectPosition.square_2 == "Marked with X" && ObjectPosition.square_3 == 'Marked with X' ||
        ObjectPosition.square_1 == 'Marked with X' && ObjectPosition.square_4 == "Marked with X" && ObjectPosition.square_7 == 'Marked with X' ||
        ObjectPosition.square_3 == 'Marked with X' && ObjectPosition.square_6 == "Marked with X" && ObjectPosition.square_9 == 'Marked with X' ||
        ObjectPosition.square_7 == 'Marked with X' && ObjectPosition.square_8 == "Marked with X" && ObjectPosition.square_9 == 'Marked with X' ||
        ObjectPosition.square_1 == 'Marked with X' && ObjectPosition.square_2 == "Marked with X" && ObjectPosition.square_3 == 'Marked with X' ||
        ObjectPosition.square_1 == 'Marked with X' && ObjectPosition.square_5 == "Marked with X" && ObjectPosition.square_9 == 'Marked with X' ||
        ObjectPosition.square_2 == 'Marked with X' && ObjectPosition.square_8 == "Marked with X" && ObjectPosition.square_5 == 'Marked with X' ||
        ObjectPosition.square_3 == 'Marked with X' && ObjectPosition.square_5 == "Marked with X" && ObjectPosition.square_7 == 'Marked with X' ||
        ObjectPosition.square_4 == 'Marked with X' && ObjectPosition.square_5 == "Marked with X" && ObjectPosition.square_6 == 'Marked with X'

    ) countPoints(1), disableAllbuttons()
    if (
        ObjectPosition.square_1 == 'Marked with O' && ObjectPosition.square_2 == "Marked with O" && ObjectPosition.square_3 == 'Marked with O' ||
        ObjectPosition.square_1 == 'Marked with O' && ObjectPosition.square_4 == "Marked with O" && ObjectPosition.square_7 == 'Marked with O' ||
        ObjectPosition.square_3 == 'Marked with O' && ObjectPosition.square_6 == "Marked with O" && ObjectPosition.square_9 == 'Marked with O' ||
        ObjectPosition.square_7 == 'Marked with O' && ObjectPosition.square_8 == "Marked with O" && ObjectPosition.square_9 == 'Marked with O' ||
        ObjectPosition.square_1 == 'Marked with O' && ObjectPosition.square_2 == "Marked with O" && ObjectPosition.square_3 == 'Marked with O' ||
        ObjectPosition.square_1 == 'Marked with O' && ObjectPosition.square_5 == "Marked with O" && ObjectPosition.square_9 == 'Marked with O' ||
        ObjectPosition.square_2 == 'Marked with O' && ObjectPosition.square_8 == "Marked with O" && ObjectPosition.square_5 == 'Marked with O' ||
        ObjectPosition.square_3 == 'Marked with O' && ObjectPosition.square_5 == "Marked with O" && ObjectPosition.square_7 == 'Marked with O' ||
        ObjectPosition.square_4 == 'Marked with O' && ObjectPosition.square_5 == "Marked with O" && ObjectPosition.square_6 == 'Marked with O'
    ) countPoints(2), disableAllbuttons()
}

//PONTUAÇÃO DOS JOGADORES
let p1Points = 0;
let p2Points = 0;

//ESSA FUNÇÃO CONTA QUANTAS VEZES O JOGADOR GANHOU 
function countPoints(numberPlayer) {
    //CHECKERFUNCTION SERVE PARA VERIFICARMOS SE ESSA FUNÇÃO FOI EXECUTADA
    disableAllbuttons();
    transitionAnimation();

    //USAMOS O SETTIMEOUT PARA AGENDAR O TEMPO DE ESAPERA PARA QUE A ANIMAÇÃO SEJA CONCLUIDA QUE NO CASO É UMA ESPERA DE  1800 MS
    setTimeout(() => {

        if (numberPlayer == 1) {
            pointsPlayer1.innerHTML = `player1 <br> ${p1Points += 1}`;
            msg(), msgWins.textContent = `Player1: ${p1Points}`, msgRemove();
            marked = player2();
            disableAllbuttons();

        }
        else {
            pointsPlayer2.innerHTML = `player2 <br> ${p2Points += 1}`;
            msg(), msgWins.textContent = `Player2: ${p2Points}`, msgRemove();
            marked = player1();
            disableAllbuttons();

        }

        wins(p1Points, p2Points);
    }, 1800);
}

//SE DETERMINADO JOGADOR TIVER 3 PONTOS ELE VENCE
function wins(p1, p2) {
    //ARRAYDRAW É IGUAL A VAZIO PARA NÃO HAVER EMPATES POR MEIO DE BUGS CASO O JOGADOR CLIQUE VARIAS VEZES NOS BOTÕES 
    if (p1 == 3) disableAllbuttons(), arryDraw = null, animationMsgWinsTotal(),selectedPlayer1Efects(),removeSelectEfectPlayer2(), msgWins.textContent = 'Player1 Wins! 🏆', setTimeout(() => location.reload(), 5000)
    if (p2 == 3) disableAllbuttons(), arryDraw = null, animationMsgWinsTotal(),selectedPlayer2Efects(),removeSelectEfectPlayer1(), msgWins.textContent = 'Player2 Wins! 🏆', setTimeout(() => location.reload(), 5000)
}



//ANIMAÇÃO QUANDO O JOGADOR MARCA PONTOS
function transitionAnimation() {
    return btns.forEach((bt) => { bt.classList.add('rodar') });
}

function transitionAnimationRemove() {
    return btns.forEach((bt) => { bt.classList.remove('rodar') });
}
//ANIMAÇÃO QUANDO O JOGADOR GANHOU 3 ROUNDS
function animationMsgWinsTotal() {
    return boxMsg.classList.add('opaci');
}

function msg() {
    return boxMsg.classList.add('pointsMsg');

}

function msgRemove() {
    disableAllbuttons();
    return setTimeout(() => { boxMsg.classList.remove('pointsMsg') }, 1300);
}


// ESSAS FUNCTIONS SERVEM PARA MOSTRAR QUAL JOGADOR DEVE JOGAR 
function selectedPlayer1Efects(){
    return  pointsPlayer1.style.color= '#fff';
}
function selectedPlayer2Efects(){
    return  pointsPlayer2.style.color= '#fff';
}

function removeSelectEfectPlayer1(){
    return pointsPlayer1.style.color ="#1fd8f9";
}


function removeSelectEfectPlayer2(){
    return pointsPlayer2.style.color ="#1fd8f9";
}
