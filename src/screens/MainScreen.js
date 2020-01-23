import React, { useContext, useEffect } from "react";
import { AppContext } from "Config/context";
import { useHistory } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import Game3x3Puzzle from "Components/Game3x3Puzzle/Game3x3Puzzle";

const MainScreen = () => {
	const context = useContext(AppContext);
	const history = useHistory();

	useEffect(() => {
		const { pathname } = history.location;
		context.setActiveScreenByPathName(pathname);
	}, []);

	return (
		<Layout>
			<Game3x3Puzzle />
		</Layout>
	);
};

// <Button text="toggle fullScreenExplanation" onClick={() => {
// 	context.setFullScreenExplanationContent(<div>hi</div>)
// 	context.setShowFullScreenExplanationStatus(true)}} />

MainScreen.propTypes = {};

export default MainScreen;
