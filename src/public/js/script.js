function guarda_ficha () {
    const nombre = document.getElementById("nombre")
    const edad = document.getElementById("edad")
    const raza = document.getElementById("raza")
    const btn =document.getElementById("btn-save")

    if(nombre.value && edad.value && raza.value){
        btn.removeAttribute("disabled")
    }else{
        btn.setAttribute("disabled", true)
    }
    console.log("holaa")
}

function guarda_cambios() {
    const nombre = document.getElementById("nombre-editar")
    const edad = document.getElementById("edad-editar")
    const raza = document.getElementById("raza-editar")
    const btn =document.getElementById("btn-editar")

    if(nombre.value && edad.value && raza.value){
        btn.removeAttribute("disabled")
    }else{
        btn.setAttribute("disabled", true)
    }
    
}