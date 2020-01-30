import React, { useContext } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import FullScreenExplanation from "Components/FullScreenExplanation/FullScreenExplanation";
import Toast from "Components/Toast/Toast";
import MainScreen from "Screens/MainScreen";
import IntroScreen from "Screens/IntroScreen";
import WriteScreen from "Screens/WriteScreen";
import GameChooseImageScreen from "Screens/GameChooseImageScreen";
import Game3x3PuzzleScreen from "Screens/Game3x3PuzzleScreen";
import GameSocialCirclesScreen from "Screens/GameSocialCirclesScreen";
import GameChooseReactionScreen from "Screens/GameChooseReactionScreen";
import GameGlassesScreen from "Screens/GameGlassesScreen";
import FinalScreen from "Screens/FinalScreen";

const AppRouter = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={MainScreen} />
					<Route path="/Intro" exact component={IntroScreen} />
					<Route path="/Write" exact component={WriteScreen} />
					<Route path="/GameChooseImage" exact component={GameChooseImageScreen} />
					<Route path="/Game3x3Puzzle" exact component={Game3x3PuzzleScreen} />
					<Route path="/GameSocialCircles" exact component={GameSocialCirclesScreen} />
					<Route path="/GameChooseReaction" exact component={GameChooseReactionScreen} />
					<Route path="/GameGlasses" exact component={GameGlassesScreen} />
					<Route path="/Final" exact component={FinalScreen} />
				</Switch>
			</Router>
			<FullScreenExplanation />
			<Toast />
		</>
	);
};

export default AppRouter;
