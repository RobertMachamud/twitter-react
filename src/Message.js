import React, {Component} from 'react'
import './Message.css'


class Message extends Component {
	// Data
	state = {

	}
	// Functions


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
						<h5>Robert Machamud</h5>
						<span className="time">9 - Jul 5:30</span>
						<span className="hashtag">hashtag</span>
						<p className="body">Hello World!</p>
					</div>
				</div>
			</div>

		)
	}
}

export default Message
