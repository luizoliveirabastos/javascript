function carregar() {
var msg = window.document.getElementById('msg')
var imagem = window.document.getElementById('imagem') 
var data = new Date()   
var hora = data.getHours()
msg.innerHTML = `agora são ${hora} horas.` 
if (hora >= 0 && hora < 12) {
    //BOM DIA
    imagem.src = 'dia.png'
    document.body.style.background = "#000"
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE
    imagem.src = 'tarde.png'
    document.body.style.background = "#CCB835"
} else {
    //BOA NOITE
    imagem.src = 'noite.png'
    document.body.style.background = "#00107A"
}
}
