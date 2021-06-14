function replaceNull(someObj, replaceValue = "") {
  const replacer = (key, value) =>
    String(value) === "null" ||
    String(value) === "undefined" ||
    value.length === 0
      ? replaceValue
      : value;

  return JSON.parse(JSON.stringify(someObj, replacer));
}

export default replaceNull;
