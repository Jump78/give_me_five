import $ from 'jquery';
import write_detailled_card from './detailled_card';
import Student from './student.class';

let students_array = null;

let id_card_selected = null;

let $original = null;

function init(students){

	students_array = students;

	$original = $('#student-list li').detach();
		
	for (let i = 0; i < students.length; i++) {

		let $clone = $original.clone();

		let $second_name = $clone.find('.card_second_name');
		$second_name.text(students[i].second_name);
		
		let $name = $clone.find('.card_name');
		$name.text(students[i].name);
		
		let $score = $clone.find('.card_score');
		$score.text(students[i].score+' point(s)');
		
		let $icone = $clone.find('.profil');
		$icone.css('background-image','url('+students[i].icone+')');
		
		$('#student-list ul').append($clone);
	}

	$('#student-list').on('click','li',function(){
		$('#student-list li div').removeClass('selected');
		$(this).children('.panel').addClass('selected');
		id_card_selected = $('#student-list li').index(this);
		let student = students[id_card_selected];
		write_detailled_card(student);
	});

	$('#student-list form').on('change','input',function(e){
		let $student_in_list = $('#student-list li').eq(id_card_selected);
		students[id_card_selected].statut = $student_in_list.find('form input:checked').val();
		$student_in_list.find('form').remove();
		$student_in_list.find('.card_statut').text(students[id_card_selected].statut)
	});

	$('#add_student').on('click',function(){
		add_panel();
	});

	$('#detailled_card button').on('click',function(){
		delete_student(id_card_selected);
		console.log(id_card_selected)
	})	
}

function add_panel(){
	let $clone = $original.clone();
		
	let $second_name = $clone.find('.card_second_name');
	$second_name.html('<input>');
	$second_name.find('input').attr('placeholder','Nom de famille');
	$second_name.find('input').addClass('new_second_name');
	
	let $name = $clone.find('.card_name');
	$name.html('<input>');
	$name.find('input').attr('placeholder','Nom');
	$name.find('input').addClass('new_name');
	
	let $score = $clone.find('.card_score');
	$score.empty();

	let $icone_validate = $('<img>');
	$icone_validate.addClass('bouton');
	$icone_validate.addClass('validate');
	$icone_validate.attr('src','img/validation.png');

	$score.parent().append($icone_validate);

	$('#student-list ul').append($clone);
	
	$('.validate').on('click',function() {
		let $parent = $(this).parent();
		add_student($parent.find('input.new_name').val(),$parent.find('input.new_second_name').val());

		let i = id_card_selected;
		console.log(students_array[i],id_card_selected);
		
		students_array[i].statut = $parent.find('form input:checked').val();
		$parent.find('form').remove();
		$parent.find('.card_statut').text(students_array[i].statut)

		$parent.find('input').remove();
		$parent.find('.validate').remove();

		
		let $second_name = $parent.find('.card_second_name');
		$second_name.text(students_array[i].second_name);
		
		let $name = $parent.find('.card_name');
		$name.text(students_array[i].name);
		
		let $score = $parent.find('.card_score');
		$score.text(students_array[i].score+' point(s)');
		
		let $icone = $parent.find('img');
		$icone.attr('src',students_array[i].icone);

	});
	
}

function add_student(name,second_name){
	let new_student = new Student(name,second_name);
	students_array.push(new_student);

}

function delete_student(id){
	students_array.splice(id,1);
	$('#student-list li').eq(id).remove();
}
export {init}