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
//event
button.addEventListener("click", () => {
  div.classList.toggle("div");
});

//
// Task 2
//

//main div
const task2 = document.getElementById("task2");
console.log(task2);

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
const validColors = ["red", "blue", "green", "black", "white" ];

//event
colorButton.addEventListener("click", () => {
  const userColor = colorInput.value.toLowerCase();

  if (validColors.includes(userColor)) {
    colorDiv.style.background = userColor;
  } else {
    colorInput.value = "this is not a valid color";
    colorDiv.style.background = "yellow";
  }
});
