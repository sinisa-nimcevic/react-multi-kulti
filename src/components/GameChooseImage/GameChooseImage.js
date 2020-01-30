import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { AppContext } from "Config/context";
import Background from "Components/Background/Background";

const GameChooseImage = () => {
	const context = useContext(AppContext);
	const history = useHistory();

	const handleClickNext = () => {
		const { index, maxIndex } = context.getScreenData();
		const nextScreenIndex = index + 1 > maxIndex ? 0 : index + 1;
		const nextPath = context.getScreenPathByIndex(nextScreenIndex);

		context.setScreenAllowNextByIndex(index);
		context.setFullScreenExplanationStatus(false);
		history.push(nextPath);
	}

	const handleClickCancel = () => {
		context.setFullScreenExplanationStatus(false);
	};

	const explanationTypeA = (
		<>
			<div className="p-triple">
				Mauris tellus diam, iaculis vel mi euismod, congue pulvinar felis. Quisque placerat, arcu a laoreet tincidunt, leo augue commodo sapien, a feugiat est ipsum eget
				libero. Quisque ac diam vehicula, pulvinar neque nec, vestibulum nunc. Vestibulum id eros auctor, eleifend nunc in, ornare sapien. In hac habitasse platea dictumst.
				Cras egestas dapibus sem eget suscipit. Nullam pharetra condimentum nulla sit amet scelerisque. Curabitur finibus est sem, quis egestas metus tempor in. Duis nec
				suscipit augue, et porttitor massa. Praesent quis mauris a libero finibus vestibulum eget ut dolor. Aliquam vel porttitor lacus. Etiam facilisis molestie placerat.
				Vivamus id imperdiet leo, ac dignissim ex. Curabitur sed eros eu nunc luctus commodo.
			</div>
			<Dialogue onClickNext={handleClickNext} onClickCancel={handleClickCancel} />
		</>
	);
	const explanationTypeB = (
		<>
			<div className="p-triple">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum cursus consequat. Vestibulum et dolor nulla. Praesent tempus sollicitudin odio, in maximus
				sem cursus id. Morbi auctor leo nec tortor rhoncus euismod. Cras semper porta leo, quis dapibus orci. Nullam sed nibh diam. In hac habitasse platea dictumst. Morbi
				sed sagittis arcu.
			</div>
			<Dialogue onClickNext={handleClickNext} onClickCancel={handleClickCancel} />
		</>
	);

	return (
		<>
			<div className="flex-row-1">
				<div className="flex-col-4">
					<h1 className="mb-double">UNSERE BILDER IM KOPF:</h1>
					<h2 className="text-handwritten color-primary fz-lg mb-triple">Haben Sie es vielleicht so gezeichnet?</h2>
					<ImageToChoose explanation={explanationTypeA} />
				</div>
				<div className="flex-col-8">
					<div className="flex-row-1">
						<div className="flex-col-1">
							<ImageToChoose explanation={explanationTypeB} />
						</div>
						<div className="flex-col-1">
							<h2 className="text-handwritten color-primary fz-lg mb-double">Und was ist mit diesen Urlauber*innen?</h2>
							<ImageToChoose explanation={explanationTypeB} />
						</div>
						<div className="flex-col-1">
							<ImageToChoose explanation={explanationTypeB} />
						</div>
					</div>
					<div className="flex-row-1">
						<div className="flex-col-1">
							<ImageToChoose explanation={explanationTypeB} />
						</div>
						<div className="flex-col-1 pt-double">
							<ImageToChoose explanation={explanationTypeB} />
						</div>
						<div className="flex-col-1">
							<ImageToChoose explanation={explanationTypeB} />
						</div>
					</div>
				</div>
			</div>
			<div className="flex-row-1 mt-double">
				<div className="flex-col-1">
					<Background colorPrimary>
						<div className="flex-row-1">
							<div className="flex-col-8">
								<p className="p-triple ml-double mt-triple mb-triple color-white">
									Gegenstände und Menschen werden oft in Gruppen zusammengefasst und mit stereotypen Merkmalen versehen.
								</p>
							</div>
							<div className="flex-col-3"></div>
						</div>
					</Background>
				</div>
			</div>
		</>
	);
};

const Dialogue = ({ onClickNext, onClickCancel }) => {
	return (
		<div className="flex flex-dir--row-reverse p-double">
			<button onClick={onClickNext}>Go to next game</button>
			<button onClick={onClickCancel} className="mr-double">Choose another</button>
		</div>
	);
};

Dialogue.propTypes = {
	onClickNext: PropTypes.func.isRequired,
	onClickCancel: PropTypes.func.isRequired
};

const ImageToChoose = ({ explanation }) => {
	const context = useContext(AppContext);

	const onClick = () => {
		context.setFullScreenExplanation(explanation, true, false);
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

export default GameChooseImage;
