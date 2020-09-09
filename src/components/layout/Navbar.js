// Use snippets extention --> Formatting can be done with this in this case --> using RCE followed by 'tab' --> class is based on file name ie 'navbar'

// Props === properties that can be passed into a component from outside --> see app.js --> Navbar 'title = 'Github Finder''
// Props then are enabled by adding curly braces {}. Inside braces === this.props.title (title being the name of the prop)

import React, { Component } from 'react';
// Prop types === type checking === will tell if the prop should be a string, number, array, object, etc.
// Prop types need to be brought in --> emmet extention impt [enter key]
import PropTypes from 'prop-types';

export class Navbar extends Component {
	// React allows to use Default props for when a property is not enabled --> are overwritten by props written --> allows developer to make changes without changing code
	static defaultProps = {
		title: 'Github Finder',
		icon: 'fab fa-github',
	};

	static propTypes = {
		// When brought in --> should be written in PascalCase ie capitalize every word
		title: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
	};

	render() {
		return (
			<nav className="navbar bg-primary">
				<h1>
					<i className={this.props.icon} /> {this.props.title}
				</h1>
			</nav>
		);
	}
}

export default Navbar;
