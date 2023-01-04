//Задания 1
// let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
// console.log(`${numberOfFilms} фильмов`);

//Задания 2
// let personalMovieDB = {
//     count: prompt('Страна'),
//     movies: prompt('Фильм'),
//     actors: prompt('Актер'),
//     genres: prompt([]),
//     privat: prompt(true)
// };
// console.log(personalMovieDB);
let depositValiy = 12000;
let depositProcent = (depositValiy / 100 * 7) * 2;
let tolalPay = depositValiy + depositProcent;
if (tolalPay > 13500) {
    console.log('Васли сможет купить квартиру');
} else {
    console.log('Не сможет купить');
}