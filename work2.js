const component = (age, job) => {
  let obj = {
    name: "유으뜸",
    age: 12,
    job: "수강생",
  };

  let innerFunc = () => {
    if (obj.age > 20) {
      return "여름엔 역시 사이다가 최고";
    } else {
      return "여름엔 역시 요구르트가 최고";
    }
  };

  let Afunc = () => {
    if (obj.job === "수강생") {
      return "Good";
    } else {
      return "No";
    }
  };

  return `
  <h1>${obj.name}</h1>
  <h2>${innerFunc()}</h2>
  <h3>${Afunc()}</h3>
  `;
};

console.log(component());
