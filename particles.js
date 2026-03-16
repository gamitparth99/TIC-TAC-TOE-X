const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

function winParticles(){

for(let i=0;i<50;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
vx:(Math.random()-0.5)*4,
vy:(Math.random()-0.5)*4,
life:80
});

}

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{
p.x+=p.vx;
p.y+=p.vy;
p.life--;

ctx.fillStyle="yellow";
ctx.fillRect(p.x,p.y,3,3);
});

particles=particles.filter(p=>p.life>0);

requestAnimationFrame(animate);
}

animate();