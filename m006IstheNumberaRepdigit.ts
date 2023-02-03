// Is the Number a Repdigit
// A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.

// Notes
// The number 0 should return true (even though it's not a positive number).
// Check the Resources tab for more info on repdigits.

// Examples

function isRepdigit(givenNumber: number) {
  if (givenNumber < 0) {
    return false;
  } else if (givenNumber === 0) {
    return true;
  }
  //   let x = ("" + givenNumber).split("");
  let z = Array.from(String(givenNumber), Number);
  return z.every((ele) => {
    return ele === z[0];
  });
}

isRepdigit(66); // ➞ true
isRepdigit(0); // ➞ true
isRepdigit(-11); // ➞ false
isRepdigit(11); // ➞ true
isRepdigit(666); // ➞ true
isRepdigit(444); // ➞ true
isRepdigit(446); // ➞ false
isRepdigit(548); // ➞ false
