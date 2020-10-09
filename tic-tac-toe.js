
"use strict";
window.onload= function addClassName()
{
let box = document.querySelectorAll('#board div');
for (let i=0; i<box.length; i++){
box[i].classList.add("square");
console.log;
}
}