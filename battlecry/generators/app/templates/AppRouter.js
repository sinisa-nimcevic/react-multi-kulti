import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppContext } from "Config/context";
import MainScreen from "Screens/MainScreen";

const AppRouter = () => {
	const context = useContext(AppContext);

	return (
		<Router>
			<Switch>
				<Route path="/" exact component={MainScreen} />
			</Switch>
		</Router>
	);
};

export default AppRouter;
