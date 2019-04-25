import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TwitterBoxComponent extends Component {
	@tracked text;
	@tracked error;

	@action
	onInput (value) {
		this.error = false;
		this.text = value;
	}

	@action
	async onSubmit () {
		if (this.args.handleSubmit) {
			let text = this.text;
			
			await this.args.handleSubmit(text);

			this.text = null;
			this.error = false;
		} else {
			this.error = true;
		}
	}
}
