import $ from 'jquery';


function update(student){
	let card = $('#detailled_card');
	card.find('.second_name').text(student.second_name);
	card.find('.name').text(student.name);
	card.find('.avatar_list').css('background-image','url('+student.icone+')');	card.find('h4:first').children().text(student.statut);
	
	let input = card.find('form').children('input');
	
	for (var i = 0; i < input.length; i++) {
		$(input[i]).removeAttr('checked');
		console.log('kek');
		if ($(input[i]).val() == student.statut){
			$(input[i]).attr('checked',true);
		}
	}
};

export {update}


