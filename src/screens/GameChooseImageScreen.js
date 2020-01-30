import React, { useEffect, useContext } from "react";
import { AppContext } from "Config/context";
import { useHistory } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import GameChooseImage from "Components/GameChooseImage/GameChooseImage";

const GameChooseImageScreen = () => {
	const context = useContext(AppContext);
	const history = useHistory();
	const screenData = context.getScreenData();

	useEffect(() => {
		const { pathname } = history.location;
		context.setActiveScreenByPathName(pathname);
	}, []);

	return (
		<Layout disableNext={!screenData.screen.allowNext}>
			<GameChooseImage />
		</Layout>
	);
};

GameChooseImageScreen.propTypes = {};

export default GameChooseImageScreen;
