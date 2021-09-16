var totalTentativas = 3
var numeroSecreto

function resetNumero() {
    
    var min = Math.ceil(1)
    var max = Math.floor(10)
    numeroSecreto = Math.floor(Math.random() * (max - min)) + min
    totalTentativas = 3
    console.log(numeroSecreto)
}

function resetJogo() {

    var jogadas
    var n = 0

    while (jogadas <= 10) {

        document.getElementById("btn" + n).setAttribute("class", "button")
        document.getElementById("btn" + n).disable = false
        resetNumero ()
        TentativasJogadas(totalTentativas)
        n++
    }
}

function TentativasJogadas(NovasJogadas) {

    if(NovasJogadas > 0) {
        document.getElementById("tentativas").innerHTML = "Você tem mais" + NovasJogadas + "tentativa(s)"
    } 
    else {
        document.getElementById("tentativas").innerHTML = "Você não tem mais tentativas!!" 
    }
}

function btclick(numero) {

    if(totalTentativas > 0) {
        if(numero == numeroSecreto) {
            Acertou(numero)
        }
        else {
            Errou(numero)
            totalTentativas = totalTentativas - 1
            TentativasJogadas(totalTentativas)
            Teste(numero, numeroSecreto)
        }
    }
}

function Acertou(numero) {

    document.getElementById("btn" + numero).setAttribute("class", "buttonAcertou")
    document.getElementById("btn" + numero).disable = true
    document.getElementById("tentativas").innerHTML = "Parabéns!! Voce acertou o número secreto!!"
    totalTentativas = 0
}

function Errou(numero) {
    document.getElementById("btn" + numero).setAttribute("class", "buttonErrado")
    document.getElementById("btn" + numero).disabled = true
 }

 function Teste(numero, Nrandom) {

    if(Nrandom > numero && totalTentativas != 0) {
        document.getElementById("tentativas").innerHTML = document.getElementById("tentativas").innerHTML + 
        "O número é maior que este!" 
    }
    if(Nrandom < numero && totalTentativas != 0) {
        document.getElementById("tentativas").innerHTML = document.getElementById("tentativas").innerHTML + 
        "O número é menor que este!" 
    }
    if(totalTentativas == 0) {
        document.getElementById("tentativas").innerHTML = document.getElementById("tentativas").innerHTML + 
        "O número secreto era" + Nrandom  
    }
 }

 resetNumero()