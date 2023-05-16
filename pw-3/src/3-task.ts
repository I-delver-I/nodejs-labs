export function deepClone<T>(obj: T): T {
	if (obj === null || typeof obj !== 'object') {
		return obj;
	}

	if (Array.isArray(obj)) {
		return (obj as unknown[]).map(item => deepClone(item)) as T;
	}

	// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
	const clone = {} as T;

	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			clone[key] = deepClone(obj[key]);
		}
	}

	return clone;
}
