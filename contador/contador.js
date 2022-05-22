// Variaveis
var startTxt = document.querySelector("input#start")
var endTxt = document.querySelector("input#end")
var passTxt = document.querySelector("input#pass")
var tabResult = document.querySelector("div#result")

// Funcao
function tabCounter(){
    // Tranforma os valores de strings para números
    let startNum = Number(startTxt.value)
    let endNum = Number(endTxt.value)
    let passNum = Number(passTxt.value)

    // Verifica algum campo vazio
    if (startNum == 0 || endNum.length == 0 || passNum.length == 0) {
        result.innerHTML = "Dados incorretos. Por favor tente novamente"
    } else {

        // Verifica e altera o passe
        if (passNum <= 0) {
            window.alert("Passo invalido. Alterado para 1")
            passNum = 1
        }

        // Zera o contador
        tabResult.innerHTML = ""
        // Faz a contagem e adiciona no documento
        if (startNum < endNum) {
            for (cont=startNum; cont<=endNum; cont+=passNum){
                tabResult.innerHTML += `<p>${cont}</p>`
            }
        } else if (startNum > endNum) {
            for (cont=startNum; cont>=endNum; cont-=passNum){
                tabResult.innerHTML += `<p>${cont}</p>`
            }
        }
    }
}
