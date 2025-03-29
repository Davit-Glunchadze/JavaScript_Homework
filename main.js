
 //setTimeout ფუნქცია იყენებს callback-ს, დაწერეთ მისი promise-ზე დადაფუძნებული ალტერნატივა ● (მაგ: mySetTimeout(delay).then(...) 
 // ● გამოიყენე პირველ დავალებაში შექმნილი ფუნქცია, რათა განავრცო ჩვენს მიერ დაწერილი “Toy Shop” შემდეგი პირობის იმპლემენტაციით: 
 // ➔ სათამაშოს დამზადებას სჭირდება დაახლოებით 3 წამი. (დროის მითითება შესაძლებელი უნდა იყოს დინამიურად) 
 // ➔ დავამატოთ კიდევ ერთი ნაბიჯი, რომელსაც დავარქმევთ პირობითად, “deliverToys”, რომლის დაყოვნებაც 2 წამია (გადაეცემა დინამიურად) 
 // ➔ სათამაშოს გაყიდვას სჭირდება 1 წამი (დინამიურად) ● ყოველი მომდევნო ნაბიჯი უნდა ელოდებოდეს წინა ნაბიჯის რეზულტატს და შესაბამისად წყვეტდეს მოხდება თუ არა მისი შესრულება
 // ● გამოიყენე .then().catch() და async/await ● სინტაქსები. (2 ვარიანტი)

gt
/// TASK 1

function mySetTimeout(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello There");
    }, delay);
  });
}

const started = Date.now();

mySetTimeout(2000)
  .then((res) => { console.log(`${res} (TASK 1)`) // დრო 2 წამი
    //დროის გამოთვლა
  const end = Date.now()
  const totalTime = (end - started)/1000
  console.log(`Total time: ${totalTime} seconds`)
});

/// TASK 2 --- option A  then/catch

//შექმნა
function makeToys(makeTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve("Undefected"); //უდეფექტო (3 წამი)
      } else {
        reject("Defected"); //დეფექტური --- კოდი გაჩერდა (3 წამი)
      }
    }, makeTime);
  });
}

// გაყიდვა
function sellToys(sellStatus, sellTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sellStatus === "Undefected") {
        if (Math.random() > 0.7) {
          resolve("Toy has been sold"); //უდეფექტო --- გაიყიდა (+ 1  წამი = 4)
        } else {
          reject("Toy has not been sold"); //უდეფექტო --- არ გაიყიდა --- კოდი გაჩერდა (+ 1  წამი = 4)
        }
      }
    }, sellTime);
  });
}
//მიტანა
function deliverToys(deliverStatus, deliverTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (deliverStatus === "Toy has been sold") {
        if (Math.random() > 0.5) {
          resolve("Toy has been delivered"); //უდეფექტო --- გაიყიდა --- მივიდა მომხმარებელთან ---კოდი გაჩერდა (+ 2 წამი = 6)
        } else {
          reject("Toy has not been delivered"); //უდეფექტო --- გაიყიდა ---ვერ მივიდა მომხმარებელთან ---კოდი გაჩერდა (+ 2 წამი = 6)
        }
      }
    }, deliverTime);
  });
}

const startTime = Date.now();

makeToys(3000)
  .then((sellStatus) => sellToys(sellStatus, 1000))
  .then((deliverStatus) => deliverToys(deliverStatus, 2000))
  .then((res) => {
    console.log(`${res} (TASK 2 - Option A)`);
    // დროის გამოთვლა
    const endTime = Date.now();
    const totalTimeInSeconds = (endTime - startTime) / 1000;
    console.log(`Total time: ${totalTimeInSeconds} seconds`);
  })
  .catch((error) => {
    console.log(`${error} (TASK 2 - Option A)`);
    //დროის გამოთვლა
    const endTime = Date.now();
    const totalTimeInSeconds = (endTime - startTime) / 1000;
    console.log(`Total time: ${totalTimeInSeconds} seconds`);
  });

////// TASK 1 --- option B  async/await

//შექმნა
async function makeToys() {
  function mySetTimeout(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.2) {
          resolve ("Undefected"); //უდეფექტო (3 წამი)
        } else {
          reject ("Defected"); //დეფექტური --- კოდი გაჩერდა (3 წამი)
        }
      }, delay);
    });
  }
  return await mySetTimeout(3000);
}

// გაყიდვა
async function sellToys(sellStatus) {
    function mySetTimeout(delay) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (sellStatus === "Undefected") {
            if (Math.random() > 0.7) {
              resolve("Toy has been sold"); //უდეფექტო --- გაიყიდა (+ 1  წამი = 4)
            } else {
              reject("Toy has not been sold"); //უდეფექტო --- არ გაიყიდა --- კოდი გაჩერდა (+ 1  წამი = 4)
            }
          }
        }, delay);
      });
    }
    return await mySetTimeout(1000)
}

// მიტანა
async function deliverToys(deliverStatus) {
    function mySetTimeout(delay) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (deliverStatus === "Toy has been sold") {
            if (Math.random() > 0.5) {
              resolve("Toy has been delivered"); //უდეფექტო --- გაიყიდა --- მივიდა მომხმარებელთან ---კოდი გაჩერდა (+ 2 წამი = 6)
            } else {
              reject("Toy has not been delivered"); //უდეფექტო --- გაიყიდა ---ვერ მივიდა მომხმარებელთან ---კოდი გაჩერდა (+ 2 წამი = 6)
            }
          }
        }, delay);
      });
    }
    return await mySetTimeout(2000)
}

const start = Date.now();

async function toys() {
  try {
    const sellStatus = await makeToys()
    const deliverStatus = await sellToys(sellStatus)
    const result = await deliverToys(deliverStatus)
    console.log(`${result} (TASK 2 - Option B)`);
    //დროის გამოთვლა
    const end = Date.now();
    const totalTimeInSeconds = (end - start) / 1000;
    console.log(`Total time: ${totalTimeInSeconds} seconds`)
  } catch (error) {
    console.log(`${error} (TASK 2 - Option B)`);
    // დროის გამოთვლა
    const end = Date.now();
    const totalTimeInSeconds = (end - start) / 1000;
    console.log(`Total time: ${totalTimeInSeconds} seconds`)
  }
}

toys()

