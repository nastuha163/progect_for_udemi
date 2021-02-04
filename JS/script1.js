"use strict";
const number0fFilms =+prompt('Сколько фильмов вы уже посмотрели?','');
let answer1 =console.log(number0fFilms);
const personalMovieDV = {
    count: number0fFilms,
    movies:{    },
    actors:{    },
    genres:[    ],
    ptivat: false
};
const a =prompt('Один из последних просмотренных фильмов?'),
      b =prompt('На сколько оцените его?'),
      c =prompt('Один из последних просмотренных фильмов?'),
      d =prompt('На сколько оцените его?');
personalMovieDV.movies[a]=b;
personalMovieDV.movies[c]=d;
console.log(personalMovieDV);