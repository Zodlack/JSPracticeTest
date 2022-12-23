
/*Вариант №1*/ 
// var buttonPlus = document.getElementById('buttonPlus');
// var buttonMinus = document.getElementById('buttonMinus');
// var buttonMyltiply= document.getElementById('buttonMyltiply');
// var buttonDevide = document.getElementById('buttonDevide');

// function onButtonPlusClick(){
//     var input1 = document.getElementById('number1');
//     var input2 = document.getElementById('number2');

//     var number1 = Number(input1.value);/*Функция "Number" переводит строковое значение в числовое */
//     var number2 = Number(input2.value);

//     var summ = number1 + number2;
//     window.alert(summ);
// }

// function onButtonMinusClick(){
//     var input1 = document.getElementById('number1');
//     var input2 = document.getElementById('number2');

//     var number1 = Number(input1.value);/*Функция "Number" переводит строковое значение в числовое */
//     var number2 = Number(input2.value);

//     var summ = number1 - number2;
//     window.alert(summ);
// }

// function onButtonMyltiplyClick(){
//     var input1 = document.getElementById('number1');
//     var input2 = document.getElementById('number2');

//     var number1 = Number(input1.value);/*Функция "Number" переводит строковое значение в числовое */
//     var number2 = Number(input2.value);

//     var summ = number1 * number2;
//     window.alert(summ);
// }

// function onButtonDevideClick(){
//     var input1 = document.getElementById('number1');
//     var input2 = document.getElementById('number2');

//     var number1 = Number(input1.value);/*Функция "Number" переводит строковое значение в числовое */
//     var number2 = Number(input2.value);

//     var summ = number1 / number2;
//     window.alert(summ);
// }

// buttonPlus.addEventListener('click', onButtonPlusClick);
// buttonMinus.addEventListener('click', onButtonMinusClick);
// buttonMyltiply.addEventListener('click', onButtonMyltiplyClick);
// buttonDevide.addEventListener('click', onButtonDevideClick);

// Вариант №2-Рефакторинг(улучшение)

// var buttonPlus = document.getElementById('buttonPlus');
// var buttonMinus = document.getElementById('buttonMinus');
// var buttonMyltiply= document.getElementById('buttonMyltiply');
// var buttonDevide = document.getElementById('buttonDevide');

// var input1 = document.getElementById('number1');
// var input2 = document.getElementById('number2');

// function getNamber1(){
//    return Number(input1.value);
// }
// function getNamber2(){
//    return Number(input2.value);
// }

// function getNamberOperation(operation){
//     if(operation === '+'){
//         var result = getNamber1() + getNamber2();
//     } else if(operation === '-'){
//         var result = getNamber1() - getNamber2();
//     } else if(operation === '*'){
//         var result = getNamber1() * getNamber2() ;
//     } else if(operation === '/'){
//         var result = getNamber1() / getNamber2() ;
//     } else {
//         window.alert("Operation is unknow!");
//     }
//     window.alert(result);
// }

// function onButtonPlusClick(){
//     getNamberOperation('+');
// }

// function onButtonMinusClick(){
//     getNamberOperation('-');
// }


// function onButtonMyltiplyClick(){
//     getNamberOperation('*');
// }

// function onButtonDevideClick(){
//     getNamberOperation('/');
// }

// buttonPlus.addEventListener('click', onButtonPlusClick);
// buttonMinus.addEventListener('click', onButtonMinusClick);
// buttonMyltiply.addEventListener('click', onButtonMyltiplyClick);
// buttonDevide.addEventListener('click', onButtonDevideClick);


//Вариант №3 продолжаем рефакторинг 

// var buttonPlus = document.getElementById('buttonPlus');
// var buttonMinus = document.getElementById('buttonMinus');
// var buttonMyltiply= document.getElementById('buttonMyltiply');
// var buttonDevide = document.getElementById('buttonDevide');

// var input1 = document.getElementById('number1');
// var input2 = document.getElementById('number2');


// function getNamberOperation(operation){

//     var number1 = Number(input1.value);
//     var number2 = Number(input2.value);

