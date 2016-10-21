import Student from './student.class';

let storage = localStorage.getItem("gm5");

function load_students(){
	let object_split = storage.split("|");
	let student = [];
	let stat ={};
	
	for (let i = 0; i < object_split.length-1; i++) {
		let prop_objet_split =object_split[i].split('[');
		let constructor_split = prop_objet_split[0].split('-');
		let stat_split = prop_objet_split[1].split('-');
		
		let stat_prop_split = stat_split[0].split('+');
		
		for (let j = 0; j < stat_prop_split.length-1; j++) {
				
			let stat_value_split = stat_prop_split[j].split(':');
			stat[stat_value_split[0]] = parseInt(stat_value_split[1]);			
		}
		
		let new_student = new Student(constructor_split[0],constructor_split[1],constructor_split[2]);
		new_student.stat = Object.assign(new_student.stat, stat);
		student.push(new_student);
		
	}

	return student
}

export {load_students}