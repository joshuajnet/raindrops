$(document).ready(function() {
		
		
	function rainDrops(){
		
		var Posdiv = $(this);
		
		var rand = Math.round(Math.random()*(3000-2000))+2000;
		var winwidth = $(window).width();
		var winheight = $(window).height();
			
		setInterval(function(){
			    
	    var posx = (Math.random() * (winwidth-100)).toFixed();
		var posy = (Math.random() * (winheight-100)).toFixed();
		

		
		Posdiv.css({
		        'left':posx+'px',
		        'top':posy+'px',
		    }).toggleClass('active')
		    
	    }, rand);
	   
    }
      
	$('.raindrop').each(rainDrops);
	
});