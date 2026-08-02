// ===========================
// Mobile Menu
// ===========================

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// ===========================
// Typing Effect
// ===========================

const text = [
    "AI Web Development Intern",
    "Java Full Stack Developer",
    "Data Science Enthusiast",
    "Machine Learning Engineer",
    "Python Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {

        count++;
        index = 0;

        setTimeout(type, 1500);

    } else {

        setTimeout(type, 100);

    }

})();


// ===========================
// Back To Top
// ===========================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.onclick = function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};

// ===========================
// Active Navbar
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===========================
// Header Background
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#0f172a";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(255,255,255,.05)";
        header.style.boxShadow = "none";

    }

});

// ===========================
// Fade Up Animation
// ===========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".fade-up").forEach(el => {

    observer.observe(el);

});

// ===========================
// Counter Animation
// ===========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const c = +counter.innerText;

        const increment = target / 100;

        if (c < target) {

            counter.innerText = `${Math.ceil(c + increment)}`;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    updateCounter();

});
function openCertificate(file,title){

document.getElementById("certificateModal").style.display="flex";

document.getElementById("certificateFrame").src=file;

document.getElementById("certificateTitle").innerHTML=title;

document.getElementById("downloadBtn").href=file;

document.getElementById("viewBtn").href=file;

}

function closeCertificate(){

document.getElementById("certificateModal").style.display="none";

document.getElementById("certificateFrame").src="";

}

window.onclick=function(e){

const modal=document.getElementById("certificateModal");

if(e.target==modal){

closeCertificate();

}

}
function openResume(){

document.getElementById("resumeModal").style.display="flex";

}

function closeResume(){

document.getElementById("resumeModal").style.display="none";

}

window.addEventListener("click",function(e){

const modal=document.getElementById("resumeModal");

if(e.target===modal){

closeResume();

}

});
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

});
const search=document.getElementById("searchProject");

search.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

const title=card.querySelector("h3").textContent.toLowerCase();

if(title.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});
/* =========================
   EmailJS Contact Form
========================= */

emailjs.init("RwAk0Syx67H510hKa");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(

        "service_moz1oxx",

        "template_5qzcirs",

        this

    )

    .then(function () {

        alert("✅ Thank you! Your message has been sent successfully.");

        contactForm.reset();

    })

    .catch(function (error) {

        alert("❌ Failed to send message. Please try again.");

        console.error(error);

    });

});