import React from 'react';
// import PropTypes from 'prop-types';

export default function Alert(props) {

	// const Capitalize = (word) => {
	// 	const lower = word.toLowerCase();
	// 	return lower.charAt(0).toUpperCase() + lower.slice(1);
	// }

	return(
		props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
		  <strong>{props.alert.msg}</strong>
		</div>
	);
}

/*Alert.propTypes = {
	alert: PropTypes.string
}*/