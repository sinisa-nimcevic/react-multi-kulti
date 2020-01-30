import React, { useContext, useEffect } from "react";
import { AppContext } from "Config/context";
import { useHistory } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import GameChooseReaction from "Components/GameChooseReaction/GameChooseReaction";

const GameChooseReactionScreen = () => {
	const context = useContext(AppContext);
	const history = useHistory();

	useEffect(() => {
		const { pathname } = history.location;
		context.setActiveScreenByPathName(pathname);
	}, []);

	return (
		<Layout>
			<GameChooseReaction />
		</Layout>
	);
};

GameChooseReactionScreen.propTypes = {};

export default GameChooseReactionScreen;
