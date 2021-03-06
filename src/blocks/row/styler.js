const extractGeneralStyles = (key, val, obj) => {
	if (!val || !key) return;
	obj[key] = val;
};

const getStyles = (p) => {
	var genObj = {};
	for (let [key, value] of Object.entries(p)) {
		//console.log(`${key}: ${value}`);
		extractGeneralStyles(key, value, genObj);
	}

	return {
		...genObj,
	};
};

export default (host, props) => {
	host.style.width = "100%";
	if (host) var containerEl = host.shadowRoot.querySelector(".sn-bb-row");
	var styleObj = getStyles(props);
	//console.log(styleObj);
	for (let [key, value] of Object.entries(styleObj)) {
		containerEl.style[key] = value;
	}
};
