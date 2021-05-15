import "./styles/index.css";
const obj = {
  a: 1,
  b: 2,
  c: {
    cd: 3,
  },
};

console.log(obj?.c?.cd, obj?.f);

if (module.hot) {
  module.hot.accept();
}
