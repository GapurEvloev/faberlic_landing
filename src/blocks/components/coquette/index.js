var mybutton = document.querySelector(".particles-button");
mybutton.onclick = function() {
	mybutton.disabled = true;
	setTimeout(function() {
		mybutton.disabled = false;
	}, 1000);
};