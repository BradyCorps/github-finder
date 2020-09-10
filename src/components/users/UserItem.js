import React from 'react';
import PropTypes from 'prop-types';

// Class based component -->
// class UserItem extends Component {

// VS

// Stateless functional Component using hooks --> see below --> no need for 'render()'
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	// Destructure to remove repetitive this

	return (
		<div className="card text-center">
			<img
				src={avatar_url}
				alt=""
				className="round-img"
				style={{ width: '60px' }}
			/>
			<h3>{login}</h3>

			<div>
				<a href={html_url} className="btn btn-dark btn-sm my-1">
					More
				</a>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired,
};

export default UserItem;
