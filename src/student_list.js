import $ from 'jquery';
import * as detailled_card from './detailled_card';
import Student from './student.class';

let students_array = null;

let student_selected = null;

let id_card_selected = null;

let $original_card = null;

let $original_sign_up_card = null;

function init(students){

	students_array = students;

	$original_card = $('#student-list li:first').detach();
	
	$original_sign_up_card = $('#student-list li').detach();
	
	for (let i = 0; i < students.length; i++) {

		let $clone = $original_card.clone();
	
		update_card($clone,students[i]);
		
		$('#student-list ul').append($clone);
	}

	$('#student-list').on('click','li',function(){
		$('#student-list li div').removeClass('selected');
		$(this).children('.panel').addClass('selected');
		
		id_card_selected = $('#student-list li').index(this);
		
		student_selected = students[id_card_selected];
		
		detailled_card.update(student_selected);
	});

	$('#student-list form').on('change','input',function(e){
		let $student_in_list = $('#student-list li').eq(id_card_selected);
		student_selected.statut = $student_in_list.find('form input:checked').val();

		if (student_selected.statut == 'present') {
			student_selected.update_stat('presence',1);
		}else if (student_selected.statut == 'retard') {
			student_selected.update_stat('retard',1);
		}else{
			student_selected.update_stat('absence',1);
		}
	
		update_card($student_in_list,student_selected);
		detailled_card.update(student_selected);

	});

	$('#add_student').on('click',function(){
		add_panel();
	});

	$('#detailled_card #delete').on('click',function(){
		delete_student(id_card_selected);
	});

	$('#detailled_card #update').on('click',function(){
		student_selected.name = $('#detailled_card').find('input[name=name]').val(); 
		student_selected.second_name = $('#detailled_card').find('input[name=second_name]').val(); 
		student_selected.icone = window.URL.createObjectURL($('#detailled_card').find('input[type=file]')[0].files[0]);
		
		let $balise = $('#student-list li').eq(id_card_selected); 
		update_card($balise,student_selected);
	})
}

function add_panel(){
	let $sign_up_clone = $original_sign_up_card.clone();
	$sign_up_clone.id = $('#student-list li').length;
	$('#student-list ul').append($sign_up_clone);
	
	$sign_up_clone.find('.validate').on('click',[
		$sign_up_clone
	],add_student);
	
}

function add_student(arg){
	let balise = arg.data[0];
	let name = balise.find('input[name=name]').val();
	let second_name = balise.find('input[name=second_name]').val();
	let icone = window.URL.createObjectURL(balise.find('input[type=file]')[0].files[0]);
	let id = balise.id;

	let new_student = new Student(name,second_name,icone);
	new_student.statut = balise.find('input[type=radio]:checked').val();
	
	if (new_student.statut == 'present') {
		new_student.update_stat('presence',1);
	}else if (new_student.statut == 'retard') {
		new_student.update_stat('retard',1);
	}else{
		new_student.update_stat('absence',1);
	}
	
	students_array[id]=new_student;
	
	let $clone = $original_card.clone();
	update_card($clone,new_student);
	balise.replaceWith($clone);
}

function delete_student(id){
	students_array.splice(id,1);
	$('#student-list li').eq(id).remove();
}

function update_card(balise,student) {
	if (student.second_name)
	balise.find('.card_second_name')
	.text(student.second_name);

	if (student.name)
	balise.find('.card_name')
	.text(student.name);
	
	if (typeof student.score === 'number')
	balise.find('.card_score')
	.text(student.score+' point(s)');
	
	if (student.icone)
	balise.find('.avatar')
	.css('background-image','url('+student.icone+')');

	if (student.statut != ""){
		balise.find('form').remove();
		student.apelle = true;
		balise.find('.card_statut').text(student.statut);
	}

	detailled_card.update(student_selected);
}

function get_selected_student(){
	return student_selected
}
export {init,get_selected_student}