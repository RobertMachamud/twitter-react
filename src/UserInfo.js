import React, {Component} from 'react'
import './UserInfo.css'

class UserInfo extends Component {
	// Data
	state = {

	}
	// Functions


	// Render
	render() {
		return (
			<div className="col-3" id="user_info">
		<h5>Tortuga Coders</h5>
		<p><small><span className="gray">@tortugacoders</span><br /><br />
				9-week-all-inclusive web development bootcamp in Thailand. Learn to Code in Paradise.</small></p>


			<p className="location"><i className="fas fa-map-marker-alt"></i>Koh Saui island</p>
		<a href="#"><i className="fas fa-link"></i>tortugacoders.com</a>
	</div>
		)
	}
}

export default UserInfo
