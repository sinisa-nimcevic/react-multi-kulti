import React, { useEffect, useContext } from "react";
import { AppContext } from "Config/context";
import { useHistory } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import ChooseImageGame from "Components/ChooseImageGame/ChooseImageGame";

const GameChooseImageScreen = () => {
	const context = useContext(AppContext);
	const history = useHistory();

	useEffect(() => {
		const { pathname } = history.location;
		context.setActiveScreenByPathName(pathname);
	}, []);

	return (
		<Layout>
			<ChooseImageGame />
		</Layout>
	);
};

GameChooseImageScreen.propTypes = {};

export default GameChooseImageScreen;
