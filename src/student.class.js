import Stat from './stat.class';
import {barem} from './data';

export default class{
	constructor(name, second_name, icone){
		this.name = name;
		this.second_name = second_name;
		this.icone = icone || 'img/default.jpg';
		this.statut = "";
		this.score= 0;
		this.stat = new Stat();
		this.apelle = false;
	}

	update_score(){
		this.score = 0;
		for(let prop in this.stat){
			this.score += this.stat[prop]*barem[prop];
		}
	}

	update_stat(stat,nb){
		let nb_point = this.stat[stat] + nb;

		if ( nb_point >= 0) this.stat[stat] += nb;
		this.update_score();
	}

	show_property_name(name){
		let result ='';
		switch(name){
			case 'presence':
				result = 'Présence';
			break;
			
			case 'absence':
				result = 'Absence';
			break;

			case 'retard':
				result = 'Retard';
			break;

			case 'participation':
				result = 'Participation';
			break;

			case 'passage_au_tableau':
				result = 'Passage au tableau'
			break;
				
			default:
				result = '';
			break;
		}
		return result;
	}
}
