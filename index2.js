// Question 16
console.log("\n\n");
let guest1 = ["Maham", "Mahnoor", "Menahil"];
for (let i = 0; i < guest1.length; i++) {
    console.log(`\nI invite you for dinner tonight ${guest1[i]}`);
}
let not_present1 = "Menahil";
console.log(`\n${not_present1} is not coming today for dinner.`);
console.log(`\n I inform you all of that i found a big round table`);
// unshift is used to append element in start.
guest1.unshift("Abdul Jabbar");
// push is used to append element in end.
guest1.push("Daniyal");
// to append element in middle we use splice method 
// let halfarray:number = guest.slice(guest.length/2);
// console.log(guest.length);
guest1.splice(guest1.length / 2, 0, "Taimoor");
for (let i = 0; i < guest1.length; i++) {
    if (guest1[i] === "Menahil") {
        guest1.splice(i, 1, "Sabar");
    }
    console.log(`\nI invite you for dinner tonight ${guest1[i]}`);
}
// Question 17
console.log("\n\n");
let guest2 = ["Abdul Jabbar", "Maham", "Taimoor", "Mahnoor", "Sabar", "Daniyal"];
// Start my program with question 16.
console.log("I inform you all that i invite only two person for dinner because i do not arrange a big table.");
// i made a for loop which start from last array length and go at the end in the under of for loop i apply an if condition where when i 3 ka equal hota hai to ma loop ko print karti hon un do guest ko uska bd ma array ko full empty kardiya.
for (let i = guest2.length; i > 2; i--) {
    let remove = guest2.pop();
    console.log(`\n${remove} Sorry I cannot invite you for dinner.`);
}
guest2.forEach((guest) => {
    console.log(`\nDear ,${guest} , you are still invited for dinner.`);
});
guest2.pop();
guest2.pop();
console.log(guest2);
// Question 18
console.log("\n\n");
let place = ["Saudi Arabia", "Swat", "Thialand", "America", "Paris"];
console.log(`Orginal array : `, place);
let sorted = place.sort();
console.log(`Alphabetical order array : `, sorted);
console.log(`Orginal array : `, place);
// let reversed:string[] = place.toReversed().toSorted();
let reversed = place.sort().reverse();
console.log(`Reverse Alphabetical order array : `, reversed);
console.log(`Orginal array : `, place);
place.reverse();
console.log(`Reverse the order : `, place);
place.reverse();
console.log(`Back to original order : `, place);
// console.log(place.sort());
place.sort();
console.log(`Sort array : `, place);
place.sort((a, b) => b.localeCompare(a));
console.log(`Sort array in original order : `, place);
// Question 19
console.log("\n\n");
let invitation_list = ["Maham", "Abdul Jabbar"];
let count = invitation_list.length;
console.log(count);
// Question 20
console.log("\n\n");
let language = ["Urdu", "English", "Sindhi", "Punjabi", "Balochi", "Arabic", "Japanes"];
console.log(`List of languages : \n `, language);
// Question 21
console.log("\n\n");
const person = {
    name: "Maham Jabbar",
    father_name: "Abdul Jabbar",
    gender: "Female",
    age: 20,
};
console.log(person);
// Question 22
console.log("\n\n");
let city = ["Jhang", "Karachi", "Lahore", "Faisalabad"];
// console.log(city{4});
console.log(city[3]);
// Question 23
console.log("\n\n");
let car = 'subaru';
console.log("Is car =='subaru'?I predict True.");
console.log(car == 'subaru');
console.log("Is car !='hondaa'?I predict True.");
console.log(car != 'hondaa');
console.log("Is car >='hondaa'?I predict True.");
console.log(car >= 'hondaa');
console.log("Is car <='urabus'?I predict True.");
console.log(car <= 'urabus');
console.log("Is car ==='subaru'?I predict True.");
console.log(car === 'subaru');
console.log("Is car =='hondaa'?I predict False.");
console.log(car == 'hondaa');
console.log("Is car <'hondaa city'?I predict False.");
console.log(car < 'hondaa');
console.log("Is car <='hondaa'?I predict False.");
console.log(car <= 'hondaa');
console.log("Is car >='urabus'?I predict False.");
console.log(car >= 'urabus');
console.log("Is car !='subaru'?I predict False.");
console.log(car != 'subaru');
// Question 24
console.log("\n\n");
// Test for equality and inequality with string
let name = "Maham";
console.log("Test for equality", name == "Maham");
console.log("Test for inequality", name == "maham");
// Test using the lower case function
if (name == "maham") {
    console.log("Name is equal.");
}
else {
    console.log("Name is not equal.");
}
// Numerical testing
let age1 = 15;
let age2 = 19;
if (age1 > age2) {
    console.log(`${age1} is greater than ${age2}`);
}
else {
    console.log(`${age1} is less than ${age2}`);
}
if (age1 <= age2) {
    console.log(`${age1} is less than or equal to ${age2}`);
}
else {
    console.log(`${age1} is greater than or equal to ${age2}`);
}
if (age1 == 15 && age2 == 19) {
    console.log("Result is true in and operator.");
}
if (age1 <= 17 || age2 == 15) {
    console.log("Result is true in or operator.");
}
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
for (let i = 0; i < days.length; i++) {
    if (days[i] == "Friday") {
        console.log("Day is found in week.");
    }
}
if (days[2] != "Maham") {
    console.log("Day is not found in week.");
}
// Question 25
console.log("\n\n");
// let alien_color:string = "green";
// if(alien_color=="green"){
//     console.log("The player just earned 5 points.")
// }
let alien_color = "red";
if (alien_color == "green") {
    console.log("The player just earned 5 points.");
}
// Question 26
console.log("\n\n");
// We use alien_color variable from question 25
if (alien_color == "green") {
    console.log("The player just earned 5 points.");
}
else {
    console.log("The player just earned 10 points.");
}
// Question 27
console.log("\n\n");
if (alien_color == "green") {
    console.log("The player just earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("The player just earned 10 points.");
}
else if (alien_color == "red") {
    console.log("The player just earned 15 points.");
}
// Question 28
console.log("\n\n");
let age = 66;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// Question 29
console.log("\n\n");
let favoruite_fruit = ["Mango", "Orange", "Kewi"];
if (favoruite_fruit[1] == "Orange") {
    console.log("You really like Orange.");
}
if (favoruite_fruit[2] == "orange") {
    console.log("You really like Orange.");
}
if (favoruite_fruit[0] == "Mango") {
    console.log("You really like Mango.");
}
if (favoruite_fruit.includes("Apple")) {
    console.log("You really like Apple.");
}
if (favoruite_fruit.includes("Kewi")) {
    console.log("You really like Kewi.");
}
// Question 30
console.log("\n\n");
let username = ["Maham", "Sabar", "admin", "Taimoor", "Daniyal"];
for (let i = 0; i < username.length; i++) {
    if (username[i] == "admin") {
        console.log("Hello admin,would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username[i]},thank you for logging in again.`);
    }
}
// Question 31
console.log("\n\n");
if (username.length == 0) {
    console.log("We need to find some user.");
}
else {
    for (let i = 0; i < username.length; i++) {
        if (username[i] == "admin") {
            console.log("Hello admin,would you like to see a status report?");
        }
        else {
            console.log(`Hello ${username[i]},thank you for logging in again.`);
        }
    }
}
username = [];
if (username.length == 0) {
    console.log("We need to find some user.");
}
export {};
