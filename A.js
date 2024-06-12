const tagComponent = (tagName, textNode) => {
  return `<${tagName}>${textNode}</${tagName}>`;
}

const container = () => {
  return `
    ${tagComponent('header', '헤더부분')}
    ${tagComponent('main', '메인부분')}
    ${tagComponent('footer', '푸터부분')}
  `;
}
// * 해보기

// * 1. 날짜를 구해서 함수에 적용
// * 2. 12일(오늘)이 아니라면 A 방식
// * 3. 12일(오늘)이라면 B 방식