//     if(operation === '+'){
//         var result = number1 + number2;
//     } else if(operation === '-'){
//         var result = number1 - number2;
//     } else if(operation === '*'){
//         var result = number1 * number2 ;
//     } else if(operation === '/'){
//         var result = number1 / number2 ;
//     } else {
//         window.alert("Operation is unknow!");
//     }
//     window.alert(result);
// }

// function onButtonPlusClick(){
//     getNamberOperation('+');
// }

// function onButtonMinusClick(){
//     getNamberOperation('-');
// }


// function onButtonMyltiplyClick(){
//     getNamberOperation('*');
// }

// function onButtonDevideClick(){
//     getNamberOperation('/');
// }

// function onOperationButtonClick(eventObject){
//     var clickedElement = eventObject.currentTarget;
//     var operation = clickedElement.innerHTML;
//     getNamberOperation(operation);
// } /*Благодаря eventObject* мы вместо 4-x Listener сделали один ,так как с помощью eventTarget мы передели значение кнопки , вместо того 
// чтобы делать под каждое отдельное значение кнопки дополнительную функцию (Listenet)*/

// buttonPlus.addEventListener('click', onOperationButtonClick);
// buttonMinus.addEventListener('click', onOperationButtonClick);
// buttonMyltiply.addEventListener('click', onOperationButtonClick);
// buttonDevide.addEventListener('click', onOperationButtonClick);

// вариант №5 упращаем с помощью массива и цикла For


// var buttonPlus = document.getElementById('buttonPlus');
// var buttonMinus = document.getElementById('buttonMinus');
// var buttonMyltiply= document.getElementById('buttonMyltiply');
// var buttonDevide = document.getElementById('buttonDevide');

// var input1 = document.getElementById('number1');
// var input2 = document.getElementById('number2');


// function getNamberOperation(operation){

//     var number1 = Number(input1.value);
//     var number2 = Number(input2.value);

//     if(operation === '+'){
//         var result = number1 + number2;
//     } else if(operation === '-'){
//         var result = number1 - number2;
//     } else if(operation === '*'){
//         var result = number1 * number2 ;
//     } else if(operation === '/'){
//         var result = number1 / number2 ;
//     } else {
//         window.alert("Operation is unknow!");
//     }
//     window.alert(result);
// }

// function onOperationButtonClick(eventObject){
//     var clickedElement = eventObject.currentTarget;
//     var operation = clickedElement.innerHTML;
//     getNamberOperation(operation);
// } 

// var arrayOfButtons = [buttonPlus, buttonMinus, buttonMyltiply, buttonDevide];//А если кнопок будет 40 ,не будем же их в массиве все 40 перечислять ?
// array обязательно должен стоять до цикла for
// for (var index = 0; index < arrayOfButtons.length; index++){
//     var button = arrayOfButtons[index];
//     button.addEventListener('click', onOperationButtonClick);
// }
// Благодаря массиву и циклу заменили 4-е Linester

// arrayOfButtons[0].addEventListener('click', onOperationButtonClick);
// arrayOfButtons[1].addEventListener('click', onOperationButtonClick);
// arrayOfButtons[2].addEventListener('click', onOperationButtonClick);
// arrayOfButtons[3].addEventListener('click', onOperationButtonClick);


// Вариант 6 заменим массив кнопок на вызов функции через document.elementsByClassName('').В HTML добавим кнопкам одинаковый класс

var arrayOfButtons = document.getElementsByClassName('buttonclass');


var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

for (var index = 0; index < arrayOfButtons.length; index++){
    var button = arrayOfButtons[index];
    button.addEventListener('click', onOperationButtonClick);
}

function onOperationButtonClick(eventObject){
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    getNamberOperation(operation);
} 

function getNamberOperation(operation){

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    if(operation === '+'){
        var result = number1 + number2;
    } else if(operation === '-'){
        var result = number1 - number2;
    } else if(operation === '*'){
        var result = number1 * number2 ;
    } else if(operation === '/'){
        var result = number1 / number2 ;
    } else {
        window.alert("Operation is unknow!");
    }
    window.alert(result);
}