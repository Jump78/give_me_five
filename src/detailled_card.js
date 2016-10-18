import $ from 'jquery';

export default function write_detailled_card(student){
	let card = $('#detailled_card');
	card.find('.second_name').text(student.second_name);
	card.find('.name').text(student.name);
	card.find('img').attr('src',student.icone);
	card.find('h4:first').children().text(student.statut);
};


