$(function(){
	$('img.fade').hover(function(){
		$(this).animate({'opacity':'0.5'},100,'');
		
	},function(){
		$(this).animate({'opacity':1},400,'');
	
	});
});