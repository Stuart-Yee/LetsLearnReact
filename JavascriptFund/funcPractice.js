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

// Use .filter()

odds = numArr.filter((num) => {if(num%2===1){return num}else{return 0}});
console.log(odds);

//Use .map()

evenAndOdd = odds.map((num, idx) => {if(idx%2===0){return num+1}else{return num}});
console.log(evenAndOdd);



//use .reduce()

const sumThese = [1,2,3,4] 
// Sum is 10

function sumThis(a, b){
    return a + b;
}

const start = 0;

var total = sumThese.reduce((a,b)=>a+b, 0);
console.log(total);
console.log(sumThese);

var totalWithCallback = sumThese.reduce((a,b) =>sumThis(a, b),0);
console.log(totalWithCallback);