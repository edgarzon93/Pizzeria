function show(){
    var dis = document.getElementById('box_pizza1');
    dis.style.display = 'block';
    var piz = document.getElementById('encabezado');
    piz.src = 'css/Imagenes/Pizza_header.JPG';
    var piz2 = document.getElementById('slider');
    piz2.src = 'css/Imagenes/pizza_c.png'; 
}
function show2(){
    var dis = document.getElementById('box_pizza1');
    dis.style.display = 'block';
    var piz = document.getElementById('encabezado');
    piz.src = 'css/Imagenes/Panzeroti_header.JPG';
    piz.style.height = '110px';
    var piz2 = document.getElementById('slider');
    piz2.src = 'css/Imagenes/panzeroti_c.jpg'; 
    piz2.style.height = '320px';    
}
function show3(){
    var dis = document.getElementById('box_pizza1');
    dis.style.display = 'block';
    var piz = document.getElementById('encabezado');
    piz.src = 'css/Imagenes/Lasagna_spaguettis_header.JPG';
    piz.style.height = '130px';
    var piz2 = document.getElementById('slider');
    piz2.src = 'css/Imagenes/lasagna_c.jpg'; 
    piz2.style.height = '300px';    
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
    
    var slider = document.getElementById('slider');
    num++;
    if(num >= images1.length) {
        num = 0;
    }
    slider.src = images1[num];
}
function prev1() {
    var slider = document.getElementById('slider');
    num--;
    if(num < 0) {
        num = images1.length-1;
    }
    slider.src = images1[num];
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
 
 
  
