// function log() {
//   console.log("LOG::");
// }

// const log = (message,prefix) => {
//   console.log("LOG::", message,prefix)
// }

// log('hello')
// log('你好')

// const book = {
//   title: "射雕英雄传",
//   toString() {
//     return `《 ${this.title} 》`
//   }
// }

// console.log(book.toString())


// const getGasoline = () => {
//   return false;
// };

// const drive = () => {
//   const gasoline = getGasoline();

//   if (!gasoline) {
//     throw new Error("没油了");
//   }

//   console.log('wu wu');
// };

// try {
//   drive();
// } catch (error) {
//   console.log(error.message)
// }



class Car {
  engine;

  constructor(engine) {
    this.engine = engine;
    console.log("a new car")
  };

  drive = () => {
    console.log("wu wu~~")
  };
};

class pickupTruch extends Car { }

const p1 = new pickupTruch("v9")
console.log(p1)

const c1 = new Car("v8");
const c2 = new Car("v12");

console.log(c1, c2);