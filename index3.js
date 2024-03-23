var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Qusetion 32
console.log("\n\n");
var current_user = ["Maham", "Sabar", "admin", "Taimoor", "Daniyal"];
var new_user = ["maham", "sabar", "Daniyal", "Taimoor", "Jabbar"];
var current_user_upper = current_user.map(function (user) { return user.toUpperCase(); });
for (var _i = 0, new_user_1 = new_user; _i < new_user_1.length; _i++) {
    var newuser = new_user_1[_i];
    if (current_user_upper.includes(newuser.toUpperCase())) {
        console.log("".concat(newuser, " is already taken"));
    }
    else {
        console.log("".concat(newuser, " is now available in the list."));
    }
}
// Question 33
console.log("\n\n");
var ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var num = 0; num < ordinal.length; num++) {
    if (ordinal[num] === 1) {
        console.log("".concat(ordinal[num], "st"));
    }
    else if (ordinal[num] === 2) {
        console.log("".concat(ordinal[num], "nd"));
    }
    else if (ordinal[num] === 3) {
        console.log("".concat(ordinal[num], "rd"));
    }
    else {
        console.log("".concat(ordinal[num], "th"));
    }
}
// Question 34
console.log("\n\n");
var pizza = ["Kabab krust", "Chicken Tikka", "Fajita"];
for (var i = 0; i < pizza.length; i++) {
    console.log(pizza[i]);
}
for (var i = 0; i < pizza.length; i++) {
    console.log("I like ".concat(pizza[i], " pizza"));
}
console.log("Pizza is an Italian food that was created in Italy (The Naples area). It is made with different toppings. ");
// Question 35
console.log("\n\n");
var animal = ["lion", "tiger", "elephant"];
for (var _a = 0, animal_1 = animal; _a < animal_1.length; _a++) {
    var pet = animal_1[_a];
    console.log(pet);
}
for (var _b = 0, animal_2 = animal; _b < animal_2.length; _b++) {
    var pet = animal_2[_b];
    console.log("A ".concat(pet, " would make a great pet."));
}
console.log("All of these animals eat meat and I like tiger.");
// Question 36
console.log("\n\n");
function make_shirt(size, message) {
    console.log("The size of the shirt is ".concat(size, " and ").concat(message));
}
make_shirt("small", "My name is Maham Jabbar");
// Question 37
console.log("\n\n");
function make_shirt_modify(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The size of the shirt is ".concat(size, " and ").concat(message));
}
make_shirt_modify();
make_shirt_modify("Small", "My name is Maham Jabbar");
// Question 38
console.log("\n\n");
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Lahore");
describe_city("Jhang");
describe_city("Madinah", "Saudi Arabia");
// Question 39
console.log("\n\n");
function city_country(city, country) {
    return "".concat(city, ",").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Makkah", "Saudi Arabia"));
// Question 40
console.log("\n\n");
function make_album(artist, title) {
    var distionaries = {
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
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
}
var magicians = ["Maham", "Sabar", "Mahnoor", "Menahil", "Areeb"];
show_magicians(magicians);
// Question 42
console.log("\n\n");
var magicians2 = ["Maham", "Sabar", "Mahnoor", "Menahil", "Areeb"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " is the best.";
    }
}
make_great(magicians2);
show_magicians(magicians2);
// Question 43
console.log("\n\n");
var magicians3 = ["Maham", "Sabar", "Mahnoor", "Menahil", "Areeb"];
function make_greet(magicians) {
    var greet = [];
    for (var i = 0; i < magicians.length; i++) {
        greet[i] = magicians[i] + " is the best.";
        // greet[i] = magicians[i];
    }
    return greet;
}
var greet = make_greet(magicians3);
show_magicians(greet);
show_magicians(magicians3);
// Question 44
console.log("\n\n");
function sandwich(items) {
    console.log("Sandwich order ");
    for (var i = 0; i < items.length; i++) {
        console.log(" - ".concat(items[i]));
    }
}
console.log("I want these type of order ");
sandwich(["Tomate", "Potato", "Chiken", "Chilli"]);
sandwich(["Potato", "Chiken", "Chilli"]);
sandwich(["Potato", "Chiken"]);
// Question 45
console.log("\n\n");
function createcar(manufacturer, model, optional) {
    return __assign({ manufacturer: manufacturer, model: model }, optional);
}
var mycar = createcar("Honda", "Diecast", { year: 2023, material: "plastic" });
console.log(mycar);
