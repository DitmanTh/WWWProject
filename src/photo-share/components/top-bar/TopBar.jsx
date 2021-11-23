import React from 'react';
import {
	AppBar, Toolbar, Typography
} from '@material-ui/core';
import {
	BrowserRouter as Route, Switch
} from 'react-router-dom';
import './TopBar.css';
import PROG2053Models from '../../../model-data/PhotoApp';
import fetchModel from '../../../lib/fetchModelData';

/**
 * Define TopBar, a React componment of PROG2053 part #2
 */
class TopBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ''
		};
	}

	componentDidUpdate() {
		const id = window.location.pathname;
		const idArray = id.split('/');
		//console.log(idArray);

		if (idArray.length === 4) {
			this.setState({data: PROG2053Models.userModel(idArray[idArray.length - 1].first_name)});
		}
	}

	getName() {
		//fetches pathname for the page (URL) we are currently on, since ID will always be in the URL
		const id = window.location.pathname;
		//Splits the URL apart at the '/' marks so we can get the individual information supplied by the url
		const idArray = id.split('/');
		console.log(idArray);
		//Fetches the last item in the URL, which is the ID of the user. We then use that id to get the name of the person we are looking at the datas of
		let retVal;
		if (idArray.length === 4) {
			retVal = PROG2053Models.userModel(idArray[idArray.length - 1]).first_name; //fetchModel(idArray[idArray.length - 1]).first_name;
		} else {
			retVal = 1;
		}
		//returns the name of the user we are currently looking at
		return retVal;
	}

	render() {
		return (
			<AppBar className="prog2053-topbar-appBar" position="absolute" >
				<Toolbar>
					<Typography variant="h5" component ="div" color="inherit">
						Thomas Ditman
					</Typography>
					<Typography variant="h5" component ="div" color="inherit">
						<Switch>
							<Route path="/photo-share/users/:userId">
								Details of: {this.getName()}
							</Route>
							<Route path="/photo-share/photos/:userId">
								Photos of: {this.getName()}
							</Route>
							<Route path="/">
							</Route>
						</Switch>
					</Typography>
				</Toolbar>
			</AppBar>
		);
	}
}

export default TopBar;
