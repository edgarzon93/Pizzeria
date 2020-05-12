let menuActual = 'hamburguesas';

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

function show(menu) {
    switch (menu) {
        case 'pizza':
            menuActual = 'pizza'
            document.getElementById('box_pizza1').style.display = 'block';
            document.getElementById('encabezado').src = 'css/Imagenes/Pizza_header.JPG';
            document.getElementById('slider').src = 'css/Imagenes/pizza_c.png';
            break;
        case 'panzeroti':
            menuActual = 'panzeroti'
            var dis = document.getElementById('box_pizza1');
            dis.style.display = 'block';
            var piz = document.getElementById('encabezado');
            piz.src = 'css/Imagenes/Panzeroti_header.JPG';
            piz.style.height = '110px';
            var piz2 = document.getElementById('slider');
            piz2.src = 'css/Imagenes/panzeroti_c.jpg';
            piz2.style.height = '320px';
            break;
    }
}
function show2() {
    menuActual = 'panzeroti'
    var dis = document.getElementById('box_pizza1');
    dis.style.display = 'block';
    var piz = document.getElementById('encabezado');
    piz.src = 'css/Imagenes/Panzeroti_header.JPG';
    piz.style.height = '110px';
    var piz2 = document.getElementById('slider');
    piz2.src = 'css/Imagenes/panzeroti_c.jpg';
    piz2.style.height = '320px';
}
function show3() {
    var dis = document.getElementById('box_pizza1');
    dis.style.display = 'block';
    var piz = document.getElementById('encabezado');
    piz.src = 'css/Imagenes/Lasagna_spaguettis_header.JPG';
    piz.style.height = '130px';
    var piz2 = document.getElementById('slider');
    piz2.src = 'css/Imagenes/lasagna_c.jpg';
    piz2.style.height = '300px';
}


function next1() {

    let array;
    switch (menuActual) {
        case 'pizza':
            array = images1
            break;
        case 'panzeroti':
            array = images2
            break;
    }

    var slider = document.getElementById('slider');
    num++;
    if (num >= array.length) {
        num = 0;
    }
    slider.src = array[num];
}
function prev1() {

    let array;
    switch (menuActual) {
        case 'pizza':
            array = images1
            break;
        case 'panzeroti':
            array = images2
            break;
    }

    var slider = document.getElementById('slider');
    num--;
    if (num < 0) {
        num = array.length - 1;
    }
    slider.src = array[num];
}





