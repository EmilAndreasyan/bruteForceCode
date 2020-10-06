// Hoisting
// function personalInfo() {
// 	var firstName = 'Adam';
// 	var lastName;
// 	console.log(firstName); // Adam
// 	console.log(lastName); // undefined
// 	console.log(address); //undefined
// 	console.log(mobile); // Uncaught ReferenceError: mobile is not defined
// 	console.log(dateOfBirth); // Uncaught ReferenceError: mobile is not defined
// 	lastName = 'Smith';
// 	var address = 'planet earth';
// 	mobile = 1234567890;
// }
// personalInfo();

// function differencesBetweenVarLetConst() {
// 	console.log(firstName); // undefined
// 	console.log(lastName); // Uncaught ReferenceError: Cannot access 'lastName' before initialization
//     console.log(address); // Uncaught ReferenceError: Cannot access 'address' before initialization
//     var firstName = 'Adam'
//     let lastName = 'Smith'
//     const address = 'planet earth'
// }
// differencesBetweenVarLetConst()

// How to reverse an array
// let arr = [ 1, 2, 3, 4, 5 ];
// function reverseArray(arr){
//     debugger
// for (let i = 0; i < arr.length/2; i++){
//     [arr[i], arr[arr.length - 1 -i]] = [arr[arr.length -1 -i], arr[i]] // [1, 5] = [5, 1]
// }
// return arr
// }
// console.log(reverseArray(arr))

// function reverseArray(arr) {
//     let temp = []
//     for (let i = 0; i < arr.length; i++) {
//         temp[i] = [arr, arr[arr.length - 1 - i]]
//     }
//     return temp
// }
// console.log(reverseArray(arr))

//reverse array with recursion
// let arr = [5, 4, 3, 2, 1]
// let reverseArrayWithRecursion = (arr, n) => {
//     //If the length is 0
//     //then return an empty array
//     if(n == 0){
//        return [];
//     }

// //Call the function recursively with one index less and so on.
//     return [arr[n-1]].concat(reverseArrayWithRecursion(arr, --n));
//   }
// console.log(reverseArrayWithRecursion(arr, 5))

// let reverseArray = (arr) => {
//     //If the length is 0
//   //then return an empty array
//     if (arr.length === 0){
//         return []
//     }
//     //Call the function recursively with one element less and so on.
//     return [arr.pop()].concat(reverseArray(arr))
// }
// console.log(reverseArray(arr))

// // Number of subarrays with given sum k
// function countSubArrays(arr, k) {
// 	let count = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		let sum = 0;
// 		for (let j = 0; j < arr.length; j++) {
// 			sum += arr[j];
// 			if (sum === k) {
// 				count++;
// 			}
// 		}
// 	}
// 	return count;
// }
// console.log(countSubArrays([ 3, 4, -7, 1, 3, 3, 1, -4 ], 7));

// // Find the maximum sum of products of two arrays.
// function productSum(arr1, arr2) {
// 	arr1.sort();
// 	arr2.sort();
// 	let sum = 0;
// 	for (let i = 0; i < arr1.length; i++) {
// 		sum += arr1[i] * arr2[i];
// 	}
// 	return sum;
// }
// console.log(productSum([ 1, 2, 3 ], [ 5, 4, 3 ]));

// //Find the correct position to insert an element in the array
// let searchInsert = (nums, target) => {

//     //keep track of the element
//     let found = 0;
//     let isFound = false;

//     //check if element is already present
//     for(let i = 0; i < nums.length; i++){

//         //if element is found then return its position
//         if(target === nums[i]){
//             found = i;
//             isFound = true;
//             break;
//         }
//     }
// // How to reverse an array
//     //if an element is not found then find the position where it can be inserted
//     if(!isFound){
//         for(let i = 0; i < nums.length; i++){

//         //if the target element is less than the element in the array then add it before
//         if(target < nums[i]){
//             found = i;
//             isFound = true;
//             break;
//         }
//       }
//     }

//     //if position is found then return it else return the position after the last element in the array
//     return isFound ? found : nums.length;
// };
// console.log(searchInsert([1,3,5,6], 5));
// console.log(searchInsert([1,3,5,6], 2));
// console.log(searchInsert([1,3,5,6], 7));
// console.log(searchInsert([1,3,5,6], 0));

// //program to check if a subarray with 0 sum exits or not
// function sumWithZero (arr) {
//     //debugger
//     for (let i = 0; i < arr.length; i++) {
//         let sum = arr[i];
//         if (sum === 0) {
//             return true;
//         }
//         for (let j = 0; j < arr.length; j++) {
//             sum += arr[j];
//             if(sum === 0){
//                 return true
//             }
//         }
//     }
//     return false
// }
// console.log(sumWithZero([3, 4, -7, 3, 1, 3, 1, -4, -2, -2]));
// console.log(sumWithZero([3, 5]));

// function palindromeArray(arr) {
// 	let isPalindrome = true;
// 	for (let i = 0; i < arr.length / 2; i++) {
// 		if (arr[i] !== arr[arr.length - 1 - i]) {
// 			isPalindrome = false;
// 			break;
// 		}
// 	}
// 	return isPalindrome;
// }
// console.log(palindromeArray([ 1, 2, 2, 1 ]));
// console.log(palindromeArray([ 1, 2, 2, 2 ]));

