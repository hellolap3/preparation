$(function() {
		$('body').fadeIn(1500);
});


setTimeout(function() {
  setInterval(function() {
   var $imgi = $('.img-one');
   var $imgii = $('.img-two');
   var $imgiii = $('.img-three');
  if ($imgi.hasClass('active')){
   $imgi.removeClass('active');
   $imgii.addClass('active');
  } else if ($imgii.hasClass('active')) {
   $imgii.removeClass('active');
   $imgiii.addClass('active');
  } else if ($imgiii.hasClass('active')) {
   $imgiii.removeClass('active');
   $imgi.addClass('active');}
 }, 3 * 1000);
}, 3000);

$('.close-btn').click(function() {
        $('.menu-block').removeClass('menu-open');
				$('.menubar').removeClass('dn');

});

$('.menu-bar').click(function() {
        $('.menu-block').addClass('menu-open');
				$('.menubar').addClass('dn');
});
