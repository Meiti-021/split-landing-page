let $ = document;

const playStation = $.querySelector('.play-station');
const xBox = $.querySelector('.x-box');

playStation.addEventListener('mouseenter', ()=>{
    playStation.style.width = '80%';
    xBox.style.width = '20%';
})
xBox.addEventListener('mouseenter', ()=>{
    xBox.style.width = '80%';
    playStation.style.width = '20%';
})