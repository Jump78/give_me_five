import Student from './student.class';


let	barem = {
		presence: 10,
		absence : -10,
		retard : -2,
		participation : 1,
		passage_au_tableau : 1
	}

function set_student_save(students) {
	let student_save= {};
	for (let i = 0; i < students.length; i++) {
		for(let prop in students[i]){
			student_save[students[i].name+'-'+students[i].second_name]= students[i].icone+'[';
			let stat_save = '';
			for(let stat in students[i].stat){
				stat_save += stat+'+';
				stat_save += students[i].stat[stat]+'-';
			}

			student_save[students[i].name+'-'+students[i].second_name]+=stat_save;
		}

	}
	save(student_save);
}

function save(student_save) {
	let result = '';
	for(let prop in student_save){
		result += prop+'-';
		result += student_save[prop]+'|';
	}
	localStorage.setItem('gm5',result);
}

function load_students(){
	let student = [];
	let stat ={};

	let storage = localStorage.getItem("gm5");

	if (storage == null) return student;

	
	let object_split = storage.split("|");
	
	for (let i = 0; i < object_split.length-1; i++) {
		let prop_objet_split =object_split[i].split('[');
		let constructor_split = prop_objet_split[0].split('-');
		let stat_split = prop_objet_split[1].split('-');
		
		for (let j = 0; j < stat_split.length-1; j++) {
			let stat_prop_split = stat_split[j].split('+');
			stat[stat_prop_split[0]] = parseInt(stat_prop_split[1]);			
		}
		
		let new_student = new Student(constructor_split[0],constructor_split[1],constructor_split[2]);
		
		new_student.stat = Object.assign(new_student.stat, stat);
		new_student.update_score();
		student.push(new_student);
		
	}
	return student
}

export{barem,set_student_save,load_students}