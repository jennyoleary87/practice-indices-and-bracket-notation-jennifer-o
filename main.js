/*
03/18/25
Practice: Using Arrays - 1: Indices and Bracket Notation

Instructions:
You are managing a library system where books and movies are stored in a 2D
array, with each row representing a shelf, and each column representing an item
on that shelf.

Tasks:
Make sure to write the code for each task using only bracket notation.
Task 1: Create a multi-dimensional array with nine books and/or movies of your
choice.
*/

let wizardingMovies = [
    ["Philosophers Stone", "Chamber of Secrets", "Prisoner of Azkaban"],
    ["Goblet of Fire", "Order of the Phoenix", "Half Blood Prince"],
    ["Deathly Hallows", "Fantastic Beasts", "Secrets of Dumbledore"]
]

/*
Task 2: Access and log all the elements in the array using bracket notation with
numbers.
*/

console.log(" --- Task 2: Bracket Notation --- ");
// SHELF ONE
console.log(wizardingMovies[0][0]); // Philosophers Stone
console.log(wizardingMovies[0][1]); // Chamber of Secrets
console.log(wizardingMovies[0][2]); // Prisoner of Azkaban
// SHELF TWO
console.log(wizardingMovies[1][0]); // Goblet of Fire
console.log(wizardingMovies[1][1]); // Order of the Phoenix
console.log(wizardingMovies[1][2]); // Half Blood Prince
// SHELF THREE
console.log(wizardingMovies[2][0]); // Deathly Hallows
console.log(wizardingMovies[2][1]); // Fantastic Beasts
console.log(wizardingMovies[2][2]); // Secrets of Dumbledore

/*
Task 3: Access and log all the elements in the array using bracket notation with
variables as indices. Use the variables row and item.
*/

console.log(" --- Task 3: Log With Indices --- ");
for (let row = 0; row < 3; row++) {
    for (let item = 0; item < 3; item++) {
        console.log(wizardingMovies[row][item]);
    }
}

/*
Task 4: Write a loop that prints all the items on the second shelf.
*/

console.log(" --- Task 4: Second Shelf --- ");
for (let item = 0; item < wizardingMovies[1].length; item++) {
    console.log(wizardingMovies[1][item]);
}

