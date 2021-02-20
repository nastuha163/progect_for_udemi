// "use strict";


// const soldier = {
//     health: 400,
//     armor: 200,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };
// const jonh = Object.create(soldier);
// jonh.sayHello()

// Object.setPrototypeOf(jonh, soldier);
// console.log(jonh.armor)

// jonh.__proto__= soldier;



// function copy(mainObj) {
//     let objCopy= {};

//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj[key];
//     }
// return objCopy;
// }

// const numbers = {
//     a: 2,
//     b:5,
//     c: {
//         x:4,
//         y:8
//     }
// }

// const newNumber = copy(numbers);

// // newNumber.a =10;
// // console.log(newNumber);
// // console.log(numbers);

// // const add = {
// //     d: 17,
// //     e: 20
// // };
// // const newAdd = {...add};
// // console.log(newAdd);

// //console.log(Object.assign(numbers, add));

// // const oldArray = ['a', 'b', 'c'];
// // const newArray = oldArray.slice();

// const video = ['a', 'b', 'c'];
// const newVideo = [...video];

// console.log(newVideo);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 6];

// log(...num);

// const arr = [1, 14, 56, 2, 6];
// arr.sort(compareName);
// console.log(arr);

// function compareName(a, b){
//     return a - b;
}
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });

// const str = prompt('', '');
// const prod = str.split('', '');
// console.log(prod);



//arr.pop();
// arr.push(9);
// console.log(arr.length);

// for (let i=0; i < arr.length; i++) {
//  console.log(arr[i]);   
// }


// for (let value of arr){
//     console.log(value);
// }
// option.makeTest();
//  console.log(Object.keys(option).length);

// console.log(option.name);
// delete option.name;
// console.log(option);

// let counter = 0;
// for (let kye in option) {
    // if (typeof(option[kye]) === 'object') {
    //     for (let i in option[kye]) {
    //     console.log(`Свойсво ${i} имеет значение ${option[kye][i]}`);
    //     counter++;
    //     }
    // }
    // else {
    //     console.log(`Свойсво ${kye} имеет значение ${option[kye]}`);
//         counter++;
//     // } 
// }
// console.log(counter);

// console.log(option['color']['border']);


//Цикл без повторения вопросов с условиями черезе do 
// let a = '',
//          b = '';
// do {
//          a = prompt('Один из последних просмотренных фильмов?',''),
//          b = prompt('На сколько оцените его?','');
// } while (a == null && b == null && a == '' && b == '' && a.length < 50);

//Задать первый вопрос через while с ограничениями в 10 симфолов и без пустого ответа
// let isCorrectNumberOfFilms = true;
// while(isCorrectNumberOfFilms) {
//     if (
//         number0fFilms.length > 10 ||
//         number0fFilms.length === 0
//         ) {
//         number0fFilms = prompt('Сколько фильмов вы уже посмотрели?',''); 
//         console.log(number0fFilms);
//     } else {
//         // Остановили цикл
//         isCorrectNumberOfFilms = false;
//     }
//}


//Цикл из повторения 2х вопросов с условиями черезе while
// let iCounterLastFilms = 2;
// let iCounterRatingFilms = 2;
// while((iCounterLastFilms > 0) && (iCounterRatingFilms > 0)) {
//     if (iCounterLastFilms > 0) {
//         let lastFilms = prompt('Один из последних просмотренных фильмов?','');
//         if (
//             lastFilms.length > 10 ||
//             lastFilms.length === 0 ||
//             lastFilms === null
//             ) {
//             lastFilms = prompt('Один из последних просмотренных фильмов?','');
//             console.log(lastFilms);
//         } else {
//             // Остановили цикл
//             iCounterLastFilms -= 1;
//         }
//     }
//     if (iCounterRatingFilms > 0) {
//         let ratingFilms = prompt('На сколько оцените его?','');
//         if (
//             ratingFilms.length > 10 ||
//             ratingFilms.length === 0 ||
//             ratingFilms === null
//             ) {
//             ratingFilms = prompt('На сколько оцените его?','');
//             console.log(ratingFilms);
//         } else {
//             // Остановили цикл
//             iCounterRatingFilms -= 1;
//         }
//     }
// }
