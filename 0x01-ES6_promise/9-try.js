export default function guardrail(matchFunction) {
  const arr = [];
  try {
    arr.push(matchFunction());
  } catch (e) {
    arr.push(e.toString());
  }
  arr.push('Guardrail was processed');
  return arr;
}
