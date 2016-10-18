import * as student_list   from './student_list';
import Student from './student.class';

let students = [
					new Student('Clement','Teboul','img/clementT.jpg'),
					new Student('Victor','Moutton','img/victor.jpg'),
				];

student_list.init(students);
console.log('app loaded');