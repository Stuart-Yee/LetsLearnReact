const noMondays = new Promise( (resolve, reject) => {
    if(new Date().getDay() !== 6) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});
console.log('Before the promise');
noMondays
    .then( res => console.log("result", res) )
    .catch( err => console.log("Error:", err) );

console.log('After the promise...perhaps');