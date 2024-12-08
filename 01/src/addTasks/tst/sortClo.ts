let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  function byField(fieldName) {
    return function( a, b ) {
        return ( a[fieldName] > b[fieldName] ) ? 1 : -1;
    }
  }
//   function byField(fieldName){
//     return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
//   }

  // по имени (Ann, John, Pete)
console.log(users.sort((a, b) => a.name > b.name ? 1 : -1));

// по возрасту (Pete, Ann, John)
console.log(users.sort((a, b) => a.age > b.age ? 1 : -1));

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));
