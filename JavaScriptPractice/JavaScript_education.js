var goButton = document.getElementById('make-changes');
goButton.onclick = function () {
    // тому что слева, мы присваиваем то, что что справа 
    var firstNameId = 'first-name';
    // = это оператор присваивания ... то есть то что слева (переменная), ей присваивается значение справа. 
    var firstNameEl = document.getElementById(firstNameId);

    // а можно не создавать отдельную переменную для id и сразу передавать значение id в метод getElementById
    var lastNameEl = document.getElementById('last-name');
    var addressEl = document.getElementById('address')
    var citiesEl = document.getElementById('cities')
    var hobbiesEl = document.getElementById('hobbies');
    var avatarWrapperEl = document.getElementById('avatar-wrapper');
    var avatarEl = document.getElementById('avatar');
    var makeChangesEl = document.getElementById("make-changes");
    // то это значит, что firstNameEl.value приобретёт новое значение 'Andrey'  
    firstNameEl.value = 'Andrey';
    lastNameEl.value = "Уебок";
    addressEl.value = "Залупа";
    citiesEl.value = "Minsk";
    avatarEl.src = "https://cdn.sstatic.net/Sites/stackoverflow/img/captcha.svg";
    makeChangesEl.className = "style";
    // avatarWrapperEl.innerHTML = "Люблю трахаться в пизду";
    // avatarWrapperEl.innerHTML = "<ul id='sex'><li>js</li><li>html</li><li>css</li></ul>";
}


var firstNameEl = document.getElementById('first-name');
var lastNameEl = document.getElementById('last-name');
var addressEl = document.getElementById('address');
var citiesEl = document.getElementById('cities');

firstNameEl.value = 'andrey';
lastNameEl.value = 'Уебок';
addressEl.value = 'Залупа';
citiesEl.value = 'Kiev';
// alertValue();
alertValueAndClass(lastNameEl);

// function alertValue() {
//     console.log(firstNameEl.value);
//     console.log(lastNameEl.value); 
//     console.log(addressEl.value);
//     console.log(citiesEl.value);    
// };

function alertValueAndClass(parametrElement){
    console.log(parametrElement.value);
    console.log(parametrElement.className);
}
/*Один момент очень важдный ! 
Если название функции "alertValue" поставить после каждого внесения изменения значения(value) обЪекта ,то
будут вызываться все значения попорядку этих объеков с учетом новых изменений */ 
/*В дополнении к сказанному! Если название функции поставить после последнего изменения значения(value) объекта ,то
вызываться будут только новые присвоенные значения(value)  данных объектов*/ 
/*Не важно , где будет находится данная функция , как показал данный пример (в конце или в самом начале)*/ 


