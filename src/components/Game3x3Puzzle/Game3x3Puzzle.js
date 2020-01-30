import React, { useState } from "react";
import PropTypes from "prop-types";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import Backend from "react-dnd-html5-backend";

const PUZZLE_PIECES = [
	{ id: "A1", type: "A", content: <p>Piece A1</p> },
	{ id: "B1", type: "B", content: <p>Piece B1</p> },
	{ id: "C1", type: "C", content: <p>Piece C1</p> },
	{ id: "A2", type: "A", content: <p>Piece A2</p> },
	{ id: "B2", type: "B", content: <p>Piece B2</p> },
	{ id: "C2", type: "C", content: <p>Piece C2</p> },
	{ id: "A3", type: "A", content: <p>Piece A3</p> },
	{ id: "B3", type: "B", content: <p>Piece B3</p> },
	{ id: "C3", type: "C", content: <p>Piece C3</p> }
];

const Game3x3Puzzle = () => {
	const [pieces, setPieces] = useState(PUZZLE_PIECES);

	return (
		<DndProvider backend={Backend}>
			<div className="flex-row-1 pb-triple">
				<div className="flex-col-1">Explanation</div>
			</div>
			<div className="flex-row-1">
				<PuzzlePieceTarget acceptsType="A" piecesInPlay={pieces} setPieces={setPieces} id="A1" />
				<PuzzlePieceTarget acceptsType="B" piecesInPlay={pieces} setPieces={setPieces} id="B1" />
				<PuzzlePieceTarget acceptsType="C" piecesInPlay={pieces} setPieces={setPieces} id="C1" />
			</div>
			<div className="flex-row-1">
				<PuzzlePieceTarget acceptsType="A" piecesInPlay={pieces} setPieces={setPieces} id="A2" />
				<PuzzlePieceTarget acceptsType="B" piecesInPlay={pieces} setPieces={setPieces} id="B2" />
				<PuzzlePieceTarget acceptsType="C" piecesInPlay={pieces} setPieces={setPieces} id="C2" />
			</div>
			<div className="flex-row-1">
				<PuzzlePieceTarget acceptsType="A" piecesInPlay={pieces} setPieces={setPieces} id="A3" />
				<PuzzlePieceTarget acceptsType="B" piecesInPlay={pieces} setPieces={setPieces} id="B3" />
				<PuzzlePieceTarget acceptsType="C" piecesInPlay={pieces} setPieces={setPieces} id="C3" />
			</div>

			<div className="flex-row-1 pt-triple">
				<div className="flex-col-1 flex-dir--row">
					{pieces.map(piece => (
						<PuzzlePiece key={piece.id} id={piece.id} content={piece.content} type={piece.type} />
					))}
				</div>
			</div>
		</DndProvider>
	);
};

const PuzzlePiece = ({ id, content, type }) => {
	const [{}, drag] = useDrag({
		item: { type: type, id: id }
	});

	return (
		<div ref={drag} className="clickable-opacity bg-color-primary m-single p-single" style={{ maxWidth: 100 }}>
			{content}
		</div>
	);
};

PuzzlePiece.propTypes = {
	id: PropTypes.string.isRequired,
	content: PropTypes.object.isRequired,
	type: PropTypes.string.isRequired
};

const PuzzlePieceTarget = ({ id, acceptsType, piecesInPlay, setPieces }) => {
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
			console.log("false");
		}
	}

	return (
		<div className="flex-col-1">
			<div className={isOver ? "bg-color-tertiary p-double" : canDrop ? "bg-color-secondary p-double" : "bg-color-bg-secondary  p-double"} ref={drop} style={{minHeight: 64, borderBottom: "1px solid black"}}>
				{piecesInPlay.filter(piece => piece.id === id).length === 0 &&
					PUZZLE_PIECES.map(piece => {
						if (piece.id === id) {
							return <PuzzlePiece key={piece.id} id={piece.id} content={piece.content} type={piece.type} />;
						}
					})}
			</div>
		</div>
	);
};

PuzzlePieceTarget.propTypes = {
	acceptsType: PropTypes.string.isRequired,
	piecesInPlay: PropTypes.array.isRequired
};

export default Game3x3Puzzle;
