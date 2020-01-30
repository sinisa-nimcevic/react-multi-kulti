import React, { useContext, useEffect } from "react";
import { AppContext } from "Config/context";
import { useHistory } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import GameGlasses from "Components/GameGlasses/GameGlasses";

const GameGlassesScreen = () => {
	const context = useContext(AppContext);
	const history = useHistory();

	useEffect(() => {
		const { pathname } = history.location;
		context.setActiveScreenByPathName(pathname);
	}, []);

	return (
		<Layout>
			<GameGlasses />
		</Layout>
	);
};

GameGlassesScreen.propTypes = {};

export default GameGlassesScreen;
