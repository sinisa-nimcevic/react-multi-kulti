import React from "react";
import PropTypes from "prop-types";

const TextBox = props => {
	const { className } = props;
	const getClasses = () => {
		const classes = ["textbox"];

		if (className) {
			className.split(" ").forEach(cls => {
				classes.push(cls);
			});
		}

		return classes.join(" ");
	};

	return <div className={getClasses()}>{props.children}</div>;
};

TextBox.propTypes = {};

export default TextBox;
