import React from "react";
import PropTypes from "prop-types";
import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";

const Layout = props => {
	return (
		<div className="flex-grid flex-grid--full-height">
			<div className="flex-row-1">
				<div className="flex-col-1">
					<Header />
				</div>
			</div>
			<div className="flex-row-10">
				<div className="flex-col-1">{props.children}</div>
			</div>
			<div className="flex-row-1">
				<div className="flex-col-1">
					<Footer />
				</div>
			</div>
		</div>
	);
};

Layout.propTypes = {};

export default Layout;
