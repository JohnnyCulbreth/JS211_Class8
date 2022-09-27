// Use a do...while loop to console.log the numbers from 1 to 1000.

const countTo100 = () => {
    let num = 0

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
    birthDate: "Jan 5, 1925",
    gender: "female"
}

// Create a function that logs out the keys of the object using Object.keys().

console.log(Object.keys(person))

// Create a function that logs out the keys and values of the object using Object.entries().

console.log(Object.entries(person))

console.log(Object.values(person))

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
    birthDate: "Jan 6, 2005",
    gender: "male"
    },
    { 
    firstName: "James",
    lastName: "Doe",
    birthDate: "Jan 7, 1975",
    gender: "male"
    }
]

// Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.


const keyBirth = (arr) => {
for (let person of arrayOfPersons) {
    // console.log(item.birthDate)
    let split = person.birthDate.split(' ')[2] //first getting birthdate of the person, splitting the full birthdate into an array with 3 indexes, then grabbing the 3rd index

    // console.log(split)

    let isOdd = parseInt(split) % 2 !== 0
    if (isOdd) {
        console.log(person.birthDate)
    }

}}

keyBirth(arrayOfPersons)

//Use .map() to map over the arrayOfPersons and console.log() their information.

let personsWithColor = arrayOfPersons.map((person)=> {
    console.log('person: ', person)
    person.color = 'blue'; // adding a new property of color and setting it to blue
    return person
})

    console.log(personsWithColor)

//Use .filter() to filter the persons array and console.log only males in the array.

let malePersons = arrayOfPersons.filter((person)=> {
    if (person.gender === 'male') {
        return person
    }})

    console.log(malePersons)

//Create a function that returns true if the value of birthDate is before Jan 1, 1990.
//Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

let oldPeople = arrayOfPersons.filter((person)=> {
    let year = person.birthDate.split(' ')[2]
    year = parseInt(year)

    if(year < 1990) {
        return true

}
})
console.log(oldPeople)

//BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.

let today = new Date()
let year = today.getFullYear()

// console.log(year)

let greaterThanTwentyOne = arrayOfPersons.map(person => year - person.birthDate.split(' ')[2] >= 21
)

    console.log(greaterThanTwentyOne)

//BONUS - .filter() out the people in the array who are younger than 21.

