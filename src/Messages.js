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
			<div className="col-6" id="messages">

				<div className="input-group mb-3">
									<input type="text" className="form-control" placeholder="Send Message..." aria-label="Recipient's username" aria-describedby="button-addon2" />
									<div className="input-group-append">
										<button className="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>
									</div>
								</div>

				<Message />

			</div>
		)
	}
}

export default Messages
