import React from "react";
import PropTypes from "prop-types";

const Header = ({ headerTitle, headerSubtitle }) => {
	return (
		<div className="header flex">
			{headerTitle && <HeaderTitle text={headerTitle} />}
			{headerSubtitle && <HeaderSubTitle text={headerSubtitle} />}
		</div>
	);
};

Header.propTypes = {
	headerTitle: PropTypes.string,
	headerSubtitle: PropTypes.string
};

const HeaderTitle = ({ text }) => {
	return <h1 className="align-self--flex-end">{text}</h1>;
};

const HeaderSubTitle = ({ text }) => {
	return <h3 className="mt-triple">{text}</h3>;
};

export default Header;
