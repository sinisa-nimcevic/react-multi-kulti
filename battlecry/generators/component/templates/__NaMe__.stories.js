import React from "react";
import { storiesOf } from "@storybook/react";
import __NaMe__ from "./__NaMe__";
let stories = storiesOf("Components/__NaMe__", module);

stories.addParameters({ component: __NaMe__ });

stories.add("Default", () => <__NaMe__ />);