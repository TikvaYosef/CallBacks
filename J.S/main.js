


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


// function promiseFumction(name) {
//     return new Promise((resolve, reject) => {
//         (name.length > 4) ? resolve("long name") : reject("short name");
//     })
// }
// promiseFumction("tikva")
//     .then((res) => { console.log(res) })
//     .catch((rej)=>{console.log(rej)})

// arrayOfNames = ["tikva", "yafit", "eden"];
// function promiseFumction(arrayOfNames, name) {

//     return new Promise((resolve, reject) => {
//         (arrayOfNames.indexOf(name) != -1) ? resolve("name exist") : reject("no name")
//     })

// }
// promiseFumction(arrayOfNames, "tikva")
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })

// =============================================================================================

// שאלות 1-5
// function promiseFumction7(params) {
//     return new Promise((resolve, reject) => {
//         params? resolve("yess"):reject("sorry")
//     })
// }
// promiseFumction7(true)
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })


//  1-10שאלות 


let random = Math.floor(Math.random() * 9);

// console.log(random)

function promiseFumction6(num) {


    return new Promise((resolve, reject) => {

        // (random < 5) ? resolve(random) : reject("you lose try again");
        (random == num) ? resolve(`${random} , nice work,do it again`) : reject("you lose try again");
    })
}
let counter = 0
inp1.onchange = () => {
    promiseFumction6(inp1.value)
        .then((res) => { div1.innerText = res })
        .catch((rej) => { div1.innerText = rej })
        .finally(() => { console.log(counter++) })

}



// promiseFumction6(inp1.value)
//     .then((res) => { div1.innerText = res })
//     .catch((rej) => { div1.innerText = rej })

