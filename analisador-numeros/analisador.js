// Variaveis
var numInputTxt = document.querySelector("input#numInput")
var numList = document.querySelector("select#numList")
var numText = document.querySelector("div#numText")
var numsArray = [100, 92, 90, 70]

// Função de verificar se o número já está no array
function inList(num, list) {
    if (list.indexOf(num) != -1) {
        return true
    } else {
        return false
    }
}

// Função de verificar o maior número 
function numsHigh(list) {
    big = 0
    for (var num in list) {
        if (list[num] > big) {
            big = list[num]
        } 
    } return big
}

// Função de somar os números
function sumList(list) {
    sumNums = 0
    cont = 0
    while (cont < list.length) {
        sumNums += list[cont]
        cont ++
    } return sumNums
}

// Função de calcular a média
function calMedia(list) {
    numsMedia = sumList(numsArray) / list.length
    return numsMedia
}

// Função de adicionar os elementos
function addNums() {
    var numInput = Number(numInputTxt.value)

    // Verifica se o input está vazio, incorreto ou repetido
    if (numInputTxt.value.length == 0 || numInput < 0 || numInput > 100) {
        window.alert("Valor Invalido")
    } else if (inList(numInput, numsArray)) {
        window.alert("Número ja encontrado na lista")
    } else {
        // Adiciona o valor no array
        numsArray.push(numInput)
        // Cria o elemento e adiciona ele na lista
        item = document.createElement("option")
        item.innerText = `${numInput}`
        numList.appendChild(item)
    }
    // Limpa o input e as estatisticas
    numText.innerHTML = ""
    numInputTxt.value = ""
    numInputTxt.focus()
}

// Função de ver as estatisticas
function viewNums() {
    if (numsArray.length == 0) {
        window.alert("Nenhum número adicionado ainda")
    } else {
    // Limpa as estatisticas
    numText.innerHTML = ""

    numText.innerHTML += `<p>Foram adicionados ${numsArray.length} números a lista</p>`
    numText.innerHTML += `<p>O maior número informado foi ${numsHigh(numsArray)}</p>`
    numText.innerHTML += `<p>A soma de todos os números foi de ${sumList(numsArray)}</p>`
    numText.innerHTML += `<p>A media dos valores foi de ${calMedia(numsArray)}</p>`
    }
}