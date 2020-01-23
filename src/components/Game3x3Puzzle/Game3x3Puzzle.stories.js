import React from "react";
import { storiesOf } from "@storybook/react";
import Game3x3Puzzle from "./Game3x3Puzzle";
let stories = storiesOf("Components/Game3x3Puzzle", module);

stories.addParameters({ component: Game3x3Puzzle });

stories.add("Default", () => <Game3x3Puzzle />);