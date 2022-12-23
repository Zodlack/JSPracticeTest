
/*Пример универсалной функции , которая удаляет любой елемент по переданному функции параметру (в данном случае элементу)*/ 
// var number1 = document.getElementById('number1');
// getRemove(firstName1El);

// function getRemove(el){
//     el.remove();
// }

/*Пример универсалной функции , которая удаляет любой елемент по переданному функции параметру (в данном случае id елемента)*/ 
// var number1 = document.getElementById('number1');
// getRemove('number1');

// function getRemove(id){
//     el = document.getElementById(id);
//     el.remove();
// }

// var number1 = getRemove();

//  function getRemove(){
//      el = document.getElementById('number3');
//      el.remove();
    
// }

var number1 = getRemove();

function getRemove(){
    el = document.getElementById('number1');
    if ( el!= null){
        el.className = 'changewidth';
        // el.remove();
    }
}



 


// var input1 = document.getElementById('first-name1');
// var input2 = document.getElementById('first-name2');
// var input3 = document.getElementById('first-name3');
// inputsRemove(input1);
// inputsRemove(input2);
// inputsRemove(input3);

// function inputsRemove(el){
//     element=Number(el.value);
//     if (element = '2'){
//         el.remove();
//     } 
// }


/*Функция , которая которая будет принимать массив html элементов, 
пробегаться по этим элементам и если у элемента значение .value === 2, то элемент должен быть удалён его со страницы.*/ 

// var firstName1El = document.getElementById('first-name1');
// var firstName2El = document.getElementById('first-name2');
// var firstName3El = document.getElementById('first-name3');
// var elementNumber = document.getElementById('number2');
// InputsRemove();
  
// function InputsRemove(){
//     var arrayOfInputs = [firstName1El, firstName2El, firstName3El, elementNumber];
//     for (var index = 0; index < arrayOfInputs.length; index++){
//         var el = arrayOfInputs[index];
//         if(el.value === '2'){
//             el.remove();
//         }
//     }
// } 

/*Функция, которая будет принимать массив элементов, пробегаться по этим элементам и
 если у элемента есть css класс “changewidth”, то элемент должен быть удалён  со страницы.*/ 

// var firstName1El = document.getElementById('first-name1');
// var firstName2El = document.getElementById('first-name2');
// var firstName3El = document.getElementById('first-name3');
// var elementNumber = document.getElementById('number2');
// var elementNumber1 = document.getElementById('number1');
// InputsRemove();
  
// function InputsRemove(){
//     var arrayOfInputs = [firstName1El, firstName2El, firstName3El, elementNumber, elementNumber1];
//     for (var index = 0; index < arrayOfInputs.length; index++){
//         var el = arrayOfInputs[index];
//         if(el.className === 'changewidth'){
//              el.remove();
//         } 
//     }
// } 



/*Функция , которая будет принимать элемент (не id передаём, а сам элемент) как параметр и 
возвращать true если у элемента есть класс "changewidth". И false в противном случае*/ 

// var firstName1El = document.getElementById('first-name1');
// var firstName2El = document.getElementById('first-name2');
// var firstName3El = document.getElementById('first-name3');
// var elementNumber = document.getElementById('number2');
// var elementNumber1 = document.getElementById('number1');
// InputsRemove();
  
// function InputsRemove(){
//     var arrayOfInputs = [firstName1El, firstName2El, firstName3El, elementNumber, elementNumber1];
//     for (var index = 0; index < arrayOfInputs.length; index++){
//         var el = arrayOfInputs[index];
//         if(el.className === 'changewidth'){
//              result = true;
//         } else result =  false ;
//         window.alert(result);
//     }
// } 



/*функция , которая через массив вычисляет нужный элемент с классом('changewidth') и удаляет его, в противном случае false*/ 

// var firstName1El = document.getElementById('first-name1');
// var firstName2El = document.getElementById('first-name2');
// var firstName3El = document.getElementById('first-name3');
// var elementNumber = document.getElementById('number2');
// var elementNumber1 = document.getElementById('number1');

// var arrayEl = [firstName1El, firstName2El, firstName3El, elementNumber, elementNumber1];


