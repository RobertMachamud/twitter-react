import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Login.css'
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios'


class Login extends Component {
  // Data
  state = {
    email: '',
    password: '',
    error: ''
  }


  //Functions
  changeEmail = (e) => {
    this.setState({email: e.target.value})
  }

  changePassword = (e) => {
    this.setState({password: e.target.value})
  }

  login = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/api/login', this.state).then( (res) => {
      if (!res.data.token) {
        this.setState({
          error: res.data
        })
      } else {
        this.setState({
          error: ''
        })
        localStorage.setItem('token', res.data.token)
        this.props.auth()
      }
    }).catch( (err) => {
      console.log('err', err)
    })
  }


  // Render
  render() {
    return (
      <div className="container_login">
  		<form onSubmit={(e) => this.login(e)}>
  			<input className="email" type="text" placeholder="Email" value={this.state.email} onChange={(e) => this.changeEmail(e)} />
  			<input className="password" type="password" placeholder="password" value={this.state.password} onChange={(e) => this.changePassword(e)} />
  			<button className="sub" type="submit">Login</button>
  		</form>
  	</div>
    )
  }
}

export default Login;
