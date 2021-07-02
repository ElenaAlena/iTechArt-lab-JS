//a
function delay(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), duration);
  });
}
function logHi() {
  console.log("Hi");
}
delay(2000).then(logHi);
//b
function makeDroids() {
  const droids = [];
  for (var i = 0; i < 10; i++) {
    const droid = () => {
      console.log("D" + i);
    };
    droids.push(droid);
  }
  return droids;
}
for (let d of makeDroids()) {
  d();
}
//c
new Promise((resolve, reject) => {
  if (Math.floor(Math.random() * 5) > 2) {
    throw "Error: Ошибка!";
  } else resolve("ок");
})
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });

//d
