function crud() {
    //операция чтения элемента
    const elem = document.getElementById('main_head')
    console.log(elem)

    setTimeout( () => {
        elem.innerText = 'это уже не смешные делишки'
    }, 7000)

    setTimeout( () => {
        const newElem = document.createElement('h1')
        newElem.innerText = 'Деловые дела'
        document.body.appendChild(newElem)
    }, 10000)
    setTimeout( () => {
        const newElem = document.createElement('hi')
        newElem.innerText = 'Деловые вещи'
        document.body.prepend(newElem)
    }, 10000)
}

const btn = document.getElementById('btn_click')
btn.onclick=crud

function addNewTask() {
    //1. Получить инпут
    const inp = document.getElementById('input_title');
    // 2. Создать новый элемент li
    const newElem = document.createElement('li');
    // 3. Добавить текст из инпута в новый элемент
    newElem.innerText = inp.value
    // 4. Вставить новый эелементв список
    const list = document.getElementById('list')
    list.appendChild(newElem)
    inp.value = '';
}
const inputElement = document.getElementById('input_title');
inputElement.addEventListener('keypress', function(event))
const btn = document.getElementById('btn_click')
btn.onclick = addNewTask
