import React, {Component} from 'react'
import './Hashtags.css'
import Hashtag from './Hashtag'

class Hashtags extends Component {
	// Data
	state = {
			hashtags: []
	}
	// Functions


	// Render
	render() {
		return (
			<div className="col-3" id="hashbar">
				<ul className="list-unstyled">
					<h2>Tweets</h2>
					{
						this.state.hashtags.map( (h) => {
							return <Hashtag />
						})
					}
				</ul>
			</div>
		)
	}
}

export default Hashtags
