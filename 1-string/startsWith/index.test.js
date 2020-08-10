import collectCarNumberCount from './index';

test('把集合中以粤A开头的牌号统计出数量', () => {
  const collection = [
    '粤A35689',
    '鄂D39348',
    '黑H93487',
    '粤A35689',
    '黑H28882',
    '粤A35689',
    '湘J23789',
    '黑H34333',
    '鄂D39348'
  ];
  const result = collectCarNumberCount(collection);
  expect(result).toEqual(3);
});
