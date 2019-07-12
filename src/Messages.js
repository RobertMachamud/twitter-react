import React, {Component} from 'react'
import Message from './Message'
import NewMessage from './NewMessage'
import axios from 'axios'


class Messages extends Component {
	// Data
	state = {
		messages: []
	}


	// Functions
	componentWillMount() {
		axios.get('http://localhost:4000/api/messages').then( (res) => {
			console.log(' Message>>>>>>>>', res.data)
			this.setState({
				messages: res.data
			})
		}).catch( (err) => {
			console.log('err', err);
		})
	}

	componentWillReciveProps() {
		axios.get(`http://localhost:4000/api/messages?hashtag=${this.props.hashtag}`).then( (res) => {
			this.setState({
				message: res.data
			})
		}).catch( (err) => {
			console.log('err', err)
		})
	}


	 createMessage = (e, text, hashtag) => {
		 	e.preventDefault()
			let message = {
				body: text,
				hashtag: hashtag
			}
			axios.post(
				'http://localhost:4000/api/messages',
				message,
				{headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}}
			).then( (res) => {
				let messages = this.state.messages
				messages.push(res.data)
				this.setState({messages})
			}).catch( (err) => {
				console.log('err', err)
			})
	 }


	// Render
	render() {
		return (
			<div className="col-6" id="messages">
				<NewMessage createMessage={this.props.createMessage} hashtag={this.props.hashtag} />
				{
					this.state.messages.map( (m) => {
						return <Message message={m} key={m._id} />
					})
				}
			</div>
		)
	}
}


export default Messages
