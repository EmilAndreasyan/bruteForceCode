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
let arr = [ 1, 2, 3, 4, 5 ];
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

// Print all subarrays with a given sum k in an array
function printSubArrays(arr, k) {
	//get the size the of the array
	let length = arr.length;

	//traverse through the array
	for (let i = 0; i < length; i++) {
		//temp variables to store the sum and elements
		let tempArr = [];
		let sum = 0;

		//traverse through the every next element after i
		for (let j = i; j < length; j++) {
			sum += arr[j];
			tempArr.push(arr[j]);

			//if sum is equal to k then print the array.
			if (sum === k) {
				console.log(tempArr);
			}
		}
	}
}

printSubArrays([ 3, 4, -7, 1, 3, 3, 1, -4 ], 7);


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
