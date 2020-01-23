import React, { useContext, useEffect } from "react";
import Layout from "Components/Layout/Layout";
import { AppContext } from "Config/context";
import { useHistory } from "react-router-dom";

const FinalScreen = () => {
	const context = useContext(AppContext);
	const history = useHistory();

	useEffect(() => {
		const { pathname } = history.location;
		context.setActiveScreenByPathName(pathname);
	}, []);

	return <Layout>FinalScreen created.</Layout>;
};

FinalScreen.propTypes = {};

export default FinalScreen;
