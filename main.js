//დაწერე ფუნქცია expo, რომელიც იქნება რეკურსიული ფუნქცია და მიიღებს არგუმენტად:
// ● ა) ციფრს ბ) ხარისხს და გ) callback - ს და დააბრუნებს მიღებული ციფრის ხარისხს მაგალითად: 5 ხარისხად 3 - არის 125 (5 * 5 *5)
// ● fetch ფუნქციის გამოყენებით წამოიღე მონაცემები მოცემული მისამართიდან (https://jsonplaceholder.typicode.com/posts)და გამოიტანე DOM-ში პოსტის სახით
// ● დაწერე ასინქრონული ფუნქცია, რომელიც არგუმენტად იღებს ობიექტს და აკეთებს deep copy-ს
// ● ფუნქციამ უნდა გამოიძახოს reject თუ არგუმენტი არ არის ობიექტი. თუ ყველაფერი კარგად არის, გამოიძახოს resolve კოპირებული ობიექტით

//
// task 1
//

function expo(num, deg, cb) {
  if (deg === 0) {
    return cb(1);
  }

  return expo(num, deg - 1, function (result) {
    cb(num * result);
  });
}

expo(3, 3, function (result) {
  console.log(result);
});

//
// task 2
//

const deepCopy = (data) => {
  if (Array.isArray(data)) {
    return data.map((item) => deepCopy(item));
  } else if (typeof data === "object" && data !== null) {
    return Object.keys(data).reduce((acc, key) => {
      acc[key] = deepCopy(data[key]);
      return acc;
    }, {});
  }
  return data;
};

async function obj() {
  try {
    const bigData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await bigData.json();
    const deepData = deepCopy(data);

    //Deepcopy შემოწმება
    deepData[0].id = 100000000
    console.log(data);
    console.log(deepData);
    

    // დივის შექმნა
    const div = document.getElementById("gamequiz");

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

