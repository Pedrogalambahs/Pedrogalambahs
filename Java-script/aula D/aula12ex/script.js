function carregar(){
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data =new Date()
// var hora = data.getHours()
var hora= 18
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    // bom dia
    img.src = 'imagens/manhã.png'
    document.body.style.background = '#532c11'
} else if (hora >= 12 && hora <18){
    // Boa tarde
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#f4c783'
} else{
    // Boa noite
    img.src = 'imagens/noite.png'
    document.body.style.background = '#050505'
}
}
