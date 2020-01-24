import React, { useContext, useEffect } from "react";
import { AppContext } from "Config/context";
import { useHistory } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import GameSocialCircles from "Components/GameSocialCircles/GameSocialCircles";

const GameSocialCirclesScreen = () => {
	const context = useContext(AppContext);
	const history = useHistory();

	useEffect(() => {
		const { pathname } = history.location;
		context.setActiveScreenByPathName(pathname);
	}, []);

	return (
		<Layout>
			<GameSocialCircles />
		</Layout>
	);
};

GameSocialCirclesScreen.propTypes = {};

export default GameSocialCirclesScreen;
