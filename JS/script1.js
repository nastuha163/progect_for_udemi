"use strict";

const personalMovieDV = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDV.count = prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDV.count == null || personalMovieDV.count == '' || isNaN(personalMovieDV.count)) {
            personalMovieDV.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        },
    detectPersonalLevel: function() {
            if (personalMovieDV.count <= 10 && personalMovieDV.count > 0) {
                alert('Просмотренно давольно мало фильмов');
            }
            else if (personalMovieDV.count <= 30 && personalMovieDV.count > 10) {
                alert('Вы классический зритель');
            }
            else if (personalMovieDV.count > 30) {
                alert('Вы киноман');
            }
            else {
                alert('Произошла ошибка');
            }
        },
    remembrMyFilms: function() {
            for (let i = 0; i < 2; i++) {
                const a = prompt('Один из последних просмотренных фильмов?', ''),
                    b = prompt('На сколько оцените его?', '');
        
                if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                    personalMovieDV.movies[a] = b;
                    console.log('done');
                } else {
                    console.log('error');
                    // Остановили цикл
                    i--;
                }
        
        
            }
        },
    toggleVisibleMyDV: function(){
            if (personalMovieDV.privat) {
                personalMovieDV.privat = false;
            } else {
                personalMovieDV.privat = true;
            }
        },
    showMyDV: function(hidden) {
                if (!hidden) {
                    console.log(personalMovieDV);
                }
        },
    writeYourGenres: function() {
                for (let i = 1; i<4; i++ ) {
                    let genre =  prompt('Ваш любимый жанр под номером ' + i);

                if (genre === '' || genre == null) {
                    console.log('error');
                    i--;
                } else {
                    personalMovieDV.genres[i-1] = genre;
                }
            }
            personalMovieDV.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item} `);
            });
        }
};

