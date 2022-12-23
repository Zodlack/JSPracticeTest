
//Объектно Орентированое Программирование(ООП)
// var car1 = {
//     name:"говно"
// };       
// window.alert(car1.name);//Объекты создаются с помощью литерала объекта
// this - это контекст вызова, переменная которая ссылается на ...
var slider1 = {
    imgUrls: [],
    currentImageindex: 0,
    showPrewBtn: document.getElementById('show-prew'),
    showNextBtn: document.getElementById('show-next'),
    slideImg: document.getElementById('slide-img'),
    

    start: function(){
        var that = this;
        this.showPrewBtn.addEventListener('click', function(){
            that.onShowPrewBtn();
        });
        this.showNextBtn.addEventListener('click', function(){
            that.onShowNextBtn();
        });
        this.imgUrls.push('https://images.wallpaperscraft.ru/image/single/mashina_seryj_mokryj_147750_240x320.jpg');
        this.imgUrls.push('https://images.wallpaperscraft.ru/image/single/sportkar_drift_neon_144519_240x320.jpg');
        this.imgUrls.push('https://images.wallpaperscraft.ru/image/single/mashina_sportkar_neon_157154_240x320.jpg');
        this.imgUrls.push('https://images.wallpaperscraft.ru/image/single/porsche_911_carrera_rsr_porsche_sportkar_139640_240x320.jpg');
        this.slideImg.src = this.imgUrls[this.currentImageindex];
        this.showPrewBtn.disabled = true;
    },

    onShowPrewBtn: function (){
        this.currentImageindex--;
        this.slideImg.src = this.imgUrls[this.currentImageindex];
        this.showNextBtn.disabled = false;
    
        if(this.currentImageindex === 0){
            this.showPrewBtn.disabled = true;
        }
    },

    onShowNextBtn: function (){
        this.currentImageindex++;
        this.slideImg.src = this.imgUrls[this.currentImageindex];
        this.showPrewBtn.disabled = false;
    
        if(this.currentImageindex === (this.imgUrls.length - 1)){
            this.showNextBtn.disabled = true;
        }
    },
    
};
 




