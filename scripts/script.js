
var contactLink = document.getElementById('contactLink');
var modal = document.getElementById('modal');
var close = document.getElementById('close');

var home = document.getElementById('home');
var about = document.getElementById('about');
var portfolio = document.getElementById('portfolio');


window.onbeforeunload = function(){
	window.scrollTo(0, 0);
}

home.addEventListener('click', function(){
	scrollTo(document.body, 0, 0);
});

about.addEventListener('click', function(){
	scrollTo(document.body, 0, 98);
});

contactLink.addEventListener('click', function(){
	modal.classList.add('is-visible');
});	

close.addEventListener('click', function(){
	modal.classList.remove('is-visible');
});

