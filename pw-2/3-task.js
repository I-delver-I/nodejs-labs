function deepClone(obj) {
	if (obj === null || typeof obj !== 'object') {
		return obj;
	}

	const clone = Array.isArray(obj) ? [] : {};

	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			clone[key] = deepClone(obj[key]);
		}
	}

	return clone;
}

export default {deepClone};
