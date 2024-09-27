const element = document.querySelector('.my-element');
element.classList.add('animate__animated', 'animate__backInDown');

element.addEventListener('animationend', () => {
    element.style.color = "#e03a3a";
    element.style.borderColor = "#ffff";
    element.textContent = element.textContent.toUpperCase();
});




const buttons = document.querySelectorAll('.toggleButton');
const closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', function() {
    const formContainer = document.getElementById('formContainer');
    formContainer.classList.toggle('hidden-form'); 
});

buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        const formContainer = document.getElementById(`formContainer`);
        formContainer.classList.remove('form-container-end');
        formContainer.classList.toggle('hidden-form');
        event.preventDefault();
    });
  
});


const back = document.querySelector('#back');
const next = document.querySelector('#next');

const photos = ["/assets/images/traik-photo.jpeg","/assets/images/traik-photo-2.jpeg","/assets/images/traik-photo-3.jpeg"];

let i = 0;

next.addEventListener("click", ()=>{
    i++;
    if(i>photos.length - 1){
        i = 0;
    }
    document.querySelector("#pictures-of-traik").src = photos[i];
})

back.addEventListener("click", ()=>{
    i--;
    if(i<0 ){
        i = photos.length - 1;
    }
    document.querySelector("#pictures-of-traik").src = photos[i];
})

const video = document.getElementById("video-traik-block2");
const playPauseBtn = document.getElementById("playPauseBtn");

    playPauseBtn.addEventListener("click", function() {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = "Pause";  
        } else {
            video.pause();
            playPauseBtn.textContent = "▶";   
        }
    });


   
  
   