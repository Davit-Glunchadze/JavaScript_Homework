//
// მოცემულია მასივი [{name: 'Temo', age: 25}, {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]
// ● დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user - ების მასივს და დააბრუნებს ყველაზე პატარა ასაკის მქონე ადამიანის სახელს
// ● დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს user ობიექტს და დააბრუნებს იგივე მნიშვნელობების მქონე ახალ (განსხვავებულ) ობიექტს
// ● დაწერე პროგრამა, სადაც ორი a და b მომხმარებლები აგორებენ კამათელს მანამ, სანამ არ გაგორდება, რომელიც უფრო ნაკლებ ცდაში გააგორებს სამიანს ის არის გამარჯვებული

///
// Task 1------------------------------------
///
console.log("Task 1--------------------------------")

const user = [
    { name: "temo", age: 25 },
    { name: "Lasha", age: 21 },
    { name: "Ana", age: 28 },
]

function getYoungerAge(){
    const getAges = user.map(person => person.age)
    const youngest = Math.min(...getAges)
    const youngestPerson = user.find(person => person.age === youngest)
    console.log(youngestPerson)
}

getYoungerAge ()

//
// Task 2--------------------------------
//
console.log("Task 2--------------------------------")

function cloneUser(original) {
    return { ...original};
    
}

const original = {
    name: 'David',
    age: 35,
    id: 3500 
}

const newUser = cloneUser(original) 

console.log(original)//name: 'David', age: 35, id: 3500
console.log(newUser) //name: 'David', age: 35, id: 3500

console.log(newUser === original) //false


//
// Task 3 ----------------------------
//
console.log("Task 3--------------------------------")

    function dicePlayers(){
    let a = parseInt(Math.random()*10)
    console.log('Player A number is' + ' ' + a);

    let b = parseInt(Math.random()*10)
    console.log('Player B number is' + ' ' + b)
    
    switch (true) {
        case (a === 3):
            console.log('Player A is winner');
            break;
        case (b === 3):
            console.log('Player B is winner');
            break;
        case (a === b):
            console.log('It is a draw');
            break;
        default:
            console.log('Try again');
        }

    }

    dicePlayers()


