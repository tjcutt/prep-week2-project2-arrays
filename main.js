/*==========JAMES, THANK YOU IMMENSELY FOR HELPING TO FIX THE HTML PRINTING FIX
COMPLETED. SANDBOX NOT COMPLETED
=======================================================
** Week 2 - Project 1 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 0. Connect the main.js document to the HTML page.
/*    Add to the bottom of the HTML page: <script src="main.js"></script>*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");




// 1. Declare a variable whose value is an empty array.
//    Use any method you choose to add at least 4 items to it.

var arrayA = [];
console.log(arrayA);

arrayA.push(' oliver', ' ck', ' noah', ' burress')
document.getElementById('q1').innerHTML = 'Array:' + arrayA

// 2. Add an additional item to the beginning of your array.

arrayA.unshift(' stewart');
document.getElementById('q2').innerHTML = 'Array with 1 added item:' + arrayA

// 3. Remove the second and third items in your array.

arrayA.splice(1, 2)
document.getElementById('q3').innerHTML = 'Array with removed items:' + arrayA

// 4. Add two new items after the second item.

arrayA.splice(2, 0, ' gaffigan', ' seinfeld')
document.getElementById('q4').innerHTML = 'Array with 2 added items:' + arrayA;


// 5. Log to the console: 'The current length of the array is....' using the .length method
var array1 = [];
console.log(array1);
array1.push(' oliver', ' ck', ' noah', ' burress');
array1.unshift('stewart');
array1.splice(1, 2);
array1.splice(2, 0, ' gaffigan', ' seinfeld');
console.log('The current length of the array is: ', array1.length);


//============================  NOT PRINTING ANY FOLLOWING QUESTIONS TO HTML
// Use the following Array for questions 6-9:
var things = [' mug', ' book', ' mouse', ' plant', ' sunglasses'];

// 6. Change 'mouse' to 'keyboard'

things[2] = ' keyboard';
console.log('Question: 7', things);
document.getElementById('q6').innerHTML = things;


// 7. Combine all of the elements of the array into a string.
//    (Hint: check out the 'join' method.)

var things = [' mug', ' book', ' mouse', ' plant', ' sunglasses'];
things[2] = ' keyboard';
var things7 = things.join();
console.log(things7)
document.getElementById("q7").innerHTML = things7;

// // 8. Remove the first item.

var things8 = things.shift();
console.log(things8);

document.getElementById("q8a").innerHTML = 'Removed:' + things8;
document.getElementById("q8b").innerHTML = 'Array:' + things;

// // 9. Remove all items from the things array.
//
// //testing my code since it will not print to HTML
var things = [' mug', ' book', ' mouse', ' plant', ' sunglasses'];
console.log(things)
things[2] = 'keyboard';
var things7 = things.join();
var things8 = things.shift();

//Removing all items
things = [];
console.log(things);

// Use the following array for question 10:
// var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 10. Arrange the items alphabetically. Store this Array as orderedPeople

var people = [' Bill', ' Ted', ' Emily', ' Andrea', ' Doug'];
console.log(people)
var orderedPeople = people.sort();
document.getElementById("q10").innerHTML = orderedPeople;
//
// // 11. Create an array of arrays with the following three arrays:
var array1 = [" Fido", " Spot", " Rex", " Sparky"];
var array2 = [" Bulldog", " Lab", " Dalmation", " Beagle"];
var array3 = [" White", " Black", " Spotted", " Tri-color"];

// // Goal:
// // var array4 = [
// //                 ["Fido", "Spot", "Rex", "Sparky"],
// //                 ["Bulldog", "Lab", "Dalmation", "Beagle"],
// //                 ["White", "Black", "Spotted", "Tri-color"]
// //               ]

var array4 = [array1, array2, array3];
console.log(array4);
document.getElementById("q11").innerHTML = array4;

// 12. Remove "Sparky" and "White" from the above array of arrays.

var array1 = [" Fido", " Spot", " Rex", " Sparky"];
var array2 = [" Bulldog", " Lab", " Dalmation", " Beagle"];
var array3 = [" White", " Black", " Spotted", " Tri-color"];
var array4 = [array1, array2, array3];
array4[0].splice(3, 1);
array4[2].splice(0, 1);
console.log(array4);
document.getElementById("q12").innerHTML = array4;


// ADVANCED TRACK
// Use the following campingItems array for question 13
// var campingItems = ['tent', 'hiking boots', 'picnic table', 'corn on the cob', 'cooler'];

// 13. Declare an array called lastItem using .pop() on the campingItems array.
var campingItems = [' tent', ' hiking boots', ' picnic table', ' corn on the cob', ' cooler'];
var lastItem = [campingItems.pop()];
console.log(campingItems);

document.getElementById("q13").innerHTML = lastItem;

// 14. Add two new items to lastItem, one at the beginning and one at the end.
//Showing full code so I can test via console.log
var campingItems = [' tent', ' hiking boots', ' picnic table', ' corn on the cob', ' cooler'];
var lastItem = [campingItems.pop()];
//Adding an item to the beginning and end
lastItem.push(' stove');
lastItem.unshift(' lighter');
//Testing code via console.log since it is not showing in the HTML
console.log(lastItem);
//Printing to HTML in theory
document.getElementById("q14").innerHTML = lastItem;


// 15. Add s'mores to the lastItem array.
//Showing full code so I can test via console.log
var campingItems = [' tent', ' hiking boots', ' picnic table', ' corn on the cob', ' cooler'];
var lastItem = [campingItems.pop()];
lastItem.push(' stove');
lastItem.unshift(' lighter');
//Adding an item
lastItem.push(` s'mores`);
//Testing code via console.log since it is not showing in the HTML
console.log(lastItem);
//Printing to HTML
document.getElementById('q15').innerHTML = lastItem;

// 16. Create a new Array called reversedItems.
//    The items should be the same as lastItem, only in reverse order.
//Showing full code so I can test via console.log
var campingItems = [' tent', ' hiking boots', ' picnic table', ' corn on the cob', ' cooler'];
var lastItem = [campingItems.pop()];
lastItem.push(' stove');
lastItem.unshift(' lighter');
lastItem.push(` s'mores`);
//Testing code via console.log since it is not showing in the HTML
console.log(lastItem);
//Creating an array of reversed items
var reversedItems = lastItem.reverse();
//Printing to HTML
document.getElementById("q16").innerHTML = reversedItems;




// 17. Using the Arrays below, create a single Array
//     called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = [' fish', ' dog'];
var numberPets = firstArray
numberPets.push(secondArray[0], secondArray[1])
console.log(numberPets);
document.getElementById("q17").innerHTML = numberPets;

// 18: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300];
// If it doesn't sort as expected, explain why.
sortedNumbers = sortingNumbers.sort()
console.log(sortedNumbers);
//It sorts using the first digit in the number (e.g., [ 2, 300, 5, 55, 77, 98 ])
document.getElementById("q18").innerHTML = sortedNumbers;






/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
