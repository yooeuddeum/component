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

// // * -------------------------------------------------------

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

//* this는 생성자 함수를 호출하는 객체를 의미
//* userInfo
function userInfo(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}
console.log(userInfo.name);
// console.log(userInfo.age);
// console.log(userInfo.address);

const test5 = new userInfo("ki", 31, "대전");
console.log(test5);

//* -------------------------------------------------------
// 각 객체가 독립적으로 실행되지 않고 동일한 객체로 실행됨
// let userInfo1 = {
//   name: "유으뜸",
//   age: 1414,
//   address: "대전",
//   email: "www.google.com",
// };

// let userInfo2 = userInfo1;
// let userInfo3 = userInfo1;
// let userInfo4 = userInfo1;

// userInfo3.name = "또치";

// console.log(userInfo2.name);
// console.log(userInfo3.name);
// console.log(userInfo4.name);

//* -------------------------------------------------------
// 다른 방식으로 동일한 객체로 잡히지 않고 독립적인 역할을 하게 끔 수정
// function userInfo1() {
//   this.name = "유으뜸";
//   this.age = 1414;
//   this.address = "대전";
//   this.email = "www.google.com";
// }

// let userInfo2 = new userInfo1();
// let userInfo3 = new userInfo1();
// let userInfo4 = new userInfo1();

// userInfo2.email = "www.naver.com";
// userInfo3.name = "또치";
// userInfo4.age = 7;

// console.log(userInfo2.email);
// console.log(userInfo3.name);
// console.log(userInfo4.age);

//* -------------------------------------------------------
function userInfo1() {
  this.name = "유으뜸";
  this.age = 1414;
  this.address = "대전";
  this.email = "www.google.com";
  this.info = () => {
    return `
    name :${this.name} age : ${this.age} address :${this.address} email : ${this.email} 
     `;
  };
}

let userInfo2 = new userInfo1();
let userInfo3 = new userInfo1();
let userInfo4 = new userInfo1();
let userInfo5 = new userInfo1();

userInfo2.email = "www.naver.com";
userInfo3.name = "또치";
userInfo4.age = 7;

console.log(userInfo2.email);
console.log(userInfo3.name);
console.log(userInfo4.age);
console.log(userInfo5.info());
