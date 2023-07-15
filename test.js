"use strict";
const inputs = ["1124155qqa"];
const firstNonRepeated = (inputs) => {
    const makeArray = inputs[0];
    const newArray = [...makeArray];
    const firstUniqueElement = newArray.find((el) => newArray.indexOf(el) === newArray.lastIndexOf(el));
    const result = firstUniqueElement !== undefined ? firstUniqueElement : "";
    return result;
};
console.log(firstNonRepeated(inputs));
