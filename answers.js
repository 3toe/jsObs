var users = [
   {
       name: "Michael",
       age: 37
   },
   {
       name: "John",
       age: 30
   },
   {
       name: "David",
       age: 27
   }
];

/* 
1. How would you print/log John's age?
2. How would you print/log the name of the first object?
3. How would you print/log the name and age of each user using a for loop? Your output should look something like this:
   Michael - 37
   John - 30
   David - 27

*/

// 1.
console.log(users[1].name);
// 2.
console.log(users[0].name);
// 3.
for(o in users){
   console.log(users[o].name + " - " + users[o].age);
}