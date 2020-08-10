export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  let result;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].age == 18) result = collection[i];
  }
  return result.name;
}
