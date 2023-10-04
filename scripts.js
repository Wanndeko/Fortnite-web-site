const mainContainer = document.querySelector('main')
const progressBar = document.querySelector('.progress-bar')
const thumb = document.querySelector('.thumb-img')

const bgImages = ['bg-galactus', 'cyber-bg', 'gold-bg', 'jungle-bg', 'red-bg']
const currentWidth = ['20%', '40%', '60%', '80%', '100%']
const thumbImages = ['galct', 'cyber', 'gold', 'jung', 'red']
let indice = 0
let targetWidth = 0
const timeInterval = 3000


function changeBackground() {
    mainContainer.style.backgroundImage = `url(./assets/bg-img/${bgImages[indice]}.png)`
    thumb.src = `./assets/videos-thumbs/${thumbImages[indice]}-thumb.png`
    indice = (indice + 1) % bgImages.length

}

function percentBar() {
    progressBar.style.width = currentWidth[targetWidth]
    targetWidth = (targetWidth + 1) % currentWidth.length
}


setInterval(percentBar,  timeInterval)
setInterval(changeBackground, timeInterval);








