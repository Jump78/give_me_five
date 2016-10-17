import init   from './student_list';
import Student from './student.class';

let students = [
					new Student('Clement','Teboul','img/clementT.jpg'),
					new Student('Victor','Mutton','img/victor.jpg'),
				];

init(students);

console.log('app loaded');