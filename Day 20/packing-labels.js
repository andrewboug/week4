function getLabelTotal(kitCount, spareCount) {
  // This prints a total but fails to give that value back to the call site.
  console.log(kitCount + spareCount);
  let labels = kitCount + spareCount;
  return labels;
}

const labels = getLabelTotal(7, 2);
console.log("Labels to prepare:", labels);
console.log("If one more spare is needed:", labels + 1);

//  to repair the function, i assigned labels as a variable in the function, and then had the function return labels

// my prediction with 7 kits with 0 spares is 7 labels to prepare with one more needed as 8; and with 4 kits with 3 spares I think it will be the same.

// the parameters are kitCount and spareCount; the arguments I tried were 7 and 2, 3 and 4, and 7 and 0;
// the value that was returned was 9, 7, and 7; and the call that displays it was the label count. The parameters names are just a placeholder for the values they hold, so as long as they are consistent in the function the values will still be passed along.
