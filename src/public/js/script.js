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
    let dogdb = localStorage.getItem(PERROS_DB)
    if (dogdb) {
        dogdb = JSON.parse(dogdb)
        let count = 0
        while (count < dogdb.perros.length) {
            console.log(dogdb.perros[count])
            count++
        }
    }

}
