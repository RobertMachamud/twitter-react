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
						<Messages hashtag={this.props.hashtag} />
						<Hashtags getMessages={this.props.getMessages} />
				</div>
			</div>

		)
	}
}

export default Content
