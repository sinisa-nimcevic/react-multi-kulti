import React, { useContext, useEffect } from "react";
import Layout from "Components/Layout/Layout";
import { AppContext } from "Config/context";
import { useHistory } from "react-router-dom";

const GameChooseReactionScreen = () => {
	const context = useContext(AppContext);
	const history = useHistory();
	
	useEffect(() => {
		const { pathname } = history.location;
		context.setActiveScreenByPathName(pathname);
	}, []);

	return <Layout>GameChooseReactionScreen created.</Layout>;
};

GameChooseReactionScreen.propTypes = {};

export default GameChooseReactionScreen;
