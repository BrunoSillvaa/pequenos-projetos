// Variaveis
var tabTxt = document.querySelector("input#tabTxt")
var result = document.querySelector("select#result")

// Função
function viewTable(){
    // Zera a tabuada
    result.innerHTML = ""

    // Verifica se o input está vazio
    if (tabTxt.value.length == 0) {
        window.alert("Por favor digite um número")
    } else {
        let tabNum = tabTxt.value
        // Altera o tamanho da box do select
        result.setAttribute("size", 10);

        // Calcula e insere os valores na tabuada
        for (cont=1; cont <= 10; cont++) {
            let item = document.createElement("option")

            item.text = `${cont} X ${tabNum} = ${cont*tabNum}`
            result.appendChild(item)
        }
    }
}