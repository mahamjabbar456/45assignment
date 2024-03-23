// Question 1
// Installation complete
// Question no 2
let person_name = "Eric";
console.log(`Hello ${person_name}, would you like to learn some Python today?`);
// Question no 3 use previous person name
console.log(person_name.toUpperCase());
console.log(person_name.toLowerCase());
// Question 4
console.log("\n\n");
console.log('Alber Einstein once said,"A person who never made a mistake never tried anything new"');
// Question 5
console.log("\n\n");
let famous_person = "Alber Einstein";
let message = famous_person + ' once said,"A person who never made a mistake never tried anything new"';
console.log(message);
// Question 6
console.log("\n\n");
let person_name1 = "      Maham \t Jabbar           ";
console.log(person_name1);
console.log(person_name1.trim());
// Question 7 and 8
console.log("\n\n");
console.log(6 + 2); //addition
console.log(10 - 2); //subtraction
console.log(4 * 2); //multiplication
console.log(16 / 2); //division
// Question 9
console.log("\n\n");
let FavNumber = 14;
let message1 = `My favourite number is ${FavNumber}`;
console.log(message1);
// Question 10 I used comment in question 7 and 8
// Question 11
console.log("\n\n");
let names = ["Maham", "Daniyal", "Aneek", "Mahnoor"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// Question 12
console.log("\n\n");
for (let i = 0; i < names.length; i++) {
    console.log(`My name is ${names[i]}`);
}
// Question 13
console.log("\n\n");
let items = ["Car", "Cycle", "Honda Mortorcycle", "Rickshaw"];
for (let i = 0; i < items.length; i++) {
    console.log(`\nI would like to own a ${items[i]}`);
}
// Question 14
console.log("\n\n");
let guest = ["Maham", "Mahnoor", "Menahil"];
for (let i = 0; i < guest.length; i++) {
    console.log(`\nI invite you for dinner tonight ${guest[i]}`);
}
// Question 15
console.log("\n\n");
let not_present = "Menahil";
console.log(`\n${not_present} is not coming today for dinner.`);
for (let i = 0; i < guest.length; i++) {
    if (guest[i] === "Menahil") {
        // let not_present = guest[i];
        // In this splice method we used start index which value in i is equal and delete value we write 1 because we delete 1 value and last we write which value we want to replace.
        guest.splice(i, 1, "Sabar");
        // console.log(guest.splice(i,1,"Sabar"));
    }
    console.log(`\nI invite you for dinner tonight ${guest[i]}`);
}
// Qusetion 32
console.log("\n\n");
let current_user = ["Maham", "Sabar", "admin", "Taimoor", "Daniyal"];
let new_user = ["maham", "sabar", "Daniyal", "Taimoor", "Jabbar"];
let current_user_upper = current_user.map(user => user.toUpperCase());
for (let newuser of new_user) {
    if (current_user_upper.includes(newuser.toUpperCase())) {
        console.log(`${newuser} is already taken`);
    }
    else {
        console.log(`${newuser} is now available in the list.`);
    }
}
// Question 33
console.log("\n\n");
let ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let num = 0; num < ordinal.length; num++) {
    if (ordinal[num] === 1) {
        console.log(`${ordinal[num]}st`);
    }
    else if (ordinal[num] === 2) {
        console.log(`${ordinal[num]}nd`);
    }
    else if (ordinal[num] === 3) {
        console.log(`${ordinal[num]}rd`);
    }
    else {
        console.log(`${ordinal[num]}th`);
    }
}
// Question 34
console.log("\n\n");
let pizza = ["Kabab krust", "Chicken Tikka", "Fajita"];
for (let i = 0; i < pizza.length; i++) {
    console.log(pizza[i]);
}
for (let i = 0; i < pizza.length; i++) {
    console.log(`I like ${pizza[i]} pizza`);
}
console.log("Pizza is an Italian food that was created in Italy (The Naples area). It is made with different toppings. ");
// Question 35
console.log("\n\n");
let animal = ["lion", "tiger", "elephant"];
for (let pet of animal) {
    console.log(pet);
}
for (let pet of animal) {
    console.log(`A ${pet} would make a great pet.`);
}
console.log("All of these animals eat meat and I like tiger.");
// Question 36
console.log("\n\n");
function make_shirt(size, message) {
    console.log(`The size of the shirt is ${size} and ${message}`);
}
make_shirt("small", "My name is Maham Jabbar");
// Question 37
console.log("\n\n");
function make_shirt_modify(size = 'large', message = 'I love TypeScript') {
    console.log(`The size of the shirt is ${size} and ${message}`);
}
make_shirt_modify();
make_shirt_modify("Small", "My name is Maham Jabbar");
// Question 38
console.log("\n\n");
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Lahore");
describe_city("Jhang");
describe_city("Madinah", "Saudi Arabia");
// Question 39
console.log("\n\n");
function city_country(city, country) {
    return `${city},${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Makkah", "Saudi Arabia"));
// Question 40
console.log("\n\n");
function make_album(artist, title) {
    const distionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return distionaries;
}
console.log(make_album("Maham", "Red"));
console.log(make_album("Sabar", "Light wave"));
console.log(make_album("Daniyal", "green"));
// let album:object = make_album("Maham","Maham Jabbar");
// console.log(album);
// Question 41
console.log("\n\n");
function show_magicians(names) {
    for (let name of names) {
        console.log(name);
    }
}
let magicians = ["Maham", "Sabar", "Mahnoor", "Menahil", "Areeb"];
show_magicians(magicians);
// Question 42
console.log("\n\n");
let magicians2 = ["Maham", "Sabar", "Mahnoor", "Menahil", "Areeb"];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " is the best.";
    }
}
make_great(magicians2);
show_magicians(magicians2);
// Question 43
console.log("\n\n");
let magicians3 = ["Maham", "Sabar", "Mahnoor", "Menahil", "Areeb"];
function make_greet(magicians) {
    const greet = [];
    for (let i = 0; i < magicians.length; i++) {
        greet[i] = magicians[i] + " is the best.";
        // greet[i] = magicians[i];
    }
    return greet;
}
let greet = make_greet(magicians3);
show_magicians(greet);
show_magicians(magicians3);
// Question 44
console.log("\n\n");
function sandwich(items) {
    console.log("Sandwich order ");
    for (let i = 0; i < items.length; i++) {
        console.log(` - ${items[i]}`);
    }
}
console.log("I want these type of order ");
sandwich(["Tomate", "Potato", "Chiken", "Chilli"]);
sandwich(["Potato", "Chiken", "Chilli"]);
sandwich(["Potato", "Chiken"]);
// Question 45
console.log("\n\n");
function createcar(manufacturer, model, optional) {
    return {
        manufacturer,
        model,
        ...optional
    };
}
let mycar = createcar("Honda", "Diecast", { year: 2023, material: "plastic" });
console.log(mycar);
export {};
