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
// let depositValiy = 12000;
// let depositProcent = (depositValiy / 100 * 7) * 2;
// let tolalPay = depositValiy + depositProcent;
// if (tolalPay > 13500) {
//     console.log('Васли сможет купить квартиру');
// } else {
//     console.log('Не сможет купить');
// }

// let balance = 100;
// let bonusBalance = 100;
// let isBaned = false;
// let isExist = false;
// let isSelling = true;
// if (balance === 1000 || bonusBalance === 100 && !isBaned && !isExist && isSelling) {
//     console.log('Может купить игру');
// } else {

//     console.log('Не может купить игру');
// }

// const toPowerArrow = (num, power) => num ** power;
// console.log(toPowerArrow(2, 3));

// const macBookPrice = 2000;
// const ageUser = 24;
// const isWorking = false;
// const userMoney = 1800;
// let creditSumfunc = (ageUser, isWorking = false) => {
//     if (ageUser <= 24 && isWorking) {
//         return 500;
//     } else if (ageUser <= 24 || isWorking) {
//         return 100;
//     } else {
//         return 0;
//     }
// };
// console.log(`Одобрена банком ${creditSumfunc(ageUser, isWorking)}$`);

// function payMacBook(userMoney, macBookPrice) {
//     const totalSum = creditSumfunc(ageUser, isWorking) + userMoney;
//     if (totalSum >= macBookPrice) {
//         return 'Может купить МасВоок';
//     } else {
//         return 'Не может купить МасВоок';
//     }
// // }
// // console.log(payMacBook(userMoney, macBookPrice));
// const usersRole = ['admin', 'user', 'superUser', 'superAdmin', 'manager'];
// // const adminsDomine = usersRole.includes('admin');
// // console.log(adminsDomine);
// // const adminWebSire = usersRole.indexOf('superAdmin1');
// // console.log(adminWebSire);
// const res1 = usersRole.slice(1, 2);
// console.log(res1);
// // console.log(usersRole);
// // const res2 = usersRole.splice(1, 3);
// // console.log(res2);
// // console.log(usersRole);

// const tasks = ['Задача 1'];

// function addTask(task) {
//     tasks.push(task);
// }
// addTask('Задача 2');
// addTask('Задача 3');
// console.log(tasks);

// function delTask(task) {
//     const index = tasks.indexOf(task);
//     if (index !== -1) {
//         tasks.splice(index, 1);
//     } else {
//         console.log('Нет такой задачи');
//     }
// }
// delTask('Задача 4');
// console.log(tasks);

// function priorTask(task) {
//     const index = tasks.indexOf(task);
//     const oldTask = tasks[index];
//     if (index !== -1) {
//         tasks.splice(index, 1);
//         tasks.unshift(oldTask);
//     } else {
//         console.log('Нет такой задачи');
//     }
// }
// priorTask('Задача 2');
// console.log(tasks);

// const arrData = [1, 2, 3, 4, 5, 6, 7];
// const [one, two, ...otherNum] = arrData;
// console.log(one, two, otherNum);

// const url = 'https://purpleshool.ru/course/javascript';
// const arrUrl = url.split('/');
// console.log(arrUrl);
// const urlAdres = arrUrl.splice(0, 1);
// const urlAdresName = arrUrl.splice(1, 1);
// console.log(urlAdres);
// console.log(urlAdresName);

// const arr = ['!', 'JS', 'люблю', 'Я'];
// const arrString = [];

// function arrRevers(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         arrString.push(arr[i]);
//     }
//     console.log(arrString.join(' '));
// }
// arrRevers(arr);
// let out = '';
// for (let i = 10; i > 0; i--) {
//     for (let j = 10; j > i; j--) {
//         if (j % 2 == 0) {
//             out += '*';
//         }

//     }
//     out += '<br>';
// }
// document.querySelector('.out').innerHTML = out;

// // Место для первой задачи
// function firstTask() {
//     for (let i = 5; i <= 10; i++) {
//         console.log(i);
//     }
// }
// firstTask();

// // Место для второй задачи
// function secondTask() {
//     for (let i = 20; i >= 10; i--) {
//         console.log(i);
//         if (i === 13) {
//             break;
//         }
//     }
// }
// secondTask();

// // Место для третьей задачи
// function thirdTask() {
//     for (let i = 1; i <= 10; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         }
//     }
// }
// thirdTask();

// // Место для четвертой задачи

// // Цикл, который нужно переписать:

// // for (let i = 2; i <= 16; i++) {
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }

// function fourthTask() {
//     let i = 2;
//     while (i <= 16) {
//         i++;
//         if (i % 2 === 0) {
//             continue;
//         } else {
//             console.log(i);
//         }
//     }
// }
// fourthTask();

// // Место для пятой задачи

// function fifthTask() {
//     const arrayOfNumbers = [];
//     for (let i = 5; i <= 10; i++) {
//         console.log(arrayOfNumbers[0] = i);
//     }
//     // Не трогаем
//     return arrayOfNumbers;
// }
// fifthTask();

// Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         console.log(result.push(arr[i]));
//     }
//     // Не трогаем
//     return result;
// }
// firstTask();

// // Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof (data) === String) {
//             console.log(data.push(data[i] + '-done'));
//         } else if (typeof (data) === Number) {
//             console.log(data.push(data[i] * 2));
//         }
//     }
//     // Не трогаем
//     return data;
// }
// secondTask();

// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут


//     // Не трогаем
//     return result;
// }
// function sumCalculeit(a, b) {
//     return a * b;
// }

// function callbackFn(a, b, fn) {
//     const res = fn(a, b);
//     return res;
// }
// const res = callbackFn(3, 5, sumCalculeit);
// console.log(res);

// function power(pow) {
//     return function (num) {
//         return num ** pow;
//     };
// }
// let power = pow => num => num ** pow;
// const powerCube = power(2);
// console.log(powerCube(5));

// const score = [5, 10, 0, 22, 15];
// score.forEach((elem, index) => {
//     console.log(`${index+1} ${elem}`);
// });

// function getLoginUser(lName, fName, fn) {
//     const resultFn = fn(lName, fName);
//     return resultFn;
// }

// function callbackFnName(lName, fName, fn) {
//     return `Фамилия: ${lName} Имя: ${fName}`;
// }
// const resultFn = callbackFnName('Tukhbayev', 'Alibek');
// console.log(resultFn);

function creatStep(a) {
    let count = a;
    return () => {
        console.log(count);
    };
}
let step1 = creatStep(2 + 2);
step1();

const usdRate = 465;
const eurRate = 480;

let currencyСonversion = (current, amount) => current * amount;
const sum = currencyСonversion(usdRate, 840);
console.log(sum);