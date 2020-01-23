import { Generator } from "battlecry";

export default class ComponentGenerator extends Generator {
	config = {
		generate: {
			args: "name",
			options: {
				without: {
					description: "Create component without data."
				}
			}
		}
	};

	generate() {
		const { name } = this.args;
		let path = `src/components/__NaMe__/`;
		let componentName = name;

		if (name.indexOf("/") > -1) {
			let complexPath = name.split("/");
			componentName = complexPath.pop();
			path = `src/components/${complexPath}/__NaMe__/`;
		}

		this.templates().forEach(file => {
			if (file.path.indexOf("WithoutData") > -1) {
				if (this.options.without) {
					file.saveAs(path, componentName);
				}
			} else {
				file.saveAs(path, componentName);
			}
		});
	}
}
