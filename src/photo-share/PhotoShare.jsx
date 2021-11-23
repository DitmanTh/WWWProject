import React from 'react';
import {
	BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import {
	Grid, Paper, Typography
} from '@material-ui/core';

// import necessary components
import TopBar from './components/top-bar/TopBar';
import UserDetail from './pages/user-detail/UserDetail';
import UserList from './pages/user-list/UserList';
import UserPhotos from './pages/user-photos/UserPhotos';
import PROG2053Models from '../model-data/PhotoApp';

class PhotoShare extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Grid container spacing={8}>
						<Grid item xs={12}>
							<TopBar/>
						</Grid>
						<div className="prog2053-main-topbar-buffer"/>
						<Grid item sm={3}>
							<Paper className="prog2053-main-grid-item">
								<UserList />
							</Paper>
						</Grid>
						<Grid item sm={9}>
							<Paper className="prog2053-main-grid-item">
								<Switch>
									<Route exact path="/photo-share">
										<Typography variant="body1">
											Welcome to your photosharing app! This <a href="https://material-ui.com/demos/paper/">Paper</a> component
											displays the main content of the application. The {'sm={9}'} prop in
											the <a href="https://material-ui.com/layout/grid/">Grid</a> item component makes it responsively
											display 9/12 of the window. The Switch component enables us to conditionally render different
											components to this part of the screen. You don&apos;t need to display anything here on the homepage,
											so you should delete this Route component once you get started.
										</Typography>
										<img src={`/images/${PROG2053Models.photoOfUserModel('57231f1a30e4351f4e9f4bda')[3].file_name}`} alt="test"></img>
									</Route>
									<Route path="/photo-share/users/:userId">
										<UserDetail />
									</Route>
									<Route path="/photo-share/photos/:userId">
										<UserPhotos />
									</Route>
									<Route path="/photo-share/users">
										<UserList />
									</Route>
								</Switch>
							</Paper>
						</Grid>
					</Grid>
				</div>
			</Router>
		);
	}
}

export default PhotoShare;
