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
let reverseArrayWithRecursion = (arr, n) => {
    //If the length is 0
    //then return an empty array
    if(n == 0){
       return [];
    }

    //Call the function recursively with one index less and so on.
    return [arr[n-1]].concat(reverseArrayWithRecursion(arr, --n));
  }
console.log(reverseArrayWithRecursion(arr, 5))

let reverseArray = (arr) => {
    //If the length is 0
  //then return an empty array
    if (arr.length === 0){
        return []
    }
    //Call the function recursively with one element less and so on.
    return [arr.pop()].concat(reverseArray(arr))
}
console.log(reverseArray(arr))