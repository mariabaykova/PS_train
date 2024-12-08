function makeCounter1() {
    function count() {
        return count.count++;
    }
    count.count = 0;
    count.set = function(val) {
        count.count = val;
    }
    count.decrease = function() {
        count.count--;
    }
    return count;
  }

  function makeCounter() {
    let count = 0;

    function counter() {
        return count++;
    }

    counter.set = (val) => {
        count = val;
    }
    counter.decrease = () => {
        count--;
    }
    return counter;
  }
  
  let counter = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  counter.set(10); // установить новое значение счётчика
  
  console.log( counter() ); // 10
  
  counter.decrease(); // уменьшить значение счётчика на 1
  
  console.log( counter() ); // 10 (вместо 11)