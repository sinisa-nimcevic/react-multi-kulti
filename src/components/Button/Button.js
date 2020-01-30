import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick, disabled, className }) => {
	const getClasses = () => {
		const classes = [];

		className && className.split(" ").forEach(el => {
			classes.push(el);
		});

		return classes.join(" ");
	};

	return (
		<button className={getClasses()} onClick={onClick} disabled={disabled}>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	className: PropTypes.string
};

export default Button;
