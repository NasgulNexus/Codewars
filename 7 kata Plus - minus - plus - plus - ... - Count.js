const catchSignChange = arr => {
  let count = 0;
  arr.map((value, i) =>
    (value >= 0 && arr[i + 1] < 0) || (value < 0 && arr[i + 1] >= 0)
      ? count++
      : count
  );
  return count;
};
