import React, { useContext, useEffect } from "react";
import Layout from "Components/Layout/Layout";
import { AppContext } from "Config/context";
import { useHistory } from "react-router-dom";
import Game3x3Puzzle from "Components/Game3x3Puzzle/Game3x3Puzzle";

const Game3x3PuzzleScreen = () => {
	const context = useContext(AppContext);
	const history = useHistory();
	
	useEffect(() => {
		const { pathname } = history.location;
		context.setActiveScreenByPathName(pathname);
	}, []);

	return <Layout>
		<Game3x3Puzzle />
	</Layout>;
};

Game3x3PuzzleScreen.propTypes = {};

export default Game3x3PuzzleScreen;
