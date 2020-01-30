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
			shouldShow: context.getFullScreenExplanationStatus,
			content: context.getFullScreenExplanationContent,
			defaultOpenCloseControl: context.setFullScreenExplanationStatus,
			showOwnControls: context.getFullScreenExplanationOwnControls,
			time: 300
		},
		toast: {
			bg: "toast-container",
			bgShow: "toast-container toast-container--show",
			fg: "toast",
			fgShow: "toast toast--show",
			close: "toast__close",
			shouldShow: context.getToastStatus,
			content: context.getToastContent,
			defaultOpenCloseControl: context.setToastStatus,
			showOwnControls: context.getToastOwnControls,
			time: 150
		}
	};

	const handleCloseExplanation = () => {
		CLASSES[type].defaultOpenCloseControl(false);
	};

	return CLASSES[type].shouldShow() ? (
		<FullScreenExplanationWithoutData config={CLASSES[type]} closeExplanation={handleCloseExplanation} showOwnControls={CLASSES[type].showOwnControls} />
	) : null;
};

FullScreenExplanation.propTypes = {
	type: PropTypes.string
};

const FullScreenExplanationWithoutData = ({ config, closeExplanation, showOwnControls }) => {
	const [classes, setClasses] = useState(config.bg);
	const [contentClasses, setContentClasses] = useState(config.fg);

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
				{showOwnControls() && <Controls className={config.close} onClick={smoothCloseExplanation} />}
			</div>
		</div>
	);
};

FullScreenExplanationWithoutData.propTypes = {
	closeExplanation: PropTypes.func.isRequired,
	content: PropTypes.object,
	showOwnControls: PropTypes.func,
	time: PropTypes.number,
	config: PropTypes.object
};

const Controls = ({ className, onClick }) => {
	return (
		<div className="flex flex-dir--row-reverse p-double">
			<button className={className} onClick={onClick}>
				Close
			</button>
		</div>
	);
};

Controls.propTypes = {
	className: PropTypes.string,
	onClick: PropTypes.func
};

export default FullScreenExplanation;
