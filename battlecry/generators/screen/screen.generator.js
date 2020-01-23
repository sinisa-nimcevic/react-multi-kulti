import { Generator } from "battlecry";

export default class ComponentGenerator extends Generator {
	config = {
		generate: {
			args: "name"
		}
	};

	generate() {
		if (this.args) {
			this.templates().forEach(file => file.saveAs(`src/screens/`, this.args.name));
		} else {
			this.templates().forEach(file => file.saveAs(`src/screens/`, "Main"));
		}
	}
}
