function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码

  const arrayMultipleOfThree = collection.filter(data => data / 3 === 0 || data % 3 === 0);
  return arrayMultipleOfThree;
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  const arr = [];
  for (let i = 0; i < collection.length; i++) {
    if (arr.indexOf(collection[i]) == -1) {
      arr.push(collection[i]);
    }
  }
  return arr;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
