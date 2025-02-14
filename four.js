// циклы по счетчику
// i++ эквивалентно i=i+1

//for(let i=0; i < 10; i++) {
//console.log(`Номер итерации ${i}`)
//}

// зная порядковый номер значение числа из ряда Фибоначчи

let number = 10;
let fib_prev = 0;
let fib_next;
let fib = 1;

if (number === 0) {
    fib = 0;
} else if (number == 1) {
fib = 1;
} else {
    for (let i = 1; i < number; i++) {
        fib_next = fib + fib_prev;
        fib_prev = fib;
        fib = fib_next;
    }
}


for(let i=1; i < number; i++) {
fib_next = fib + fib_prev;
fib_prev = fib;
fib =fib_next
}
console.log(`Число Фибоначчи = ${fib}`)

for (let i = 0; i<=10; i++) {
    if(i === 4) {
        continue;
    }
    if (i === 8) {
        break;
    }
    console.log(`Номер итерации ${i}`)
}