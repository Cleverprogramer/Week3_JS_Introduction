// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
    id: 0,
    name: "Example",
    email: "examples@you.edu",
    gender: "F",
}

  
  // Write your intern objects here:
const HR = [
    {
    id: 1,
    name: "Mitzi",
    email: "kdiben1@tinypic.com",
    gender: "F",
    },
    {
      id: 2,
      name: "Kennan",
      email: "mmelloy0@psu.edu",
      gender: "M",
    },
    {
      id: 3,
      name: "Keven",
      email: "kmummery2@wikimedia.org",
      gender: "M",
    },
    {
      id: 4,
      name: "Gannie",
      email: "gmartinson3@illinois.edu",
      gender: "M",
    },
    {
      id: 0,
      name: "Antonietta",
      email: "adaine5@samsung.com",
      gender: "F",
    }
]  
    


  // ==== Challenge 2: Reading Object Data ==== 
  // Once your objects are created, log out the following requests from HR into the console:
  
  // Mitzi's name
  
  // Kennan's ID
  
  // Keven's email
  
  // Gannie's name
  
  // Antonietta's Gender
let Mitzi = HR.find((people)=> people.name === 'Mitzi');
console.log(`Mitzi's name is ${HR[0].name} \n Kennan's ID is ${HR[1].id} \n Keven's email is ${HR[2].email} \n Gannie's name is ${HR[3].name}`)
// `` this called template literals it used to concatenate every thing 
  
  // ==== Challenge 3: Object Methods ==== 
  // Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
  // console.log(kennan.speak());

console.log(`Hello, my name is ${HR[1].name}!`)
  
  // Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
  //console.log(antonietta.multiplyNums(3,4));
  
  // === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.
  