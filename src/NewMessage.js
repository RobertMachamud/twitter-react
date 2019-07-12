import React, {Component} from 'react'
import './NewMessage.css'


class NewMessage extends Component {
	// Data
	state = {
		text: ''
	}


	// Functions
	changeText = (e) => {
		this.setState({
			text: e.target.value
		})
	}

	clearMessage = () => {
		this.setState({
			text: ''
		})
	}


	// Render
	render() {
		return (
			<form onSubmit={(e) => {this.props.createMessage(e, this.state.text, this.props.hashtag); this.clearMessage()}}>
			<div className="input-group mb-3">
				<input type="text" className="form-control" placeholder="Send Message..." aria-label="Recipient's username" aria-describedby="button-addon2" value={this.state.text} onChange={(e) => this.changeText(e)} />
				<div className="input-group-append">
					<button className="btn btn-outline-secondary" type="submit" id="button-addon2">Send</button>
				</div>
			</div>
			</form>
		)
	}
}


export default NewMessage
