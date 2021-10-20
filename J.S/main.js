


// function print(printSomeThing) {

//     printSomeThing()
// }
// print(() => { console.log("hello") })

// let myPromise = new Promise((resolve, reject) => {

// });

// let myPromise = new Promise((resolve, reject) => {

//     if (true) {
//         resolve("hello");
//     }
// });
// myPromise.then((res)=>{console.log(res)})

// let myPromise3 = new Promise((resolve, reject) => {
//     if (true) {
//         reject("goodbye")
//     }
// })
// myPromise3.catch((rej) => {console.log(rej)})


// let myPromise4 = new Promise((resolve,reject)=>{
//     if(true){
//         resolve("yas")
//     }else{
//         reject("no")
//     }
// })
// myPromise4.then((res)=>{console.log(res)})
// myPromise4.catch((rej)=>{console.log(rej)})


// function promiseFumction(params) {


//     return new Promise((resolve, reject) => {
//         if (params) {
//             resolve("yes")
//         } else {
//             reject("no")
//         }
//     })
// }
// // promiseFumction(true)
// //     .then((res) => { console.log(res) })
// //     .catch((rej) => { console.log(rej) })
// promiseFumction(false)
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })


// function promiseFumction(num) {
//     return new Promise((resolve, reject) => {
//         (num > 10) ? resolve("big") : reject("small");
//     });

// }
// promiseFumction(4)
//     .then((res) => { console.log(res) })
//     .catch((reg) => { console.log(reg) })