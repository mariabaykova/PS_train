let worker = {
    name: "John Dow",
    showName() {
      console.log(this.name);
    },
  };
  Function.prototype.defer = function (ms) {
    /*(*) Здесь в this хранится функция, т.е. то что находится слева от .defer()*/
    let f = this;
    return function (...args) {
      /*(**)A здесь в this хранится контекст, то что хранится слева от .showName()*/
      setTimeout(() => f.apply(this, args), ms);
    };
  };
  worker.showName = worker.showName.defer(2000); /*(*)*/
//   worker.showName(); //(**)

worker.showName.defer(2000)();