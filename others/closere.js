function deposit() {
  let initialDeposit = 10000;

  return function (value) {
    if (value === "get") {
      return initialDeposit;
    } else if (value == "inc") {
      initialDeposit += 1000;
      return initialDeposit;
    } else if (value === "dec") {
      initialDeposit -= 1000;
      return initialDeposit;
    } else {
      return 0;
    }
  };
}

const landlord = deposit();

console.log(landlord(0));
console.log(landlord("get"));
console.log(landlord("inc"));
