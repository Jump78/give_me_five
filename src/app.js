import {init as student_list_init}   from './student_list';
import {init as detailled_card_init }  from './detailled_card';
import Student from './student.class';
import {load_students} from './data';

function init(){

	let students = load_students();

	student_list_init(students);

	detailled_card_init();	

	console.log('app loaded');
}

init();
