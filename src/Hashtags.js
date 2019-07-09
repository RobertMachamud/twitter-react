import React, {Component} from 'react'
import './Hashtags.css'
import Hashtag from './Hashtag'

class Hashtags extends Component {
	// Data
	state = {

	}
	// Functions


	// Render
	render() {
		return (
			<div class="col-3" id="hashbar">
				<ul class="list-unstyled">
					<h2>Tweets</h2>
					<Hashtag />
				</ul>
			</div>
		)
	}
}

export default Hashtags
