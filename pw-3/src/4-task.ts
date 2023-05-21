type FunctionWithGenericParams<T extends unknown[], R> = (...args: T) => R;

class WeakLruCache<K extends string | number, V> {
  private readonly cache: Map<K, V>;
  private readonly maxSize: number;

  constructor(maxSize: number) {
    this.cache = new Map<K, V>();
    this.maxSize = maxSize;
  }

  public has(key: K): boolean {
    return this.cache.has(key);
  }

  public get(key: K): V | undefined {
    return this.cache.get(key);
  }

  public set(key: K, value: V): void {
    if (this.cache.size >= this.maxSize && !this.cache.has(key)) {
      const firstKey = this.cache.keys().next().value as K;
      const firstElementValue = this.get(firstKey) as V;
      // Logging the removal from cache for clarity
      console.log(`Removed first element of cache: ${String(firstElementValue)}`);
      this.cache.delete(firstKey);
    }

    this.cache.set(key, value);
    // Logging adding new value to cache for clarity
    console.log(`Added value to cache: ${String(value)}`);
  }
}

function cacheWrapper<T extends unknown[], R>(func: FunctionWithGenericParams<T, R>):
FunctionWithGenericParams<T, R> {
  const cache = new WeakLruCache<string, R>(100);

  const wrappedFunction: FunctionWithGenericParams<T, R> = (...args) => {
    const key = args.map(arg => JSON.stringify(arg)).join(':');

    if (cache.has(key)) {
      const obtainedValue = cache.get(key) as R;
      // Logging the retrieval from cache for clarity
      console.log(`Took from cache: ${String(obtainedValue)}`);

      return obtainedValue;
    }

    const result = func(...args);
    cache.set(key, result);

    return result;
  };

  return wrappedFunction;
}

export default {cacheWrapper};
