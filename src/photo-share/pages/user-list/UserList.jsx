import React from 'react';
import {Link} from 'react-router-dom';
import {
	Divider,
	List,
	ListItem,
	Typography
}
from '@material-ui/core';
import './UserList.css';
import fetchModel from '../../../lib/fetchModelData';
import PROG2053Models from '../../../model-data/PhotoApp';
/**
 * Define UserList, a React componment of PROG2053 part #2
 */

class UserList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			personArray: ''
		};
	}
	async componentDidMount() {
		console.log('getArray');
		const getArray = await fetchModel('/user/list');
		//console.log(getArray);
		const {array} = await getArray;

		await this.setState({personArray: array});
		console.log(this.state.personArray);
		//await this.setState({personArray: getArray});

		//const getArray = fetchModel('/photosOfUser/list').then(() => {
		//	this.setState({personArray: getArray});
		//	console.log('getArray');
		//});
	}

	list() {
		const retVal = []; 									//Array to be returned
		//The array of user objects
		const array = this.state.personArray;
		//const array = PROG2053Models.userListModel();
		//console.log(this.state.personArray);
		for (let i = 0; i < array.length; i++) { 			//Goes though each object in the array
			retVal[i] = <List component="nav">
				<ListItem> <Link to={`/photo-share/users/${array[i]._id}`}>
					{array[i].first_name} {array[i].last_name}
				</Link></ListItem>
				<Divider />
			</List>;
		}
		return retVal; 									//The return of html code formatted nicely
	}
	render() {
		return ( 										//The displayed page
			<div>
				<Typography variant="h5">
					Users:
				</Typography>
				<Typography>
					{this.list()}
				</Typography>
			</div>
		);
	}
}
export default UserList;
