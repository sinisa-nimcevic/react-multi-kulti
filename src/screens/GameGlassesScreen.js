import React, { useContext, useEffect } from "react";
import Layout from "Components/Layout/Layout";
import { AppContext } from "Config/context";
import { useHistory } from "react-router-dom";

const GameGlassesScreen = () => {
	const context = useContext(AppContext);
	const history = useHistory();
	
	useEffect(() => {
		const { pathname } = history.location;
		context.setActiveScreenByPathName(pathname);
	}, []);

	return <Layout>GameGlassesScreen created.</Layout>;
};

GameGlassesScreen.propTypes = {};

export default GameGlassesScreen;
