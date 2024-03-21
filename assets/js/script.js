// toggle icon navbar
let menu=document.querySelector("#menu");
let navbar =document.querySelector(".nav");
 function a(){
    menu.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}







// scroll selection

let sections=document.querySelectorAll('section');
let nav=document.querySelectorAll("header .nav a");

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
nav.forEach(links=>{
    links.classList.remove('active');
    document.querySelector("header .nav a[href*="+ id +"]").classList.add('active');
});
        }
    });


    // sticky navbar
    let header=document.querySelector("header");

    header.classList.toggle('sticky',window.scrollY >100);

    menu.classList.remove("fa-xmark");
    navbar.classList.remove("active");
}

// type
const typed=new Typed(".multiple-text",{
    strings:["Web Developer","YouTuber","Full Stack Developer"],typeSpeed:100,backSpeed:100,backDelay:100,loop:true
});


// form 

const send =()=>{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let subject = document.getElementById("subject").value;
    let msg = document.getElementById("msg").value;
    alert(`##### Form Submited #####\n\nName:${name}\nEmail:${email}\nMobile Number:${mobile}\nSubject:${subject}\nMessage:${msg}`);
}

//PWA
// Check if the browser supports service workers
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/assets/js/service-worker.js')
        .then(function(registration) {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function(error) {
            console.error('Service Worker registration failed:', error);
        });
}

// Check if the app can be installed
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); // Prevent the default browser install prompt
    const installButton = document.getElementById('installButton');
    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
        event.prompt(); // Show the custom install prompt
        event.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the PWA installation');
                installButton.style.display = 'none';
            } else {
                console.log('User dismissed the PWA installation');
            }
        });
    });
});