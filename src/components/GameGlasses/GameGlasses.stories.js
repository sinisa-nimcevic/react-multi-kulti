import React from "react";
import { storiesOf } from "@storybook/react";
import GameGlasses from "./GameGlasses";
let stories = storiesOf("Components/GameGlasses", module);

stories.addParameters({ component: GameGlasses });

stories.add("Default", () => <GameGlasses />);