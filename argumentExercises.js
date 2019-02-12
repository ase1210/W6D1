//without rest operator
// const sum = function () {
//   let total = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }

//   return total;
// }

//with rest operator
const sum = function (...args) {
  let total = 0;

  args.forEach( (el) => {
    total += el;
  })

  return total;
}

// console.log(sum(1,2,3,4));
// console.log(sum(1,2,3,4,5));

// MyBind using arguments
// Function.prototype.myBind = function () {
//   let that = this;
//   let context = arguments[0];
//   let bindArgs = Array.prototype.slice.call(arguments).slice(1);
//   return function() {
//     let callArgs = Array.from(arguments);
//     let finalArgs = bindArgs.concat(callArgs);
//     that.call(context, ...finalArgs);
//   };
// }

// MyBind with rest
Function.prototype.myBind = function (context, ...bindArgs) {
  let that = this;
  return function(...callArgs) {
    let finalArgs = bindArgs.concat(callArgs);
    that.call(context, ...finalArgs);
  };
}

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says.myBind(pavlov, "meow")("Markov");

// Curried Sum
const curriedSum = function (numArgs) {
  let numbers = [];
  return function _curriedSum (num1) {
    numbers.push(num1);
    if (numArgs === numbers.length) {
      return numbers.reduce(((acc, el) => acc + el), 0);
    } else {
      return _curriedSum;
    }
  }
}

// Curry proto with .apply
Function.prototype.curry = function(numArgs) {
  let args = [];
  let that = this;
  return function _curry(arg) {
    // let otherthat = that;
    // debugger
    args.push(arg);
    if (numArgs === args.length) {
      // return that(...args);
      return that.apply(that, args);
    } else {
      return _curry;
    }
  }
};

// Curry proto with spread
// Function.prototype.curry = function(numArgs) {
//   let args = [];
//   let that = this;
//   return function _curry(arg) {
//     args.push(arg);
//     if (numArgs === args.length) {
      // return Function.prototype.call(that, ...args);
//       // return that(...args);
//     } else {
//       return _curry;
//     }
//   }
// };



// sum(1,2,3)
// sum.curry(3) 