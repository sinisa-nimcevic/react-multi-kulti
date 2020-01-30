import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import first from "lodash/first";

const CIRCLE = {
	id: 0,
	active: false,
	value: ""
};

const CIRCLES = [
	{ ...CIRCLE, id: 1 },
	{ ...CIRCLE, id: 2 },
	{ ...CIRCLE, id: 3 },
	{ ...CIRCLE, id: 4 },
	{ ...CIRCLE, id: 5 },
	{ ...CIRCLE, id: 6 },
	{ ...CIRCLE, id: 7 },
	{ ...CIRCLE, id: 8 },
	{ ...CIRCLE, id: 9 },
	{ ...CIRCLE, id: 10 },
	{ ...CIRCLE, id: 11 }
];

const GameSocialCircles = () => {
	const [inputClasses, setInputClasses] = useState("gsc__input-container");
	const [showInput, setShowInput] = useState(false);
	const [circles, setCircles] = useState(CIRCLES);
	const [value, setValue] = useState("");
	const input = useRef(null);

	const handleClick = id => {
		input.current.focus();
		makeCircleActive(id);
		setValue("");
		setShowInput(true);
	};

	const handleValueConfirm = () => {
		addValueToCircle(getActiveCircleId());
		defuseInput();
	};

	const handleValueCancel = () => {
		defuseInput();
	};

	const defuseInput = () => {
		makeCircleActive(0);
		setValue("");
		setShowInput(false);
	};

	const getActiveCircle = () => {
		return first(circles.filter(el => el.active === true));
	};

	const getActiveCircleId = () => {
		let activeCircleId = 0;

		circles.forEach(el => {
			if (el.active) activeCircleId = el.id;
		});

		return activeCircleId;
	};

	const makeCircleActive = id => {
		const newCircles = [...circles];
		newCircles.forEach(el => {
			el.active = el.id === id;
			return el;
		});

		setCircles(newCircles);
	};

	const addValueToCircle = id => {
		const newCircles = [...circles];
		newCircles.map(el => {
			if (el.id === id) el.value = value;
			return el;
		});
		setCircles(newCircles);
	};

	useEffect(() => {
		if (showInput) {
			const activeCircle = getActiveCircle();
			setInputClasses(`gsc__input-container gsc__input-container--active gsc__input-container--${activeCircle.id}`);
			if (activeCircle.value) {
				setValue(activeCircle.value);
			}
		}
		if (!showInput) setInputClasses("gsc__input-container");
	}, [showInput]);

	return (
		<>
			<div className="gsc">
				{circles.map(circle => (
					<CircleInput key={circle.id} onClick={() => handleClick(circle.id)} circle={circle} />
				))}

				<div className={inputClasses}>
					<input className="gsc__input" ref={input} value={value} onChange={e => setValue(e.target.value)} />
					<div className="gsc__input-confirm clickable-opacity p-single bg-color-success" onClick={handleValueConfirm}>
						Confirm
					</div>
					<div className="gsc__input-cancel clickable-opacity p-single bg-color-danger" onClick={handleValueCancel}>
						x
					</div>
				</div>
			</div>
		</>
	);
};

const CircleInput = ({ circle, onClick }) => {
	const { id, active } = circle;

	const getClasses = () => {
		const classes = ["gsc__circle", `gsc__circle--${id}`, "clickable-opacity", "p-single"];
		if (active) classes.push("gsc__circle--active");
		return classes.join(" ");
	};

	return (
		<div className={getClasses()} onClick={onClick}>
			<div>
				{circle.value}
			</div>
		</div>
	);
};

CircleInput.propTypes = {
	circle: PropTypes.object,
	onClick: PropTypes.func
};

GameSocialCircles.propTypes = {};

export default GameSocialCircles;
