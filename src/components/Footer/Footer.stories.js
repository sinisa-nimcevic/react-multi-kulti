import React from "react";
import { storiesOf } from "@storybook/react";
import Footer from "./Footer";
let stories = storiesOf("Components/Footer", module);

stories.addParameters({ component: Footer });

stories.add("Default", () => <Footer />);