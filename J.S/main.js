


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
//         params ? resolve("yess") : reject("sorry")
//     })
// }
// promiseFumction7(true)
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })


//  1-10שאלות 


// let random = Math.floor(Math.random() * 9);

// // console.log(random)

// function promiseFumction6(num) {


//     return new Promise((resolve, reject) => {

//         // (random < 5) ? resolve(random) : reject("you lose try again");
//         (random == num) ? resolve(`${random} , nice work,do it again`) : reject("you lose try again");
//     })
// }
// let counter = 0
// inp1.onchange = () => {
//     promiseFumction6(inp1.value)
//         .then((res) => { div1.innerText = res })
//         .catch((rej) => { div1.innerText = rej })
//         .finally(() => { console.log(counter++) })

// }



// promiseFumction6(inp1.value)
//     .then((res) => { div1.innerText = res })
//     .catch((rej) => { div1.innerText = rej })

// =============================================================================
// 21.10.2021
// Async-await


// function callToTheMoon() { return "hello" }
// async function asyncFunction() {
//     // Async-await  הפונקציה של 
//     // מחזירה לנו אובייקט מסוג פרומיס
//     // ומכריז לנו על פונקציה אסיכרונית
//     try {
//         return await callToTheMoon()
//     }
//     catch (error) {
//         return error

//     }
//     finally {

//     }

// }
// //  יש אפשרות לקרוא לפונקציה ואז ל.then
// // asyncFunction().then
// asyncFunction()
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })




// async function asyncFunction() {

//     try {
//         return await promiseFumction7(false)
//     }
//     catch (error) {
//         return error;
//     }

// }
// asyncFunction()
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })
// ======================================================================

// משימות לסופש
// שאלה 1

// 1.	צרו פונקציה שמחזירה promise, הפונקציה מקבלת שם, הפונקציה בודקת האם השם שווה לשם שלכם.

// let myName = "tikva"
// function serchMyName(name) {
//     return new Promise((resolve, reject) => {
//         myName == name ? resolve("you rigth") : reject("not my name");

//     })


// }
// async function asynבfuncthon2() {
//     try {
//        return await serchMyName("tikva")
//     }
//     catch (error) {
//         return error


//     }

// }
// asynבfuncthon2()
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })



// שאלה 2
// הsettimeout 
// בתוך הפרומיס


// function myPromis(num1, num2) {
//     return new Promise((resolve, reject) => {
//         num1 == num2 ? resolve("same") : reject("not the same")
//     })

// }
// async function asyncFunction8() {
//     try {
//        return await myPromis(4, 4)
//     }
//     catch (error) {
//         return error;
//     }


// }
// asyncFunction8()
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })



// שאלה 3
// function loading() {

//     myDiv.innerHTML += `<img id="img" src="./loading.gif">`
// }

// function stopLoading() {
//     img.style.display = "none";

// }

// function strPromis(text) {

//     return new Promise((resolve, reject) => {
//         setInterval(() => {
//             text.length > 6 ? resolve("longer then 6") : reject("shorter then 6");

//         }, 4000);
//     })
// }

// async function asyncstr() {
//     try {
//         loading()
//         return await strPromis("bbkbk")
//     }
//     catch (err) {
//         return err;
//     }

// }
// asyncstr()
//     .then((res) => { myDiv.innerHTML += res })
//     .catch((rej) => { myDiv.innerHTML += rej })
//     .finally(() => { stopLoading() })


// השאלה של המערך

// function dofLoading() {
//     myDiv.innerHTML += `<img  id="dogPic" src="./dog loading.gif" >`

// }
// function stopLoading() {
//     dogPic.style.display = "none"
// }

// class Dogs {
//     name;
//     age;
//     type;

//     constructor(name, age, type) {
//         this.name = name;
//         this.age = age;
//         this.type = type;
//     }



// }

// const dog1 = new Dogs("rexi", 5, "boxer")
// const dog2 = new Dogs("mitzi", 20, "Labrador")
// const dog3 = new Dogs("shuki", 10, "Pekingese")
// console.log(dog1, dog2, dog3)
// let arrayOfDogs = [dog1, dog2, dog3]

// function myPromise3(arrayOfDogs) {
//     let max = arrayOfDogs[0].age;
//     // let counter = 0
//     return new Promise((resolve, reject) => {
//         setInterval(() => {

//             for (const dogkey of arrayOfDogs) {

//                 if (dogkey.age > max) {
//                     max = dogkey.age;
//                     resolve(max)
//                 }

//             }

//             reject("not found")

//         }, 5000);

//     })

// }

// async function asyncFunction9() {
//     try {
//         dofLoading()
//         return await myPromise3(arrayOfDogs)
//     }
//     catch (err) {
//         return err

