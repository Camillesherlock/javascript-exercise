export default function numberMapToWord(collection) {
  // TODO 3: 在这里写实现代码
  const result = [];
  for (let i = 0; i < collection.length; i++) {
    result.push(String.fromCharCode(96 + collection[i]));
  }
  return result;
}
