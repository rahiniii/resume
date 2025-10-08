$(function() {

	"use strict";

	/*================*/
	/* 01 - VARIABLES */
	/*================*/
	var swipers = [], winW, winH, winScr, footerTop, _isresponsive, _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);

	/*========================*/
	/* 02 - page calculations */
	/*========================*/
	function pageCalculations(){
		winW = $(window).width();
		winH = $(window).height();
		footerTop = ($('footer').length)?$('footer').offset().top : 0;
		if($('.portfolio-detail-related-entry').length) footerTop = $('.portfolio-detail-related-entry').offset().top;
		if($('.menu-button').is(':visible')) _isresponsive = true;
		else _isresponsive = false;
		$('.page-height').css({'height':winH, 'min-height':(winH<480)?480:winH});
		if(winH<=600) $('body').addClass('min-height');
		else $('body').removeClass('min-height');
		$('.rotate').each(function(){
			$(this).css({'width':$(this).parent().height()});
		});
	}
	
	if(_ismobile) $('body').addClass('mobile');
	pageCalculations();

	//index 9 mousewheel event on slider
	$('.boxgallery').on('mousewheel', function(event) {		
		event.preventDefault();
		if(event.deltaY>0) {
			$(this).find('.slider-click.left').click();
		}
		else{
			$(this).find('.slider-click.right').click();
		}
	});

	//click on button, that scrolls page
	$('.scroll-button').on('click', function(){
		$('body, html').animate({'scrollTop':(winH<=600)?600:winH});
		return false;
	});

	//responsive filtration block
	$('.responsive-filtration-title').on('click', function(){
		$(this).toggleClass('active');
	});	
});