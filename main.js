// დავალება 1
console.log("დავალება №1 შესრულებულია");

function EqualTo(a, b) {
  if (a === b) {
    return "ტოლია";
  } else {
    return "არ არის ტოლი";
  }
}

//არ არის ტოლი
console.log(EqualTo(1, 2));
console.log(EqualTo("1", 1));
console.log(EqualTo(true, 2));
console.log(EqualTo("1", "2"));

//ტოლია
console.log(EqualTo(2, 2));
console.log(EqualTo("1", "1"));
console.log(EqualTo(false, false));


// დავალება 2
console.log("დავალება №2 შესრულებულია");


function fahrenheit(fahrenheit) {
  if (typeof fahrenheit !== "number") {
    return false;
  } else {
    return (fahrenheit - 32) / 1.8 + "℃";
  }
}

// -17.22222222222222℃
console.log(fahrenheit(1));

//false
console.log(fahrenheit(true));
console.log(fahrenheit("1"));
console.log(fahrenheit());

// 0℃
console.log(fahrenheit(32));



// დავალება 3
console.log("დავალება №3 შესრულებულია");


function operation(a, operator, b) {
  if (typeof a !== "number" || typeof b !== "number" ||typeof operator !== "string") {
    return false;
  }

  if (operator === "/" && b === 0) {
    return "ნულზე გაყოფა არ შეიძლება";
  }
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "მცდარი ოპერაცია";
  }
}

//false
console.log(operation(1, "+", "2"));
console.log(operation("9", "*", 0));
console.log(operation(9 + 0));

//ნულზე გაყოფა არ შეიძლება
console.log(operation(9, "/", 0));

//მცდარი ოპერაცია
console.log(operation(1, "=", 2));

// 2025
console.log(operation(2000, "+", 25));
