import React from "react";
import PropTypes from "prop-types";
import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";

const Layout = props => {
	const { hidePrev, disableNext, headerTitle, headerSubtitle, onNext, onPrev } = props;

	return (
		<div className="main-container">
			<div className="flex-grid flex-grid--full-height">
				<div className="flex-row-1">
					<div className="flex-col-1">
						<Header headerTitle={headerTitle} headerSubtitle={headerSubtitle}/>
					</div>
				</div>
				<div className="flex-row-10">
					<div className="flex-col-1">{props.children}</div>
				</div>
				<div className="flex-row-1">
					<div className="flex-col-1">
						<Footer hidePrev={hidePrev} onNext={onNext} onPrev={onPrev} disableNext={disableNext} />
					</div>
				</div>
			</div>
		</div>
	);
};

Layout.propTypes = {
	hidePrev: PropTypes.bool,
	headerTitle: PropTypes.string,
	headerSubtitle: PropTypes.string,
	onNext: PropTypes.func,
	onPrev: PropTypes.func
};

export default Layout;
