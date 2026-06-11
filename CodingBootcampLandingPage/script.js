const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add('show');
}
});
});

hiddenElements.forEach((el) => {
observer.observe(el);
});

const text = "Become a Software Developer in 12 Weeks";

let index = 0;

function typeText() {
if (index < text.length) {
document.getElementById("typing").innerHTML += text.charAt(index);
index++;
setTimeout(typeText, 60);
}
} 

typeText();

const glow = document.querySelector('.glow');

if (glow) {
document.addEventListener('mousemove', (e) => {
glow.style.left = (e.clientX - 150) + 'px';
glow.style.top = (e.clientY - 150) + 'px';
});
}
