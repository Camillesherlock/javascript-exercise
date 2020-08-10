// TODO 17: 在这里写实现代码
import Person from './person';

export default class Worker extends Person {
  constructor(name, age) {
    super(name, age);
  }

  introduce() {
    return `I am a Student. ` + `I am at Class ${this.klass}.`;
  }
}
