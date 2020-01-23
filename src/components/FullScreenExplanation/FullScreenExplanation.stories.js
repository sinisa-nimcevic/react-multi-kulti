import React from "react";
import { storiesOf } from "@storybook/react";
import FullScreenExplanation from "./FullScreenExplanation";
let stories = storiesOf("Components/FullScreenExplanation", module);

stories.addParameters({ component: FullScreenExplanation });

stories.add("Default", () => <FullScreenExplanation />);