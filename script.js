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


// this context

// const object ={
//     value: "42",
//     print: function () {
//         function type() {
//             console.log(this.value)
//             return typeof this.value
//         }
//
//          console.log(`${this.value} is ${type()}`) // 42 is undefined
//     }
// }
//
// object.print()


// const object ={
//     value: "42",
//     print: function () {
//         const type = () => {
//             console.log(typeof this.value) // 42
//             return typeof this.value // string
//         }
//         console.log(`${this.value} is ${type()}`) // 42 is undefined
//     }
// }
//
// object.print()


// function volume(w) {
//     return function (l, h) {
//         return l*w*h
//     }
// }
//
// let volumeLH = volume(70)
// let figure1 = volumeLH(30, 40)
// console.log(figure1) // 84000
// let figure2 = volumeLH(123, 99)
// console.log(figure2) // 852390


// // closure
// const example = () => {
//     let count = 0
//     return function () {
//         count++
//         return count
//     }
// }
//
// console.log(example())
// f () {
//     count++
//     return count
// }
//
//  console.log(example()()) // 1
//  console.log(example()()) // 1
//  console.log(example()()) // 1
//  console.log(example()()) // 1
//  console.log(example()()) // 1


// let counter = example()
// console.log(counter()) // 1
// console.log(counter()) // 2
// console.log(counter()) // 3
// console.log(counter()) // 4
// console.log(counter()) // 5


// // setTimeout(), setInterval()
// for (var i = 1; i < 10; i++){
//     setTimeout(function (){
//         console.log(i)
//     }, 10)
// }
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10
// 10


// for (let i = 1; i < 10; i++){
//     setTimeout(function (){
//         console.log(i)
//     }, 10)
// }
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9


// for (var i = 1; i <= 10; i++){
//     setTimeout(function (){
//         console.log(i)
//     }, 0)
// }


// через 0 и 1 секунду не важно все равно выйдет 11 10раз
// 11
// 11
// 11
// 11
// 11
// 11
// 11
// 11
// 11
// 11

// setTimeout(()=>{
//     console.log(2)
// }, 100)
//
//
// console.log(1)
// // выведется 1 а потом 2
//
//
// setTimeout(()=>{
//     console.log(2)
// }, 0)
//
//
// console.log(1)
// // выведется 1 а потом 2, так как все равно таймаут работает
// // после обычного консольлога и 0 на самом деле не 0 а примерно 0,004
