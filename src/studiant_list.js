import $ from 'jquery';
import Studiant from './studiant.class';

export default function init(studiants){
	let $original = $('#studiant-list li').detach();
	
	console.log($original,studiants)
	
	for (let i = 0; i < studiants.length; i++) {
		let $clone = $original.clone();

		let $second_name = $clone.find('.card_second_name');
		$second_name.text(studiants[i].second_name);
		
		let $name = $clone.find('.card_name');
		$name.text(studiants[i].name);
		
		let $status = $clone.find('.card_status');
		$status.text(studiants[i].status);
		
		let $score = $clone.find('.card_score');
		$score.text(studiants[i].score);
		
		let $icone = $clone.find('img');
		$icone.attr('src',studiants[i].icone);
		

		$('#studiant-list').append($clone);
	}
}
