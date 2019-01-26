let open = document.getElementById('js-open');
let close = document.getElementById('js-close');
let nav = document.getElementById('js-nav');

open.addEventListener('click', function(){
    nav.style.width = "100%";
});

close.addEventListener('click', function(){
    nav.style.width = '0';
});