
var contactLink = document.getElementById('contactLink');
var modal = document.getElementById('modal');
var close = document.getElementById('close');

var home = document.getElementById('home');
var about = document.getElementById('about');
var portfolio = document.getElementById('portfolio');

var description = document.querySelectorAll('.description');
var portfolioModal = document.querySelectorAll('.portfolio-modal');

var mq = window.matchMedia( "(min-width: 750px)" );

var portfolioTitle = document.getElementById('portfolio-title');
var imageContainer = document.querySelectorAll('.image-container');


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




function makeVisible(){
	var paragraph = this.parentNode;
	var div = paragraph.nextElementSibling;
	div.classList.add('make-visible');
}

function hide(){
	this.classList.remove('make-visible')
}


for(var i = 0; i < description.length; i++){
	description[i].addEventListener('mouseover', makeVisible)
	description[i].addEventListener('click', makeVisible)
}

for(var i = 0; i < portfolioModal.length; i++){
	portfolioModal[i].addEventListener('mouseout', hide)
	portfolioModal[i].addEventListener('click', hide)
}


if (mq.matches){
	for (var i = 0; i < imageContainer.length; i++){
		imageContainer[i].addEventListener('mouseenter', function(){
			portfolioTitle.style.transition = 'all 1s';
			portfolioTitle.style.marginBottom = '4rem';
		})
		imageContainer[i].addEventListener('mouseleave', function(){
			portfolioTitle.style.transition = 'all 1s';
			portfolioTitle.style.marginBottom = '3rem';
		})
	}
} else {
	for (var i = 0; i < imageContainer.length; i++){
		imageContainer[i].addEventListener('mouseenter', function(){
			portfolioTitle.style.marginBottom = '3rem';
		})
	}
}








