const element = document.querySelector('.my-element');
element.classList.add('animate__animated', 'animate__backInDown');

element.addEventListener('animationend', () => {
    element.style.color = "#e03a3a";
    element.style.borderColor = "#ffff";
});




document.getElementById('toggleButton').addEventListener('click', function() {
    const formContainer = document.getElementById('formContainer');
    formContainer.classList.toggle('hidden');
});

