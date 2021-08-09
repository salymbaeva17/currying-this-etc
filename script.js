// // без каррирования
// const sum = (a, b, c) => {
//     return a + b + c
// }
//
// console.log(sum(23, 31, 67))
// console.log(sum(23, 1, 67))
// console.log(sum(23, 31, 6))


// // Currying
// const sum = a => {
//     return function (b){
//         return function (c){
//             return a + b + c
//         }
//     }
// }
//
// // console.log(sum(3)(3)(4))
// // console.log(sum(3)(8)(4))
// // console.log(sum(3)(3)(4))
//
// const curryingSum = sum(10)
// console.log(curryingSum(5)(8))
// console.log(curryingSum(3)(19))
// console.log(curryingSum(12)(15))
//
//
// // super shorthand currying
// const sum = a => b => c => a + b + c
// const curryingSum = sum(10)
// console.log(curryingSum(5)(8))
// console.log(curryingSum(3)(19))
// console.log(curryingSum(12)(15))


