import { hot } from "react-hot-loader"
import * as React from "react"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as actions from './actions/actions'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect } from 'react-router-dom'

import HomePage from './views/HomePage';
import ProjectPage from './views/ProjectPage';

import "./styles/theme.sass";


class App extends React.Component {
    // eslint-disable-line react/prefer-stateless-function

    render() {
		return (
			<Router basename={"/portfolio"} > 
			{/* change the string in basename to "/" for development */}
				<div className={"page-wrapper"}>
					<Switch>
						<Route key={"home"} path={"/"} exact component={HomePage}/>
						<Route key={"project"} path={"/project"} component={ProjectPage}/>
						<Redirect from={"*"} to={"/"} />
					</Switch>
				</div>	

			</Router>
			)
	}

}

export default withRouter(hot(module)(connect(null)(App)))
