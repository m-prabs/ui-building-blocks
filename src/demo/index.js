import { createCustomElement } from "@servicenow/ui-core";
import { snabbdom } from "@servicenow/ui-renderer-snabbdom";
import layoutView from "./layoutView";
import appView from "./app/appView";
import data from "./data";

const view = appView;
//const view = layoutView;

createCustomElement("sn-ui-blocks-demo", {
	renderer: { type: snabbdom },
	view,
	initialState: {
		data,
		categories: Object.keys(data),
		selectedCategory: Object.keys(data)[0],
	},
});
