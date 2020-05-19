//const camelToKabab = (s) => s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

const extractBorderStyles = (key, val, obj) => {
	if (!val || !key) return;
	if (key.indexOf("Size") > -1) {
		let key1 = key.split("Size")[1];
		if (key1.toLowerCase() == "all") obj["borderWidth"] = val;
		else obj["border" + key1 + "Width"] = val;
	}
	if (key.indexOf("Radius") > -1) {
		let key1 = key.split("Radius")[1];
		if (key1.toLowerCase() == "all") obj["borderRadius"] = val;
		else obj["border" + key1 + "Radius"] = val;
	}
	obj[key] = val;
};

const extractGeneralStyles = (key, val, obj) => {
	if (!val || !key) return;
	obj[key] = val;
};

const getStyles = (p) => {
	var genObj = {},
		borderObj = {};
	for (let [key, value] of Object.entries(p)) {
		if (key.indexOf("border") > -1) extractBorderStyles(key, value, borderObj);
		else if (key == "center" && value) {
			extractGeneralStyles("justifyContent", "center", genObj);
			extractGeneralStyles("alignItems", "center", genObj);
		} else extractGeneralStyles(key, value, genObj);
	}

	return {
		...genObj,
		...borderObj,
	};
};

const getHostStyles = (p) => {
	var obj = {};
	for (let [key, value] of Object.entries(p)) {
		if (key.indexOf("width") > -1) {
			obj[key] = value;
		}
	}
	return {
		...obj,
	};
};

export default (host, props) => {
	//host styles
	var hostStyles = getHostStyles(props);
	for (let [key, value] of Object.entries(hostStyles)) {
		host.style[key] = value;
	}

	if (host) var containerEl = host.shadowRoot.querySelector(".sn-bb-container");
	var styleObj = getStyles(props);
	// console.log(styleObj);
	for (let [key, value] of Object.entries(styleObj)) {
		if (Object.keys(hostStyles).indexOf(key) < 0)
			containerEl.style[key] = value;
	}
};
