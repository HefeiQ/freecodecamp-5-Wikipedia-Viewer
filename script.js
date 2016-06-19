
  $(document).ready(function() { 
    var input;
    $("#searchInput").on("keydown", function(e){
      // Get input value when "enter" is hit
	  if(e.keyCode == 13) {
	    input = $("#searchInput").val();
	    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&search=" + encodeURIComponent(input) + "&callback=?";

	    $.getJSON(url, function(json){
		  // Clear search result div
		  $("#resultDiv").empty();
		  
	      var resultLimit = 10;
	      for (var i = 0; i < resultLimit; i++) {
		    var text1 = $('<a href="' + json[3][i] +'" target="_blank" class="anchor"><h1></h1></a>').text(json[1][i]);
		    var text2 = $('<p style="font-size:18px; margin-top:1%"></p>').text(json[2][i]);
		    $("#resultDiv").append('<div id="div'+ i +'"></div>');
		    $("#div" + i).append(text1,text2);		
			//$("#h_" + i).css({"margin-top": "0.5%", "font-weight":"bold", "font-size":"22px", "color":"red"});
            //$("#p_" + i).css({"font-size":"12px"});
			$("#div" + i).css({"margin-bottom":"1%", "background-color":"#f2f2f2", "padding":"2% 2% 2% 2%"});			
	      }
        });
	  }	
	});

	$("#searchClear").click(function(){
     $("#searchInput").val('');
    });

  });
