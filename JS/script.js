"use strict";


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
