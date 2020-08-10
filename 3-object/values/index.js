export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  let result = 0;
  for (const key in source) {
    result += Number(source[key]);
  }
  return result;
}
