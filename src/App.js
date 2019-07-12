import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from'./Header'
import Content from './Content'
import '@fortawesome/fontawesome-free/css/all.css'


class App extends Component {
  // Data
  state = {
    hashtag: ''
  }


  // Functions
  getMessages = (id) => {
    this.setState({
      hashtag: id
    })
  }


  // Render
  render() {
    return (
      <div id="cont">
          <Header />
          <Content getMessages={this.getMessages} hashtag={this.state.hashtag} />
      </div>
    )
  }
}

export default App;
