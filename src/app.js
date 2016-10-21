import {init as student_list_init}   from './student_list';
import {init as detailled_card_init }  from './detailled_card';
import Student from './student.class';
import {set_studient_save,save} from './save';
import {load_students} from './load';
//import {init as save_init} from './save';

let students = [
					new Student('Clement','Teboul','img/clementT.jpg'),
					new Student('Victor','Moutton','img/victor.jpg'),
				];
student_list_init(students);
detailled_card_init();
console.log('app loaded');