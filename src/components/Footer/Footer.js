import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "Components/Button/Button";
import { AppContext } from "Config/context";
import { useHistory } from "react-router-dom";

const Footer = () => {
	const context = useContext(AppContext);
	const history = useHistory();

	const handleNextClick = () => {
		const { screen, index, maxIndex } = context.getScreenData();
		if (screen.allowNext) {
			const nextScreenIndex = index + 1 > maxIndex ? 0 : index + 1;
			const nextPath = context.getScreenPathByIndex(nextScreenIndex);
			history.push(nextPath);
		} else {
			console.log("show toast");
		}
	};

	return (
		<div className="flex-row-1 flex-dir--row-reverse">
			<div className="flex-col-basis-3">
				<Button text="NEXT" onClick={handleNextClick} />
			</div>
		</div>
	);
};

Footer.propTypes = {};

export default Footer;
