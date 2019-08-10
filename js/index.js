// Your code goes here
const images = document.querySelectorAll('img')
const h2 = document.querySelectorAll('h2')
const p = document.querySelectorAll('p')
const btn = document.querySelectorAll('.btn')
const section = document.querySelector('section')

let pictureAngle = 0
const clockWise = (event) => {    
    pictureAngle += 90
    return event.target.style.transform = `rotate(${pictureAngle}deg)`
}

let textAngle = 0
const counterClockwise = (event) => {
    event.stopPropagation()
    textAngle -= 90
    console.log(event)
    return  event.target.style.transform = `rotate(${textAngle}deg)`
}

const enterShading = (event) => {
    return event.target.style.opacity = '0.5'
}

const leaveShading = (event) => {
    return event.target.style.opacity = ''
}

const displayNone = (event) => {
    event.target.style.display = 'none'
}

const reload = (event) => {
    return location.reload()
}

const changeColor = (event) => {
    if(event.keyCode === 13) {
        return h2.forEach(heading => heading.style.color = 'red')
    }
}

const drag = (event) => {
    return event.target.style.backgroundColor = 'black'
}

const dropButton = (event) => {
    event.target.style.backgroundColor = '#17A2B8 '
    return alert('You dropped your button!')
}

let marginleft = 0
let marginright = 0
images[0].style.marginLeft = `0rem`
images[0].style.marginReft = `0rem`
const moveFunBus = (event) => {
    if(event.keyCode === 100) {
        marginleft += 1
        marginright -= 1
        images[0].style.marginRight = `${marginright}rem`
        return images[0].style.marginLeft = `${marginleft}rem`
    }
    if(event.keyCode === 97) {
        marginleft -= 1
        marginright += 1
        images[0].style.marginLeft = `${marginleft}rem`
        return images[0].style.marginRight = `${marginright}rem`
    }
}

const changeBackground = (event) => {
    event.stopPropagation()
    return event.target.style.backgroundColor = 'green'
}

images[1].addEventListener('click', clockWise)
images[2].addEventListener('mouseenter', enterShading)
images[2].addEventListener('mouseleave', leaveShading)
images[3].addEventListener('dblclick', displayNone)
window.addEventListener('resize', reload)
window.addEventListener('keydown', changeColor)
window.addEventListener('keypress', moveFunBus)
p.forEach(tag => tag.addEventListener('mousedown', counterClockwise))
btn.forEach(button => {
    button.setAttribute('draggable', true)
    button.addEventListener('drag', drag)
    button.addEventListener('dragend', dropButton)
})
section.addEventListener('click', changeBackground)
