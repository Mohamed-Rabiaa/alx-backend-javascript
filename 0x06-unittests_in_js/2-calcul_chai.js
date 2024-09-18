const round = Math.round
function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return round(a) + round(b);
  }
  if (type === 'SUBTRACT') {
    return round(a) - round(b);
  }
  if (type === 'DIVIDE') {
    if (round(b) === 0) {
      return 'Error';
    }
    return round(a) / round(b);
  }
  return 0;
}

module.exports = calculateNumber;
