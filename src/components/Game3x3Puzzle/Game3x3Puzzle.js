import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { AppContext } from "Config/context";
import Backend from "react-dnd-html5-backend";
import Background from "Components/Background/Background";

const PUZZLE_PIECES = [
	{ id: "A1", type: "A", content: <p>WIR ORDNEN PERSONEN BESTIMMTE MERKMALE ZU, DAS DIENT DER SCHNELLEN INFORMATIONSVERARBEITUNG.</p> },
	{
		id: "B1",
		type: "B",
		content: (
			<div className="type2">
				<img src="http://via.placeholder.com/300" />
				<p>"Mann mit Hut."</p>
			</div>
		)
	},
	{
		id: "C1",
		type: "C",
		content: (
			<div className="type3">
				<img src="http://via.placeholder.com/300" />
				<p>
					Das ist erstmal <span>"ganz normal"</span>
				</p>
			</div>
		)
	},
	{ id: "A2", type: "A", content: <p>WENN WIR BESTIMMTE EIGENSCHAFTEN GANZEN GRUPPEN ZUORDNEN, BILDEN WIR STEREOTYPE.</p> },
	{
		id: "B2",
		type: "B",
		content: (
			<div className="type2">
				<img src="http://via.placeholder.com/300" />
				<p>"Männer tragen Hüte."</p>
			</div>
		)
	},
	{
		id: "C2",
		type: "C",
		content: (
			<div className="type3">
				<img src="http://via.placeholder.com/300" />
				<p>
					<span>Vorsicht:</span> Zuweisungen sind willkürlich, undifferenziert und meistens falsch.{" "}
				</p>
			</div>
		)
	},
	{ id: "A3", type: "A", content: <p>WIE Z.B. ANGST ODER MISSTRAUEN VERBINDEN, ENTSTEHEN VORURTEILE IN UNSEREN KÖPFEN.</p> },
	{
		id: "B3",
		type: "B",
		content: (
			<div className="type2">
				<img src="http://via.placeholder.com/300" />
				<p>"Männer mit Hüten sind gefährlich."</p>
			</div>
		)
	},
	{
		id: "C3",
		type: "C",
		content: (
			<div className="type3">
				<img src="http://via.placeholder.com/300" />
				<p>
					<span>Vorurteile</span> verzerren die Realität, sind resistent gegenüber Tatsachen und führen oft zu Diskriminierung.{" "}
				</p>
			</div>
		)
	}
];

