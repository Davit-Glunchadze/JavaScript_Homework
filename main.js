//დაწერე ფუნქცია expo, რომელიც იქნება რეკურსიული ფუნქცია და მიიღებს არგუმენტად:
// ● ა) ციფრს ბ) ხარისხს და გ) callback - ს და დააბრუნებს მიღებული ციფრის ხარისხს მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5 *5)
// ● fetch ფუნქციის გამოყენებით წამოიღე მონაცემები მოცემული მისამართიდან (https://jsonplaceholder.typicode.com/posts)და გამოიტანე DOM-ში პოსტის სახით
// ● დაწერე ასინქრონული ფუნქცია, რომელიც არგუმენტად იღებს ობიექტს და აკეთებს deep copy-ს
// ● ფუნქციამ უნდა გამოიძახოს reject თუ არგუმენტი არ არის ობიექტი. თუ ყველაფერი კარგად არის, გამოიძახოს resolve კოპირებული ობიექტით

//
// task 1
//
const div1 = document.createElement("div");
const btn = document.createElement("button");
const testH1 = document.createElement("h1");
testH1.textContent = "Hello there";
btn.textContent = "Text disappears";

// classes
div1.classList.add("div1");
testH1.classList.add("testH1");
btn.classList.add("btn");
btn.setAttribute("id", "btnid");

// append
div1.append(btn, testH1);
document.body.append(div1);
div1.insertAdjacentHTML("afterbegin", "Task 1");

const removerBtn = document.querySelector("#btnid");

removerBtn.addEventListener("click", () => {
  if (testH1.style.display === "none") {
    testH1.style.display = "block";
    btn.textContent = "Text disappears";
  } else {
    testH1.style.display = "none";
    btn.textContent = "Text appears";
  }
});


//
//task 2
//

const div2 = document.createElement("div");
const testH2 = document.createElement("h2");
testH2.textContent = "Gandalf";
const aTag = document.createElement("a");
aTag.textContent = "Go to profile";
aTag.href = "#";

//append
div2.append(testH2, aTag);
document.body.append(div2);

div2.insertAdjacentHTML("afterbegin", "Task 2");

//classes, ID
div2.setAttribute("id", "card");

//
// task 3
//
let answers = [];
let questions = [];
let correctAnswer = [];
let score = 0; 

// მონაცემების მიღება სხვა ფაილიდან
fetch("questions.json")
  .then((response) => response.json())
  .then((data) => {
    answers = data.map((item) => item.answers);
    questions = data.map((item) => item.question);
    correctAnswer = data.map((item) => item.correctAnswer);

    // div მიღება
    const gameDiv = document.getElementById("gamequiz");
    // კითხვის div შექმნა
    const qiuzDiv = document.createElement("div");
    qiuzDiv.setAttribute("id", "quiz");
    if (gameDiv.children.length >= 1) {
      gameDiv.children[0].after(qiuzDiv);
    } else {
      gameDiv.appendChild(qiuzDiv);
    }

    // თითო პოსტის ამოღება (ობიექტის)
    deepData.forEach((user, index) => {
      // თითო პოსტისათის თითო სექცია
      const postDiv = document.createElement("div");
      postDiv.classList.add("post-div");

      const h2 = document.createElement("h2");
      h2.textContent = `Post ${index + 1}`;
      postDiv.appendChild(h2);

      const ul = document.createElement("ul");
      postDiv.appendChild(ul);

      // თითო პოსტისათვის მონაცემები
      Object.entries(user).forEach(([key, value]) => {
        const li = document.createElement("li");
        li.textContent = `${key}: ${value}`;
        ul.appendChild(li);
      });
      // დივზე მიბმა
      div.appendChild(postDiv);
    });
  } catch (error) {
    console.log("Input must be an object or an array");
  }
}

obj();

