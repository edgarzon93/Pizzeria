function show(){
    var piz = document.getElementById('box_pizza1');
    var panz = document.getElementById('box_pizza2');
    panz.style.display = 'none'; 
    piz.style.display = 'block';  
   }
function show2(){
    var panz = document.getElementById('box_pizza2');
    var piz=document.getElementById('box_pizza1')
    panz.style.display = 'block'; 
    piz.style.display = 'none'; 
 }

var images1 = [
    'css/Imagenes/Pizzas1.JPG',
    'css/Imagenes/Pizzas2.JPG',
    'css/Imagenes/Pizzas3.JPG',
    'css/Imagenes/Pizzas4.JPG'
];
var images2 = [
    'css/Imagenes/Panzeroti1.JPG',
    'css/Imagenes/Panzeroti2.JPG'    
];
var num = 0;
function next1() {  
    var slider1 = document.getElementById('slider1');
    num++;
    if(num >= images1.length) {
        num = 0;
    }
    slider1.src = images1[num];
}
function prev1() {
    var slider1 = document.getElementById('slider1');
    num--;
    if(num < 0) {
        num = images1.length-1;
    }
    slider1.src = images1[num];
}
function next2() {  
    var slider2 = document.getElementById('slider2');
    num++;
    if(num >= images2.length) {
        num = 0;
    }
    slider2.src = images2[num];
}
function prev2() {
    var slider2 = document.getElementById('slider2');
    num--;
    if(num < 0) {
        num = images2.length-1;
    }
    slider2.src = images2[num];
}

 
  
