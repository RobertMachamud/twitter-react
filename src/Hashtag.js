import React, {Component} from 'react'
import './Hashtag.css'

class Hashtag extends Component {
	// Data
	state = {
			hashtag: "codingfun"
	}
	// Functions


	// Render
	render() {
		return (
				<li className="hash">#{this.state.hashtag}</li>
		)
	}
}

export default Hashtag
