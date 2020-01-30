import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "Config/context";

const VARIATIONS = [
	{
		id: 1,
		q: "question 1",
		i: "illustration 1",
		a: "suggestion 1",
		answers: [
			{ id: 1, text: "c1", explanation: "c1 explanation" },
			{ id: 2, text: "c2", explanation: "c2 explanation" },
			{ id: 3, text: "c3", explanation: "c3 explanation" },
			{ id: 4, text: "c4", explanation: "c4 explanation" },
			{ id: 5, text: "c5", explanation: "c5 explanation" },
			{ id: 6, text: "c6", explanation: "c6 explanation" }
		]
	},
	{
		id: 2,
		q: "question 2",
		i: "illustration 2",
		a: "suggestion 2",
		answers: [
			{ id: 1, text: "c1", explanation: "c1 explanation" },
			{ id: 2, text: "c2", explanation: "c2 explanation" },
			{ id: 3, text: "c3", explanation: "c3 explanation" },
			{ id: 4, text: "c4", explanation: "c4 explanation" },
			{ id: 5, text: "c5", explanation: "c5 explanation" },
			{ id: 6, text: "c6", explanation: "c6 explanation" }
		]
	},
	{
		id: 3,
		q: "question 3",
		i: "illustration 3",
		a: "suggestion 3",
		answers: [
			{ id: 1, text: "c1", explanation: "c1 explanation" },
			{ id: 2, text: "c2", explanation: "c2 explanation" },
			{ id: 3, text: "c3", explanation: "c3 explanation" },
			{ id: 4, text: "c4", explanation: "c4 explanation" },
			{ id: 5, text: "c5", explanation: "c5 explanation" },
			{ id: 6, text: "c6", explanation: "c6 explanation" }
		]
	}
];

const GameGlasses = () => {
	const context = useContext(AppContext);

	const handleClick = text => {
		context.setFullScreenExplanationContent(<div>{text}</div>);
		context.setFullScreenExplanationStatus(true);
	};

	return (
		<>
			{VARIATIONS.map(vari => (
				<div key={vari.id} className="flex-row-1 gg">
					<div className="flex-col-1 gg-question">{vari.q}</div>
					<div className="flex-col-1 gg-illustration">{vari.i}</div>
					<div className="flex-col-1 gg-answers">
						<div className="gg-answers__explanation">{vari.a}</div>
						{vari.answers.map(ans => (
							<div key={`${vari.id}-${ans.id}`} onClick={() => handleClick(ans.explanation)} className="clickable-opacity gg-answers__answer">
								{ans.text}
							</div>
						))}
					</div>
				</div>
			))}
		</>
	);
};

GameGlasses.propTypes = {};

export default GameGlasses;
