/*Варинт№2*/ 
// var firstName1El = document.getElementById('first-name1');    
// var firstName2El = document.getElementById('first-name2');
// var firstName3El = document.getElementById('first-name3');
// setMyNameToAllInputs();

//  function setMyNameToAllInputs(){
//      var newValue = 'Егор';
//      firstName1El.value = newValue;
//      firstName2El.value = newValue;
//      firstName3El.value = newValue;
//      window.alert(firstName1El.value);
//      window.alert(firstName2El.value);
//      window.alert(firstName3El.value);    
//  }
//  function setMyLastNametoAllInputs(){
//      var newValue = 'Айдинян';
//      firstName1El.value = newValue;
//      firstName2El.value = newValue;
//      firstName3El.value = newValue;
//      window.alert(firstName1El.value);
//      window.alert(firstName2El.value);
//      window.alert(firstName3El.value);   
//  }
/*Вариант №3*/
var firstName1El = document.getElementById('first-name1');
var firstName2El = document.getElementById('first-name2');
var firstName3El = document.getElementById('first-name3');
changeName(firstName1El);
changeLastName(firstName2El);
changeName(firstName3El);

function changeName(parametr1Element){
    parametr1Element.value = 'Егор';   
}
 function changeLastName(parametr2Element){
     parametr2Element.value = 'Айдинян';
 }

/*Присвоение стиля объектам страницы!!! */ 

//  var firstName1El = document.getElementById('first-name1');    
//  var firstName2El = document.getElementById('first-name2');
//  var firstName3El = document.getElementById('first-name3');
//  var contentEl = document.getElementById('content');
//  var textEl = document.getElementById('text');
//  setError(firstName1El);
//  setError(firstName2El);
//  setError(firstName3El);
//  setError(contentEl);
//  setError(textEl);

/*Вариант №2*/ 
// function setError(parametrElement){
//     parametrElement.className = 'error'
// }

/*Варинат №1 */ 
// function setError(){
//     firstName1El.className = 'error';
//     firstName2El.className = 'error';
//     firstName3El.className = 'error';
//     contentEl.className = 'error';
//     textEl.className = 'error';
// }

/*Вариант №3*/
// var firstName1El = setError('first-name1');    
// var firstName2El = setError('first-name2');
// var firstName3El = setError('first-name3');
// var contentEl = setError('content');
// var textEl = setError('text');

//  function setError(id){
//     var el = document.getElementById(id);
//     el.className = 'error';
//     // console.log(el.value);   
//  }

/*Вариант №4 (Добавляем таймер обнавления стилей объектов)*/

//  function setError(id){
//     var el = document.getElementById(id);
//     el.className = 'error';
//  }
//   function setErrorAddClassName(){
//     setError('first-name1');
//     setError('first-name2');
//     setError('first-name3');
//     setError('content');
//     setError('text');
//   }
// window.setTimeout(setErrorAddClassName,2000);

/*Вариант №5 (задаем стили через кнопку (событие-onclick)*/

// function setError(id){
//     var el = document.getElementById(id);
//     el.className = 'error';
//     el.value = 'Егорка';

//  }
//   function setErrorAddClassName(){
//     setError('first-name1');
//     setError('first-name2');
//     setError('first-name3');
//     setError('content');
//     setError('text');
//   }

//   var button = document.getElementById('button');
//   button.addEventListener('click',setErrorAddClassName);

/*Дополнение к уроку с событиями. Необходиом сделать только у одного imput зменение стиля по кнопке*/

// function setError(id){
//     var el = document.getElementById(id);
//     el.className = 'error';
//     el.value = 'Егорка';
//  }
  // function setErrorAddClassName(){
  //   setError('first-name1');
  //   setError('first-name2');
  //   setError('first-name3');
  //   setError('content');
  //   setError('text');
  // }/*Чтобы изменить стиль всех элементов*/


  // var button = document.getElementById('button');
  // button.addEventListener('click',onFirstNameToAllImput);

  // function onFirstNameToAllImput(){
  //   setError('first-name1');
  // }
/*Чтобы изменить стиль по кнопке только одного элемента, необходиом создать новую функцию и в нее вложить функцию с параметром id у которой аргумент
(в данном случаии текстовое значение (название Id)) будет именно этого элемента. */ 
  


// var firstName1El = document.getElementById('first-name1');
// firstName1El.addEventListener('keyup', onFirstNameKeyUp);/*вместо события "keyup" можно будет прописать событие "keydown"*/
// function onFirstNameKeyUp() {
//     setError('first-name1');
// }



/*Новый урок */ 

// function getSumm(a, b) {
//     var a = Number(a);
//     var b = Number(b);
//     return a + b;
// }
//    var result1 = getSumm('23' ,'23');
//    var result2 = getSumm('46' , '46');
//    var result3 = getSumm('152' , '456')
//   console.log(result1);
//   console.log(result2);
//   console.log(result3);



/*Новый урок*/ 

// function setHello(id){
//     var element = document.getElementById(id);
//     window.alert(element.value);
// }

// setHello('first-name1');

// function setHelloName(){
//     setHello('first-name2');
// }

// window.setTimeout(setHelloName, 2000);


