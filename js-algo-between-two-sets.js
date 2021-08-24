function getTotalX(a, b) {
  // establish empty array to place between set numbers
  let betweenSets = [];
  // use Math max to find the largest integer in array a, this will be the minimum in between range
  let aMax = Math.max(...a);
  // use Math min to find the smallest integer in array b, this will be maximum in between range
  let bMin = Math.min(...b);
  // set the first between number to aMax to start of the between range
  let betweens = aMax;

  // use a for loop to iterate over multiply between number
  // 'x' amount of times until it hits max range set to bMin
  for (let i = 1; betweens < bMin; i++) {
    betweens = aMax * i;
    // use push to add the multiplied number to range to empty array, will use array later to compare a and b array
    betweenSets.push(betweens);
  }

  // set up interlaced array because need to compare each number of a or b array to each number of between set array
  // and check for even divide of modulo operator
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < betweenSets.length; j++) {
      // if it is not an even divide then need to remove from between array
      if (betweenSets[j] % a[i] !== 0) {
        // use splice but insert a zero to hold length of between array
        // in case two or more numbers
        // next to each other run true for this conditional and don't get skipped
        betweenSets.splice(j, 1, 0);
      }
    }
  }

  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < betweenSets.length; j++) {
      if (b[i] % betweenSets[j] !== 0) {
        betweenSets.splice(j, 1, 0);
      }
    }
  }
  // filter out the temporary zeroes to return only the remaining between sets
  // that passed both previous for loops for a and b arrays
  let final = betweenSets.filter((num) => num > 0);
  // return length of array to show how many numbers are left
  return final.length;
}

// Different Edge Cases
// console.log(getTotalX([2, 4], [16, 32, 96]));
// console.log(getTotalX([3, 4], [24, 48]));
console.log(getTotalX([2], [20, 30, 12]));
