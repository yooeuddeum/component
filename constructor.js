// //* constructor을 사용하면 다른 메서드 호출 보다 선행으로 움직이고,
// //* 인스턴스 객체를 초기화할 때 수행할 코드이다.

// class bag {
//   constructor() {
//     this.name = "bag";
//   }
// }

// const bag1 = new bag();
// console.log(bag1);
// console.log(bag1.name);

// //* -------------------------------------------------------

// class person {
//   constructor(name) {
//     this.name = name;
//   }

//   introduce() {
//     console.log(`hi ! my name is ${this.name}`);
//   }
// }

// const test1 = new person("euddeum");
// console.log(test1);

// test1.introduce();

//* -------------------------------------------------------

// function tese(test1, test2, test3) {
//   this.test1 = test1;
//   this.test2 = test2;
//   this.test3 = test3;
// }

// function tese2(test1, test2, test3) {
//   let obj = {};
//   obj.test1 = test1;
//   obj.test2 = test2;
//   obj.test3 = test3;
//   return obj;
// }

// let test = new tese(4, 5, 6);
// let test2 = new tese2(4, 5, 6);

// console.log(tese(1, 2, 3));
// console.log(test);
// console.log(test instanceof tese);

// console.log(tese2(1, 2, 3));
// console.log(test2);
// console.log(test2 instanceof tese2);

// class test3 {
//   constructor(something1, something2, something3, something4) {
//     this.something1 = something1;
//     this.something2 = something2;
//     this.something3 = something3;
//     this.something4 = something4;
//   }
// }

// const oh = new test3(1, 2, 3, 4);
// console.log(oh);
// console.log(oh instanceof test3);

// console.log(test3(5, 6, 7, 8));

//* -------------------------------------------------------


