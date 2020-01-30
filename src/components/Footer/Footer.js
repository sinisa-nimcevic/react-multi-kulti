import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "Components/Button/Button";
import { AppContext } from "Config/context";
import { useHistory } from "react-router-dom";

const Footer = ({ hidePrev, onNext, onPrev, disableNext }) => {
	const context = useContext(AppContext);
	const history = useHistory();

	const handleNavigation = type => {
		const navigationOnBefore = type === "next" ? onNext : onPrev;

		if (navigationOnBefore) {
			navigationOnBefore().then(canProgress => {
				if (canProgress) {
					goLogic(type);
				} else {
					console.log(`can't progress ${tupe}`);
				}
			});
		} else {
			goLogic(type);
		}
	};

	const goLogic = type => {
		const { screen, index, maxIndex } = context.getScreenData();
		const allowProgress = type === "next" ? screen.allowNext : screen.allowPrev;

		if (allowProgress) {
			const nextScreenIndex = type === "next" ? (index + 1 > maxIndex ? 0 : index + 1) : index - 1 > -1 ? index - 1 : maxIndex;
			const nextPath = context.getScreenPathByIndex(nextScreenIndex);
			history.push(nextPath);
		} else {
			console.log(`can't go ${type}`);
		}
	};

	return (
		<div className="footer">
			<div className="flex-row-1">
				<div className="flex-col-1 flex flex-dir--row-reverse mt-single">
					<Button text="NEXT" onClick={() => handleNavigation("next")} disabled={disableNext} />
					{!hidePrev && <Button text="PREVIOUS" onClick={() => handleNavigation("prev")} disabled={false} className="mr-single" />}
				</div>
			</div>
		</div>
	);
};

Footer.propTypes = {
	hidePrev: PropTypes.bool,
	disableNext: PropTypes.bool,
	onNext: PropTypes.func,
	onPrev: PropTypes.func
};

// IMPORTANT: onNext and onPrev should be promises that resolve to a boolean value.

export default Footer;
