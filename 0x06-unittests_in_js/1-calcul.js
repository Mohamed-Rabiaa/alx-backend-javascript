const round = Math.round
function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return round(a) + round(b);
  }
  else if (type === 'SUBTRACT') {
    return round(a) - round(b);
  }
  else {
    if (round(b) === 0) {
      return 'Error';
    }
    return round(a) / round(b);
  }
}

module.exports = calculateNumber;
