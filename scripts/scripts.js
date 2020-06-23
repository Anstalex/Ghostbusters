let mobileMenu = document.querySelector('.mobile-menu');
let modal = document.querySelector('.modal');
let body = document.querySelector('body');
let mobileMenuLine = document.querySelector('.menu-line');
let modalMenu = document.querySelector('.alt-icon');

mobileMenu.addEventListener('click', function(){
modal.classList.toggle('open-menu');
body.classList.toggle('scroll-lock');
mobileMenuLine.classList.toggle('hidden');
if(mobileMenuLine.classList.contains('hidden')){
modalMenu.classList.replace('hidden','show');}
else {modalMenu.classList.replace('show','hidden')}
});
console.log(image.setAttribute);
