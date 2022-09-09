let respPlayer = document.getElementById('inputPlayer')
let attempts = document.getElementById('tentativas')
let playerResult = document.getElementById('playerResult')
let algorithmResult = document.getElementById('algorithmResult')
let res = document.querySelector('.res')
let quantAttempts = 0
let playerMove = ''
let algorithmMove = ''
let playerMoveImage = ''
let algorithmMoveImage = ''

function responsePc(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPlayerResp(resp) {
    return resp
}

function compareAnswer(responsePc, responsePlayer) {
    if(responsePlayer == '') {
        alert('Preencha o campo obrigatório!')
        return
    }

    if(responsePlayer != 0 && responsePlayer != 1 && responsePlayer != 2) {
        alert('Preencha o campo com uma das opções de jogada válidas!')
        return
    }

    
    if(responsePlayer == 0) {
        playerMove = 'pedra'
        playerMoveImage = 'src/images/pedra.png'
    } else if(responsePlayer == 1) {
        playerMove = 'papel'
        playerMoveImage = 'src/images/papel.png'
    } else if(responsePlayer == 2) {
        playerMove = 'tesoura'
        playerMoveImage = 'src/images/tesoura.png'
    }
    if(responsePc == 0) {
        algorithmMove = 'pedra'
        algorithmMoveImage = 'src/images/pedra.png'
    } else if(responsePc == 1) {
        algorithmMove = 'papel'
        algorithmMoveImage = 'src/images/papel.png'
    } else if(responsePc == 2) {
        algorithmMove = 'tesoura'
        algorithmMoveImage = 'src/images/tesoura.png'
    }

    if(responsePlayer == responsePc) {
        res.innerHTML =     `
                                
                                <div class="placar">
                                    <div class="player">
                                        <img src="${playerMoveImage}" alt="Jogador" id="playerResult">
                                        <h3>${playerMove}</h3>
                                    </div>
                                    <h2>X</h2>
                                    <div class="machine">
                                        <img src="${algorithmMoveImage}" alt="Algoritimo" id="algorithmResult">
                                        <h3>${algorithmMove}</h3>
                                    </div>
                                </div>
                                <h3>Parabéns. VOCÊ VENCEU!</h3>
                            `
    } else {
        res.innerHTML =     `
                                
                                <div class="placar">
                                    <div class="player">
                                        <img src="${playerMoveImage}" alt="Jogador" id="playerResult">
                                        <h3>${playerMove}</h3>
                                    </div>
                                    <h2>X</h2>
                                    <div class="machine">
                                        <img src="${algorithmMoveImage}" alt="Algoritimo" id="algorithmResult">
                                        <h3>${algorithmMove}</h3>
                                    </div>
                                </div>
                                <h3>Que pena. VOCÊ FOI DERROTADO!</h3>
                            `
        quantAttempts++
        attempts.innerHTML = quantAttempts
    }
}

document.getElementById('btn-play').addEventListener('click', () => {
    compareAnswer(responsePc(0, 2), getPlayerResp(respPlayer.value))
})