import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "Config/context";

const FullScreenExplanation = ({ type = "fse" }) => {
	const context = useContext(AppContext);
	const CLASSES = {
		fse: {
			bg: "fse-bg",
			bgShow: "fse-bg fse-bg--show",
			fg: "fse-content",
			fgShow: "fse-content fse-content--show",
			close: "fse-content__close",
			shouldShow: context.getShowFullScreenExplanationStatus,
			control: context.setShowFullScreenExplanationStatus,
			content: context.getFullScreenExplanationContent,
			time: 300,
		},
		toast: {
			bg: "toast-container",
			bgShow: "toast-container toast-container--show",
			fg: "toast",
			fgShow: "toast toast--show",
			close: "toast__close",
			shouldShow: context.getToastShowStatus,
			control: context.setToastShowStatus,
			content: context.getToastContent,
			time: 150,
		}
	};

	const handleCloseExplanation = () => {
		CLASSES[type].control(false);
	};

	return CLASSES[type].shouldShow() ? (
		<FullScreenExplanationWithoutData
			config={CLASSES[type]}
			closeExplanation={handleCloseExplanation}
		/>
	) : null;
};

FullScreenExplanation.propTypes = {
	type: PropTypes.string
};

const FullScreenExplanationWithoutData = ({ config, closeExplanation }) => {
	const [classes, setClasses] = useState(config.bg);
	const [contentClasses, setContentClasses] = useState(config.fg)

	const smoothCloseExplanation = () => {
		setClasses(config.bg);
		setContentClasses(config.fg);

		setTimeout(() => {
			closeExplanation();
		}, config.time);
	};

	useEffect(() => {
		setTimeout(() => {
			setClasses(config.bgShow);
			setContentClasses(config.fgShow);
		}, config.time);
		return () => {
			setClasses(config.bg);
			setContentClasses(config.fg);
		};
	}, []);

	return (
		<div className={classes}>
			<div className={contentClasses}>
				{config.content()}
				<button className={config.close} onClick={smoothCloseExplanation}>Close</button>
			</div>
		</div>
	);
};

FullScreenExplanationWithoutData.propTypes = {
	closeExplanation: PropTypes.func.isRequired,
	content: PropTypes.object,
	time: PropTypes.number,
	config: PropTypes.object
};

export default FullScreenExplanation;
