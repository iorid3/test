
  const inputs:string[]= ["1124155qqa"];

  const firstNonRepeated = (inputs: string[]): string => {
  const makeArray= inputs[0];
  const newArray: string[] = [...makeArray];
  
  const firstUniqueElement: string | undefined = newArray.find((el) => newArray.indexOf(el) === newArray.lastIndexOf(el));
  const result: string = firstUniqueElement !== undefined ? firstUniqueElement : "";
  
  return result;
}

console.log(firstNonRepeated(inputs));