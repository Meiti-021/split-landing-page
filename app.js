let $ = document;

const playStation = $.querySelector('.play-station');
const xBox = $.querySelector('.x-box');
const sides = $.querySelectorAll('.sides')

playStation.addEventListener('mouseenter', ()=>{
    sides.forEach((elem)=>{
        elem.classList.remove('active');
        elem.classList.remove('de-active')
    })
    playStation.classList.add('active');
    xBox.classList.add('de-active');
})
xBox.addEventListener('mouseenter', ()=>{
    sides.forEach((elem)=>{
        elem.classList.remove('active');
        elem.classList.remove('de-active')
    })
    xBox.classList.add('active');
    playStation.classList.add('de-active');
})