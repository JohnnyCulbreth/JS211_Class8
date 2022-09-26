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

// Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.

const keyBirth = (arr) => {
    let
    for (author of arr) {
        text += author + " and... ";
      }
      return text
}