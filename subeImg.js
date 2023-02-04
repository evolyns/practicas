let imagenes = []


let mostramosImg = document.querySelector(".mostramosImg")
let valorImg = document.querySelector(".valorImg")
function subeImagen (){
    url = valorImg.value
    imagenes.push(url)
    mostramosImg.innerHTML = ` <img src=${imagenes[0]} > `
}
