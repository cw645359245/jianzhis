var city=document.querySelector('.city');
var cityBox=document.querySelector('.city-box');
var mask=cityBox.querySelector('.mask');


city.addEventListener('touchstart',function(){
    cityBox.style.transform='translateX(0)';
})

mask.addEventListener('touchstart',function(){

    cityBox.style.transform='translateX(-100%)';

})