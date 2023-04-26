
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
btns.forEach((bt) => bt.addEventListener('click', () => { changeBtnsMarked(bt) }));

let marked = 'X';

function changeBtnsMarked(bt) {
    // ADICIONA NA ARRAY CADA "QUADRADO" QUE FOI CLICADO
    draw(arryDraw.push(bt.textContent));

    bt.textContent = marked;
    //ALTERA A MARCAÇÃO 
    if (bt.innerText == 'X') marked = 'O';
    if (bt.innerText == 'O') marked = 'X';

    //ESSA LINHA DE CODIGO FOI INPLAMENTADA PARA RESOLVER UM PROBLEMA OCRRIDO NO CSS, ESSA LINHA FAZ QUE O SINAL "." FIQUE ECSCONDIDO PARA MELHORAR A INTERFACE
    if (bt.textContent != '.') bt.style.color = "#252525";
}

// SE TODOS OS "QUADRADOS" FOREM PREENCHIDOS  MAS A FUNÇÃO CHECKERMARKED NÃO FOI ATIVADA SERA EMPATE E A FUNÇÃO DRAW SERA ATIVADA  
function draw() {
    if (arryDraw.length >= 9) msg(), msgWins.textContent = 'Draw!',msgRemove(), disableAllbuttons(), arryDraw = [];
}

let arryDraw = [];

//ESSSE OBJETO SERVE PARA ADICIONAR AS PROPRIENDADES E VISUALIZÁ-LAS
let ObjectPosition = {};

//SIMPLES FUNÇÃO PARA DESABILITAR OS BOTÕES CASO  ALGUM JOGADOR FAÇA UMA CONBINAÇÃO CERTA
function disableAllbuttons() {
    btns.forEach((bt) => {

        bt.disabled = true;
        ObjectPosition = {};
        arryDraw = [];

        setTimeout(() => {
            removeAnimationWins();
            bt.innerHTML = '.';
            if (bt.innerHTML == '.') bt.style.color = 'transparent'
            bt.disabled = false;
        }, 1800);


    });
}

// CRIA PRORIEDADES PARA INDENTIFICAR OS QUADRADOS QUE ESTAO MARCADOS COM (X, O) OU PLAYER1 E PLAYER2
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

    ) countPoints(1), disableAllbuttons();
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
    animationWins();
    //USAMOS O SETTIMEOUT PARA AGENDAR O TEMPO DE ESAPERA PARA QUE A ANIMAÇÃO SEJA CONCLUIDA QUE NO CASO É UMA ESPERA DE  1800 MS
    setTimeout(() => {
        if (numberPlayer == 1) {
            pointsPlayer1.innerHTML = `player1 <br> ${p1Points += 1}`;
            msgWins.textContent = `Player1: ${p1Points}`;
            disableAllbuttons()
            msg();
            msgRemove()
        }
        else {
            pointsPlayer2.innerHTML = `player2 <br> ${p2Points += 1}`;
            msgWins.textContent = `Player2: ${p2Points}`;
            disableAllbuttons()
            msg();
            msgRemove();
        }

        wins(p1Points, p2Points);
    }, 1800);
}

//SE DETERMINADO JOGADOR TIVER 3 PONTOS ELE VENCE
function wins(p1, p2) {
    //ARRAYDRAW É IGUAL A VAZIO PARA NÃO HAVER EMPATES POR MEIO DE BUGS CASO O JOGADOR CLIQUE VARIAS VEZES NOS BOTÕES 
    if (p1 == 3) disableAllbuttons(), arryDraw = null, animationMsgWinsTotal(), msgWins.textContent = 'Player1 Wins! 🏆', setTimeout(() => location.reload(), 5000)
    if (p2 == 3) disableAllbuttons(), arryDraw = null, animationMsgWinsTotal(), msgWins.textContent = 'Player2 Wins! 🏆', setTimeout(() => location.reload(), 5000)
}



//ANIMAÇÃO QUANDO O JOGADOR MARCA PONTOS
function animationWins() {
    return btns.forEach((bt) => { bt.classList.add('rodar') });
}

function removeAnimationWins() {
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
    return setTimeout(() => { boxMsg.classList.remove('pointsMsg') }, 1300);
}



