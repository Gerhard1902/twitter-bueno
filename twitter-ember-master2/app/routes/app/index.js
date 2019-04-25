import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AppIndexRoute extends Route {
	model () {
		// return this.store.query('tweet', { user_id: 1 });
		// return this.store.findAll('tweet');

		return hash({
			tweets: this.store.findAll('tweet'), 
			users: this.store.findAll('user') 
		})
	}
}