//     }

// }
// asyncFunction9()
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })
//     .finally(() => { stopLoading() })


// // שאלה 1

// let children = new Map([["tikva", "25"], ["keren", "22"], ["eden", "24"], ["yafit", "25"], ["shay", "24"], ["yoni", "30", ["yaakov", "35"]]])
// console.log(children)
// children.set("rachel", "30")
// console.log(children.get("rachel"))
// console.log(children.values())
// console.log(children.keys())

// for (const item of children.keys()) {
//     if (item.length > 4) {
//         console.log(item)
//     }
// }

// שאלה 2

// let home = new Map([["1", "4"], ["2", "6"], ["3", "8"], ["4", "10"]]);

// function myPromise(home) {
//     let max = home.get(1);
//     let counter = 0;
//     return new Promise((resolve, reject) => {
//         for (const item of home.keys()) {

//             if (item > max) {
//                 item = max
//                 resolve(max)
//             }
//         }
//         // reject(counter++)
//     })
// }
// let x = myPromise(home)
// console.log(x)



// =========================================================================25.10.2021

// דוגמא לג'ייסון

// let obj = {key:"value",k:"v",num:7}
// let jsonObj = JSON.stringify(obj)
// console.log(jsonObj)


// // הופך את הגייסון בחזרה לאובייקט
// JSON.parse(jsonObj)
// console.log(jsonObj)



// let array = [
//     {key:"value",k:"v",num:7},
//     {key:"value",k:"v",num:7},
//     {key:"value",k:"v",num:7},
//     {key:"value",k:"v",num:7},
// ]

// let jso = JSON.stringify(array)
// console.log(jso)
// =================================]

// let user = {Fname :"tikva",Lname:"yosef",age:25,grad:100}
// let jsonobject = JSON.stringify(user)
// console.log(jsonobject)

// let jasonToObject = JSON.parse(jsonobject)
// console.log(jasonToObject)

// =================================================
// let movies = [
//     {name:"movie1",length:120,place:"netanya"},
//     {name:"movie1",length:120,place:"netanya"},
// ]

// let toJason = JSON.stringify(movies)
// console.log(toJason)

// let toObject = JSON.parse(toJason)
// console.log(toObject)
// ====================================================


// let arrayOfDogs = [
//     { name: "rex", age: 5, type: "lavrador" },
//     { name: "rexi", age: 10, type: "boxer" },
//     { name: "lucky", age: 20, type: "rotvilre" },
// ]

// function toJason(arrayOfDogs) {
//     return new Promise((resolve, reject) => {
//         if (arrayOfDogs.length > 0) {
//             let toJson = JSON.stringify(arrayOfDogs)
//             resolve(toJson)
//         }

//     })
//     reject({ massage: "array is empty" })

// }


// async function asyncFunc() {
//     try {
//         return await toJason(arrayOfDogs)
//     }
//     catch (err) {
//         return err
//     }
// }
// asyncFunc()
//     .then((res) => {console.log( JSON.parse(res))})
//     .catch((rej) => { console.log(rej) })


// ============================================================
const movieJason = JSON.stringify({
    "success": true,
    "data": [
        {
            "_id": "606d7d2c110a540674caa27a",
            "movieName": "ironMan",
            "rating": 3,
            "date": "2021-04-07T09:36:44.053Z",
            "__v": 0
        },
        {
            "_id": "607828bcd9def60015535fcc",
            "movieName": "soperWoman",
            "rating": 3,
            "date": "2021-04-15T11:51:24.833Z",
            "__v": 0
        },
        {
            "_id": "60815daa6b305d8dcd07c674",
            "movieName": "stepUp",
            "rating": 3,
            "date": "2021-04-22T11:27:38.067Z",
            "__v": 0
        },
        {
            "_id": "6122459bdbf6109484b6d2eb",
            "movieName": "bigMama",
            "rating": 4,
            "date": "2021-08-22T12:39:55.115Z",
            "__v": 0
        },
        {
            "_id": "612245fcbb593194fcda74d0",
            "movieName": "shrek",
            "rating": 3,
            "date": "2021-08-22T12:41:32.969Z",
            "__v": 0
        }
    ]
})

// let toObject = JSON.parse(movieJason)
// console.log(toJason)
// =============================================================

// שאלה 1




// function promiseFunc() {

//     return new Promise((resolve, reject) => {
//         let toObject = JSON.parse(movieJason)
//         if (toObject.success ) {
//             resolve(toObject.success)
//         } else {
//             reject({ massege: "array is empty" })
//         }
//     })
// }

// async function asyncfunc() {
//     try {
//         return await promiseFunc()
//     }
//     catch (err) {
//         return err
//     }
// }

// asyncfunc()
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })



// שאלה 2

