import React, { useContext, useEffect } from "react";
import Layout from "Components/Layout/Layout";
import { AppContext } from "Config/context";
import { useHistory } from "react-router-dom";

const __NaMe__Screen = () => {
	const context = useContext(AppContext);
	const history = useHistory();
	
	useEffect(() => {
		const { pathname } = history.location;
		context.setActiveScreenByPathName(pathname);
	}, []);

	return <Layout>__NaMe__Screen created.</Layout>;
};

__NaMe__Screen.propTypes = {};

export default __NaMe__Screen;
