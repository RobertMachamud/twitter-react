import React, {Component} from 'react'
import './Header.css'

class Header extends Component {
	// Data
	state = {

	}
	// Functions


	// Render
	render() {
		return (
			<header className="container-fluid">

			<div className="row align-items-center header_top">
				<div className="col">
					<div className="nav_bar">
						<nav>
							<ul className="list-unstyled">
								<li><i className="fas fa-home"></i>Home</li>
								<li><i className="far fa-bell"></i>Notification</li>
								<li><i className="far fa-envelope"></i>Messages</li>
							</ul>
						</nav>
					</div>
				</div>

				<div className="col">
					<div className="logo"><a href=""><i className="fab fa-twitter"></i></a></div>
				</div>

				<div className="col">
					<div className="search_bar">
						<input type="text" placeholder="Search for Tweets..."/>

						<div className="btn_round">
							<i className="fas fa-user"></i>
						</div>
						<button className="tweet_btn">Logout</button>
					</div>
				</div>
			</div>


			<div className="row" id="jumbotron">
				<div className="col">
					<h1>
						Lern to Code<br /> in Paradise<br />
					<span className="sub_headl">9-week web development bootcamp in Thailand</span>
					</h1>
				</div>
			</div>


			<div className="row header_bottom">

				<div className="col">
					<div className="profile_pic"></div>
				</div>

				<div className="col">
					<div className="channels d-flex content-start">
						<div className="channel">Tweets</div>
						<div className="channel">Following</div>
						<div className="channel">Followers</div>
						<div className="channel">Likes</div>
					</div>
				</div>

				<div className="col d-flex content-align-center">
					<button type="button" className="btn btn-primary follow_btn">Following</button>
				</div>
			</div>

</header>
		)
	}
}

export default Header
