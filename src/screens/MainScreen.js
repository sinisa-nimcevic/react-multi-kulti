import React, { useContext, useEffect } from "react";
import Layout from "Components/Layout/Layout";
import { AppContext } from "Config/context";
import { useHistory } from "react-router-dom";

const MainScreen = () => {
	const context = useContext(AppContext);
	const history = useHistory();

	useEffect(() => {
		const { pathname } = history.location;
		context.setActiveScreenByPathName(pathname);
	}, []);

	return (
		<Layout hidePrev>
			<img src="assets/mainbg.png" style={{ width: "100%" }} />
		</Layout>
	);
};

MainScreen.propTypes = {};

export default MainScreen;
