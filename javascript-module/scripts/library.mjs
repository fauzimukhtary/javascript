function Hello(params) {
  console.log(`Hello ${params}`);
}
const hero = "Teuku Umar";


function counter() {
  for (let i = 0; i <= 10; i++) {
    console.log(i)
  }
};

export { Hello, hero, counter }; // Export Multiple

export default "DEFAULT STRING"; // Export Default

class Kelompok {
  constructor(name) {
    this.name = name;
  }

  agenda = "Weekly Conference";
}
