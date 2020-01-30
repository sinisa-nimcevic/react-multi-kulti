import React, { Component } from "react";
import PropTypes from "prop-types";
import first from "lodash/first";

const BLANK_SCREEN = {
	path: null,
	active: false,
	allowNext: false,
	allowPrev: true
};

const SCREENS = [
	{ ...BLANK_SCREEN, path: "/", active: true, allowNext: true },
	{ ...BLANK_SCREEN, path: "/Intro", allowNext: true, allowPrev: true },
	{ ...BLANK_SCREEN, path: "/Write", allowNext: true, allowPrev: true },
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
			fullScreenExplanationStatus: false,
			fullScreenExplanationContent: null,
			fullScreenExplanationOwnControls: true,
			toastStatus: false,
			toastContent: null,
			toastOwnControls: true,
			writeText: ""
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

	setScreenAllowNextByIndex(i) {
		const { screens } = this.state;

		this.setState({
			screens: screens.map((scr, idx) => {
				if (idx === i) scr.allowNext = true;
				return scr;
			})
		});
	}

	getFullScreenExplanationStatus() {
		return this.state.fullScreenExplanationStatus;
	}

	setFullScreenExplanationStatus(status) {
		this.setState({ fullScreenExplanationStatus: !!status });
	}

	getFullScreenExplanationContent() {
		return this.state.fullScreenExplanationContent;
	}

	setFullScreenExplanationContent(content) {
		this.setState({ fullScreenExplanationContent: content });
	}

	getFullScreenExplanationOwnControls() {
		return this.state.fullScreenExplanationOwnControls;
	}

	setFullScreenExplanationOwnControls(status) {
		this.setState({ fullScreenExplanationOwnControls: status });
	}

	setFullScreenExplanation(content, status, ownControls) {
		content !== undefined && this.setState({ fullScreenExplanationContent: content });
		status !== undefined && this.setState({ fullScreenExplanationStatus: status });
		ownControls !== undefined && this.setState({ fullScreenExplanationOwnControls: ownControls });
	}

	getToastStatus() {
		return this.state.toastStatus;
	}

	setToastStatus(status) {
		this.setState({ toastStatus: !!status });
	}

	getToastContent() {
		return this.state.toastContent;
	}

	setToastContent(content) {
		this.setState({ toastContent: content });
	}

	getToastOwnControls() {
		return this.state.toastOwnControls;
	}

	setToastOwnControls(status) {
		this.setState({ toastOwnControls: status });
	}

	getWriteText() {
		return this.state.writeText;
	}

	setWriteText(text) {
		this.setState({ writeText: text });
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
					setScreenAllowNextByIndex: this.setScreenAllowNextByIndex.bind(this),

					getFullScreenExplanationStatus: this.getFullScreenExplanationStatus.bind(this),
					setFullScreenExplanationStatus: this.setFullScreenExplanationStatus.bind(this),
					getFullScreenExplanationContent: this.getFullScreenExplanationContent.bind(this),
					setFullScreenExplanationContent: this.setFullScreenExplanationContent.bind(this),
					getFullScreenExplanationOwnControls: this.getFullScreenExplanationOwnControls.bind(this),
					setFullScreenExplanationOwnControls: this.setFullScreenExplanationOwnControls.bind(this),
					setFullScreenExplanation: this.setFullScreenExplanation.bind(this),

					getToastContent: this.getToastContent.bind(this),
					setToastContent: this.setToastContent.bind(this),
					getToastStatus: this.getToastStatus.bind(this),
					setToastStatus: this.setToastStatus.bind(this),
					getToastOwnControls: this.getToastOwnControls.bind(this),
					setToastOwnControls: this.setToastOwnControls.bind(this),

					getWriteText: this.getWriteText.bind(this),
					setWriteText: this.setWriteText.bind(this)
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
