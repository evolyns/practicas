const arrNuevosColores = [];

const arrColores = [
  {
    color: "rojo",
    sonido: "A",
  },
  {
    color: "azul",
    sonido: "B",
  },
  {
    color: "gris",
    sonido: "C",
  },
  {
    color: "verde",
    sonido: "D",
  },
];

const rojo = document.querySelector(".rojo");
const azul = document.querySelector(".azul");
const gris = document.querySelector(".gris");
const verde = document.querySelector(".verde");

// for(let i = 0 ; i < arrColores.length ; i++){
// console.log(arrColores.color)

// }

let colorRojo = false;
let colorAzul = false;
let colorGris = false;
let colorVerde = false;
let temporizador;
// function ddsa (){
// setTimeout(probemoAsi,1000)
// // temporizador = setInterval(probemoAsi,3000)

// }

function dsa() {
  arrNuevosColores.forEach((element) => {
    if (element === "rojo") {
      colorRojo = true;
      Brilla();
      setTimeout(rojoNoBrilla, 1000);
    }
    if (element === "azul") {
      colorAzul = true;
      Brilla();
      setTimeout(azulNoBrilla, 1000);
    }
  });
}


// *FUNCIONES BRILLAN *
function azulBrilla() {
  if (colorAzul) {
    azul.classList.replace("azul", "azulBrilla");
    colorAzul = false;
    console.log("azul");
  }
}
function rojoBrilla() {
  if (colorRojo) {
    rojo.classList.replace("rojo", "rojoBrilla");
    colorRojo = false;
    console.log("rojo");
  }
}
// FUNCIONES NO BRILLAN
function azulNoBrilla() {
  if (colorAzul === false) {
    azul.classList.replace("azulBrilla", "azul");
  }
}
function rojoNoBrilla() {
  if (colorRojo === false) {
    rojo.classList.replace("rojoBrilla", "rojo");
  }
}

function clickeamosEmpezar() {
  dale();
  console.log(arrNuevosColores)
}
function clickeamosMuestraElArrNuevosColores() {
    debugger
    probemoAsi()

}

function dale() {
  let c = 0;
  for (let i = 0; i < 1; i++) {
    c = Math.floor(Math.random() * 6) + 1;
  }
  if (c == 2) {
    arrNuevosColores.push("rojo");
  }
  if (c == 4) {
    arrNuevosColores.push("verde");
  }
  if (c == 5 || c == 6) {
    arrNuevosColores.push("azul");
  }
  if (c == 3 || c == 1) {
    arrNuevosColores.push("gris");
  }

  // for(let i = 0 ; i < arrNuevosColores.length ; i++){
  //     console.log(arrNuevosColores)
  // }
}


function comparoColorRojo () {
        console.log("rojo");
        colorRojo = true;
        rojoBrilla();
        setTimeout(rojoNoBrilla, 1000);
      }


function comparoColorAzul () {
    
        console.log("azul");
        colorAzul = true;
        azulBrilla();
        setTimeout(azulNoBrilla, 1000);
    
}




function probemoAsi() {
    for (let i = 0; i < arrNuevosColores.length; i++) {
        
        setTimeout(() => {
            if (arrNuevosColores[i] == "rojo") {
            comparoColorRojo()
            }
}, 1000);
setTimeout(() => {
    if (arrNuevosColores[i] == "azul") {
    comparoColorAzul()
    }
}, 1000);

//     setTimeout(() => {

//     if (arrNuevosColores[i] == "gris") {
//       setTimeout(console.log("gris"), 1000);
//     }
// }, 1000);

//     setTimeout(() => {

//     if (arrNuevosColores[i] == "verde") {
//       setTimeout(console.log("verde"), 1000);
//     }
// }, 1000);
        
  }
  // if (i = arrNuevosColores.length){

  //     clearInterval(temporizador)
  // }
}