import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "Config/context";

const TIME = 300;

const FullScreenExplanation = () => {
	const context = useContext(AppContext);

	const handleCloseExplanation = () => {
		context.setShowFullScreenExplanationStatus(false);
	};

	return context.getShowFullScreenExplanationStatus() ? (
		<FullScreenExplanationWithoutData content={context.getFullScreenExplanationContent()} closeExplanation={handleCloseExplanation} />
	) : null;
};

const FullScreenExplanationWithoutData = ({ closeExplanation, content }) => {
	const [classes, setClasses] = useState("fse-bg");
	const [contentClasses, setContentClasses] = useState("fse-content");

	const smoothCloseExplanation = () => {
		setClasses("fse-bg");
		setContentClasses("fse-content");

		setTimeout(() => {
			closeExplanation();
		}, TIME);
	};

	useEffect(() => {
		setTimeout(() => {
			setClasses("fse-bg fse-bg--show");
			setContentClasses("fse-content fse-content--show");
		}, TIME);
		return () => {
			setClasses("fse-bg");
			setContentClasses("fse-content");
		};
	}, []);

	return (
		<div className={classes}>
			<div className={contentClasses}>
				ExplanationContent
				{content}
				<button onClick={smoothCloseExplanation}>Close</button>
			</div>
		</div>
	);
};

FullScreenExplanationWithoutData.propTypes = {
	closeExplanation: PropTypes.func.isRequired,
	content: PropTypes.object
};

export default FullScreenExplanation;
