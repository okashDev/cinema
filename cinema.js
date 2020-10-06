const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последний просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b; 
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for(let i = 1; i < 2; i++) {
            let genres = prompt(`Ваши любимые через запятую,`).toLocaleLowerCase();

            if(genres === '' || genres == null) {
                console.log('Вы ввели некорректные данные или не ввели вообще');
                i--;
            }else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }    
    // или можно так - personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};

//     ВТОРОЙ МЕТОД РЕШЕНИЯ ЗАДАЧИ:

//     writeYourGenres: function() {
//         for(let i = 1; i <= 3; i++) {
//             let genres = prompt(`Ваш любимый жанр под номером ${i}`);

//             if(genres === '' || genres == null) {
//                 console.log('Вы ввели некорректные данные или не ввели вообще');
//                 i--;
//             }else {
//                 personalMovieDB.genres[i - 1] = genres;
//             }    
//     // или можно так - personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//         }
//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };



// const a = prompt('Один из последний просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последниx просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');


// rememberMyFilms();

// detectPersonalLevel(); 

// showMyDB(personalMovieDB.privat); 

// wrightYourGenres();

// console.log(personalMovieDB);


// personalMovieDB.movies[a] = b; 
// personalMovieDB.movies[c] = d; 

