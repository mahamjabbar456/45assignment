// Question 1
// Installation complete

// Question no 2

let person_name:string = "Eric";
console.log(`Hello ${person_name}, would you like to learn some Python today?`);

// Question no 3 use previous person name
console.log(person_name.toUpperCase());
console.log(person_name.toLowerCase());

// Question 4
console.log("\n\n");
console.log('Alber Einstein once said,"A person who never made a mistake never tried anything new"');

// Question 5
console.log("\n\n");
let famous_person:string = "Alber Einstein";
let message:string = famous_person + ' once said,"A person who never made a mistake never tried anything new"';
console.log(message);

// Question 6
console.log("\n\n");
let person_name1:string = "      Maham \t Jabbar           ";
console.log(person_name1);
console.log(person_name1.trim());

// Question 7 and 8
console.log("\n\n");

console.log(6+2)   //addition
console.log(10-2)   //subtraction
console.log(4*2)   //multiplication
console.log(16/2)   //division

// Question 9
console.log("\n\n");

let FavNumber = 14;
let message1 = `My favourite number is ${FavNumber}`;
console.log(message1);

// Question 10 I used comment in question 7 and 8

// Question 11
console.log("\n\n");

let names :string[] = ["Maham","Daniyal","Aneek","Mahnoor"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// Question 12
console.log("\n\n");

for(let i =0;i<names.length;i++){
    console.log(`My name is ${names[i]}`);
}
// Question 13
console.log("\n\n");

let items:string[] = ["Car","Cycle","Honda Mortorcycle","Rickshaw"];
for (let i = 0;i<items.length;i++){
    console.log(`\nI would like to own a ${items[i]}`);
}

// Question 14
console.log("\n\n");

let guest:string[] = ["Maham","Mahnoor","Menahil"];
for (let i = 0;i<guest.length;i++){
    console.log(`\nI invite you for dinner tonight ${guest[i]}`);
}

// Question 15
console.log("\n\n");
let not_present:string = "Menahil"
console.log(`\n${not_present} is not coming today for dinner.`);
for (let i = 0;i<guest.length;i++){
    if(guest[i]==="Menahil"){
        // let not_present = guest[i];

        // In this splice method we used start index which value in i is equal and delete value we write 1 because we delete 1 value and last we write which value we want to replace.
        guest.splice(i,1,"Sabar");
        // console.log(guest.splice(i,1,"Sabar"));
    }
    console.log(`\nI invite you for dinner tonight ${guest[i]}`);
}
