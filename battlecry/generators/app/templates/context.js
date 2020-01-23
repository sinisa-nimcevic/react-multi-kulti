import React, { Component } from "react";
import PropTypes from "prop-types";

export class DataProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<AppContext.Provider
				value={{
					state: this.state
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
