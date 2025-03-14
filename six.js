// ОБЪЕКТ

let obj = {};
console.log(typeof obj)

let myDog = {
    name: 'Габи',
    age: 11,
    bread: 'Метис',
    color: 'Светло-шоколадный',
    isSmart: true,
    size: {
        length: 1.2,
        height: 0.5
    }
};

console.log(myDog);
console.log(myDog.color)

myDog.bread = 'Фараонновая собака'
console.log(myDog.bread)

// удалим свойства
delete myDog.bread;
delete myDog['age'];
console.log(myDog)

//Добавление свойств
myDog.sex = 'Женский';
myDog['weight'] = 13;
console.log(myDog)

//МАССИВЫ
var array = [1, 2, 3, 'sd', true, {name: 'Петя'}]
console.log(array)
console.log(array[3])

// Функции для работы с объектами
console.log(Object.keys(myDog))
console.log(Object.hasOwn(myDog, 'size'))

//myDog.surname.trim();

console.log(typeof console)