// function myPromise() {
//     return new Promise((resolve, reject) => {
//         let toObject = JSON.parse(movieJason)
//         if (movieJason.length > 0) {
//             resolve(toObject.data)
//         } else {
//             reject({ messege: "array is empty" })
//         }
//     })

// }

// async function asyncfunc() {
//     try {
//         return await myPromise()
//     }
//     catch (err) {
//         return err
//     }

// }
// asyncfunc()
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })



// שאלה 3
// function myPromise(movieNameUser) {
//     return new Promise((resolve, reject) => {
//         let toObj = JSON.parse(movieJason)
//         for (const item of toObj.data) {
//             if (item.movieName == movieNameUser) {
//                 resolve(item)
//             }

//         }


//         reject({ messege: "movie is not found " })
//     })


// }

// async function asyncfunc() {
//     try {
//         return await myPromise("shrek")
//     }
//     catch (err) {
//         return err
//     }

// }
// asyncfunc()
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })


// שאלה 4

// function myPromise(idFromUser) {
//     return new Promise((resolve, reject) => {
//         let toObj = JSON.parse(movieJason)
//         for (const item of toObj.data) {
//             if (item._id == idFromUser) {
//                 resolve(item)
//             }

//         }
//         reject({ messege: "movie is not found " })
//     })
// }

// async function asyncfunc() {
//     try {
//         return await myPromise("60815daa6b305d8dcd07c674")
//     }
//     catch (err) {
//         return err
//     }
// }

// asyncfunc()
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })


// שאלה 5

// function myPromise(num) {
//     return new Promise((resolve, reject) => {
//         let toObj = JSON.parse(movieJason);
//         let array = []
//         if (toObj.data.length > 0) {
//             for (const item of toObj.data) {
//                 if (item.rating > num) {
//                     array.push(item)
//                     resolve(array)
//                 }
//             }
//         }
//         reject({ messege: "movie is not found " })
//     })
// }

// async function asyncfunc() {
//     try {
//         return await myPromise(3)
//     }
//     catch (err) {
//         return err
//     }

// }
// asyncfunc()
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })


// שאלה 6
// שאלה 7
// =======================================================
const Urers = JSON.stringify(
    [
        {
            "_id": "605acace4ab389d8ed54c496",
            "age": 35,
            "name": {
                "last": "Hensley",
                "first": "Dollie"
            },
            "email": "dollie.hensley@undefined.org",
            "index": 0,
            "phone": "+1 (904) 421-3160",
            "picture": "http://placehold.it/32x32"
        },
        {
            "_id": "605acaceed1f0e1cfa1eee67",
            "age": 21,
            "name": {
                "last": "Hunt",
                "first": "Dolores"
            },
            "email": "dolores.hunt@undefined.com",
            "index": 1,
            "phone": "+1 (967) 432-2905",
            "picture": "http://placehold.it/32x32"
        },
        {
            "_id": "605acacefedd0fe77874d78f",
            "age": 28,
            "name": {
                "last": "Pennington",
                "first": "Milagros"
            },
            "email": "milagros.pennington@undefined.net",
            "index": 2,
            "phone": "+1 (922) 492-2085",
            "picture": "http://placehold.it/32x32"
        },
        {
            "_id": "605acace6d3f84fc9b40849f",
            "age": 32,
            "name": {
                "last": "Anderson",
                "first": "Myrtle"
            },
            "email": "myrtle.anderson@undefined.biz",
            "index": 3,
            "phone": "+1 (858) 404-3273",
            "picture": "http://placehold.it/32x32"
        },
        {
            "_id": "605acace06d24518b6419d23",
            "age": 29,
            "name": {
                "last": "York",
                "first": "Terry"
            },
            "email": "terry.york@undefined.co.uk",
            "index": 4,
            "phone": "+1 (816) 492-3475",
            "picture": "http://placehold.it/32x32"
        },
        {
            "_id": "605acace46f0669738455d6b",
            "age": 38,
            "name": {
                "last": "Bridges",
                "first": "Effie"
            },
            "email": "effie.bridges@undefined.info",
            "index": 5,
            "phone": "+1 (856) 423-3786",
            "picture": "http://placehold.it/32x32"
        },
        {
            "_id": "605acace5ab5217354268532",
            "age": 26,
            "name": {
                "last": "Walter",
                "first": "Krista"
            },
            "email": "krista.walter@undefined.me",
            "index": 6,
            "phone": "+1 (849) 513-2888",
            "picture": "http://placehold.it/32x32"
        },
        {
            "_id": "605acaced68677a5dca08a9b",
            "age": 20,
            "name": {
                "last": "Buchanan",
                "first": "Gomez"
            },
            "email": "gomez.buchanan@undefined.biz",
            "index": 7,
            "phone": "+1 (888) 494-2462",
            "picture": "http://placehold.it/32x32"
        },
        {
            "_id": "605acaceb7ece55cb38e546a",
            "age": 20,
            "name": {
                "last": "Potter",
                "first": "Caitlin"
            },
            "email": "caitlin.potter@undefined.io",
            "index": 8,
            "phone": "+1 (801) 514-3055",
            "picture": "http://placehold.it/32x32"
        },
        {
            "_id": "605acace98de45687c4c6279",
            "age": 26,
            "name": {
                "last": "Dillon",
                "first": "Guzman"
            },
            "email": "guzman.dillon@undefined.ca",
            "index": 9,
            "phone": "+1 (857) 407-2403",
            "picture": "http://placehold.it/32x32"
        }
    ]
)

