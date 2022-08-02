let person = {
    firstName: "Trew",
    lastName: "Boisvert",
    age: 35,
    height: 100
}

person.job = "Instructor"
person["pet"] = ["Pyxis", "Henri"]

// console.log(person)

// delete person.lastName

// console.log("After deletion")
// console.log(person)
// for (key in person) {
//     console.log(key)
//     console.log(person[key])
// }
// console.log(person.firstName)
// console.log(person['lastName'])
// const doodle = "age"
// console.log(person[doodle])
// command-slash to comment code in or out

let meal = {
    appetizer: "gyoza",
    entree: "chicken pot pie",
    dessert: "mochi doughnut", 
    drink: "thai iced tea",
    meds: ["vitamin D", "zinc"],
    utensils: {spoons: 20}
}

const {dessert} = meal

const {appetizer, entree} = meal
// console.log(dessert, appetizer, entree)

const {drink: beverage} = meal
// console.log(beverage)

const {dessert: snack, appetizer: shared} = meal

// console.log(snack, shared)

// const test = "test1"
// test = 42
// console.log(test)
// line 49 (test = 42) will cause an error

// const sampleList = ["dog"]
// sampleList.push("cat")
// console.log(sampleList)

class AddressBookPage {
    constructor(name, email, phone){
        this.name = name
        this.email = email
        this.phone = phone
    }

    printDetails() {
        console.log(`The name is ${this.name} and the email is ${this.email} and the phone number is ${this.phone}`)
    }
}
//the code below extends the AddressBookPage class
class SocialMediaPage extends AddressBookPage {
    constructor(name, email, phone, website){
        super(name, email, phone)
        this.website = website
    }
}

let pyxis = new AddressBookPage("Pyxis", "sleepy@boy.com", "123-4567")
// console.log(pyxis)
let henri = new AddressBookPage("Henri", "kingOfTheCosmos@baby.com", "123-4567")
// console.log(henri)
let judas = new SocialMediaPage("Judas", "tupes@poops.com", "000-0000", "WoofBook")
// henri.printDetails()
console.log(judas)
// for (items in pyxis){
//     console.log(items)
// } 