// // Print all subarrays with a given sum k in an array
// function printSubArrays(arr, k) {
// 	//get the size the of the array
// 	let length = arr.length;

// 	//traverse through the array
// 	for (let i = 0; i < length; i++) {
// 		//temp variables to store the sum and elements
// 		let tempArr = [];
// 		let sum = 0;

// 		//traverse through the every next element after i
// 		for (let j = i; j < length; j++) {
// 			sum += arr[j];
// 			tempArr.push(arr[j]);

// 			//if sum is equal to k then print the array.
// 			if (sum === k) {
// 				console.log(tempArr);
// 			}
// 		}
// 	}
// }

// printSubArrays([ 3, 4, -7, 1, 3, 3, 1, -4 ], 7);

// function leftCircularArrayRotation(arr, k){
//     for (let i = 0; i < k; i++) {
//         arr.push(arr.shift())
//     }
//     return arr
// }
// console.log(leftCircularArrayRotation([4,5,6], 2));

// function rightCircularArrayRotation(arr, k){
//     for (let i = 0; i < k; i++) {
//         arr.unshift(arr.pop())
//     }
//     return arr
// }
// console.log(rightCircularArrayRotation([4,5,6], 2));

// //Getting elements in array which match and appears most
// let arr = [ 'event1', 'event2', 'event1', 'event1', 'event3' ];
// function countEvents(arr) {
// 	const tallySheet = {};
// 	for (let i = 0; i < arr.length; i++) {
// 		const eventName = arr[i];
// 		if (tallySheet[eventName] == null) {
// 			tallySheet[eventName] = 0;
// 		}
// 		tallySheet[eventName]++;
// 	}
// 	return tallySheet;
// }
// console.log(countEvents(arr));

// //Given an unsorted array of integers find a pair with given sum in it
// function findSum (arr, k) {
//     let isFound = false;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === k) {
//                 isFound = true
//                 break
//             }

//         }
//     }
//     return isFound
// }
// console.log(findSum([15, 4, 9 ,3 ,2, 12, 11, 14, 21, 24, 1, 10], 25)); // true
// console.log(findSum([15, 4, 9 ,3 ,2, 12, 11, 14, 21, 24, 1, 10], 100)); //false

// // How to use array sort in javascript, sort in ascending order
// let arr = [1, 3, 5, 2, 9, 11, 8, 4];
// arr.sort((a, b) => {
//     if (a < b) {
//         return -1
//     } else if (a > b){
//         return 1
//     } else {
//         return 0
//     }
// })
// console.log(arr)
// //or
// arr.sort((a, b) => a - b)
// // sort in descending order
// arr.sort((a, b) => {
//     if (a < b) {
//         return 1
//     } else if (a > b){
//         return -1
//     } else {
//         return 0
//     }
// })
// // or
// arr.sort((a, b) => b - a)
// console.log(arr)

// let arr = [ 'réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu' ];
// arr.sort((a, b) => {
// 	return a.localeCompare(b);
// });
// console.log(arr);

// let persons = [
// 	{ name: 'Emil', age: 38 },
// 	{ name: 'Tatev', age: 30 },
// 	{ name: 'Michael', age: 6 },
// 	{ name: 'Adele', age: 0 },
// 	{ name: 'Victoria', age: 4 }
// ];
// persons.sort((a, b) => {
// 	if (a.age < b.age) {
// 		return -1;
// 	} else if (a.age > b.age) {
// 		return 1;
// 	} else {
// 		if (a.name < b.name) {
//             return -1
//         } else if (a.name > b.name) {
//             return 1
//         } else {
//             return 0
//         }
// 	}
// });
// // or
// persons.sort((a, b) => a.age - b.age);
// console.log(persons);

// // IndexOf
// const list = [1, 2, 3, 4, 5, 6, 7];
// const index = list.indexOf(4, 5); // element, search from
// console.log(index); // -1
// let str = "I am Emil Andreasyan"
// const index = str.indexOf("a", 3) // element, search from
// console.log(index)

// let friends = ["Emil", "Tatev", "Victoria", "Victoria", "Michael", "Adele", "Adele"]
// // indexOf returns only first matching element
// let unique = friends.filter((e, i) => friends.indexOf(e) === i)
// console.log(unique)
// // Set is a new data structure added in ES6 which stores only unique items.
// let count = [1, 2, 3, 4, 5, 1, 4, 5, 2, 6, 1, 9, 10];
// let set = new Set()
// for(const val of count){
//     set.add(val)
// }
// console.log(set)
// let count = [1, 2, 3, 4, 5, 1, 4, 5, 2, 6, 1, 9, 10];
// let set = new Set(...count);
// console.log(set);

 
// function splitAndAddNumbers (n) {
//     let output = []
//     let sum = 0
//     let sNum = n.toString() // "46"
//     for (const el of sNum) {
//         output.push(parseInt(el)) // 4, 6
       
