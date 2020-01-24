import React, { Component } from "react";
import PropTypes from "prop-types";
import first from "lodash/first";

const BLANK_SCREEN = {
	path: null,
	active: false,
	allowNext: true
};

const SCREENS = [
	{ ...BLANK_SCREEN, path: "/", active: true, allowNext: true },
	{ ...BLANK_SCREEN, path: "/GameChooseImage" },
	{ ...BLANK_SCREEN, path: "/Game3x3Puzzle" },
	{ ...BLANK_SCREEN, path: "/GameSocialCircles" },
	{ ...BLANK_SCREEN, path: "/GameChooseReaction" },
	{ ...BLANK_SCREEN, path: "/GameGlasses" },
	{ ...BLANK_SCREEN, path: "/Final" }
];

export class DataProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			screens: SCREENS,
			showFullScreenExplanation: false,
			fullScreenExplanationContent: null,
			showToast: false,
			toastContent: null
		};
	}

	getScreenData() {
		return {
			screen: first(this.state.screens.filter(scr => scr.active === true)),
			index: (() => {
				let index = 0;
				this.state.screens.forEach((scr, i) => {
					if (scr.active === true) {
						index = i;
					}
				});
				return index;
			})(),
			maxIndex: this.state.screens.length - 1
		};
	}

	getScreensArray() {
		return this.state.screens;
	}

	getScreenPathByIndex(i) {
		return this.state.screens[i].path;
	}

	setActiveScreenByPathName(pathname) {
		const { screens } = this.state;
		this.setState({
			screens: screens.map(scr => {
				scr.active = scr.path === pathname;
				return scr;
			})
		});
	}

	getShowFullScreenExplanationStatus() {
		return this.state.showFullScreenExplanation;
	}

	setShowFullScreenExplanationStatus(status) {
		this.setState({ showFullScreenExplanation: !!status });
	}

	getFullScreenExplanationContent() {
		return this.state.fullScreenExplanationContent;
	}

	setFullScreenExplanationContent(content) {
		this.setState({ fullScreenExplanationContent: content });
	}

	getToastShowStatus() {
		return this.state.showToast;
	}

	setToastShowStatus(status) {
		this.setState({ showToast: !!status });
	}

	getToastContent() {
		return this.state.toastContent;
	}

	setToastContent(content) {
		this.setState({ toastContent: content });
	}

	render() {
		return (
			<AppContext.Provider
				value={{
					state: this.state,
					getScreensArray: this.getScreensArray.bind(this),
					getScreenData: this.getScreenData.bind(this),
					getScreenPathByIndex: this.getScreenPathByIndex.bind(this),
					setActiveScreenByPathName: this.setActiveScreenByPathName.bind(this),
					getShowFullScreenExplanationStatus: this.getShowFullScreenExplanationStatus.bind(this),
					setShowFullScreenExplanationStatus: this.setShowFullScreenExplanationStatus.bind(this),
					getFullScreenExplanationContent: this.getFullScreenExplanationContent.bind(this),
					setFullScreenExplanationContent: this.setFullScreenExplanationContent.bind(this),
					getToastContent: this.getToastContent.bind(this),
					setToastContent: this.setToastContent.bind(this),
					getToastShowStatus: this.getToastShowStatus.bind(this),
					setToastShowStatus: this.setToastShowStatus.bind(this),
				}}>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}

DataProvider.propTypes = {
	children: PropTypes.element
};

export const AppContext = React.createContext();
