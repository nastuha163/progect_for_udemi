"use strict";
let number0fFilms;

function start() {
    number0fFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (number0fFilms == null || number0fFilms == '' || isNaN(number0fFilms)) {
        number0fFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

function detectPersonalLevel() {
    if (number0fFilms <= 10 && number0fFilms > 0) {
        alert('Просмотренно давольно мало фильмов');
    }
    else if (number0fFilms <= 30 && number0fFilms > 10) {
        alert('Вы классический зритель');
    }
    else if (number0fFilms > 30) {
        alert('Вы киноман');
    }
    else {
        alert('Произошла ошибка');
    }
}
detectPersonalLevel();

const personalMovieDV = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    ptivat: false
};
// //Цикл из повторения 2х вопросов с условиями черезе for

// function remembrMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDV.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             // Остановили цикл
//             i--;
//         }


//     }
// }
// remembrMyFilms();
console.log(personalMovieDV);


// function showMyDV(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDV);
//     }
// }
// showMyDV(personalMovieDV.ptivat);

function writeYourGenres() {
    for (let i = 1; i<4; i++ ) {
        personalMovieDV.genres[i-1] = prompt('Ваш любимый жанр под номером ' + i);
    }
}
writeYourGenres();