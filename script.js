// let fullname = 'Arif Allahverdili Etibar'

//1.
// let Array = fullname.split('')
// console.log(Array);

//2.
// let Array = fullName.split(' ');


// if (Array.length >= 2) {
//     let swappedFullName = Array[1] + ' ' + Array[0] + ' ' + Array.slice(2).join(' ');
//     console.log(swappedFullName);
// } else {
//     console.log(" yoxdur");
// }


//3.
// let nameArray = fullname.split(' ');


// let joinedString = nameArray.join(' ');

// console.log(joinedString);



// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]


// 4.
// let count = 0;


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 5) {
//         count++;
//     }
// }

// console.log("5 sayı " + count + " tekrarlanib.");

// 5.
// let sum = arr.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);

// console.log("toplama: " + sum);

// 6.
// function findDuplicates(arr) {
//     let sortedArr = arr.slice().sort();
//     let duplicates = [];

//     for (let i = 0; i < sortedArr.length - 1; i++) {
//         if (sortedArr[i + 1] === sortedArr[i]) {
//             if (!duplicates.includes(sortedArr[i])) {
//                 duplicates.push(sortedArr[i]);
//             }
//         }
//     }

//     return duplicates;
// }


// let duplicates = findDuplicates(arr);

// duplicates.sort(function(a, b) {
//     return a - b;
// });

// console.log(" artan sırayla: " + duplicates);


// 7.
// let maxNumber = Math.max(...arr);


// function countOccurrences(arr, value) {
//     return arr.reduce((count, num) => (num === value ? count + 1 : count), 0);
// }

// let occurrences = countOccurrences(arr, maxNumber);

// console.log("En boyuk say: " + maxNumber);
// console.log("En boyuk say " + occurrences + "  tekrarlanib.");

// 8.

// let name = "Arif";
// let nameLetterCount = {};

// for (let letter of name) {
//     nameLetterCount[letter] = (nameLetterCount[letter] || 0) + 1;
// }

// console.log(nameLetterCount);

// 9.

// let Two = arr.find((num) => num % 3 === 2);
// let TwoIndex = arr.indexOf(Two);

// console.log("Mod 3'e bölündüğünde qaligi 2 olan say: " + Two);
// console.log("Sayının index'i: " + TwoIndex);


// 10.
// let maxNumberIndex = arr.indexOf(Math.max(...arr));

// console.log("En boyuk sayının ilk index'i: " + maxNumberIndex);

// 11.
// let index4 = arr.reduce((indices, num, index) => (num === 4 ? indices.concat(index) : indices), []);

// console.log("4 sayısının index'leri: " + index4);

// 12.

// let index5Max = arr.lastIndexOf(5);
// let index5Min = arr.indexOf(5);

// console.log("5 sayısının en boyuk index'i: " + index5Max);
// console.log("5 sayısının en kicik index'i: " + index5Min);

// 13.

// let newArray = arr.filter(num => num > 2);
// let lengthDifference = arr.length - newArray.length;

// console.log("Yeni array: " + newArray);
// console.log("Uzunluq : " + lengthDifference);

// 14.

// let index7Sum = arr.reduce((sum, num, index) => (num === 7 ? sum + index : sum), 0);

// console.log("7 sayısının index'lerinin toplamı: " + index7Sum);





