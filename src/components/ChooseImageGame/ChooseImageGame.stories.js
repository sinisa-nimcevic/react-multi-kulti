import React from "react";
import { storiesOf } from "@storybook/react";
import ChooseImageGame from "./ChooseImageGame";
let stories = storiesOf("Components/ChooseImageGame", module);

stories.addParameters({ component: ChooseImageGame });

stories.add("Default", () => <ChooseImageGame />);