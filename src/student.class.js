import Stat from './stat.class.js';
import data from './data';

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
			this.score += this.stat[prop]*data.barem[prop];
		}
	}

	update_stat(stat,nb){
		let nb_point = this.stat[stat] + nb;

		if ( nb_point >= 0) this.stat[stat] += nb;
		this.update_score();
	}
}
