let listaDeNumerosSorteados = []
let numeroLimite = 50
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1
console.log(numeroSecreto)

function exibirTextoNaTela(tag, texto) {
     let campo = document.querySelector(tag)
     campo.innerHTML = texto
     responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
          {rate:1.2}
     )
}

function exibirMensagemInicial() {

     exibirTextoNaTela('h1', 'Jogo do número secreto')
     exibirTextoNaTela('p', 'Escolha um número entre 1 e 100')
}

function limparCampo() {
     document.querySelector('input').value = '';
}

exibirMensagemInicial()

function verificarChute() {
     let chute = document.querySelector('input').value

     if (chute == numeroSecreto) {
          exibirTextoNaTela('h1', 'ACERTOU!')
          let palavraTentativa = tentativas > 1? 'tentativas': 'tentativa'
          let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
          exibirTextoNaTela('p', mensagemTentativas)
          document.getElementById('reiniciar').removeAttribute('disabled')
     } else{

          limparCampo()

          if (chute > numeroSecreto) {
               exibirTextoNaTela('p', 'O numero secreto é menor')
          } else {
               exibirTextoNaTela('p', 'O número secreto é maior')
          }
          tentativas++
     }
     
}

function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

     if (quantidadeDeElementosNaLista == numeroLimite) {
          listaDeNumerosSorteados = []
     }

     if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
          return gerarNumeroAleatorio()
     } else {
          listaDeNumerosSorteados.push(numeroEscolhido)
          console.log(listaDeNumerosSorteados)
          return numeroEscolhido
         
     }
}

function reiniciarJogo() {
     numeroSecreto = gerarNumeroAleatorio()
     limparCampo()
     tentativas = 1
     exibirMensagemInicial()
     document.getElementById('reiniciar').setAttribute('disabled', true)
}