// function removeElementIfConditionsTrue(Elements, predicate){
//     Elements.forEach(function(el){
//         return predicate(el);
//     });
// }

// function predicate(el){
//     if(el.className === 'changewidth'){
//         el.remove();
        
//     } else{
//         return window.alert('false');
//     }

// }

// removeElementIfConditionsTrue(arrayEl, predicate);



// Задание : При нажатии на кнопку пароль должен отображаться как простой текст. При повторном нажатии - снова звёздочками. 

// var buttontype = document.getElementById('buttontype');
// buttontype.addEventListener('click', changetype);

// function changetype (){
//     var el = document.getElementById('text');
//     if (el.type ==='password'){
//         el.type ='text';
//     }   else if(el.type ==='text'){
//         el.type ='password';
//     } 



// Задание: Тоже самое, что и в предыдущем занятии, но пароль должен показываться при нажатии на кнопку (не клике, а именно нажатии (событие mousedown)). А при отпускании мыши буквы должны снова превращаться в звёздочки (событие mouseup)


// var buttontype = document.getElementById('buttontype');
// buttontype.addEventListener('mousedown', changetype);
// buttontype.addEventListener('mouseup', changetype);

// function changetype (){
//     var el = document.getElementById('text');
//     if (el.type ==='password'){
//         el.type ='text';
//     }   else if(el.type ==='text'){
//         el.type ='password';
//     } 
//  }


// Задание: изменение статуса в соцсети (нажимаем на спам и появляется Inpuut  с кнопкой.Далее меняем статус и сохраняем (кнопка сохранить))


// var input1 = document.getElementById("input1");
// var button = document.getElementById("change");
// var span = document.getElementById("span");

// span.addEventListener('click', changeValue);

// function changeValue(){
//     //  input1.value = prompt('Измени статус');
//      button.addEventListener('click', changeSpan);
// }

// function changeSpan(){
//     span.innerHTML = input1.value;
// } //---- первый вариант 
// function changeValue (){
//     span.innerHTML = prompt('Измени статус');
// }

// Задание : При нажатии на кнопку значения инпутов должны поменяться местами

// var input1 = document.getElementById("input1");
// var button = document.getElementById("changevalue");
// var input2 = document.getElementById("input2");

// button.addEventListener('click', changeValue);

// function changeValue(){
//     var a = input1.value;
//     input1.value = input2.value;
//     input2.value = a;
// }

/*Задание: Есть 10 текстовых полей. Вы вводите туда числа.Если число выходит за пределы диапазона 10-50,то
поля должны выделяться красной рамкой (красным бордером) . При вводе корректного числа - рамка должна исчезать.*/ 

// let arrayInputs = document.getElementsByClassName('numbers');
// for(i = 0; i < arrayInputs.length; i++){
//     var element = arrayInputs[i];
//     element.addEventListener('change', inputNumber);
// }


// function inputNumber() {
//     for (let i = 0; i < arrayInputs.length; i++) {
//         let numOfValue = Number(arrayInputs[i].value);
//         if (numOfValue >= 10 && numOfValue <= 50) {
//             arrayInputs[i].classList.add('accept');
//             arrayInputs[i].classList.remove('error');
//         } else {
//             arrayInputs[i].classList.add('error');
//             arrayInputs[i].classList.remove('accept');
//         }
//     }
// }


// Вариант 2- сделать все то же саамое ,но по кнопке 

// let arrayInputs = document.getElementsByClassName('numbers');
// let formInputs = document.getElementById('changevalue');
// for(i = 0; i < arrayInputs.length; i++){
//     // formInputs = arrayInputs[i];
//     formInputs.addEventListener('click', inputNumber);
// }


// function inputNumber() {
//     for (let i = 0; i < arrayInputs.length; i++) {
//         let numOfValue = Number(arrayInputs[i].value);
//         if (numOfValue >= 10 && numOfValue <= 50) {
//             arrayInputs[i].classList.add('accept');
//             arrayInputs[i].classList.remove('error');
//         } else {
//             arrayInputs[i].classList.add('error');
//             arrayInputs[i].classList.remove('accept');
//         }
//     }
// }