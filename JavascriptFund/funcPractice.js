/* Elective practice with higher order functions
such as forEach(), map(), etc. */

var numArr = [8,6,7,5,3,0,9];
// console.log(numArr)

function print_odds(num, idx) {
    if (num%2 ===1){
        console.log(num, "is odd at index", idx);
    } else {
        console.log("not odd at index", idx);
    }
}

//Correct syntax for forEach defining a function within
//the params
// numArr.forEach((val, idx, arr) => print_odds(val));

//incorrect syntax:
//numArr.forEach(print_odds(val));

// numArr.forEach((val, idx, arr) => {
//     print_odds(val, idx);
//     console.log("from the array: ", arr);
// });

function print_evens(num) {
    if(num%2 ===0){
        console.log("Even!", num);
    } 
}

numArr.forEach((val, idx, arr) => {
    print_evens(val);
    console.log("My index", idx);
    console.log("this is the array:", arr);
});