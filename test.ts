const string  = ["aaaaa123"];
const makeArray = string[0]
const newArray = [...makeArray]

const firstUniqueElement = newArray.find((el) => newArray.indexOf(el) === newArray.lastIndexOf(el));
const result = firstUniqueElement !==  undefined ? firstUniqueElement:""

console.log(result)