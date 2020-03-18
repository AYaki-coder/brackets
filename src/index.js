module.exports = function check(str, bracketsConfig) {

  let condition = [];
  for (let i = 0; i < bracketsConfig.length; i++) {

    condition[i] = bracketsConfig[i].join('');

  }
  let foundIT = true;
  for (; foundIT;) {
    let j = 0;
    for (let i = 0; i < condition.length; i++) {

      let pos = str.indexOf(condition[i]);
      j = j + pos;
      foundIT = j == -1 * (condition.length) ? false : true;
      if (pos > -1) {
        str = str.slice(0, pos) + str.slice(pos + 2);

      }
    }
  }
  return str.length > 0 ? false : true;

}
