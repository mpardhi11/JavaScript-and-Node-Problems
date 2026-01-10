function show() {
  let sum = 0;
  let message = `sum is ${sum}`;

  function print() {
    console.log('!==>  ~ message <==!', message);
  }

  function increase() {
    sum = sum + 10;
  }

  return [print, increase];
}

const [print, increase] = show();
print();
increase();
print();
