$(function(){
	 var navH = $(".menu").offset().top ;
	 $(window).scroll(function(){
		 var scroH = $(this).scrollTop();
		 if(scroH>=navH){
		 	 $(".menu").css('position', 'fixed');
		 }else if(scroH<navH){
			 $(".menu").css('position', 'absolute');
		 }
	});
});

$(function(){
    $("#p4 a,#menu-list li:nth-child(2) a").click(function(){
        var mainH = $('#main').offset().top;
        $("html,body").stop().animate({scrollTop:mainH},500);
    });

    $("#menu-list li:first-child a").click(function(){
        var headH = $('#header').offset().top;
        $("html,body").stop().animate({scrollTop:headH},500);
    });
});

$(function(){
	var sidebar = $('#sidebar'),
	      mask = $('.mask');

	function showsidebar () {
		 mask.fadeIn();
		 sidebar.animate({'right':0},500);
	}

	function hidesidebar () {
		mask.fadeOut();
		  sidebar.animate({'right':-sidebar.width()},500);
	}

	$('#sidebar_trigger').on('click', showsidebar);
	mask.on('click',hidesidebar);
});


