import React from "react";
import { storiesOf } from "@storybook/react";
import Layout from "./Layout";
let stories = storiesOf("Components/Layout", module);

stories.addParameters({ component: Layout });

stories.add("Default", () => <Layout />);