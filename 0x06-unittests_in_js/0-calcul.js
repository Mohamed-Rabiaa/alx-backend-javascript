const round = Math.round
function calculateNumber(a, b) {
  return round(a) + round(b);
}

module.exports = calculateNumber;
