import React, { useContext, useEffect } from "react";
import { AppContext } from "Config/context";
import { useHistory } from "react-router-dom";
import Layout from "Components/Layout/Layout";
import Background from "Components/Background/Background";
import TextBox from "Components/TextBox/TextBox";

const INFO_BOXES = [
	{
		id: 1,
		content: (
			<p>
				Gibt es für mich nur <strong>Kultur A oder B</strong> oder kann ich unterschiedliche Nuancen von kulturellen Identitäten erkennen?
			</p>
		)
	},
	{
		id: 2,
		content: (
			<p>
				Fragen Sie <span>sich selbst:</span>
			</p>
		)
	},
	{
		id: 3,
		content: (
			<p>
				Bewerte ich Verhaltensweisen nur mit der <strong>Kulturbrille</strong> oder schaue ich mir Situationen kontextspezifisch an?
			</p>
		)
	},
	{
		id: 4,
		content: (
			<p>
				Bin ich mir meiner <strong>Privilegien und Machtposition</strong> in der Gesellschaft bewusst? <br />
				Welche (strukturellen) Barrieren sehe ich in meinem (beruflichen) Umfeld?
			</p>
		)
	},
	{
		id: 5,
		content: (
			<p>
				Fokussiere ich mich in interkulturellen Situationen auf Defizite, Gegensätze und Missverständnisse oder begreife ich kulturelle Identitäten aus einer{" "}
				<strong>Chancenperspektive</strong> heraus?
			</p>
		)
	},
	{
		id: 6,
		content: (
			<p>
				Verfüge ich über <strong>nachhaltige, interkulturelle Kontakte</strong> in Beruf und Alltag?
			</p>
		)
	}
];

const IntroScreen = () => {
	const context = useContext(AppContext);
	const history = useHistory();

	useEffect(() => {
		const { pathname } = history.location;
		context.setActiveScreenByPathName(pathname);
	}, []);

	return (
		<Layout headerTitle="EINE BESTANDSAUFNAHME" headerSubtitle="KLEINE ANREGUNG ZUR REFLEXION">
			<Background gray>
				<div className="textbox-container flex">
					{INFO_BOXES.map(info => (
						<div key={info.id} className={`textbox-inner-container textbox-inner-container--type${info.id}`}>
							<TextBox className={`textbox textbox--type${info.id}`}>{info.content}</TextBox>
						</div>
					))}
				</div>
			</Background>
		</Layout>
	);
};

IntroScreen.propTypes = {};

export default IntroScreen;
