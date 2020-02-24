$(function(){
	$('.footer__nav-title').click(function(event){
        event.preventDefault();
		$(this).next(".footer__nav-list").slideToggle().siblings(".footer__nav-list:visible").slideToggle();
	})
});