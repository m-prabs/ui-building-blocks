import { createCustomElement, actionTypes } from "@servicenow/ui-core";
import { snabbdom } from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import * as bb from "../constants";
import applyStyles from "./styler";
import styleDefualts from "./styleDefualts";

const view = (state) => {
	return (
		<div className="sn-bb-text">
			<slot></slot>
		</div>
	);
};

createCustomElement(bb.TEXT, {
	renderer: { type: snabbdom },
	view,
	styles,
	properties: styleDefualts,
	actionHandlers: {
		[actionTypes.COMPONENT_DOM_READY]: ({ host, state: { properties } }) => {
			applyStyles(host, properties);
		},
	},
});
