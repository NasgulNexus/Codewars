const cod = ["a", "e", "i", "o", "u"];

function encode(string) {
  return [...string]
    .map(value =>
      cod.includes(value) ? (value = cod.indexOf(value)) + 1 : value
    )
    .join("");
}

function decode(string) {
  return [...string]
    .map(value => (Number(value) ? cod[Number(value) - 1] : value))
    .join("");
}
