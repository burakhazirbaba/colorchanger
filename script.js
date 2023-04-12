const container = document.getElementById('container')
console.log(container)

const colorchanger = document.getElementById('colorchanger')
console.log(colorchanger)

function randomColor () {
        let maxVal = 0xFFFFFF;
        let randomNumber = Math. random() * maxVal;
        randomNumber = Math. floor(randomNumber);
        randomNumber = randomNumber. toString(16);
        let randColor = randomNumber. padStart(6, 0);
        return `#${randColor. toUpperCase()}`
}

colorchanger.onclick = (function(){
    container.style.backgroundColor = randomColor()
})

