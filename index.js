const element = document.querySelector('.my-element');
element.classList.add('animate__animated', 'animate__backInDown');

element.addEventListener('animationend', () => {
    element.style.color = "#e03a3a";
    element.style.borderColor = "#ffff";
});



// Код работает только для первой одной кнопки 

// document.getElementById('toggleButton').addEventListener('click', function() {
//     const formContainer = document.getElementById('formContainer');
//     formContainer.classList.toggle('hidden-form');
//     event.preventDefault();
// });


const buttons = document.querySelectorAll('.toggleButton');
buttons.forEach((button, index) => {
    if (index === 2) { 
        button.addEventListener('click', function() {
            const formContainer = document.getElementById(`formContainer`);
            formContainer.classList.toggle('hidden-form');
            formContainer.classList.add('form-container-end');
            event.preventDefault();
        });
    }
    else {
        button.addEventListener('click', function() {
            const formContainer = document.getElementById(`formContainer`);
            formContainer.classList.remove('form-container-end');
            formContainer.classList.toggle('hidden-form');
            event.preventDefault();
        });
    }
   
});


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


   
  
   