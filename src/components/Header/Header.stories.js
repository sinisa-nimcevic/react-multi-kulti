import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./Header";
let stories = storiesOf("Components/Header", module);

stories.addParameters({ component: Header });

stories.add("Default", () => <Header />);