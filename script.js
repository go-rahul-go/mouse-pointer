
const x=document.getElementById("x-position");
const y=document.getElementById("y-position");



window.addEventListener('mousemove',(event)=>{
        x.innerText=event.clientX;
        y.innerText=event.clientY;
});