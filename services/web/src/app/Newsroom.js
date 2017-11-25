//Libs
import React, { Component } from 'react';
// Components
// styles
import css from './newsroom.css';

class Newsroom extends Component {
	render() {
		return(
			<div className={[css.newsroom].join(' ')}>
				<div className={[css.header].join(' ')}>
					<div className={['container',css.container,css.container].join(' ')}>
						<img alt='' src={require('./assets/logo.svg')} width="210" height="50" />
						<div className={[css.search].join(' ')}>
							<form className={[css['search-form']].join(' ')}>
								<input type="text" placeholder="Search NewsRoom" />
								<a href="/"><button type="submit" className={[css['search-btn']].join(' ')}>Search</button></a>
							</form>
						</div>
					</div>
				</div>
				<div className={[css.menu].join(' ')}>
					<div className={['container',css.container].join(' ')}>
						<ul className={[css.nav].join(' ')}>
							<li className={[css.active].join(' ')}><a href="/">Top Stories</a></li>
							<li><a href="/">World</a></li>
							<li><a href="/">Business</a></li>
							<li><a href="/">Technology</a></li>
							<li><a href="/">Entertainment</a></li>
							<li><a href="/">Sports</a></li>
							<li><a href="/">Science</a></li>
							<li><a href="/">Health</a></li>
						</ul>
					</div>
				</div>
				<div className={[css.main].join(' ')}>
					<div className={['container',css.container].join(' ')}>
						<div className={['row'].join(' ')}>
							<div className={['col-md-5',css['col-md-5']].join(' ')}>
								<p className={[css.date].join(' ')}>November 7, 2014</p>
								<h2><span>Introducing Bass</span></h2>
								<p>A new app by the creators of Shutterbugg that lets you enjoy your favorite music everywhere you go.</p>
							</div>
						</div>
					</div>
				</div>
				<div className={['supporting'].join(' ')}>
					<div className={['container',css.container].join(' ')}>
						<div className={['row'].join(' ')}>
							<div className={['col-md-8',css['col-md-8']].join(' ')}>
								<h3>Latest News</h3>
								<ul>
									<li>
										<p className={[css.date].join(' ')}>November 5, 2014</p>
										<a><h4><span>MOVE Launches in London</span></h4></a>
									</li>
									<li>
										<p className={[css.date].join(' ')}>November 4, 2014</p>
										<a><h4><span>Introducing Excursion</span></h4></a>
									</li>
									<li>
										<p className={[css.date].join(' ')}>November 2, 2014</p>
										<a><h4><span>Improvements to Shutterbugg Arrive</span></h4></a>
									</li>
								</ul>
							</div>
							<div className={['col-md-4',css['col-md-4'],css.sidebar].join(' ')}>
								<h3>Upcoming Events</h3>
								<ul>
									<li>
										<p className={[css.date].join(' ')}>November 8-12, 2014</p>
										<a><h4><span>Innovation Cloud 2014</span></h4></a>
									</li>
									<li>
										<p className={[css.date].join(' ')}>November 21, 2014</p>
										<a><h4><span>LL Retrospective</span></h4></a>
									</li>
									<li>
										<p className={[css.date].join(' ')}>December 5, 2014</p>
										<a><h4><span>M.O.N.E.Y. Launch Event</span></h4></a>
									</li>
								</ul>
							</div>
						</div>
						<div className={['row'].join(' ')}>
							<div className={['col-md-12',css['col-md-12']].join(' ')}>
								<img alt='' src={require('./assets/ad.jpg')} />
							</div>
						</div>
					</div>
				</div>
				<div className={[css.footer].join(' ')}>
					<div className={['container',css.container].join(' ')}>
						<ul>
							<li><a href="/">About</a></li>
							<li><a href="/">Terms</a></li>
							<li><a href="/">Send Feedback</a></li>
						</ul>
						<p> 2014 Newsroom</p>
					</div>
				</div>
			</div>
		);
	}
}
export default Newsroom;
