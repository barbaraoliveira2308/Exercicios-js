function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data= new Date()
    let hora = data.getHours()
    
    msg.innerHTML  = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    img.src = 'manha.jpeg'
    document.body.style.background = ''
} else if(hora >= 12 && hora <= 18){
   img.src = 'tarde.jpeg'
    document.body.style.background = '#eaa10d'
} else{
    img.src = 'noite.jpeg'
    document.body.style.background = '#030235'
}
}

