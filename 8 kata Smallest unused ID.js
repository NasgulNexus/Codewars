function nextId(ids) {
  let i = 0;
  let answer = -1;
  ids.forEach(el => {
    if (ids.includes(i)) {
      i++;
    } else {
      return i;
    }
  });

  return i + 1;
}

const nextId = ids => {
  const used = new Set(ids);

  for (let i = 0; i <= ids.length; i++) {
    if (!used.has(i)) return i;
  }
};