const Game3x3Puzzle = () => {
	const context = useContext(AppContext);
	const [pieces, setPieces] = useState(PUZZLE_PIECES);
	const backgroundPaddings = "pl-double pr-double pb-double";

	const solvePuzzle = () => {
		const { index } = context.getScreenData();
		context.setScreenAllowNextByIndex(index);
		setPieces([]);
	};

	const setPieceCorrectly = id => {
		setPieces(pieces.filter(piece => piece.id !== id));
		context.setToast(null, false);
	};

	const handleMistake = id => {
		context.setToast(
			<div>
				<p>You've placed the piece in the correct column, but you missed the row. Do you want to use help?</p>
				<button className="mt-double" onClick={() => setPieceCorrectly(id)}>
					SET PIECE CORRECTLY
				</button>
			</div>,
			true
		);
	};

	useEffect(() => {
		if (pieces.length === 0) {
			const { index } = context.getScreenData();
			context.setScreenAllowNextByIndex(index);
		}
	}, [pieces]);

	return (
		<DndProvider backend={Backend}>
			<div className="flex-row-1">
				<div className="flex-col-1">
					<Background semaphore className={backgroundPaddings}>
						<div className="flex-row-1">
							<PuzzlePieceTarget acceptsType="A" piecesInPlay={pieces} setPieces={setPieces} id="A1" handleMistake={handleMistake} />
							<PuzzlePieceTarget acceptsType="B" piecesInPlay={pieces} setPieces={setPieces} id="B1" handleMistake={handleMistake} />
							<PuzzlePieceTarget acceptsType="C" piecesInPlay={pieces} setPieces={setPieces} id="C1" handleMistake={handleMistake} />
						</div>
						<div className="flex-row-1">
							<PuzzlePieceTarget acceptsType="A" piecesInPlay={pieces} setPieces={setPieces} id="A2" handleMistake={handleMistake} />
							<PuzzlePieceTarget acceptsType="B" piecesInPlay={pieces} setPieces={setPieces} id="B2" handleMistake={handleMistake} />
							<PuzzlePieceTarget acceptsType="C" piecesInPlay={pieces} setPieces={setPieces} id="C2" handleMistake={handleMistake} />
						</div>
						<div className="flex-row-1">
							<PuzzlePieceTarget acceptsType="A" piecesInPlay={pieces} setPieces={setPieces} id="A3" handleMistake={handleMistake} />
							<PuzzlePieceTarget acceptsType="B" piecesInPlay={pieces} setPieces={setPieces} id="B3" handleMistake={handleMistake} />
							<PuzzlePieceTarget acceptsType="C" piecesInPlay={pieces} setPieces={setPieces} id="C3" handleMistake={handleMistake} />
						</div>
					</Background>
				</div>
			</div>

			<div className="flex-row-1">
				<div className="flex-col-1">
					{pieces.length > 0 && (
						<Background flex colorPrimary className={`${backgroundPaddings} pt-single`}>
							{pieces.map(piece => (
								<PuzzlePiece key={piece.id} id={piece.id} content={piece.content} type={piece.type} />
							))}
						</Background>
					)}
				</div>
			</div>
			{pieces.length > 0 && (
				<button className="button-info mt-single pull-right" onClick={solvePuzzle}>
					SOLVE
				</button>
			)}
		</DndProvider>
	);
};

const PuzzlePiece = ({ id, content, type }) => {
	const [{}, drag] = useDrag({
		item: { type: type, id: id }
	});

	return (
		<div ref={drag} className="g33__piece clickable-opacity">
			<div>{content}</div>
		</div>
	);
};

PuzzlePiece.propTypes = {
	id: PropTypes.string.isRequired,
	content: PropTypes.object.isRequired,
	type: PropTypes.string.isRequired
};

const PuzzlePieceTarget = ({ id, acceptsType, piecesInPlay, setPieces, handleMistake }) => {
	const [{ item, isOver, canDrop }, drop] = useDrop({
		accept: acceptsType,
		drop: () => handleDrop(),
		collect: mon => ({
			item: mon.getItem(),
			isOver: !!mon.isOver(),
			canDrop: !!mon.canDrop()
		})
	});

	function handleDrop() {
		if (item.id === id) {
			setPieces(piecesInPlay.filter(piece => piece.id !== id));
		} else {
			handleMistake(id);
		}
	}

	const getPieceToDisplay = () => {
		return (
			piecesInPlay.filter(piece => piece.id === id).length === 0 &&
			PUZZLE_PIECES.map(piece => {
				if (piece.id === id) {
					return <PuzzlePiece key={piece.id} id={piece.id} content={piece.content} type={piece.type} />;
				}
			})
		);
	};

	const getClassName = () => {
		const classes = ["g33__placeholder"];

		canDrop && classes.push("g33__placeholder--can-drop");
		isOver && classes.push("g33__placeholder--is-over");
		getPieceToDisplay() && classes.push("g33__placeholder--populated");

		return classes.join(" ");
	};

	return (
		<div className="flex-col-1">
			<div className={getClassName()} ref={drop}>
				{getPieceToDisplay()}
			</div>
		</div>
	);
};

PuzzlePieceTarget.propTypes = {
	id: PropTypes.string,
	acceptsType: PropTypes.string.isRequired,
	piecesInPlay: PropTypes.array.isRequired,
	setPieces: PropTypes.func,
	handleMistake: PropTypes.func
};

export default Game3x3Puzzle;
