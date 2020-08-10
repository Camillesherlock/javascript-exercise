function getScore(id) {
  if (id === '1234') {
    return 60;
  }
  return 59;
}

export default function getScoreOutput(person) {
  // TODO 8: 在这里写实现代码
  const str1 = '你好，';
  const score = getScore(person.id);
  const score1 = String(score);
  return `${str1 + person.lastName + person.firstName}！` + `你的考试成绩为${score1}分`;
}
