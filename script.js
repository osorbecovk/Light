let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');
let go = document.querySelector('.go');
let goo = document.querySelector(".goo")

go.addEventListener('click', () => {
    function colors () {
        red.style.backgroundColor = '#FF0000';
        yellow.style.backgroundColor = 'gray';
        setTimeout(() => {
            red.style.backgroundColor = 'gray';
            yellow.style.backgroundColor = 'yellow';
        }, 1000);
        setTimeout(() => {
            yellow.style.backgroundColor = 'gray';
            green.style.backgroundColor = '#7CFC00';
        }, 2000);
        setTimeout(() => {
            green.style.backgroundColor = 'gray';
            colors(); 
        }, 3000);
    }
    colors();
});


goo.addEventListener('click', () => {
    setTimeout(() => {
    red.style.backgroundColor = '#FF0000';
   },1000);
    setTimeout(() => {
        red.style.backgroundColor = 'gray';
        yellow.style.backgroundColor = 'yellow';
    },2000);
    setTimeout(() => {
        yellow.style.backgroundColor = 'gray';
        green.style.backgroundColor = '#7CFC00';
    },3000);
    setTimeout(() => {
        green.style.backgroundColor = 'gray';
    },4000);
});