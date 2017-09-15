var contactLink = document.getElementById('contactLink');
var modal = document.getElementById('modal');
var close = document.getElementById('close');


contactLink.addEventListener('click', function(){
	modal.classList.add('is-visible');
});	

close.addEventListener('click', function(){
	modal.classList.remove('is-visible');
});