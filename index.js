function memo() {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log("cache.value", cache[value]);
      return cache.value;
    } else {
      const result = value ** 2;
      cache[value] = result;
      console.log("memo ~ result: 👆👆👆👆👆👆👆", result);
      return result;
    }
  };
}

const square = memo();

square(20);
square(20);
square(40);
