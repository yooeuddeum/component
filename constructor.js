//* constructor을 사용하면 다른 메서드 호출 보다 선행으로 움직이고,
//* 인스턴스 객체를 초기화할 때 수행할 코드이다.

class bag {
  constructor() {
    this.name = "bag";
  }
}

const bag1 = new bag();
console.log(bag1);
console.log(bag1.name);

//* -------------------------------------------------------

class person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`hi ! my name is ${this.name}`);
  }
}

const test = new person("euddeum");
console.log(test);

test.introduce();


