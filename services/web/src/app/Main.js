//Libs
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Newsroom from '../app/Newsroom';
import NotFound from '../app/NotFound';

class Main extends Component {
  render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' render={({path}) =>
						<div>
							<Newsroom />
						</div>
					} />
					<Route path='*' component={NotFound} />
				</Switch>
			</div>
    );
  }
}

export default Main;
