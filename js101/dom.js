//////////////////////////////////////////////////////////////////////////////

//Create and add element
/*
//creo los elementos
var domDiv = document.createElement('div'),
    domUl = document.createElement('ul'),
    domLi = document.createElement('li'),
    domLink = document.createElement('a'),
    domSpan = document.createElement('span');

//busco el contenedor donde voy a agregar los elementos
var cnt = document.querySelector('.cnt');

//agrego los elementos
cnt.appendChild(domDiv);
domDiv.appendChild(domUl);
domUl.appendChild(domLi);

//no puedo agregar el mismo elemento mas de una vez
domUl.appendChild(domLi);

domLi.appendChild(domLink);
//agrego el span y lo guardo en una variable solo como
//ejemplo ya tengo acceso al span por la variable domSpan
var element = domLink.appendChild(domSpan);

//agrego el texto
element.textContent = 'Esto es un link generado por js';
*/

////////////////////////////////////////
/*
//creo el div
var domDiv = document.createElement('div');

//agrego propiedades
domDiv.style.backgroundColor = 'blue';
domDiv.style.border = '1px solid red';
domDiv.style.width = '20px';
domDiv.style.height = '20px';

//agrego atributos
domDiv.setAttribute('data-test', 'value');

//agrego clase y id
domDiv.className = 'miClase';
domDiv.id = 'miId';
//lo agrego al dom
document.querySelector('.cnt').appendChild(domDiv);
console.log(domDiv);
*/
////////////////////////////////////////
/*
var iframe = document.createElement('iframe'),
    arrUrls = ['https://www.youtube.com/embed/YB5cl7J7PUs?t=50s&autoplay=1&start=500', 'https://www.youtube.com/embed/EH3gqI2NAiE?t=50s&autoplay=1&start=500', 'https://www.youtube.com/embed/LaaO4zy0gSQ?t=50s&autoplay=1&start=500', 'https://www.youtube.com/embed/8t1xoSXVOiE?t=50s&autoplay=1&start=500','https://www.youtube.com/embed/_6PThcLXeTs?t=50s&autoplay=1&start=500'],
    prev;


iframe.setAttribute('frameborder', '0');
iframe.setAttribute('allowfullscreen', 'true');
iframe.style.width = '800px';
iframe.style.height = '600px';

function getRand(){
    var rand = Math.floor(arrUrls.length * Math.random());
    if(prev == rand){
        rand = getRand();
    }
    return rand;
}

function changeSrc(){
    var rand = getRand();
    iframe.src = arrUrls[rand];
    prev = rand;
}
changeSrc();
setInterval(changeSrc, 10000);


document.querySelector('.cnt').appendChild(iframe);
*/

////////////////////////////////////////

//eventos
/*
var link = document.createElement('a');
//hago que escuche el evento click
link.addEventListener('click', function(evt){
    console.log('evt');
    console.log(evt);
    console.log('this');
    console.log(this);
});

link.href = '#';
link.textContent = 'click me o haceme click';

document.querySelector('.cnt').appendChild(link);
*/

////////////////////////////////////////

/*
var link = document.createElement('a');

function eventData(evt){
    console.log('evt');
    console.log(evt);
    console.log('this');
    console.log(this);
}

link.addEventListener('click', eventData);
link.href = '#';
link.textContent = 'click me o haceme click';

document.querySelector('.cnt').appendChild(link);
*/

////////////////////////////////////////

/*
var strList = '<nav><ul><li><a class="js-navItem" href="#">Home</a></li><li><a class="js-navItem" href="#">About</a></li><li><a class="js-navItem" href="#">Contacto</a></li></ul></nav>';

document.querySelector('.cnt').innerHTML = strList;

var nodItems = document.querySelectorAll('.js-navItem');

function linkItemClickHandler(evt){
    var activeLi = document.querySelector('.active');

    if(activeLi){
        activeLi.classList.remove('active');
    }

    this.parentNode.classList.add('active');
}

for (var i = nodItems.length - 1; i >= 0; i--) {
    nodItems[i].addEventListener('click', linkItemClickHandler);
}
*/

////////////////////////////////////////

/*
var strList = '<nav><ul><li><a class="js-navItem" href="#">Home</a></li><li><a class="js-navItem" href="#">About</a></li><li><a class="js-navItem" href="#">Contacto</a></li></ul></nav>';

document.querySelector('.cnt').innerHTML = strList;

var ul = document.querySelector('ul');

function linkItemClickHandler(evt){
    console.log('evt');
    console.log(evt);
    console.log('this');
    console.log(this);
    console.log('evt.target');
    console.log(evt.target);

    var activeLi = document.querySelector('.active');

    if(activeLi){
        activeLi.classList.remove('active');
    }

    evt.target.parentNode.classList.add('active');
}

ul.addEventListener('click', linkItemClickHandler);
*/

////////////////////////////////////////

////////////////////////////////////////

/*
var strList = '<nav><ul><li><a class="js-navItem" href="#">Home</a></li><li><a class="js-navItem" href="#">About</a></li><li><a class="js-navItem" href="#">Contacto</a></li></ul></nav>';

document.querySelector('.cnt').innerHTML = strList;

var ul = document.querySelector('ul');

function linkItemClickHandler(evt){
    console.log('evt');
    console.log(evt);
    console.log('this');
    console.log(this);
    console.log('evt.target');
    console.log(evt.target);

    var activeLi = document.querySelector('.active');

    if(activeLi){
        activeLi.classList.remove('active');
    }

    evt.target.parentNode.classList.add('active');
}

document.querySelector('.js-navItem').addEventListener('click', function(evt){
    evt.preventDefault();
    evt.stopPropagation();
});

ul.addEventListener('click', linkItemClickHandler);
*/

////////////////////////////////////////

/*
var evento = new Event('miEvento'),
    elmnt = document.querySelector('.cnt');

evento.foo = 'bar';

elmnt.addEventListener('miEvento', function(evt){
    console.log('evt');
    console.log(evt);

    console.log('this');
    console.log(this);
});

document.addEventListener('click',function(){
    elmnt.dispatchEvent(evento);
});
*/