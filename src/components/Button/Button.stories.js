import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
let stories = storiesOf("Components/Button", module);

stories.addParameters({ component: Button });

stories.add("Default", () => <Button />);