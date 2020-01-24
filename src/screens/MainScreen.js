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
			<button
				className="mr-double"
				onClick={() => {
					context.setToastContent(<div>this is a toast.</div>);
					context.setToastShowStatus(true);
				}}>
				toggle toast
			</button>

			<button
				onClick={() => {
					context.setFullScreenExplanationContent(<div>this is a fullscreen explanation.</div>);
					context.setShowFullScreenExplanationStatus(true);
				}}>
				toggle fullscreen explanation
			</button>
			<Game3x3Puzzle />
		</Layout>
	);
};

MainScreen.propTypes = {};

export default MainScreen;
