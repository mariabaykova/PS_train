let hamster = {
    stomachContent: [],

    get stomach() {
        return this.stomachContent;
    },

    set stomach( food ) {
        this.stomachContent.push( food );
    },
  
    eat(food) {
      this.stomach = "meat";
    }
  };
  
  let speedy = { 
    __proto__: hamster
  };
  
  let lazy = { 
    __proto__: hamster
  };

speedy.eat("apple");

console.log(hamster);
console.log(speedy);
console.log(lazy);