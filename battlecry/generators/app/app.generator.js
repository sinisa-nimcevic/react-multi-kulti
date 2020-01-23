import { Generator } from "battlecry";

export default class ComponentGenerator extends Generator {
	config = {
		generate: {}
	};

	generate() {
		this.templates().forEach(file => {
			if (file.path.indexOf("/App.js") > -1) {
				file.saveAs(`src/components/App/App.js`);
			}
			if (file.path.indexOf("/AppRouter.js") > -1) {
				file.saveAs(`src/components/AppRouter/AppRouter.js`);
			}
			if (file.path.indexOf("/client.js") > -1) {
				file.saveAs(`src/config/client.js`);
			}
			if (file.path.indexOf("/context.js") > -1) {
				file.saveAs(`src/config/context.js`);
			}
		});

		this.battlecry.generators.screen.generate("Main");
	}
}
