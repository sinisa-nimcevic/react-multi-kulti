import React from "react";
import { storiesOf } from "@storybook/react";
import Background from "./Background";
let stories = storiesOf("Components/Background", module);

stories.addParameters({ component: Background });

stories.add("Default", () => <Background />);