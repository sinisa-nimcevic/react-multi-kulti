import React from "react";
import { storiesOf } from "@storybook/react";
import GameSocialCircles from "./GameSocialCircles";
let stories = storiesOf("Components/GameSocialCircles", module);

stories.addParameters({ component: GameSocialCircles });

stories.add("Default", () => <GameSocialCircles />);