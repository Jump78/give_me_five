import moment from './moment.js';
import * as student_list   from './student_list';
import * as detailled_card   from './detailled_card';
import Student from './student.class';

let students = [
					new Student('Clement','Teboul','img/clementT.jpg'),
					new Student('Victor','Moutton','img/victor.jpg'),
				];

student_list.init(students);
detailled_card.init();
console.log('app loaded');