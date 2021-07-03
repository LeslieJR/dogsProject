const PERROS_DB = "db_perros";

// function getdatadb(){
//     let existdb = localStorage.getItem(PERROS_DB)
//     if (existdb) { console.log("SI existe la BD")
//     existdb = JSON.parse(existdb)
//     }
//     else {
//         console.log("NO existe la BD")
//         existdb = []
//     }
// }

function crear_ficha() {
  //  getdatadb()
  const nombreperro = document.getElementById("nombre");
  const edadperro = document.getElementById("edad");
  const razaperro = document.getElementById("raza");
  let db = localStorage.getItem(PERROS_DB);
  if (db === null) {
    db = {
      counter: 1,
      perros: [],
    };
  } else {
    db = JSON.parse(db)
  }
  db.perros.push({
     id: db.counter,
     nombre: nombreperro.value,
     edad: edadperro.value,
     raza: razaperro.value
  })
  db.counter = db.counter +1
  localStorage.setItem(PERROS_DB, JSON.stringify(db))

  alert("La ficha del perro se ha creado correctamente")
  pintar()
  nombreperro.value=""
  edadperro.value=""
  


}

function validar_ficha() {
  const nombre = document.getElementById("nombre");
  const edad = document.getElementById("edad");
  const raza = document.getElementById("raza");
  const btn = document.getElementById("btn-save");

  if (nombre.value && edad.value && raza.value) {
    btn.removeAttribute("disabled");
  } else {
    btn.setAttribute("disabled", true);
  }
  console.log("holaa");
}

function guarda_cambios() {
  const nombre = document.getElementById("nombre-editar");
  const edad = document.getElementById("edad-editar");
  const raza = document.getElementById("raza-editar");
  const btn = document.getElementById("btn-editar");

  if (nombre.value && edad.value && raza.value) {
    btn.removeAttribute("disabled");
  } else {
    btn.setAttribute("disabled", true);
  }
}

function pintar() {
    const contenedor = document.getElementById("contenedor")
    let dogdb = localStorage.getItem(PERROS_DB)
    if (dogdb) {
        dogdb = JSON.parse(dogdb)
        let count = 0
        contenedor.innerHTML=""
        while (count < dogdb.perros.length) {
            console.log(dogdb.perros[count])
            

            const template = `
            <div class="col-6">
          <div class="card" style="width: 18rem">
            <img
              src="https://images.dog.ceo/breeds/poodle-standard/n02113799_2248.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Nombre: ${dogdb.perros[count].nombre}</h5>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Edad: ${dogdb.perros[count].edad}</li>
                <li class="list-group-item">Raza: ${dogdb.perros[count].raza}</li>
              </ul>
              <button onclick="editar(${count})" class="btn btn-success" data-bs-toggle="modal"
              data-bs-target="#editar">Editar</button>
              <button onclick="eliminarFicha(${count})" class="btn btn-danger">Eliminar</button>
            </div>
          </div>
        </div> `
        
        count++
        contenedor.innerHTML = contenedor.innerHTML + template
        }
    }

}

function eliminarFicha(count) {
  let dogdb = localStorage.getItem(PERROS_DB)

if (dogdb) {
  dogdb = JSON.parse(dogdb)
  dogdb.perros.splice(count,1)
  localStorage.setItem(PERROS_DB,JSON.stringify(dogdb))
  pintar()
}else {
    alert("No existe en la base de datos")
  }
}

function editar(count){
  let dogdb = localStorage.getItem(PERROS_DB)
  if(dogdb){
    
    dogdb = JSON.parse(dogdb)
    const perro = dogdb.perros[count]
    console.log(perro)
    const nombreEdit = document.getElementById("nombre-editar")
    const razaEdit = document.getElementById("raza-editar")
    const edadEdit = document.getElementById("edad-editar")
    const idPerrito = document.getElementById("idPerrito")
    idPerrito.value = count
    nombreEdit.value = perro.nombre
    razaEdit.value = perro.raza
    edadEdit.value = perro.edad
    guarda_cambios()
  }
}

function editarPerro(){
  const nombreEdit = document.getElementById("nombre-editar")
  const razaEdit = document.getElementById("raza-editar")
  const edadEdit = document.getElementById("edad-editar")
  let dogdb = localStorage.getItem(PERROS_DB)
  if(dogdb){
    
    dogdb = JSON.parse(dogdb)
    const idPerrito = document.getElementById("idPerrito")
    const count = +idPerrito.value
    const perro = dogdb.perros[count]

    perro.nombre = nombreEdit.value
    perro.edad = edadEdit.value
    perro.raza = razaEdit.value

    localStorage.setItem(PERROS_DB, JSON.stringify(dogdb))
    pintar()
  }
  

}