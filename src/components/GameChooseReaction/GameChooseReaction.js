import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SITUATION = {
	id: 0,
	name: "",
	answerIndex: [0, 0, 0, 0, 0],
	isActive: false
};

const SITUATIONS = [
	{ ...SITUATION, id: 1, name: "(1) Was tun gegen vorurteile?" },
	{ ...SITUATION, id: 2, name: "(2) Was tun gegen vorurteile?" },
	{ ...SITUATION, id: 3, name: "(3) Was tun gegen vorurteile?" }
];

const REACTIONS = [
	{
		id: 1,
		name: "ÜBERZEUGEN",
		answers: [
			{
				heading: "(1) Perspektive wechseln/Empathie für Betroffene",
				body: '"Was tust du, wenn...?"\n"Stell dir vor, du.."'
			},
			{
				heading: "(2) Eigene Erfahrung einbringen",
				body: '"Also ich habe viele positive Erfahrungen gemacht..."'
			},
			{
				heading: "(3) Argumentieren/Fakten",
				body: '"Die aktuellen Statistiken zeigen auf, dass..."'
			}
		],
		isActive: false
	},
	{
		id: 2,
		name: "HINTERFRAGEN",
		answers: [
			{
				heading: "(1) Gezielt nachfragen",
				body: '"Wie meinst du das?"\n"Kannst Du mir das näher erklären?"'
			},
			{
				heading: '(2) Das "die" auflösen',
				body: '"Wen meinst du damit?"\n"Was heißt für dich alle?"'
			}
		],
		isActive: false
	},
	{
		id: 3,
		name: "SOLIDARISIEREN",
		answers: [
			{
				heading: "(1) Gegenstimmung forcieren",
				body: '"Du denkst doch sicher auch, dass..."'
			},
			{
				heading: "(2) Sich Verbündete suchen",
				body: '"Wie sehen Sie das denn?"'
			}
		],
		isActive: false
	},
	{
		id: 4,
		name: "UNTERBINDEN",
		answers: [
			{
				heading: "(1) Grenzen setzen",
				body: '"Nicht in diesem Ton..."'
			},
			{
				heading: "(2) Eigene Position verdeutlichen",
				body: '"Mir geht es darum, dass..."'
			},
			{
				heading: "(3) Abbruch",
				body: '"Ich möchte jetzt mit dir nicht..."'
			}
		],
		isActive: false
	},
	{
		id: 5,
		name: "VERWEIGERN",
		answers: [
			{
				heading: "(1) Ignoranz",
				body: '"Schönes Wetter heute..."'
			},
			{
				heading: "(2) Ironie",
				body: '"Und an dem schlechten Wetter sind die bestimmt auch schuld..."'
			},
			{
				heading: "(3) Humor",
				body: '"Heute wohl mit dem falschen Fuß aufgestanden?!"'
			}
		],
		isActive: false
	}
];

const GameChooseReaction = () => {
	const [situations, setSituations] = useState(SITUATIONS);

	const shuffle = a => {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	};

	const randomizeIndexes = () => {
		const situationIndexArrays = [];
		let longestCombo = 0;
		let answers = REACTIONS.map(reaction => {
			return reaction.answers.map((ans, idx) => {
				if (idx > longestCombo) longestCombo = idx;
				return idx;
			});
		});

		longestCombo++;

		answers.forEach((answerGroup, index) => {
			if (answerGroup.length < longestCombo) {
				let limit = longestCombo - answerGroup.length;
				for (let i = 0; i < limit; i++) {
					answerGroup.push(answerGroup[i]);
				}
			}
		});

		answers.forEach(answerGroup => (answerGroup = shuffle(answerGroup)));

		for (let i = 0; i < situations.length; i++) {
			let answerIndex = [];
			for (let j = 0; j < answers.length; j++) {
				answerIndex.push(answers[j][i]);
			}
			situationIndexArrays.push(answerIndex);
		}

		return situationIndexArrays;
	};

	useEffect(() => {
		const randomIndexes = randomizeIndexes();
		const newSitautions = [...situations];
		newSitautions.forEach((situation, index) => (situation.answerIndex = randomIndexes[index]));

		setSituations(newSitautions);
	}, []);

	return (
		<div className="gcr">
			{situations.map((situation, i) => (
				<Situation key={i} situation={situation} />
			))}
		</div>
	);
};

const Situation = ({ situation }) => {
	const [reactions, setReactions] = useState(REACTIONS);

	const makeReactionActive = id => {
		const newReactions = [...reactions];
		newReactions.forEach(el => (el.isActive = id === el.id));
		setReactions(newReactions);
	};

	return (
		<>
			<div className="touchable-opacity mb-triple mt-triple text-center text-uppercase">{situation.name}</div>

			<div className="gcr-reactions-container flex-row-1">
				{reactions.map(reaction => (
					<Reaction key={reaction.id} data={reaction} handleClick={() => makeReactionActive(reaction.id)} answerIndex={situation.answerIndex} />
				))}
			</div>
		</>
	);
};

const Reaction = ({ data, handleClick, answerIndex }) => {
	const classNames = ["gcr__reaction__name", "gcr__reaction__name--arrow", `gcr__reaction__name--arrow-${data.id}`, "clickable-opacity", "text-center"];

	return (
		<div className="gcr__reaction flex-col-1">
			<div onClick={handleClick} className={classNames.join(" ")}>
				{data.name}
			</div>
			{data.answers.map((answer, i) => {
				if (i === answerIndex[data.id - 1]) return <Answer key={i} data={answer} isActive={data.isActive} />;
			})}
		</div>
	);
};

Reaction.propTypes = {
	data: PropTypes.object,
	handleClick: PropTypes.func
};

const Answer = ({ data, isActive }) => {
	const getClasses = () => {
		const classes = ["gcr__reaction__answer", "mb-double", "mt-double"];
		if (isActive) classes.push("gcr__reaction__answer--active");
		return classes.join(" ");
	};

	return (
		<div className={getClasses()}>
			<div className="mb-single">{data.heading}</div>
			<p>{data.body}</p>
		</div>
	);
};

Answer.propTypes = {
	data: PropTypes.object
};

export default GameChooseReaction;
