let events = [
    { title: 'Первый полет человека в космос', year: 1961, month: 4, day: 12 },
    { title: 'День основания клуба', year: 1961, month: 10, day: 15 },
    { title: 'День победы', year: 1945, month: 5, day: 9 },
    { title: 'Отмена крепостного права', year: 1861, month: 1, day: 19 }
];

events.push({
    title: 'Основание Санкт-Петербурга',
    year: 1703,
    month: 5,
    day: 27,
});

console.log(events)

//Удаление и добавление элементов массива
//events.shift();
//events.pop();

events.forEach(function (elem, i) {
    console.log(`${i}) ${elem.title}`);
});

events.forEach((elem, i) => console.log(`${i + 1}) ${elem.title}`))

events.find((elem) => elem.year < 1900)
let earlier20Century = (elem) => elem.year < 1900;
let containsDay = (elem) => elem.title.toLowerCase().includes('день');

let newElem = events.find(earlier20Century);
console.log(newElem);

let newArray = events.filter(earlier20Century)
console.log(newArray);