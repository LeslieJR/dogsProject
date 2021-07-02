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