import $ from 'jquery';
import {get_selected_student} from './student_list';

let $card = null;
let $stat_container = null;
let $original_row = null;

function init(){
	$card = $('#detailled_card');
	
	$stat_container = $card.find('.container_stat');

	$stat_container.find('.stat_increase').on('click',function(){
		let indice	 = $(this).parents('.row').index();
		let student = get_selected_student();
		let prop = Object.keys(student.stat);
		
		if (indice<3 && student.apelle == false) {
			student.update_stat(student.statut,-1);
			student.update_stat(prop[indice],1);
			student.statut = prop[indice];			
			student.apelle = true;
		}else if(indice>=3){
			student.update_stat(prop[indice],1);
			
		}
		update(student);
	});

	$stat_container.find('.stat_decrease').on('click',function(){
		let indice	 = $(this).parents('.row').index();
		let student = get_selected_student();
		let prop = Object.keys(student.stat);
		if (indice<3 && student.apelle == true) {
			student.update_stat(prop[indice],-1);
			student.apelle = false;
		}else if(indice>=3){
			student.update_stat(prop[indice],-1);
		}
		update(student);

	});

	$original_row = $stat_container.find('.row').detach();
	$card.hide();
}

function update(student){
	if (!$card) return;
	if ($card.find('input').val()!='') $card.find('input').val('');
	$card.find('input[name=second_name]').val(student.second_name);
	$card.find('input[name=name]').val(student.name);
	$card.find('p.statut').text(student.statut);
	$card.find('.avatar').css('background-image','url('+student.icone+')');	
	$stat_container.empty();	

	for (let stat in student.stat) {
		let $clone = $original_row.clone(true);
		let property_name = student.show_property_name(stat);
		$clone.find('.stat_name').text(property_name);
		$clone.find('.stat_value').text(student.stat[stat]);
	
		$stat_container.append($clone);
	}

	$card.show();
};

export {init,update}


