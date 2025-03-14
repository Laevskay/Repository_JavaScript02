function sayHi() {
    console.log('hi')
}

function sayBye() {
    console.log('bye')
}

function todo(sayAny) {
    console.log('start')
        sayAny();
        console.log('finish')

}
todo(sayHi)