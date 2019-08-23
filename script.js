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

//писвоим координаты ячеек во всех 18-ти рядах
for (let y = 18; y > 0; y--) {
    for (let x = 1; x < 11; x++) {
        excel[i].setAttribute('posX', x); //параметр с координатой по оси х
        excel[i].setAttribute('posY', y); //параметр с координатой по оси y
        i++
    }
}
let x = 5, y = 10;

//создадим многомерный массив описывающий логику построения фигур
let mainArr = [
    //палка
    [
        [0, 1],
        [0, 2],
        [0, 3]
    ],

    //квадрат
    [
        [0, 1],
        [1, 0],
        [1, 1]
    ]
];

let currentFigure = 0;
let figureBody = 0;


function create() {
    function getRandom() {
        return Math.round(Math.random() * (mainArr.length - 1))
    }

    currentFigure = getRandom();

    figureBody = [
        document.querySelector(`[posX = "${x}"][posY = "${y}"]`),
        document.querySelector(`[posX = "${x + mainArr[currentFigure][0][0]}"][posY = "${y + mainArr[currentFigure][0][1]}"]`),
        document.querySelector(`[posX = "${x + mainArr[currentFigure][1][0]}"][posY = "${y + mainArr[currentFigure][1][1]}"]`),
        document.querySelector(`[posX = "${x + mainArr[currentFigure][2][0]}"][posY = "${y + mainArr[currentFigure][2][1]}"]`),
    ];

    for (let i = 0; i < figureBody.length; i ++) {
        figureBody[i].classList.add('figure');
    }
}

create();