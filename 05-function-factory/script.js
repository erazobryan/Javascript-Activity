// 1. Function Factory for Multiplier
function makeMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = makeMultiplier(2);
console.log(double(5)); // 10

// 2. Function Factory for Greeter
function makeGreeter(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHi = makeGreeter("Hi");
console.log(sayHi("Mia")); // "Hi, Mia!"

// Displaying results in the HTML
document.getElementById("output1").textContent = `double(5): ${double(5)}`;
document.getElementById("output2").textContent = `sayHi("Mia"): ${sayHi("Mia")}`;
