import init   from './studiant_list';
import Studiant from './studiant.class';

let studiants = [
					new Studiant('Clement','Teboul','img/clementT.jpg'),
					new Studiant('Victor','Mutton','img/victor.jpg'),
				];

init(studiants);

console.log('app loaded');