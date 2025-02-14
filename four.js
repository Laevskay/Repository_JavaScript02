// циклы по счетчику
// i++ эквивалентно i=i+1

//for(let i=0; i < 10; i++) {
//console.log(`Номер итерации ${i}`)
//}

// зная порядковый номер значение числа из ряда Фибоначчи

let number = 5;
let fib_prev = 0;
let fib_next;
let fib = 1;
for(let i=0; i < number; i++){
fib_next = fib + fib_prev;
fib_prev = fib;
fib =
}
console.log(`Число Фибоначчи = ${fib}`)