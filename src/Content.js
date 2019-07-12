import React, {Component} from 'react'
import UserInfo from './UserInfo'
import Messages from './Messages'
import Hashtags from './Hashtags'
import './Content.css'

class Content extends Component {
	// Data
	state = {
			// messages: []
	}
	// Functions


	// Render
	render() {
		return (
			<div className="container">
				<div className="row" id="main">
						<UserInfo />
						<Messages getMessages={this.props.getMessages} hashtag={this.props.hashtag} />
						<Hashtags />
				</div>
			</div>

		)
	}
}

export default Content
