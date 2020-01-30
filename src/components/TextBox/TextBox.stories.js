import React from "react";
import { storiesOf } from "@storybook/react";
import TextBox from "./TextBox";
let stories = storiesOf("Components/TextBox", module);

stories.addParameters({ component: TextBox });

stories.add("Default", () => <TextBox />);