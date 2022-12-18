const m3nu = document.getElementById("menu")

function m3nuevento() {
    const menutela = document.getElementById("textos")
    

    menutela.style.cssText = "display:flex;" +"background-color:#38E54D;"
    
    


}

m3nu.addEventListener("click", m3nuevento)


const ia = document.getElementById("botaosim")


function iaevent(){
    
    
    
    continuar1.style.cssText = "display:none"
    botaosim.style.cssText = "display:none"
    textsobremim.innerText = "C:\\Users\\Juan> Em breve... "
    textsobremim.style.cssText = "text-align: start"



    
}




ia.addEventListener("click", iaevent)
