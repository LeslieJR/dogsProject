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
              <button class="btn btn-success" data-bs-toggle="modal"
              data-bs-target="#editar">Editar</button>
              <button class="btn btn-danger">Eliminar</button>
            </div>
          </div>
        </div> `
        
        count++
        contenedor.innerHTML = contenedor.innerHTML + template
        }
    }

}
