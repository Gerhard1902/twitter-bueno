import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AppIndexController extends Controller {
	@action
	onSubmit (description) {
		let user = this.store.peekRecord('user', 1);
		// let user;
		// this.store.findRecord('user', 1).then((result) => {
		// 	user = result
		// })
		// console.log(user);

		let tweet = this.store.createRecord('tweet', {
			description: description
		});

		tweet.set('user', user);

		tweet.save();
	}
}
