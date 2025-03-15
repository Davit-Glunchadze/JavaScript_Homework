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
