 //● შექმენი button, რომელზე დაწკაპების შემდეგაც გაიხსნება მოდალი და მოდალის უკან შავი/გამჭვირვალე background 
 // ● შექმენი input და button 
 // ● input-ში მომხმარებელი ჩაწერს ფერს და button ღილაკზე დაწკაპების შემდეგ body-ს background შეიცვლება ჩაწერილ ფერად 
 // ● (ფერები რომლის ჩაწერაც შეუძლია: red, blue, green, black, white) 
 // ● თუ სხვა ფერი ჩაწერა, გამოუტანე შეტყობინება alert-ის საშუალებით შექმენი input, სადაც მომხმარებელს შესაძლებლობა ექნება შეიტანოს “:”- ით ერთმანეთისგან გამოყოფილი რიცხვები, average ღილაკზე დაწკაპების შემდეგ დაითვალე ამ რიცხვების საშუალო და გამოუტანე ეკრანზე 
 // ● მაგ: 1:2:3:4:5 ეკრანზე გამოიტანს 3-ს

//
// Task 1
//

//main div
const task1 = document.getElementById("task1");

//button
const button = document.createElement("button");
task1.appendChild(button);
button.innerHTML = "CLICK ME";
button.classList.add("button");

//div
const div = document.createElement("div");
task1.appendChild(div);
div.classList.add("hide");

//h1
const h1 = document.createElement("h1")
h1.classList.add("h1")
h1.innerHTML = "Hello There"
div.append(h1)


//event
button.addEventListener("click", () => {
  div.classList.toggle("div");
});

//
// Task 2
//

//main div
const task2 = document.getElementById("task2");

//div
const colorDiv = document.createElement("div");
task2.appendChild(colorDiv);
colorDiv.classList.add("collorDiv");

//button
const colorButton = document.createElement("button");
task2.appendChild(colorButton);
colorButton.innerHTML = "change collor";
colorButton.classList.add("button");

//input
const colorInput = document.createElement("input");
colorDiv.appendChild(colorInput);
colorInput.classList.add("input");
colorInput.placeholder = "red, blue, green, black, white";
const validColors = ["red", "blue", "green", "black", "white"];

//event
colorButton.addEventListener("click", () => {
  const userColor = colorInput.value.toLowerCase();

  if (validColors.includes(userColor)) {
    colorDiv.style.background = userColor;
  } else {
    colorDiv.style.background = "yellow";
    window.alert("this is not a valid color");
    colorInput.value = "Please enter a valid color";
  }
});

//
// Task 3
//

//main.div
const task3 = document.getElementById("task3");
console.log(task3);

//div
const mathDiv = document.createElement("div");
task3.appendChild(mathDiv);
mathDiv.classList.add("collorDiv");

//input
const mathInput = document.createElement("input");
mathDiv.append(mathInput);
mathInput.classList.add("input");
mathInput.placeholder = "Enter numbers (1:2:3:4)";

//answer - p
const answer = document.createElement("p");
mathDiv.appendChild(answer);
answer.innerHTML = "0";

//button
const mathButton = document.createElement("button");
task3.appendChild(mathButton);
mathButton.innerHTML = "average";
mathButton.classList.add("button");

mathButton.addEventListener("click", () => {
  const numbers = mathInput.value;
  const average = numbers.split(":").map(Number);
  const sum = average.reduce((acc, num) => acc + num, 0)
  const avg = sum / average.length;
  answer.innerHTML = Math.round(avg);
 console.log(avg)
});