let mobileMenu = document.querySelector('.mobile-menu');
let modal = document.querySelector('.modal');
let body = document.querySelector('body');
let mobileMenuLine = document.querySelector('.menu-line');
let modalMenu = document.querySelector('.alt-icon');
let nav = document.querySelector('nav');
let signUp = document.querySelector('.sign-up');
let logIn = document.querySelector('.log-in');
console.log(signUp)

mobileMenu.addEventListener('click', function(){
modal.classList.toggle('open-menu');
body.classList.toggle('scroll-lock');
mobileMenuLine.classList.toggle('hidden');
nav.classList.toggle('show');
signUp.classList.toggle('show');
logIn.classList.toggle('show');

if(mobileMenuLine.classList.contains('hidden')){
modalMenu.classList.replace('hidden','show');}
else {modalMenu.classList.replace('show','hidden')}
});

