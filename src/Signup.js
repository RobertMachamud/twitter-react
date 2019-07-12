import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Signup.css'
import '@fortawesome/fontawesome-free/css/all.css'
import axios from 'axios'



class Signup extends Component {
  // Data
  state = {
    name: '',
    email: '',
    password: ''
  }

  // Functions
  changeName = (e) => {
    this.setState({name: e.target.value})
  }

  changeEmail = (e) => {
    this.setState({email: e.target.value})
  }

  changePassword = (e) => {
    this.setState({password: e.target.value})
  }

  signup = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/api/signup', this.state).then( (res) => {
      // console.log('>>>>>>>>>>>>>>>>>>',res.data.token);
      localStorage.setItem('token', res.data.token)
      this.props.auth()
    }).catch( (err) => {
      console.log('err', err)
    })
  }

  render() {
    return (
      <div className="container_signup">
      <form onSubmit={(e) => this.signup(e)}>
        <input className="username" type="text" placeholder="Username" value={this.state.name} onChange={(e) => this.changeName(e)} />
        <input className="email" type="text" placeholder="Email" value={this.state.email} onChange={(e) => this.changeEmail(e)} />
        <input className="password" type="password" placeholder="password" value={this.state.password} onChange={(e) => this.changePassword(e)} />
        <button className="sub" type="submit">Login</button>
      </form>
    </div>
    )
  }
}

export default Signup
