// функции

function sayHi() {
    // тело функции
    console.log('Hi');
}

sayHi();

function sayHiTo(name) {
    console.log(`Привет, ${name}!`)
}
sayHiTo('Петр')

function sum(a, b) {
    return a + b
}
//let total = sum(5, 6);
//console.log('Итого: ', total)
console.log('Итого: ', sum(5, 6))

let total = sum(5);
console.log('Итого: ', total)

function findRoot(a, b, c) {
    let disc = b * b - 4 * a * c;
    if (disc < 0) {
        console.log('Нет корней')

    } else if (disc === 0) {
        let root = - b / (2 * a)
        console.log('Один корень')
        return root;

    } else {
        let root1 = -(b - Math.sqrt(dist)) / (2 * a);
        let root2 = -(b + Math.sqrt(disc)) / (2 * a);
        console.log('Два корня')
        console.log('Корень 1 = ', root1, 'Корень 2 =', root2)
        return root1, root2;
    }
}

let result = findRoot(1, 0, 4);
console.log(result);

// Функции по работе со строгами
let text = 'Хельга пришла в клуб и оставила куртку в предбаннике! ';
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)
console.log(text)