import DS from 'ember-data';
const { Model, attr, hasMany } = DS;
import sha1 from"js-sha1";
import Identicon from "identicon.js";

export default class UserModel extends Model {
	@attr('string') name;
	@attr('string') username;
	@attr('string') bio;
	@hasMany('tweet') tweets;
	@hasMany('tweet') tweets;

	get avatar(){
		//console.log(this.username);
		let hash= sha1(this.username);
		let data= new Identicon(hash).toString();
		return `data:image/png;base64,${data}`;
		//console.log(hash);
		//return "hola";
	}
}