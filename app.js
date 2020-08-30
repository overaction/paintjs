'use strict';
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colorBtn = document.querySelectorAll('.controls__color');
console.log(colorBtn);
ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

canvas.width = 700;
canvas.height = 700;

let painting = false;

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

function onColorChange(e) {
    ctx.strokeStyle = e.target.dataset.filter;
}

if(canvas) {
    canvas.addEventListener('mousemove',onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
}

colorBtn.forEach(color => color.addEventListener('click', onColorChange));