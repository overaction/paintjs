'use strict';
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colorBtn = document.querySelectorAll('.controls__color');
const range = document.getElementById('jsRange');
const mode = document.getElementById('jsMode');
ctx.strokeStyle = "#2c2c2c";

ctx.fillStyle = "white";
ctx.fillRect(0,0,700,700);
console.log(canvas.style.backgroundColor);
canvas.width = 700;
canvas.height = 700;

let painting = false;
let type;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(e) {
    const dx = e.offsetX;
    const dy = e.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(dx,dy);
    } else {
        ctx.lineTo(dx,dy);
        ctx.stroke();
    }
}

function onMouseDown(e) {
    startPainting();
}

function onPaintChange(e) {
    ctx.strokeStyle = e.target.dataset.filter;
}

function onFillChange(e) {
    ctx.fillStyle = e.target.style.backgroundColor;
    ctx.fillRect(0,0,700,700);
}

function onRangeChange(e) {
    ctx.lineWidth = range.value;
}

function typeAction(e) {
    console.log();
    if(mode.innerText === 'FILL')
        onFillChange(e)
    else
        onPaintChange(e)
}

function onTypeChange(e) {
    const value = e.target.innerText;
    if(value === 'FILL') e.target.innerText = 'PAINT';
    else e.target.innerText = 'FILL';
}

function handleCM(e) {
    e.preventDefault();
}

if(canvas) {
    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('contextmenu', handleCM);
}

colorBtn.forEach(color => color.addEventListener('click', typeAction));

if(range)
    range.addEventListener('click', onRangeChange);

if(mode) {
    mode.addEventListener('click', onTypeChange);
}