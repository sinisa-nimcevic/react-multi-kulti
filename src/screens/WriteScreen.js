import React, { useContext, useEffect, useState, useRef } from "react";
import { AppContext } from "Config/context";
import { useHistory } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import Background from "Components/Background/Background";

const WriteScreen = () => {
	const textar = useRef(null);
	const context = useContext(AppContext);
	const history = useHistory();
	const [text, setText] = useState(context.getWriteText());

	const handleChange = e => {
		setText(e.target.value);
	};

	// context.setWriteText(text);
	const handleNext = () => {
		return new Promise((resolve, reject) => {
			context.setWriteText(text);
			resolve(true);
		});
	};

	useEffect(() => {
		const { pathname } = history.location;
		context.setActiveScreenByPathName(pathname);

		textar.current.focus();
	}, []);

	return (
		<Layout headerTitle="WAS SIND EIGENTLICH STEREOTYPE?" headerSubtitle="KLEINE ANREGUNG ZUR REFLEXION" onNext={handleNext} onPrev={handleNext}>
			<Background colorPrimary>
				<div className="write">
					<h2 className="write__heading text-handwritten color-white">Denken Sie spontan an eine/n Urlauber*in ...</h2>
					<textarea ref={textar} onChange={handleChange} value={text} className="write__textarea mt-triple mb-triple"></textarea>
					<h3 className="color-white pt-double pb-double">Stellen Sie es sich bildlich vor oder zeichnen Sie es ein.</h3>
					<h4>Auflösung? Bitte umdrehen.</h4>
				</div>
			</Background>
		</Layout>
	);
};

WriteScreen.propTypes = {};

export default WriteScreen;
