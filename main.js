<<<<<<< HEAD
 //
 // დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს (string, valueToReplace, valueToReplaceWith), ჩაანაცვლებს "valueToReplace"-ს "valueToReplaceWith" მნიშვნელობით და დააბრუნებს ახალ stringს 
 // ● არ გამოიყენო string.replace() ფუნქცია 
 // ● დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს string ტიპის მნიშვნელობას (წინადადებას), მასში ყოველ სიტყვას გადაწერს დიდი ასოთი და დააბრუნებს ახალ წინადადებას
=======

// დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს n ცალ რიცხვს (n > 2). ფუნქციამ უნდა დააბრუნოს 2 - ელემენტიანი მასივი, სადაც პირველი ელემენტია პირველი და მეორე პარამეტრის ჯამი, 
// ხოლო მეორე ელემენტი - მესამე ელემენტიდან დაწყებული ყველა დანარჩენის ნამრავლი 
// ● დავუშვათ გვინდა ობიექტიდან წავიკითხოთ შემდეგი ველი: user.banks[2].address.city. დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს cityს. 
// გამოიყენე destructuring-ი. თუ ასეთი ველი არ არსებობს უნდა დაბრუნდეს undefined დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს ნებისმიერ ობიექტს და დააბრუნებს იგივე მნიშვნელობების მქონე ახალ (განსხვავებულ) ობიექტს 
// ● გაითვალისწინე, რომ თუ ობიექტში კიდევ სხვა ობიექტებია იმათი ასლებიც უნდა შეიქმნას 
// ● გამოიყენეთ (...) ოპერატორი
>>>>>>> 7792361d79016b6768a348fd0349b12e041865ff

//Task 1

console.log("Task 1");

const sum = (...nums) => {
if (nums.length <= 2) {
    console.log('Add more numbers')
}

const value1 = nums[0] + nums[1];

  const value2 = nums.slice(2).reduce((res, num ) => res * num, 1)

    return [value1, value2]

};

console.log(sum(5, 10, 20, 5, 4, 3)); // [15, 1200]

//task - 2
console.log("task 2");

const user = {
    banks: [
        {
            address: {
                city: "Tbilisi",
            },
        },
        {
            address: {
                city: "Rustavi",
            },
        },
        {
            address: {
                city: "Borjomi",
            },
        },
        {
            address: {
                city: "Batumi",
            },
        },
    ],
};

const getCity = (user) => {
    const { banks: [, , { address: { city } }] } = user;
    return city;
};

console.log (getCity(user)) // Borjomi

//task - 3
console.log("task 3");

const obj = {
  firstName: "David",
  lastName: "Glunchadze",
  data: {
    age: 35,
    gender: "Male",
  },
  car: {
    model: "volvo",
    code: "XC60",
  },
  pets: ["cat", "dog", "parrot"],
};



const deepClone = (obj) => {
  const clonedObj = {
    ...obj,
    data: {...obj.data},
    car: {...obj.car},
    pets: [...obj.pets],
  };
  return clonedObj;
};

const obj2 = deepClone(obj);

obj.car.model = "Mercedes";


console.log(obj.car.model); // Mercedes
console.log(obj2.car.model) // volvo
