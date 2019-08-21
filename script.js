//создаем поля для тетриса
let tetris = document.createElement('div'); //создаем поле
tetris.classList.add('tetris'); //добавляем ему клвсс

//заполняем поле ячейками
for (let i = 1; i < 181; i++) {
    let excel = document.createElement('div');
    excel.classList.add('excel');
    tetris.appendChild(excel);
}

//создадим DOM элемент с классом main
let main = document.getElementsByClassName('main')[0]; //указываем индекс элемента даже если он один
main.appendChild(tetris); //добавляем в DOM элемент наше поле тетриса

//получим все элементы с классом excel и запишем их в переменную
let excel = document.getElementsByClassName('excel');
let i = 0; //вспомогательная переменная

for (var y = 18; y > 0; y--) {
    for (let x = 1; x < 11; x++) {
        excel[i].setAttribute('posX', x);
        excel[i].setAttribute('posY', y);
        i++
    }
}

