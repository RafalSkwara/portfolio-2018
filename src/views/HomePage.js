import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, NavLink } from 'react-router-dom'
import "../styles/HomePage.sass";

const mapStateToProps = state => ({

});

class HomePage extends React.Component {
	// eslint-disable-line react/prefer-stateless-function
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		window.scrollTo({
			"behavior": "smooth",
			"left": 0,
			"top": 0
		});

	}
	render() {
		return (
			<section className={"hero"}>
				<header>
					<div className={"hero__logo flex-center"}>Logo</div>
					<nav>
						<NavLink to="project" className={"link flex-center"}>Project</NavLink>

					</nav>
				</header>
				<p>Hello</p>
			</section>
		)
	}

}

export default withRouter(connect(mapStateToProps)(HomePage))