const extractGeneralStyles = (key, val, obj) => {
	if (!val || !key) return;
	obj[key] = val;
};

const getStyles = (p) => {
	var genObj = {};
	for (let [key, value] of Object.entries(p)) {
		//console.log(`${key}: ${value}`);
		key = key.toLowerCase();
		if (key.indexOf("size") > -1) genObj["font-size"] = value;
		else if (key.indexOf("style") > -1) genObj["font-style"] = value;
		else extractGeneralStyles(key, value, genObj);
	}

	return {
		...genObj,
	};
};

export default (host, props) => {
	if (host) var containerEl = host.shadowRoot.querySelector(".sn-bb-text");
	var styleObj = getStyles(props);
	//console.log(styleObj);
	for (let [key, value] of Object.entries(styleObj)) {
		containerEl.style[key] = value;
	}
};
