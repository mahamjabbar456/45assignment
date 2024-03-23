// Qusetion 32
console.log("\n\n");
let current_user:string[] = ["Maham", "Sabar", "admin", "Taimoor", "Daniyal"];
let new_user:string[] = ["maham","sabar","Daniyal","Taimoor","Jabbar"];

let current_user_upper:string[] = current_user.map(user=>user.toUpperCase());
for(let newuser of new_user){
    if(current_user_upper.includes(newuser.toUpperCase())){
        console.log(`${newuser} is already taken`);
    }else{
        console.log(`${newuser} is now available in the list.`);
    }
}

// Question 33
console.log("\n\n");
let ordinal:number[] = [1,2,3,4,5,6,7,8,9];
for(let num =0;num<ordinal.length;num++){
    if(ordinal[num]===1){
        console.log(`${ordinal[num]}st`);
    }else if(ordinal[num]===2){
        console.log(`${ordinal[num]}nd`);
    }else if(ordinal[num]===3){
        console.log(`${ordinal[num]}rd`);
    }else{
        console.log(`${ordinal[num]}th`);
    }
}

// Question 34
console.log("\n\n");
let pizza:string[] = ["Kabab krust","Chicken Tikka","Fajita"];
for(let i =0;i<pizza.length;i++){
    console.log(pizza[i]);
}

for(let i =0;i<pizza.length;i++){
    console.log(`I like ${pizza[i]} pizza`);
}

console.log("Pizza is an Italian food that was created in Italy (The Naples area). It is made with different toppings. ");

// Question 35
console.log("\n\n");
let animal:string[] = ["lion","tiger","elephant"];
for(let pet of animal){
    console.log(pet);
}
for(let pet of animal){
    console.log(`A ${pet} would make a great pet.`);
}

console.log("All of these animals eat meat and I like tiger.");

// Question 36
console.log("\n\n");
function make_shirt(size:string,message:string) {
    console.log(`The size of the shirt is ${size} and ${message}`);
}

make_shirt("small","My name is Maham Jabbar");

// Question 37
console.log("\n\n");
function make_shirt_modify(size:string='large',message:string='I love TypeScript'){
    console.log(`The size of the shirt is ${size} and ${message}`);
}
make_shirt_modify();
make_shirt_modify("Small","My name is Maham Jabbar");

// Question 38
console.log("\n\n");
function describe_city(city:string,country:string="Pakistan") {
    console.log(`${city} is in ${country}`);
}

describe_city("Lahore");
describe_city("Jhang");
describe_city("Madinah","Saudi Arabia");

// Question 39
console.log("\n\n");
function city_country(city:string,country:string):string {
    return `${city},${country}`;
}
console.log(city_country("Lahore","Pakistan"));
console.log(city_country("Karachi","Pakistan"));
console.log(city_country("Makkah","Saudi Arabia"));

// Question 40
console.log("\n\n");
function make_album(artist:string,title:string):{artist:string,title:string} {
    const distionaries = {
        artist : artist.charAt(0).toUpperCase() + artist.slice(1),
        title : title.charAt(0).toUpperCase() + title.slice(1)
    }
    return distionaries;
}

console.log(make_album("Maham","Red"));
console.log(make_album("Sabar","Light wave"));
console.log(make_album("Daniyal","green"));
// let album:object = make_album("Maham","Maham Jabbar");
// console.log(album);

// Question 41
console.log("\n\n");
function show_magicians(names:string[]) {
    for(let name of names){
        console.log(name);
    }
}

let magicians:string[] = ["Maham","Sabar","Mahnoor","Menahil","Areeb"];
show_magicians(magicians);

// Question 42
console.log("\n\n");
let magicians2:string[] = ["Maham","Sabar","Mahnoor","Menahil","Areeb"];
function make_great(magicians:string[]) {
    for(let i =0;i<magicians.length;i++){
        magicians[i]=magicians[i] + " is the best.";
    }
}
make_great(magicians2);
show_magicians(magicians2);

// Question 43
console.log("\n\n");
let magicians3:string[] = ["Maham","Sabar","Mahnoor","Menahil","Areeb"];
function make_greet(magicians:string[]):string[] {
    const greet:string[] = [];
    for(let i =0;i<magicians.length;i++){
        greet[i]=magicians[i] + " is the best.";
        // greet[i] = magicians[i];
    }
    return greet;
}
let greet:string[]= make_greet(magicians3);
show_magicians(greet);
show_magicians(magicians3);

// Question 44
console.log("\n\n");
function sandwich(items:string[]) {
    console.log("Sandwich order ");
    for(let i=0;i<items.length;i++){
        console.log(` - ${items[i]}`)
    }
}
console.log("I want these type of order ");
sandwich(["Tomate","Potato","Chiken","Chilli"]);
sandwich(["Potato","Chiken","Chilli"]);
sandwich(["Potato","Chiken"]);

// Question 45
console.log("\n\n");
type car = {
    manufacturer : string,
    model : string,
    [key:string] : any
}

function createcar(manufacturer:string,model:string,optional:Record<string,any>):car {
    return {
        manufacturer,
        model,
        ...optional
    }
}

let mycar:car = createcar("Honda","Diecast",{year:2023,material:"plastic"});
console.log(mycar);