import React from 'react';
import { Route} from 'react-router-dom';
	//  Redirect 
// import { isLoginu, isLogina } from '../utils/Token';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
	return (
		// restricted = false meaning public route
		// restricted = true meaning restricted route
		<Route {...rest} render={props => (
			// isLoginu() && restricted ?
			// 	<Redirect to="/feed" />
			// 	: 
				// isLogina() && restricted ? 
				// <Redirect to="/Adminhome" /> : 
				<Component {...props} />
		)} />
	);
};

export default PublicRoute;