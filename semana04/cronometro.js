const horaElemento = document.getElementById("hora")
const minutoElemento = document.getElementById("minuto")
const segundoElement = document.getElementById("segundo")

let hora = 0
let minuto = 0
let segundo = 0

setInterval(()=>{
    segundo += 1
    if(segundo <= 9){
        segundoElemento.innerText = "0" + segundo
    }else{
        segundoElemento.innerText = segundo
    }
    if(segundo > 59){
        minuto += 1
        segundo = 0

        if(minuto <= 9){
            minutoElemento.innertext = minuto
        }
    }
    
})