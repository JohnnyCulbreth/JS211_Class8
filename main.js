let today = new Date()
let currentYear = today.getFullYear()

// Use a do...while loop to console.log the numbers from 1 to 1000.

const countTo100 = () => {
    let num = 0

    while (num < 100) {
        num += 1;
        console.log('The number is currently: ' + num + '!')
    }
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
    }
]

const accountOf = (array, name) => {
    for (account of array) {
        if (account.firstName == name) {
            // console.log("Found the account:", account)
            return(account)
        }
    }
}

const birthDateOf = (account) => {
    let birthYear = account.birthDate.split(" ")[2]
    return (birthYear)
}

// Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.

const keyBirth = (array) => {
    for (account of array) {
        // console.log("Check:", account)
        let birthYear = getBirthDate(account)
        let birthdayIsOdd = parseInt(birthYear) % 2 !== 0
        if (birthdayIsOdd) {
            // console.log(account.birthDate)
            return(account.birthDate)
        }
      }
}
keyBirth(arrayOfPersons)

let personsWithColor = arrayOfPersons.map(account => {
    // console.log('person before:', person)
    account.color = 'blue'
    // console.log('person now:', person)
    return account
})

let malePersons = arrayOfPersons.filter(account => {
    if (account.gender === 'male') {
        return account
    }
})
// console.log(malePersons)

const beforeDate = (arr) => {
    for (account of arr) {
        // console.log("Check:", account)
        let birthYear = getBirthDate(account)
        personIsOld = birthYear < 1990
        if (personIsOld) {
            // console.log(account, "this person is OLD!")
            return(true)
        }
      }
}
beforeDate(arrayOfPersons)

const ageCheck = (birthYear) => {
    let over21 = parseInt(currentYear) - parseInt(birthYear) >= 21
    if (over21) {
        console.log("Person is OVER 21!")
        return(true)
    } else {
        console.log("Person is UNDER 21!")
        return(false)
    }
}

ageCheck(birthDateOf(accountOf(arrayOfPersons, "James")))