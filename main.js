// task 1

const div1  = document.createElement('div')
const btn = document.createElement('button')
const testH1 = document.createElement('h1')
testH1.textContent = 'Hello there'
btn.textContent ='Text disappears'

  // classes
div1.classList.add('div1')
testH1.classList.add('testH1')
btn.classList.add('btn')
btn.setAttribute('id', 'btnid')

  // append
div1.append(btn, testH1)
document.body.append(div1)
div1.insertAdjacentHTML(
  "afterbegin",
  "Task 1"
);

const removerBtn = document.querySelector('#btnid')

removerBtn.addEventListener('click', () => {
  if (testH1.style.display === 'none') {
    testH1.style.display = 'block';
    btn.textContent ='Text disappears'
  } else {
    testH1.style.display = 'none';
    btn.textContent = 'Text appears'
  }
})

//task 2

const div2 = document.createElement('div')
const testH2 = document.createElement('h2')
testH2.textContent = 'Gandalf'
const aTag = document.createElement('a')
aTag.textContent = 'Go to profile'
aTag.href = '#'

  //append
div2.append(testH2, aTag)
document.body.append(div2)

div2.insertAdjacentHTML(
  "afterbegin",
  "Task 2"
);

  //classes, ID
div2.setAttribute('id','card')

// task 3





























/*  <div id=”card”>
    <h2>Gandalf</h2>
    <a href=”#”>Go to profile</a>
    </div>                         */

// const data = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: " Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas ",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
// ];


// const result = data.map((user) => ({
//   ...user,
//   ...user.address,
//   ...user.address.geo,
//   ...user.company
// }));

// const names = document.querySelector("#myId");

// const ol = document.createElement("ol");

// result.forEach((user) => {
//   const li = document.createElement("li");
//   li.textContent = `Name: ${user.name}, Street: ${user.street}, city: ${user.city}, catchPhrase: ${user.catchPhrase} `;
//   ol.appendChild(li);
// });

// names.appendChild(ol);
