// AOS Animation Initialization

AOS.init({
    duration: 1200,
    once: false,
    offset: 120
});

// Typing Animation

var typed = new Typed(".typing", {
    strings: [
        "Software Developer",
        "Java Developer",
        "Web Development Enthusiast",
        "AI Explorer",
        "Problem Solver",
        "MIT ADT University"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// Smooth Reveal on Scroll

const revealElements = document.querySelectorAll(
'.glass-card,.skill-card,.project-card,.certificate-card'
);

window.addEventListener('scroll', () => {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const revealTop =
        element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            element.classList.add('active');
        }

    });

});

// Mouse Glow Effect

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "250px";
glow.style.height = "250px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
"radial-gradient(circle, rgba(217,70,239,.25), transparent 70%)";

glow.style.zIndex = "9999";
glow.style.transform = "translate(-50%,-50%)";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

// Random Floating Particles

for(let i=0;i<25;i++){

    const particle =
    document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
    Math.random()*100 + "vw";

    particle.style.animationDuration =
    5 + Math.random()*10 + "s";

    particle.style.animationDelay =
    Math.random()*5 + "s";

    document.body.appendChild(particle);

}
for(let i=0;i<15;i++){

let code=document.createElement("div");

code.innerHTML="0101";

code.classList.add("matrix");

code.style.left=Math.random()*100+"vw";

code.style.animationDuration=
5+Math.random()*5+"s";

document.body.appendChild(code);

}
window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

document.getElementById("loader").style.visibility="hidden";

},3000);

});
const heroContent =
document.getElementById("heroContent");

const heroImage =
document.getElementById("heroImage");

document.addEventListener(
"mousemove",
(e)=>{

let x =
(window.innerWidth/2 - e.pageX)/25;

let y =
(window.innerHeight/2 - e.pageY)/25;

heroContent.style.transform=
`translate(${x}px,${y}px)`;

heroImage.style.transform=
`translate(${-x}px,${-y}px)`;

});