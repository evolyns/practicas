
let sonidos = ["./Sonidos/eminemSound.mp3","./Sonidos/firstSound.wav"]

let soundPosition = 0
let sound = new Audio(sonidos[soundPosition])

console.log(sound)
nextBtn.addEventListener("click",()=>{
    sound.pause()
    if(soundPosition < sonidos.length){
        soundPosition++
    }
    if(soundPosition == sonidos.length){
        soundPosition = 0
    }
    sound = new Audio (sonidos[soundPosition]) 
    setTimeout(() => {
        sound.play() 
     }, 1000);
 })

    
playBtn.addEventListener("click", ()=>{
    sound.play(sonidos[soundPosition])
})


pauseBtn.addEventListener("click", ()=>{
    sound.pause()
})





