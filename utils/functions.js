function calcWidth(width, val) {
  // this is for width calculations
  let outcome;
  outcome = width / val;
  return outcome.toFixed(0);
}
function calcHeight(height, val) {
  // this is for width calculations
  let outcome;
  outcome = height / val;
  console.log(outcome.toFixed(0));
  return outcome.toFixed(0);
}

export {calcWidth, calcHeight};
