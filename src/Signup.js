import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Signup.css'
import '@fortawesome/fontawesome-free/css/all.css'



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
    
  }

  render() {
    return (
    <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign up to Twitter</h5>
                <form onSubmit={(e) => this.signup(e)} className="form-signin">
                  <div className="form-label-group">
                    <input type="Name" id="inputEmail" className="form-control" placeholder="Full Name" value={this.state.name} onChange={(e) => this.changeName(e)} required autofocus />
                    <label for="inputName">Name</label>
                  </div>
                  <div className="form-label-group">
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" value={this.state.email} onChange={(e) => this.changeEmail(e)} required autofocus />
                    <label for="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" value={this.state.password} onChange={(e) => this.changePassword(e)} required />
                    <label for="inputPassword">Password</label>
                  </div>
    								 <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Signup</button>
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

export default Signup;
