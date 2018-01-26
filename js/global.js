$( document ).ready(function() {

	$("#YSitems").hide();

	$("#nextYSBtn").click(function(){
		$("#YSinfo").hide();
		$("#YSitems").show();
	});

	$("#backYSBtn").click(function(){
		$("#YSinfo").show();
		$("#YSitems").hide();
	});

});


