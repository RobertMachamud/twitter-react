import React, {Component} from 'react'
import './Hashtags.css'
import Hashtag from './Hashtag'
import axios from 'axios'

class Hashtags extends Component {
	// Data
	state = {
		hashtags: []
	}

	getHashtags = () => {
		return new Promise(function(resolve, reject) {
			axios.get('http://localhost:4000/api/hashtags').then( (res) => {
				console.log('res.data', res.data)
				resolve(res.data)
			}).catch( (err) => {
				reject(err)
			})
		})
	}

	componentWillMount() {
		this.getHashtags().then((data) => {
			console.log('data', data)
			this.setState({
				hashtags: data
			}, console.log('this.state', this.state))
		}).catch((err) => {
			console.log('err', err)
		})
	}

	// Functions
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
				<h2>Tweets</h2>
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
