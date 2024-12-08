let user = {
    firstName: "Вася",
    sayHi() {
      console.log(`Привет, ${this.firstName}!`);
    }
  };

//   let altUser = {
//     // firstName: "Маша",
//     // sayHi() {
//     //   console.log(`hello, ${this.firstName}!`);
//     // }
//     firstName1: "Маша",
//     sayHi1() {
//       console.log(`hello, ${this.firstName}!`);
//     }

//   };
//   user.sayHi();
// setTimeout( () => user.sayHi(), 3000);


// let sayHi = user.sayHi.bind({  firstName: "Вася",
// sayHi() {
//   console.log(`Привет, ${this.firstName}!`);
// }});
// sayHi();
// setTimeout( () => sayHi(), 3000);
// setTimeout( () => { user.firstName = "Аня"}, 300);
// setTimeout( () => { console.log(user.firstName)}, 400);


let sayHi = user.sayHi.bind(user); // (*)

sayHi(); // Привет, Вася!
// user.firstName = "Аня";
// user = {
//     firstName: "Миша",
//     sayHi() {
//       console.log(`hi, ${this.firstName}!`);
//     }
//   };

setTimeout(sayHi, 1000); // Привет, Аня!