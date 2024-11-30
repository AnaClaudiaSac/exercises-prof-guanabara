// 10. **Jogo de adivinhação:**
// Crie um jogo em que o computador escolha um número aleatório entre 1 e 100, e o jogador tem que adivinhar qual é esse número. O programa deve dar dicas se o número é maior ou menor, e contar quantas tentativas o jogador fez antes de acertar.

var readline = require('readline-sync')
//var n1 = Number(readline.question('Digite um numero:  '))

// Função para gerar um número aleatório entre 1 e 100
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1
}

// Número aleatório gerado pelo computador
const numeroAleatorio = gerarNumeroAleatorio()

// Contador de tentativas
let tentativas = 0

// Função para verificar a suposição do jogador
function verificarSuposicao() {
    const suposicao = parseInt(readline.question("Adivinhe o número (entre 1 e 100):"));
    tentativas++

    if (isNaN(suposicao)) {
        console.log("Por favor, insira um número válido.")
        verificarSuposicao()
        return;
    }

    if (suposicao == numeroAleatorio) {
        console.log(`Parabéns! Você adivinhou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
    } else if (suposicao < numeroAleatorio) {
        console.log("Tente um número maior.")
        verificarSuposicao()
    } else {
        console.log("Tente um número menor.")
        verificarSuposicao()
    }
}

verificarSuposicao()







