// Use a do...while loop to console.log the numbers from 1 to 1000.

const countTo1000 = () => {
    let num = 0

    do {
        num += 1;
        console.log('The number is currently: ' + num + '!')
    } while (num < 1000)
}

countTo1000()

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
    firstName: "Johnathan",
    lastName: "Doeathan",
    birthDate: "Jan 6, 2003",
    gender: "male"
    },
    { 
        firstName: "Pish",
        lastName: "Posh",
        birthDate: "Jan 6, 1950",
        gender: "male"
        },
    { 
            firstName: "Carl",
            lastName: "McCarlton",
            birthDate: "Jan 6, 2005",
            gender: "male"
            }
]

// Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.

// let bigSplit = arrayOfPersons.birthDate.split(' ')[2]

// const dateIsOdd = (arrayOfPersons) => {
//     for (account of arrayOfPersons) {
//         // console.log("Check:", account)
//         let split = account.birthDate.split(" ")[2]
//         let isOdd = split % 2 !== 0
//         if (isOdd) {
//             console.log(account.birthDate)
//         }
//       }
// }

// dateIsOdd()

let personsWithColor = arrayOfPersons.map(person => {
    console.log('person:', person)
    person.color = 'blue'
    return person
})

console.log(personsWithColor)

let malePersons = arrayOfPersons.filter(person => person.gender == 'male')
console.log(malePersons)


let oldPersons = arrayOfPersons.filter(person => person.birthDate.split(' ')[2] <= 1990)
console.log('oldPersons:', oldPersons)

let today = new Date()
let year = today.getFullYear()
let yearsAgo = arrayOfPersons.map(person => year - person.birthDate.split(' ')[2] >= 21)
console.log(yearsAgo)

let over21 = arrayOfPersons.filter(person => year - person.birthDate.split(' ')[2] >= 21)
console.log('People over 21:', over21)