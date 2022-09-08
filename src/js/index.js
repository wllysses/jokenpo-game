let respPlayer = document.getElementById('inputPlayer')
let attempts = document.getElementById('tentativas')
let res = document.querySelector('.res')
let quantAttempts = 0

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

    if(responsePlayer == 0 && responsePc == 0) {
        res.innerHTML = `<p>Você escolheu pedra(${responsePlayer}) e o algoritmo escolheu pedra(${responsePc}). PARABÉNS, VOCÊ VENCEU!</p>`
    } else if(responsePlayer == 1 && responsePc == 1) {
        res.innerHTML = `<p>Você escolheu papel(${responsePlayer}) e o algoritmo escolheu papel(${responsePc}). PARABÉNS, VOCÊ VENCEU!</p>`
    } else if(responsePlayer == 2 && responsePc == 2) {
        res.innerHTML = `<p>Você escolheu tesoura(${responsePlayer}) e o algoritmo escolheu tesoura(${responsePc}). PARABÉNS, VOCÊ VENCEU!</p>`
    } else {
        res.innerHTML = `<p>Que pena. Você errou!</p>`
        quantAttempts++
        attempts.innerHTML = quantAttempts
    }
}

document.getElementById('btn-play').addEventListener('click', () => {
    compareAnswer(responsePc(0, 2), getPlayerResp(respPlayer.value))
})