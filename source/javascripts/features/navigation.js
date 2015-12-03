$("#nav").addClass("b-Nav__Hide").before('<div id="menu" class="b-Nav__Toggle"><i class="fa fa-bars"></i></div>');
	$("#menu").click(function(){
		$("#nav").slideToggle(240)
    $("#menu").toggleClass("b-Nav__Active");
	});
