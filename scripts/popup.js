$( document ).ready(function() {

var exact = true;
var phrase = true;
var broad = true;

	$('#submit').click(function(){

		var keyword = $('#box').val().split('\n');

		exact = $('#exact').is(':checked');
		phrase = $('#phrase').is(':checked');
		broad = $('#broad').is(':checked');

		var textAreaValue = '';

		for (var x=0; x < keyword.length; x++){
			if (exact){
				  textAreaValue += makeExactMatch(keyword[x]);
			};

			if (phrase){
				textAreaValue += makePhraseMatch(keyword[x]);
			};

			if (broad){
  				textAreaValue += makeBroadMatch(keyword[x]);
  			
			};
		};

		$('#output').val(textAreaValue);

	});


	function makeExactMatch(keyword) {
		return "["+keyword+"]\r\n";
	}

	function makePhraseMatch(keyword) {
		return "\""+keyword+"\"\r\n";
	}

	function makeBroadMatch(keyword) {
		var split = keyword.split(" ");
		var newMatch = '';
		for(var z=0;z<split.length;z++)
			newMatch += "+"+split[z]+" ";

		newMatch += "\r\n";
		return newMatch;
	}

	$('#clear').click(function(){
		$('#box,#output').val('');
	});
});