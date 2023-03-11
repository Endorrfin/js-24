const getName = (name) => name;
const getSurname = (surname) => surname;
module.exports = getName;
module.exports = getSurname;
module.exports.getFullname = (name, surname) =>
  `${getName(name)} ${getSurname(surname)}`;


