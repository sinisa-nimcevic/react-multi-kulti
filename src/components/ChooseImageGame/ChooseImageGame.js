import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "Config/context";

const ChooseImageGame = () => {
	const explanationTypeA = <div>This is explanation type A</div>;
	const explanationTypeB = <div>This is explanation type Bm</div>;

	return (
		<>
			<div className="flex-row-1">
				<div className="flex-col-4">Explanation text</div>
				<div className="flex-col-8">
					<div className="flex-row-1">
						<div className="flex-col-1">
							<ImageToChoose explanation={explanationTypeA} />
						</div>
						<div className="flex-col-1">
							<ImageToChoose explanation={explanationTypeA} />
						</div>
						<div className="flex-col-1">
							<ImageToChoose explanation={explanationTypeA} />
						</div>
					</div>
				</div>
			</div>
			<div className="flex-row-1">
				<div className="flex-col-1">
					<ImageToChoose explanation={explanationTypeB} />
				</div>
				<div className="flex-col-1">
					<ImageToChoose explanation={explanationTypeB} />
				</div>
				<div className="flex-col-1">
					<ImageToChoose explanation={explanationTypeB} />
				</div>
			</div>
		</>
	);
};

const ImageToChoose = ({ explanation }) => {
	const context = useContext(AppContext);

	const onClick = () => {
		context.setFullScreenExplanationContent(explanation);
		context.setShowFullScreenExplanationStatus(true);
	};

	return (
		<div className="clickable-opacity mb-double" onClick={onClick}>
			<img src="http://via.placeholder.com/300" />
		</div>
	);
};

ImageToChoose.propTypes = {
	explanation: PropTypes.object.isRequired
};

export default ChooseImageGame;
