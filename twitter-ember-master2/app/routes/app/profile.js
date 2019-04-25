import Route from '@ember/routing/route';
import {hash} from "rsvp";

export default class AppProfileRoute extends Route {
	model(params){
		//console.log(params);
		return hash ({
			user:this.store.findRecord("user", params.user_id),
			tweets: this.store.query ("tweet",{user_id: params.user_id})
			//http://still-garden.herokuapp.com/tweets?user_id=1
		})
		
	}
}
