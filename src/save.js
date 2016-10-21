import moment from './moment';

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

export {init,set_student_save};