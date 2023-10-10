const mainContainer = document.querySelector('main')
const progressBar = document.querySelector('.progress-bar')
const thumb = document.querySelector('.thumb-img')
const headerColor = document.querySelector('header')
const btnResponsive = document.querySelector('.responsive-btn')
const menuResponsive = document.querySelector('.responsive-menu')
const btnToBottom = document.querySelector('button')

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

window.onscroll = () => {
    if (window.pageYOffset > 100) {
        headerColor.style.background = 'rgba(0, 0, 0, 0.34)'
        headerColor.style.zIndex= '10'
        headerColor.style.boxShadow = '1px 2px 4px 0px #000'
    } else {
        headerColor.style.background = 'none'
        headerColor.style.zIndex = 'none'
        headerColor.style.boxShadow = 'none'
    }
  }


function openMenu(){
    if(menuResponsive.style.display == 'none'){
        menuResponsive.style.display = 'block' 
    }else{
        menuResponsive.style.display = 'none' 
    }
}


function toEnd(){
    window.scrollTo(0, 99999)
}


btnToBottom.addEventListener('click', toEnd)
btnResponsive.addEventListener('click', openMenu)
setInterval(percentBar,  timeInterval)
setInterval(changeBackground, timeInterval);

