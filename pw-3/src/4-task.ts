type FunctionWithGenericParams<T extends unknown[], R> = (...args: T) => R;

function cacheWrapper<T extends unknown[], R>(func: FunctionWithGenericParams<T, R>): FunctionWithGenericParams<T, R> {
  const cache = new Map<string, R>();

  const wrappedFunction: FunctionWithGenericParams<T, R> = (...args) => {
    const joinedArgs = JSON.stringify(args);

    if (cache.has(joinedArgs)) {
      // Logging the retrieval from cache for clarity
      console.log('Took from cache:');

      return cache.get(joinedArgs) as R;
    }

    const result = func(...args);
    cache.set(joinedArgs, result);

    return result;
  };

  return wrappedFunction;
}

export default {cacheWrapper};
