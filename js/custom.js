$(function(){

	$('#bx-home').bxSlider({
		auto:true,
		nextSelector: '#home-prev',
		prevSelector: '#home-next',
		nextText: '<i class="fa fa-angle-left fa-2x"></i>',
		prevText: '<i class="fa fa-angle-right fa-2x"></i>'
		
	});
	
	
	  var OwlTech = $('#OwlTech');
	 
	  OwlTech.owlCarousel({
	      
	      items : 4, //10 items above 1000px browser width
	      itemsDesktop : [1200,4], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,3], // betweem 900px and 601px
	      itemsTablet: [768,2], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
  	      navigationText:["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]
	  });
	  
	  var OwlClients = $('#OwlClients');
	 
	  OwlClients.owlCarousel({
	      
	      items : 5, //10 items above 1000px browser width
	      itemsDesktop : [1200,4], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,4], // betweem 900px and 601px
	      itemsTablet: [768,3], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:false,
	      autoPlay:true,
	  });
    $(".header .open-menu").click(function () {
    	
    	$(".header .navBar").slideToggle();
    	
    });

	
	
});
