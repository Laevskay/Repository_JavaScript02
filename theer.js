// Условные конструкции

// if (логичесекое_выражение)  {
//     // блок когда если ИСТИНА
// } else {
//     // блок окда если ЛОЖЬ
// }

// матч по волейболу
let team1 = 0;
let team2 = 1;
//todo учесть баланс
while (team1 < 25 && team2 < 25) 
    ||
(team1 >= 24 && team2 >= 24 && Math.abs(team1 - team2) < 2) {
    //розыгрыш мяча
    if(Math.random() < 0.5) {
        team1++;
    } else {
        team2++;
    }
}
console.log(`команда 1 набрала ${team1} очков`);
console.log(`команда 1 набрала ${team2} очков`); 

if (team1 > team2) {
    console.log('победила команда 1');
} else {
    console.log('победила команда 2')
}
