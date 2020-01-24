import React from "react";
import { storiesOf } from "@storybook/react";
import Toast from "./Toast";
let stories = storiesOf("Components/Toast", module);

stories.addParameters({ component: Toast });

stories.add("Default", () => <Toast />);