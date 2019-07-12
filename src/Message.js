import React, {Component} from 'react'
import './Message.css'
import moment from 'moment'


class Message extends Component {
	// Data
	state = {
		message: this.props.message
	}
	// Functions
	componentWillMount() {
		let message = this.state.message
		console.log('message:!!!!!!!!!', message)

		message.date = moment(message.date).format('D MMM - h:mma')
		this.setState({message})
	}


	// Render
	render() {
		return (
			<div className="wrap p-2 m-2 message">
				<div className="row">
					<div className="col-3">
						<div className="text-center">
							<img src="https://res.cloudinary.com/dxcrd5sos/image/upload/v1562651644/KKW5Vc4J_400x400_1_v1tetk.jpg" className="rounded" alt="" height="70px" />
						</div>
					</div>
					<div className="col-9 d-flex flex-column pl-5">
						<h5>{this.state.message.author.name}</h5>
						<span className="time">{this.state.message.date}</span>
						<span className="hashtag">{this.state.message.hashtag}</span>
						<div className="body">{this.state.message.body}</div>
					</div>
				</div>
			</div>

		)
	}
}

export default Message
