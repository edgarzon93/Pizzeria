var images1 = [
    'css/Imagenes/Pizzas1.JPG','css/Imagenes/Pizzas2.JPG','css/Imagenes/Pizzas3.JPG','css/Imagenes/Pizzas4.JPG'];
var images2 = [
    'css/Imagenes/Panzeroti1.JPG','css/Imagenes/Panzeroti2.JPG'];
var images3 =[
    'css/Imagenes/Lasagna_spaguettis.JPG'];
var images4 = [
    'css/Imagenes/Menu_infantil.JPG'];
var images5 =[
    'css/Imagenes/hamb1.JPG','css/Imagenes/hamb2.JPG'];
var images6 =[
    'css/Imagenes/perros1.JPG'];
var images7 =[
    'css/Imagenes/sandwich1.JPG'];
var images8 =[
    'css/Imagenes/shawarma1.JPG'];
var images9 =[
        'css/Imagenes/deliciasRapidas1.JPG'];
var images10 =[
        'css/Imagenes/papasLocas1.JPG'];
var images11 =[
        'css/Imagenes/mazorcadas1.JPG'];
var images12 =[
        'css/Imagenes/bebidas1.JPG'];
var images13 =[
        'css/Imagenes/adicionales1.JPG'];
    
        

var num = 0;

function show(menu) {
    switch (menu) {
        case 'pizza':
            menuActual = 'pizza'
            document.getElementById('box_pizza1').style.display = 'block';
            document.getElementById('encabezado').src = 'css/Imagenes/Pizza_header.JPG';
            document.getElementById('slider').src = 'css/Imagenes/pizza_c.png';
            document.getElementById('encabezado').style.height = '70px';
            document.getElementById('slider').style.height = '340px';
            break;
        case 'panzeroti':
            menuActual = 'panzeroti'
            document.getElementById('box_pizza1').style.display = 'block';
            document.getElementById('encabezado').src = 'css/Imagenes/Panzeroti_header.JPG';
            document.getElementById('encabezado').style.height = '100px';
            document.getElementById('slider').src = 'css/Imagenes/panzeroti_c.jpg';
            document.getElementById('slider').style.height = '310px';
            break;
        case 'lasaganaEspaguetti':
            menuActual = 'lasaganaEspaguetti'
            document.getElementById('box_pizza1').style.display = 'block';
            document.getElementById('encabezado').src = 'css/Imagenes/Lasagna_spaguettis_header.JPG';
            document.getElementById('encabezado').style.height = '140px';
            document.getElementById('slider').src = 'css/Imagenes/lasagna_c.jpg';
            document.getElementById('slider').style.height = '270px';
            break;
        case 'menuInfantil':
            menuActual = 'menuInfantil'
            document.getElementById('box_pizza1').style.display = 'block';
            document.getElementById('encabezado').src = 'css/Imagenes/Menu_infantil.JPG';
            document.getElementById('encabezado').style.height = '400px';
            document.getElementById('slider').src = '';
            document.getElementById('slider').style.height = '0px';
            break;
        case 'hamburguesas':
            menuActual = 'hamburguesas'
            document.getElementById('box_pizza1').style.display = 'block';
            document.getElementById('encabezado').src = 'css/Imagenes/hamb_header.JPG';
            document.getElementById('encabezado').style.height = '120px';
            document.getElementById('slider').src = 'css/Imagenes/hamb_c.jpg';
            document.getElementById('slider').style.height = '290px';
            break;
        case 'perros':
            menuActual = 'perros'
            document.getElementById('box_pizza1').style.display = 'block';
            document.getElementById('encabezado').src = 'css/Imagenes/perros_header.JPG';
            document.getElementById('encabezado').style.height = '120px';
            document.getElementById('slider').src = 'css/Imagenes/perros_c.jpg';
            document.getElementById('slider').style.height = '290px';
            break;
        case 'sandwich':
            menuActual = 'sandwich'
            document.getElementById('box_pizza1').style.display = 'block';
            document.getElementById('encabezado').src = 'css/Imagenes/sandwich_header.JPG';
            document.getElementById('encabezado').style.height = '100px';
            document.getElementById('slider').src = 'css/Imagenes/sandwich_c';
            document.getElementById('slider').style.height = '310px';
            break;
        case 'shawarma':
            menuActual = 'shawarma'
            document.getElementById('box_pizza1').style.display = 'block';
            document.getElementById('encabezado').src = 'css/Imagenes/shawarma_header.JPG';
            document.getElementById('encabezado').style.height = '140px';
            document.getElementById('slider').src = 'css/Imagenes/shawarma_c.jpg';
            document.getElementById('slider').style.height = '270px';
            break;
        case 'deliciasRapidas':
            menuActual = 'deliciasRapidas'
            document.getElementById('box_pizza1').style.display = 'block';
            document.getElementById('encabezado').src = 'css/Imagenes/deliciasRapidas_header.JPG';
            document.getElementById('encabezado').style.height = '140px';
            document.getElementById('slider').src = 'css/Imagenes/deliciasRapidas_c.jpg';
            document.getElementById('slider').style.height = '270px';
            break;
        case 'papasLocas':
            menuActual = 'papasLocas'
            document.getElementById('box_pizza1').style.display = 'block';
            document.getElementById('encabezado').src = 'css/Imagenes/papasLocas_header.JPG';
            document.getElementById('encabezado').style.height = '130px';
            document.getElementById('slider').src = 'css/Imagenes/papasLocas_c.jpg';
            document.getElementById('slider').style.height = '280px';
            break;
        case 'mazorcadas':
            menuActual = 'mazorcadas'
            document.getElementById('box_pizza1').style.display = 'block';
            document.getElementById('encabezado').src = 'css/Imagenes/mazorcadas_header.JPG';
            document.getElementById('encabezado').style.height = '110px';
            document.getElementById('slider').src = 'css/Imagenes/mazorcadas_c.jpg';
            document.getElementById('slider').style.height = '300px';
            break;
        case 'bebidas':
            menuActual = 'bebidas'
            document.getElementById('box_pizza1').style.display = 'block';
            document.getElementById('encabezado').src = 'css/Imagenes/bebidas_header.JPG';
            document.getElementById('encabezado').style.height = '100px';
            document.getElementById('slider').src = 'css/Imagenes/bebidas_c.jpg';
            document.getElementById('slider').style.height = '310px';
            break;
        case 'adicionales':
            menuActual = 'adicionales'
            document.getElementById('box_pizza1').style.display = 'block';
            document.getElementById('encabezado').src = 'css/Imagenes/adicionales_header.JPG';
            document.getElementById('encabezado').style.height = '100px';
            document.getElementById('slider').src = 'css/Imagenes/adicionales_c.jpg';
            document.getElementById('slider').style.height = '310px';
            break;
      
    }

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
        case 'lasaganaEspaguetti':
            array = images3
            break;
        case 'menuInfantil':
            array = images4
            break;
        case 'hamburguesas':
            array = images5
            break;
        case 'perros':
            array = images6
            break;
        case 'sandwich':
            array = images7
            break;
        case 'shawarma':
            array = images8
            break;
        case 'deliciasRapidas':
            array = images9
            break;
        case 'papasLocas':
            array = images10
            break;
        case 'mazorcadas':
            array = images11
            break;
        case 'bebidas':
            array = images12
            break;
        case 'adicionales':
            array = images13
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





