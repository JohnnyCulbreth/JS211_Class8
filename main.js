// Use a do...while loop to console.log the numbers from 1 to 1000.

const countTo100 = () => {
    let num = 1

    do {
        num += 1;
        console.log('The number is currently: ' + num + '!')
    } while (num < 100)
}

countTo100()

// Create an object (with keys and values) called person with the following data (data from textbook).

const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 2005",
    gender: "female"
}

// Create a function that logs out the keys of the object using Object.keys().

console.log(Object.keys(person))

// Create a function that logs out the keys and values of the object using Object.entries().

console.log(Object.entries(person))

// Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

const arrayOfPersons = [
    { 
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
    },
    { 
    firstName: "John",
    lastName: "Doe",
    birthDate: "Jan 6, 1950",
    gender: "male"
    },
    { 
    firstName: "James",
    lastName: "Doe",
    birthDate: "Jan 7, 1975",
    gender: "male"
    },

    { 
        firstName: "Katrina",
        lastName: "Joe",
        birthDate: "Jan 7, 1999",
        gender: "female"
        }
]

// Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.

// let split = person.birthDate.split(' ')[2]

// let isOdd = split % 2 !== 0;

// console.log(split)

for(let item of arrayOfPersons) {
    let split = person.birthDate.split(' ')[2]
    console.log('split', split)
        let isOdd = parseInt(split) % 2 !== 0;
        console.log(isOdd)
        if (isOdd) {
            console.log (item.birthDate)
      
    } 
}

//Use .map() to map over the arrayOfPersons and console.log() their information.

let personWithColor = arrayOfPersons.map(person => {
    console.log('person:', person)
    person.color ='blue'
    return person
})

console.log(personWithColor)

//Use .filter() to filter the persons array and console.log 0only males in the array.

if (person.gender === 'male'){
    return person
}

let malePersons = arrayOfPersons.filter(person =>{
    if (person.gender === 'male'){
        return person
}
 }) 
 console.log('malePerson', malePersons)





// //["Jan", "5", "1925"]

const keyBirth = (arr) => {
    let
    for (author of arr) {
        text += author + " and... ";
      }
      return text
}

//Create a function that returns true if the value of birthDate is before Jan 1, 1990.

// let year = person.birthDate.split(' ')[2]

// year = parseInt(year)

// return if (year <= 1990) {
// //     return true
// }

let youngPerson = arrayOfPersons.filter(person => {
    console.log('person:', person)
    let year = person.birthDate.split(' ')[2]
     year = parseInt(year)
     if (year <= 1990) {
        return true}
})
 console.log(youngPerson)


// let today = new Date()
//  let today = new Date().getFullYear()

//  let personYear = parseInt(person.birthDate.split(' ')[2])

 let greaterThanTwentyOne = arrayOfPersons.map(person => {

    let today = new Date()
    let year = today.getFullYear()

     let personYear = parseInt(person.birthDate.split(' ')[2])

     return  year - personYear >= 21

 })

 console.log(greaterThanTwentyOne)

 
 
 
 let underTwentyOne = arrayOfPersons.map(person => {

    let today = new Date()
    let year = today.getFullYear()

     let personYear = parseInt(person.birthDate.split(' ')[2])

     return  year - personYear < 21 
 })

 console.log(underTwentyOne)


 let withColor = arrayOfPersons.find( person => {

    return person.color
 })


 console.log('withColor', withColor)

 let withColor = arrayOfPersons.findIndex (person => {
    return person.color
 })