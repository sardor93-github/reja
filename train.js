console.log("Jack Ma maslahatlari");
const list = [
    "yaxshi talaba boling", //0-20
    "togri boshliq tanlang va koproq xato qiling",//20-30
    "uzingizga ishlashni boshlang", //30-40
    "siz kuchli bolgan narsalarni qiling", //40-50
    "yoshlarga invetsitsiya qiling", //50-60
    "endi dam oling"//60
];


//ASYNC FUNCTION
// async function maslahatBering(a) {
//     if (typeof a !== 'number') throw new Error("insert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
//     }
// }

// async function run(){
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(85);
//     console.log(javob);
//     javob = await maslahatBering(48);
//     console.log(javob);
//     javob = await maslahatBering(59);
//     console.log(javob);
// }

// run();

//CALL VIA then/catch
// console.log("passed here 0");
// maslahatBering(25).then(data => {
//     console.log("javob:", data);
// }).catch((err) => {
//     console.log("Error: ", err);
// });
// console.log("passed here 1");


// CALLBACK FUNCTION
// function maslahatBering(a, callback){
//     if(typeof a !== 'number') callback ("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 5000);
//     }    
// }

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//     if (err) console.log('ERROR:', err);
//     else { console.log('javob:', data); }
// });
// console.log("passed here 1");