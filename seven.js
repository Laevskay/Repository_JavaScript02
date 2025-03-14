function formatDate(year, month, day) {
    let monthDict = {
        1: 'январь',
        2: 'февраль',
        3: 'март',
        4: 'апрель',
        5: 'май',
        6: 'июнь',
        7: 'июль',
        8: 'август',
        9: 'сентабрь',
        10: 'октябрь',
        11: 'ноябрь',
        12: 'декабрь',
    }
return `День: ${day}, месяц: ${monthDict[month]}, год: ${year}`;

}
function formatShortDate(year, month, day) {
    let monthAsStr = String(month);
    if (monthAsStr.lenght < 2)
        monthAsStr = '0' + monthAsStr

    return `${day}.${month}.${year}`
}
//console.log(formatDate(2025, 5, 14))
//console.log(formatShortDate(2025, 5, 14))

function showMeBirthday(print) {
    let _formatDate = print(2000, 1, 1);
    console.log(_formatDate)
}
showMeBirthday(formatDate)

let events = [
    {title: 'Первый полет человека в космос', year: 1961, month: 4, day: 12};
    {title: 'День основания клуба', year: 1961, month: 10, day: 15};
    {title: 'День победы', year: 1945, month: 5, day: 9};
    {title: 'Отмена крепостного права', year: 1861, month: 1, day: 19};
]

for (let i = 0; i < events.length; i++) {
    
}