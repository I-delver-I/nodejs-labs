function subtractArrays<T>(arr1: T[], arr2: T[]): T[] {
    const countMap = new Map<T, number>();

    for (const item of arr1) {
        countMap.set(item, (countMap.get(item) ?? 0) + 1);
    }

    for (const item of arr2) {
        const count = countMap.get(item);
        if (count !== undefined) {
            if (count === 1) {
                countMap.delete(item);
            } else {
                countMap.set(item, count - 1);
            }
        }
    }

    const result: T[] = [];
    for (const [item, count] of countMap.entries()) {
        for (let i = 0; i < count; i++) {
            result.push(item);
        }
    }

    return result;
}

function arrayChangeDelete<T>(arr: T[], elementRemovingRule: (item: T) => boolean): T[] {
    const result = arr.filter(elementRemovingRule);
    const leftElements = subtractArrays(arr, result);

    arr.splice(0, arr.length);
    leftElements.forEach(value => arr.push(value));

    return result;
}

export default {arrayChangeDelete};
