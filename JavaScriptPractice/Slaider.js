
// // find elements
// var showPrewBtn = document.getElementById('show-prew');
// var showNextBtn = document.getElementById('show-next');
// var slideImg = document.getElementById('slide-img');

// // subscribe to events
// showPrewBtn.addEventListener('click', onShowPrewBtn);
// showNextBtn.addEventListener('click', onShowNextBtn);

// //create images array
// var imgUrls =[];
// imgUrls.push('https://images.wallpaperscraft.ru/image/single/mashina_seryj_mokryj_147750_240x320.jpg');
// imgUrls.push('https://images.wallpaperscraft.ru/image/single/sportkar_drift_neon_144519_240x320.jpg');
// imgUrls.push('https://images.wallpaperscraft.ru/image/single/mashina_sportkar_neon_157154_240x320.jpg');
// imgUrls.push('https://images.wallpaperscraft.ru/image/single/porsche_911_carrera_rsr_porsche_sportkar_139640_240x320.jpg');

// var currentImageindex = 0;
// slideImg.src = imgUrls[currentImageindex];
// showPrewBtn.disabled = true;

// //function definitions 
// function onShowPrewBtn(){
//     currentImageindex--;
//     slideImg.src = imgUrls[currentImageindex];
//     showNextBtn.disabled = false;

//     if(currentImageindex === 0){
//         showPrewBtn.disabled = true;
//     }
// }

// function onShowNextBtn(){
//     currentImageindex++;
//     slideImg.src = imgUrls[currentImageindex];
//     showPrewBtn.disabled = false;

//     if(currentImageindex === (imgUrls.length - 1)){
//         showNextBtn.disabled = true;
//     }
// }

//Вариант 2 : сделать с помощью OOП слайдер

 /*Главное для новичков :когда делаем через ООП, и потом вызываем функцию ,
необходимо в HTML устоновить правильную последовательность подключения скриптов (т.е по приоретету идет сверху вниз)*/
slider1.start();