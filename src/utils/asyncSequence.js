function asyncSequence(array, asyncFunc) {
  return array.reduce(
    (previous, current) =>
      previous.then((accumulator) =>
        asyncFunc(current).then((result) => accumulator.concat(result))
      ),
    Promise.resolve([])
  );
}

export default asyncSequence;
