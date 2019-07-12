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
    <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Login to Twitter</h5>
                <form className="form-signin" onSubmit={(e) => this.login(e)}>
                  <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" value={this.state.email} onChange={(e) => this.changeEmail(e)} required autofocus />
                    <label for="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" value={this.state.password} onChange={(e) => this.changePassword(e)} required />
                    <label for="inputPassword">Password</label>
                  </div>
    								 <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Login</button>
                  <div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" for="customCheck1">Remember password</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