// שאלה 1

// function myPromise1() {
//     return new Promise((resolve, reject) => {
//         let toObj = JSON.parse(Urers)
//         if (toObj) {
//             resolve(toObj)

//         }
//         else {
//             if (toObj < 0) {

//                 reject({ messege: "empty" })
//             }
//         }
//     })

// }

// async function asyncFunc1() {
//     try {
//         return await myPromise1()
//     }
//     catch (err) {
//         return err
//     }

// }
// asyncFunc1()
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })



// // שאלה 2
function urserPrimis2(id) {
    return new Promise((resolve, reject) => {
        let toArray = JSON.parse(Urers);
        for (const item of toArray) {
            if (item._id == id) {
                resolve(item);
            }
        }
        reject({ messege: "no user exist" })
    })
}

async function asyncfunc2() {
    try {
        return await urserPrimis2(inp1.value)
    }
    catch (error) {
        return error
    }

}
// asyncfunc2()
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })



// שאלה 3

function userPromis3(emailUser) {
    return new Promise((resolve, reject) => {
        let array = JSON.parse(Urers);
        for (const item of array) {
            if (item.email == emailUser) {
                resolve(item)
            }
        }
        reject({ massege: " user is not found" })
    })
}

// async function asyncfunc3() {
//     try {
//         return await userPromis3("guzman.dillon@undefined.ca")
//     }
//     catch (err) {
//         return err
//     }

// }
// asyncfunc3()
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })


// שאלה 4


// function myPromise4(num) {
//     return new Promise((resolve, reject) => {
//         let toArray = JSON.parse(Urers);
//         let array = []
//         for (const item of toArray) {
//             if (item.age > num) {
//                 array.push(item)
//                 resolve(array)
//             }
//         }
//         reject({ massege: " user is not found" })
//     })
// }
// async function asyncfunc4() {
//     try {
//         return await myPromise4(inp1.value)
//     }
//     catch (err) {
//         return err
//     }
// }
// asyncfunc4()
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })



//     // let idPromise = asyncfunc4(inp1.value)
//     //     .then((user) => { myDiv.innerHTML += JSON.stringify(Urers) })
//     //     .catch((rej) => { console.log(rej) })









// שאלה 5

function myPromise5(fName) {
    return new Promise((resolve, reject) => {
        let toArry = JSON.parse(Urers);
        for (const item of toArry) {
            if (item.name.first == fName) {
                resolve(item)
            }

        }
        reject({ massege: " user is not found" })
    })

}

// async function asyncfunc5() {
//     try {
//         return await myPromise5("Guzman")
//     }
//     catch (err) {
//         return err
//     }

// }
// asyncfunc5()
//     .then((res) => { console.log(res) })
//     .catch((rej) => { console.log(rej) })

// שאלה 6

function showSucses(argoment) {
    for (const key in argoment) {
        firstDiv.innerText += `${key}:${argoment[key]}`;

    }
}
function showError(err) {
    secendDiv.innerText += `${err.messege}`
}

function loadingPic() {
    allDivs.innerHTML += `<img id="pic" src="./dog loading.gif" ></img>`
}

function clearloading() {
    pic.style.display = "none"
}


debugger
btn.onclick = () => {

    loadingPic()


    setTimeout(() => {

        switch (usersSelect.value) {
            case "id":
                asyncfunc2()
                    .then((res) => { showSucses(res)})
                    .catch((not) => { showError(not) })
                    .finally(() => { clearloading() })

                break;
            // case "Email User":
            //     userPromis3(inp1.value)
            //         .then((res) => { showSucses(res) })
            //         .catch((rej) => { console.log(rej) })
            //         .finally(() => { clearloading() })

            //     break;
            // case "First Name":
            //     myPromise5(inp1.value)
            //         .then((res) => { showSucses(res) })
            //         .catch((rej) => { console.log(rej) })
            //         .finally(() => { clearloading() })
        }
    }, 3000);
}