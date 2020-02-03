import React from "react";
import PropTypes from "prop-types";

const Background = props => {
	const getClasses = () => {
		const classes = ["background"];

		if (props.gray) classes.push("background--gray");
		if (props.colorPrimary) classes.push("background--primary");
		if (props.semaphore) classes.push("background--semaphore");
		if (props.flex) classes.push("flex");
		if (props.className)
			props.className.split(" ").forEach(el => {
				classes.push(el);
			});

		return classes.join(" ");
	};

	return <div className={getClasses()}>{props.children}</div>;
};

Background.propTypes = {
	gray: PropTypes.any
};

export default Background;
