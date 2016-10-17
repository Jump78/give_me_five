import $ from 'jquery';

export default function init(students){
	let $original = $('#student-list li').detach();
		
	for (let i = 0; i < students.length; i++) {
		let $clone = $original.clone();

		let $second_name = $clone.find('.card_second_name');
		$second_name.text(students[i].second_name);
		
		let $name = $clone.find('.card_name');
		$name.text(students[i].name);
		
		let $status = $clone.find('.card_status');
		$status.text(students[i].status);
		
		let $score = $clone.find('.card_score');
		$score.text(students[i].score);
		
		let $icone = $clone.find('img');
		$icone.attr('src',students[i].icone);

		$('#student-list').append($clone);
	}

	$('#student-list').on('click','li',function(){
		$('#fat_card')
	})
}
