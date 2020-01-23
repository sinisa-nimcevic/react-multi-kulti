import { Generator } from "battlecry";

export default class ComponentGenerator extends Generator {
	config = {
		generate: {
			args: "name"
		}
	};

	generate() {
		this.templates().forEach(file => file.saveAs(`src/hooks/`, this.args.name));
	}
}
