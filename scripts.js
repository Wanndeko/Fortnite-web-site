const mainContainer = document.querySelector('main')
const progressBar = document.querySelector('.progress-bar')

const bgImages = ['bg-galactus', 'cyber-bg', 'gold-bg', 'jungle-bg', 'red-bg']
const currentWidth = ['20%','40%','60%','80%','100%']
const intervalTime = 2000
let indice = 0
let targetWidth = 0

function changeBackground() {
    mainContainer.style.backgroundImage = `url(./assets/bg-img/${bgImages[indice]}.png)`
    indice = (indice + 1) % bgImages.length
}

function percentBar() {
    progressBar.style.width = currentWidth[targetWidth]
    targetWidth = (targetWidth + 1) % currentWidth.length
}

setInterval(percentBar, intervalTime)
setInterval(changeBackground, intervalTime);







