const tagComponent = (tagName, textNode) => {
  return `<${tagName}>${textNode}</${tagName}>`;
};

// const container = () => {
//   return `
//     ${tagComponent('header', '헤더부분')}
//     ${tagComponent('main', '메인부분')}
//     ${tagComponent('footer', '푸터부분')}
//   `;
// }
// * 해보기

// * 1. 날짜를 구해서 함수에 적용
const getDate = () => {
  const today = new Date();
  return today.getDate();
};
// * 2. 12일(오늘)이 아니라면 A 방식
// * 3. 12일(오늘)이라면 B 방식
const container = () => {
  const today = getDate();
  let content;

  if (today === 12) {
    // 오늘이 12일인 경우
    content = `
      ${tagComponent("header", "오늘은 12일입니다!")}
      ${tagComponent("main", "특별한 메인 부분")}
      ${tagComponent("footer", "특별한 푸터 부분")}
    `;
  } else {
    // 오늘이 12일이 아닌 경우
    content = `
      ${tagComponent("header", "12일 아닙니다")}
      ${tagComponent("main", "메인부분")}
      ${tagComponent("footer", "푸터부분")}
    `;
  }

  return content;
};

// 결과 출력
console.log(container());
