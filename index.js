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
