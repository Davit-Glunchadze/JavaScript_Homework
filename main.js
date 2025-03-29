 
 //შექმენი <button> და <div> ელემენტები და მიანიჭეთ საკუთარი უნიკალური id 
 // ● <div> - ში ჩაწერე პატარა random ტექსტი 
 // ● ღილაკზე დაჭერის შემთხვევაში დამალე <div> ელემენტი 
 // ● შექმენი შემდეგი სტრუქტურა JS -ის გამოყენებით და დაამატე DOM-ში: <div id=”card”> <h2>Gandalf</h2> <a href=”#”>Go to profile</a> </div> 
 // ● შექმენი quiz თამაში 
 // ● დაწერე რამდენიმე მოკლე შეკითხვა თავისი სავარაუდო პასუხებით სწორ პასუხზე დაჭერის შემთხვევაში გაამწვანე პასუხი 
 // ● არასწორი პასუხის შემთხვევაში გააწითლე 
 // ● ბონუს დავალება: გამოიტანე ეკრანზე ქულების რაოდენობა 
 // ➔ სწორი პასუხის შემთხვევაში დაამატე 1 ქულა 
 // ➔ არასწორის შემთხვევაში უცვლელი რჩება

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

    // შეკითხვის div შექმნა
    questions.forEach((question, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");

      // კითხვის ველის შექმნა-ჩასმა
      const questionLabel = document.createElement("h3");
      questionLabel.textContent = question;
      questionDiv.appendChild(questionLabel);

      // პასუხების ველის შექმნა და დამატება
      answers[index].forEach((answer) => {
        const label = document.createElement("label");
        label.classList.add("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `group${index}`; // რომ თითოეულ კითხვას თავისი ჯგუფი ჰქონდეს
        input.value = answer; // მნიშვნელობა = პასუხი

        label.appendChild(input);
        label.append(answer);
        questionDiv.appendChild(label);

        // click ივენთი
        input.addEventListener("click", () => {
          // სწორი პასუხი
          if (input.value === correctAnswer[index]) {
            label.style.background = "green"; // მწვანე ფონი სწორი პასუხისთვის
            label.style.color = "aqua";
            score++; // ამატებს ქულას
          } else {
            label.style.background = "red"; // წითელი ფონი არასწორი პასუხისთვის
            label.style.color = "aqua";
          }
          
          // ქულების გამოტანა
          const scoreDiv = document.getElementById("your-score");
          scoreDiv.textContent = `Your Score: ${score}`;
        });
      });

      // დამატება მთავარ div-ში
      qiuzDiv.appendChild(questionDiv);
    });
  });
