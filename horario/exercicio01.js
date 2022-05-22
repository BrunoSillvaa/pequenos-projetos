// Variaveis
var msg = document.querySelector("p#msg")
var img = document.querySelector("img#img")
var data = new Date()
var hora = data.getHours()
// Funcao
function carregar() {
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora <= 12){
        img.src = "manha.jpg"
    }else if (hora >= 12 && hora <= 18){
        img.src = "tarde.jpg"
    }else{
        img.src = "noite.jpg"
    }
}
