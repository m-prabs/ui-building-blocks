const extractGeneralStyles = (key, val, obj) => {
	if (!val || !key) return;
	obj[key] = val;
};

const getStyles = (p) => {
	var genObj = {};
	for (let [key, value] of Object.entries(p)) {
		extractGeneralStyles(key, value, genObj);
	}

	return {
		...genObj,
	};
};

export default (host, props) => {
	host.style.flex = 1;

	if (host) var containerEl = host.shadowRoot.querySelector(".sn-bb-column");
	var styleObj = getStyles(props);

	for (let [key, value] of Object.entries(styleObj)) {
		containerEl.style[key] = value;
	}
};
