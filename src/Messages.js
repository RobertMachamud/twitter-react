import React, {Component} from 'react'
import Message from './Message'

class Messages extends Component {
	// Data
	state = {

	}
	// Functions


	// Render
	render() {
		return (
			<div class="col-6" id="messages">

				<div class="input-group mb-3">
									<input type="text" class="form-control" placeholder="Send Message..." aria-label="Recipient's username" aria-describedby="button-addon2" />
									<div class="input-group-append">
										<button class="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>
									</div>
								</div>

				<Message />

			</div>
		)
	}
}

export default Messages
