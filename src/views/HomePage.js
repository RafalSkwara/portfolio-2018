import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom'
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
			<p>Hello</p>
		)
	}

}

export default withRouter(connect(mapStateToProps)(HomePage))