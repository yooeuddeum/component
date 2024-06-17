// const tagComponent = (tagName, textNode) => {
//   return `<${tagName}>${textNode}</${tagName}>`;
// };

// // const container = () => {
// //   return `
// //     ${tagComponent('header', '헤더부분')}
// //     ${tagComponent('main', '메인부분')}
// //     ${tagComponent('footer', '푸터부분')}
// //   `;
// // }
// // * 해보기

// // * 1. 날짜를 구해서 함수에 적용
// const getDate = () => {
//   const today = new Date();
//   console.log(today);
//   return today.getDate();
// };

// // * 2. 12일(오늘)이 아니라면 A 방식
// // * 3. 12일(오늘)이라면 B 방식
// const container = () => {
//   const today = getDate();
//   let content;

//   if (today === 12) {
//     //* 오늘이 12일인 경우
//     content = `
//       ${tagComponent("header", "오늘은 12일입니다!")}
//       ${tagComponent("main", "특별한 메인 부분")}
//       ${tagComponent("footer", "특별한 푸터 부분")}
//     `;
//   } else {
//     //* 오늘이 12일이 아닌 경우
//     content = `
//       ${tagComponent("header", "12일 아닙니다")}
//       ${tagComponent("main", "메인부분")}
//       ${tagComponent("footer", "푸터부분")}
//     `;
//   }

//   return content;
// };

// // 결과 출력
// console.log(container());

const studentList = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민"
];

const KDT_IaaS_Project_A_Team_Info = {
  A_TEAM : {
    number : 1,
    pm : "",
    members : []
  },
  B_TEAM : {
    number : 2,
    pm : "",
    members : []
  },
  C_TEAM : {
    number : 3,
    pm : "",
    members : []
  },
  D_TEAM : {
    number : 4,
    pm : "",
    members : []
  }
}

const teamKeys = Object.keys(KDT_IaaS_Project_A_Team_Info);

const getRandomStudent = () => {
  const randomIndex = Math.floor(Math.random() * studentList.length);
  return studentList.splice(randomIndex, 1)[0]; 
};

// 할당 로직
for (let i = 0; i < 20; i++) {
  const teamKey = teamKeys[i % teamKeys.length]; 
  const team = KDT_IaaS_Project_A_Team_Info[teamKey];
  
  if (i % 5 === 0) {
    team.pm = getRandomStudent();
  } else {
    team.members.push(getRandomStudent());
  }
}

console.log(KDT_IaaS_Project_A_Team_Info);
