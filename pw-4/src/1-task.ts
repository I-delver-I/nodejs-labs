async function runSequent<T>(arr: T[], callback: (item: T, index: number) => Promise<{item: T; index: number}>):
Promise<Array<{item: T; index: number}>> {
    const promises
		= arr.map(async (value, index) => callback(value, index));
    const results = await Promise.all(promises);

    return results.filter(value => value !== undefined);
}

export default {runSequent};
