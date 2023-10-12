




function sortArray(array, flag) {
    if (flag === 'sak') {
   array.sort((a ,b) => a.cooking_time - b.cooking_time )
    } else if (flag === "dac") {
        array.sort((a ,b) => b.cooking_time - a.cooking_time )
    }
}
  module.exports = sortArray