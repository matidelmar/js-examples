/*****************
La biblia de js: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
*****************/

//comentaio en linea

/*
    comentario de bloque
    comentario de bloque
    comentario de bloque
*/

//funciones:

/*
console.log(mifuncion());
console.log(miFuncion());
console.log(MiFuncion());
*/

/*
function mifuncion(){
    return 'Se ejecuto mifuncion';
}

function miFuncion(){
    return 'Se ejecuto miFuncion';
}

var MiFuncion = function(){
    return 'Se ejecuto MiFuncion';
}

console.log(mifuncion());
console.log(miFuncion());
console.log(MiFuncion());

console.log(mifuncion.name);
console.log(miFuncion.name);
console.log(MiFuncion.name);
*/




//////////////////////////////////////////////////////////////////////////////

// Varialble scope

/*
var name = 'foo';

function scope() {
    var name = 'bar';
    var name2 = 'goo';
    return name
}

console.log('scope():');
console.log(scope());
console.log('name:');
console.log(name);
console.log('name2');
console.log(name2);
*/


//////////////////////////////////////////////////////////////////////////////

/*
if(true){
    var foo = 'bar'
}

console.log(foo);
*/

//////////////////////////////////////////////////////////////////////////////

// Tipo de datos

// integer
/*

var foo = 5;
console.log(foo);

// float
var foo = 3.14;
console.log(foo);


// otros
var foo = 10 / 0;
var bar = -10 / 0;
var goo = Math.sqrt(-1);

console.log(foo);
console.log(bar);
console.log(goo);

//Strings

var foo = '';
var bar = 'comillas en "string"';
var goo = 'asdf \n' + 'asdfa';

console.log(foo);
console.log(bar);
console.log(goo);

*/

//////////////////////////////////////////////////////////////////////////////

//Booleanos
/*
var arrTypes = [1, 0, 5, -1,'', 'String', [], {}, null, undefined];

for (var i = arrTypes.length - 1; i >= 0; i--) {

    var foo = arrTypes[i];

    if(foo){
        foo = foo + ' es evaluado como ' + true;
    }else{
        foo = foo + ' es evaluado como ' + false;
    }
    console.log(foo);
}
*/

//////////////////////////////////////////////////////////////////////////////

// //Array
//Hay otras formas de definir un array pero esta es la mas clara, mas usada.

/*
var foo = [];
var bar = ['algo', 1, undefined, ''];
var cer = ['banana', , 'pera', 'sandia'];
var goo = ['banana', 'manzana', 'pera', 'sandia'];


console.log('foo');
console.log(foo);
console.log('bar');
console.log(bar);
console.log('goo');
console.log(goo);

console.log('foo.length');
console.log(foo.length);
console.log('bar.length');
console.log(bar.length);
console.log('goo.length');
console.log(goo.length);
*/

/*
console.log('goo');
console.log(goo);
console.log('goo[1]');
console.log(goo[1]);
console.log('goo[goo.length]');
console.log(goo[goo.length]);
console.log('goo[goo.length - 1]');
console.log(goo[goo.length - 1]);

goo[0] = 'platano';
console.log("goo[0] = 'platano';");
console.log(goo);

goo.push('kiwi')
console.log("goo.push('kiwi')");
console.log(goo);

goo.shift()
console.log("goo.shift()");
console.log(goo);

goo.unshift('tomate')
console.log("goo.unshift(tomate)");
console.log(goo);

goo.splice(1,1);
console.log("goo.splice(1,1)");
console.log(goo);

goo.splice(1,2);
console.log("goo.splice(1,2)");
console.log(goo);

goo.splice(1,1, 'banana');
console.log("goo.splice(1,1,banana)");
console.log(goo);

*/

//////////////////////////////////////////////////////////////////////////////

//Operators

/*
var foo;
foo = 2 + 3;
console.log('foo = 2 + 3;');
console.log(foo);

foo = 2 - 3;
console.log('foo = 2 - 3;');
console.log(foo);

foo = -foo;
console.log('foo = -foo;');
console.log(foo);
*/


////////////////////////////////////////
/*
var foo = 2;
var bar;

console.log('foo');
console.log(foo);
console.log('bar');
console.log(bar);

bar = ++foo;
console.log('bar = ++foo;');
console.log('foo:');
console.log(foo);
console.log('bar:');
console.log(bar);

foo = 2;//reset
console.log('var foo = 2;')

bar = foo++;
console.log('bar = foo++;');
console.log('foo:');
console.log(foo);
console.log('bar:');
console.log(bar);

foo = 2;//reset
console.log('var foo = 2;')

bar = --foo;
console.log('bar = --foo;');
console.log('foo:');
console.log(foo);
console.log('bar:');
console.log(bar);

foo = 2;//reset
console.log('var foo = 2;')

bar = foo--;
console.log('bar = foo--;');
console.log('foo:');
console.log(foo);
console.log('bar:');
console.log(bar);
*/



////////////////////////////////////////


/*
var foo = 8;
var bar = 4;

console.log('foo');
console.log(foo);
console.log('bar');
console.log(bar);

console.log('foo * bar');
console.log(foo * bar);
console.log('foo / bar');
console.log(foo / bar);
console.log('foo % bar');
console.log(foo % bar);
*/


//////////////////////////////////////////////////////////////////////////////

/*
//comparison
console.log("2 == 2");
console.log(2 == 2);
console.log("2 === 2");
console.log(2 === 2);
console.log("'2' == 2");
console.log('2' == 2);
console.log("'2' === 2");
console.log('2' === 2);
console.log("2 < 2");
console.log(2 < 2);
console.log("2 > 2");
console.log(2 > 2);
console.log("2 <= 2");
console.log(2 <= 2);
console.log("2 >= 2");
console.log(2 >= 2);
console.log("'a' < 'b'");
console.log('a' < 'b');
console.log("'a' > 'b'");
console.log('a' > 'b');
*/

////////////////////////////////////////

/*
console.log('true && false');
console.log(true && false);
console.log('true || false');
console.log(true || false);
console.log('!true');
console.log(!true);
*/

//////////////////////////////////////////////////////////////////////////////

//type conversion

// to Number
/*
console.log('Number("10");');
console.log(Number("10"));
console.log('Number(false);');
console.log(Number(false));
console.log('parseInt("10", 10);'); //el segundo parametro es la base (radix) ej: binario, decimal etc
console.log(parseInt("10", 10));
console.log('parseInt(10.2);');
console.log(parseInt(10.2));
console.log('parseFloat("10.2");');
console.log(parseFloat("10.2"));

// to String
console.log('String(false);');
console.log(String(false));
console.log('String(10);');
console.log(String(10));
console.log('String(10.2);');
console.log(String(10.2));
console.log('(10).toString();');
console.log((10).toString());

// to Boolean
console.log('Boolean(10);')
console.log(Boolean(10));
console.log('Boolean(0);')
console.log(Boolean(0));
console.log('Boolean(0.3);')
console.log(Boolean(0.3));
console.log('Boolean("true");')
console.log(Boolean("true"));

*/
//////////////////////////////////////////////////////////////////////////////
