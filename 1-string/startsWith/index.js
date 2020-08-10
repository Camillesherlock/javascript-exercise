export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  let index = 0;
  let str1 = '';
  for (let i = 0; i < collection.length; i++) {
    str1 = collection[i].substring(0, 2);
    if (str1 === '粤A') {
      index++;
    }
  }
  return index;
}
