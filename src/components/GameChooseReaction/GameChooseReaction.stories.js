import React from "react";
import { storiesOf } from "@storybook/react";
import GameChooseReaction from "./GameChooseReaction";
let stories = storiesOf("Components/GameChooseReaction", module);

stories.addParameters({ component: GameChooseReaction });

stories.add("Default", () => <GameChooseReaction />);