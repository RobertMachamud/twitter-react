import React, {Component} from 'react'
import './Hashtags.css'
import Hashtag from './Hashtag'
import axios from 'axios'

class Hashtags extends Component {
	// Data
	state = {
		hashtags: []
	}

	componentDidMount() {
		axios.get('http://localhost:4000/api/hashtags').then( (res) => {
			res.data[0].active = true
			this.setState({
				hashtags: res.data
			})
			this.selectHashtag(res.data[0]._id)
			console.log('res.data[0]', res.data[0])
		}).catch( (err) => {
			console.log(err)
		})
	}


	selectHashtag = (id) => {
		let hashtags = this.state.hashtags
		hashtags.forEach( (h) => delete h.active)
		let hashtag = hashtags.find( (h) => h._id === id)
		hashtag.active = true
		this.setState({hashtags})
		this.props.getMessages(id)
	}


	// Render
	render() {
		return (
			<div className="col-3" id="hashbar">
				<h2>Hashtags</h2>
				<ul className="list-unstyled">
					{
						this.state.hashtags.map( (h) => {
							return <Hashtag hashtag={h} key={h._id} selectHashtag={this.selectHashtag} />
						})
					}
				</ul>
			</div>
		)
	}

}

export default Hashtags
