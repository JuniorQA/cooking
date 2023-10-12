function sortArray(array, flag) {
  if (flag === 'asc') {
    array.sort((a, b) => a.cooking_time - b.cooking_time);
  } else if (flag === 'desc') {
    array.sort((a, b) => b.cooking_time - a.cooking_time);
  }
}
module.exports = sortArray;
