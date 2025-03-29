
 //setTimeout ფუნქცია იყენებს callback-ს, დაწერეთ მისი promise-ზე დადაფუძნებული ალტერნატივა ● (მაგ: mySetTimeout(delay).then(...) 
 // ● გამოიყენე პირველ დავალებაში შექმნილი ფუნქცია, რათა განავრცო ჩვენს მიერ დაწერილი “Toy Shop” შემდეგი პირობის იმპლემენტაციით: 
 // ➔ სათამაშოს დამზადებას სჭირდება დაახლოებით 3 წამი. (დროის მითითება შესაძლებელი უნდა იყოს დინამიურად) 
 // ➔ დავამატოთ კიდევ ერთი ნაბიჯი, რომელსაც დავარქმევთ პირობითად, “deliverToys”, რომლის დაყოვნებაც 2 წამია (გადაეცემა დინამიურად)

/// TASK 1

 //
 // დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს (string, valueToReplace, valueToReplaceWith), ჩაანაცვლებს "valueToReplace"-ს "valueToReplaceWith" მნიშვნელობით და დააბრუნებს ახალ stringს 
 // ● არ გამოიყენო string.replace() ფუნქცია 
 // ● დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს string ტიპის მნიშვნელობას (წინადადებას), მასში ყოველ სიტყვას გადაწერს დიდი ასოთი და დააბრუნებს ახალ წინადადებას

//Task 1

console.log("Task 1")

const replaceText = (string, valueToReplace, valueToReplaceWith) => {

  return string.split(valueToReplace).join( valueToReplaceWith)


}

console.log(replaceText ("David Glunchadze", "Glunchadze", "Asabashvili")) // David Asabashvili



//Task 2

console.log("Task 2")

const toUpperCase = (poem) =>{
    const upperPoem = []

    // for (const poemText of poem){
    //     const splitText = poemText.split(' ');
    //     const upperSplitText = []

    //     for(const w of splitText){
    //         const UpperPoemText = w[0].toUpperCase() + w.slice(1)
    //         upperSplitText.push(UpperPoemText)
    //     }

    //     upperPoem.push(upperSplitText)
    // }
    // return upperPoem

    return poem.map((poemText) => poemText.split(' ')
            .map((w) => w[0].toUpperCase() + w.slice(1))
            .join(" ")
    )
}

console.log(toUpperCase(["william shakespeare sonnet 66 - tired with all these for restful death i cry, as to behold desert a beggar born, and needy nothing trimmed in jollity, and purest faith unhappily forsworn, and gilded honour shamefully misplaced, and maiden virtue rudely strumpeted, and right perfection wrongfully disgraced, and strength by limping sway disabled, and art made tongue-tied by authority, and folly doctor-like controlling skill, and simple truth miscalled simplicity, and captive good attending captain ill:, tired with all these from these would i I be gone, Save that to die I leave my love alone."]))


//Task 3

console.log("Task 3")

const users = [{ name: "James", age: 40 },{ name: "Lasha", age: 30 }, { name: "Giorgi", age: 20 }, { name: "Dato", age: 25 } ]

// const sortedUsers = users.sort((a,b,) => {
//     if (a.age < b.age ){
//         return -1
//     }
//     if (a.age > b.age){
//         return 1
//     }
//     return 0
// })

const sortedUsers = users.sort((a,b) => a.age - b.age)

console.log(sortedUsers)
 
// name: 'Giorgi', age: 20
// name: 'Dato', age: 25
// name: 'Lasha', age: 30
// name: 'James', age: 40