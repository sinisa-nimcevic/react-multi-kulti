import React, { useContext, useEffect } from "react";
import { AppContext } from "Config/context";
import { useHistory } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import Game3x3Puzzle from "Components/Game3x3Puzzle/Game3x3Puzzle";

const Game3x3PuzzleScreen = () => {
	const context = useContext(AppContext);
	const history = useHistory();
	const screenData = context.getScreenData();

	useEffect(() => {
		const { pathname } = history.location;
		context.setActiveScreenByPathName(pathname);
	}, []);

	return (
		<Layout disableNext={!screenData.screen.allowNext} headerTitle="STEREOTYP ODER VORURTEIL?" headerSubtitle="KLEINE ANREGUNG ZUR REFLEXION">
			<Game3x3Puzzle />
		</Layout>
	);
};

Game3x3PuzzleScreen.propTypes = {};

export default Game3x3PuzzleScreen;
