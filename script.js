// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const mobile = document.getElementById('mobile');


if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add("active");
        mobile.classList.add('hide');
    })
}

if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove("active");
        mobile.classList.remove('hide');
    })
}