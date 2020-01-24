import React from "react";
import { storiesOf } from "@storybook/react";
import GameChooseImage from "./GameChooseImage";
let stories = storiesOf("Components/GameChooseImage", module);

stories.addParameters({ component: GameChooseImage });

stories.add("Default", () => <GameChooseImage />);