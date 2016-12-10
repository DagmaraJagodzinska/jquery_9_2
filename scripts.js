$(function() {
	var span = $("span");
	span.each(function(index, element){   //funkcja przyjmuje dwa argumenty: indeks oraz aktualny element
		if (index % 2 == 0) {
			$(element).css('color','#0568C6');  // lub $("span:odd").css('color','red');
		};
	});
	var paragraph = $('p');
	paragraph.each(function(index,element){
		var button = '<button class="btn" data-tmp="' + index + '"> Click </button>'
		$(element).append(button)
	});
	$("button").click(function() {
		alert($(this).attr("data-tmp"));  //attr() - zwraca nam wartość tego atrybutu.
	});
});