//     }
//     for(const el of output) {
//         sum += el // 4 + 6
//     }
//     return sum
// }
// console.log(splitAndAddNumbers(46))

// //Unique items from nested Array
// let arr = [[10,15], [10,14], [10,15], [7,3], [1,2], [8,9]];
// let Unique = (arr) => {
//     //To store the unique sub arrays
//     let uniques = [];
//     //To keep track of the sub arrays
//     let itemsFound = {};
//     for(let val of arr) {
//         //convert the sub array to the string
//         let stringified = JSON.stringify(val);
//         //If it is already added then skip to next element
//         if(itemsFound[stringified]) {
//            continue;
//         }
//         //Else add the value to the unique list
//         uniques.push(val);
//         //Mark it as true so that it can tracked
//         itemsFound[stringified] = true;
//     }
//     //Return the unique list
//     return uniques;
// }
// let filtered = Unique(arr);
// console.log(filtered);

// //Filtering array of objects
// const arr = [{name:'emil'}, {name:'tatev'}, {name:'emil'}, {name: 'michael'}, {name: 'victoria'}];

// let Unique = (arr) => {
//     //Store the unique
//     let uniques = [];
//     //Track the items added to the uniques
//     let itemsFound = {};
//     for(let val of arr) {
//         //If item is already added then move to the next item
//         if(itemsFound[val.name]){
//           continue;
//         }
//         //Else push it to the unique list
//         uniques.push(val);
//         //Mark it as added
//         itemsFound[val.name] = true;
//     }
//     //Return the uniques
//     return uniques;
// }

// let filtered = Unique(arr);
// console.log(filtered);

// // filter based on the whole object
// const arr = [{name:'emil', age: 38}, {name:'tatev', age: 29}, {name:'emil', age: 38}, {name: 'michael', age: 6}, {name: 'victoria', age: 4}];
// let Unique = (arr) => {
//     //To store the unique sub arrays
//     let uniques = [];
//     //To keep track of the sub arrays
//     let itemsFound = {};
//     for(let val of arr) {
//         //convert the sub array to the string
//         let stringified = JSON.stringify(val);
//         //If it is already added then skip to next element
//         if(itemsFound[stringified]) {
//            continue;
//         }
//         //Else add the value to the unique list
//         uniques.push(val);
//         //Mark it as true so that it can tracked
//         itemsFound[stringified] = true;
//     }
//     //Return the unique list
//     return uniques;
// }
// let filtered = Unique(arr);
// console.log(filtered);

// // Unique properties of array of objects
// let uniqueName = [...new Set(arr.map(person => person.name))]
// console.log(uniqueName)
// const uniqueAge = [...new Set(arr.map(person => person.age))]
// console.log(uniqueAge)

function test_prime(num) {
	if (num === 1) {
		return false;
	} else if (num === 2) {
		return true;
	} else {
		for (let i = 2; i < num; i++) {
			if (num % i === 0) { // if there is no remainder, return false
				return false;
			}
		}
		return true;
	}
}

console.log(test_prime(5));















// function toTravelOrNotToTravel(amount) {
// 	if (amount >= 10000) {
// 		console.log("We're leaving for Italy!!");
// 	} else {
// 		let remainder = 10000 - amount > 1 ? `${10000 - amount} dollars` : `${10000 - amount} dollar`;
// 		console.log(`we're ${remainder} short, we must watch movies instead`);
// 	}
// }
// toTravelOrNotToTravel(7000);

// console.log(false == true); // false
// console.log(null == true); // false
// console.log(null == false); // false
// console.log(null === null); // true
// console.log(0 == true); // false
// console.log(1 == true); // true
// console.log(1 === true); // false
// console.log('' == true); // false
// console.log('hi' == true); // false
// console.log([] == true); // false
// console.log([ 1, 2 ] == true); // false
// console.log({} == true); // false
// console.log({ name: 'John' } == true); // false
// console.log(!true); // false
// console.log(!!true); // true
// console.log(!false); // true
// console.log(!!false); // false
// console.log(true === !false); // true
// console.log(false === false); // true
// console.log(NaN == true); // false
// console.log(NaN == false); // false
// console.log(NaN == NaN); // false

// function travelCriteria(name, amount, age) {
// 	if (name && amount >= 10000 && age >= 18) {
// 		console.log(
// 			`Hello, ${name}, you have ${amount} dollars on your account and you're grown up enough for a great adventure!`
// 		);
// 	} else {
// 		console.log('unfortunately, you can travel to Italy only using your imagination...');
// 	}
// }
// travelCriteria('Adam', 10000, 20);

// function flightEligibility(dollars) {
// 	let flight = false;
// 	let visaIssued = false;
// 	let convertedEuros;
// 	if (dollars >= 10000) {
// 		flight = true;
// 		visaIssued = true;
// 		convertedEuros = (dollars * 0.84) + ' euros';
// 		console.log(`Welcome to Italy, you have ${convertedEuros} on your account. Spend it sparingly!`);
// 	} else {
// 		console.log('not enough funds');
// 	}
// }

// flightEligibility(20000);
