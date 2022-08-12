'use script' ;
// Метод getElementById позволяет получить элемент страницы по его атрибуту id.
//  С полученным элементом можно будет производить различные манипуляции:
//   менять его текст, атрибуты, CSS стили и так далее.
// Синтаксис
// document.getElementById(ай ди элемента)

// Метод getElementsByTagName позволяет получить элементы страницы по имени тега. 
// С полученными элементами можно производить различные манипуляции: менять их текст, 
// атрибуты, CSS стили и так далее.
// Синтаксис
// document.getElementsByTagName(имя тега);

//  Метод getElementsByClassName позволяет получить элементы страницы по их классу,
//  заданному в атрибуте class. С полученными элементами можно будет производить различные 
//  манипуляции: менять их текст, атрибуты, CSS стили и так далее.
// Синтаксис
// document.getElementsByClassName(имя класса)

// Дан элемент #elem:
// <div id="elem"></div>

// Получите этот элемент с помощью метода getElementById и установите ему какой-нибудь текст. 
// let div = document.getElementById('elem') ;
// div.textContent= 'HELO MY FRIEND'


//  Дан список:
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>

// Получите все теги li по имени тега и сделайте их текст красного цвета. 
// let objLi = document.getElementsByTagName('li') ;
// console.log(objLi);
// for ( let elemLi in objLi )
// {
// objLi[elemLi].classList.toggle('color');
// }

// Даны элементы:
// <p class="www">elem 1</p>
// <p class="www">elem 2</p>
// <p class="www">elem 3</p>

// Получите эти элементы по имени класса и сделайте их текст красного цвета. 

// let objCn = document.getElementsByClassName('www');
// console.log(objCn);
// for ( let elemLi in objCn )
// {
// objCn[elemLi].classList.toggle('color');
// }


// Дан элемент #parent:
// <div id="parent">
// 	<p class="www">text</p>
// 	<p class="www">text</p>
// 	<p class="www">text</p>
// 	<p class="ggg">text</p>
// 	<p class="ggg">text</p>
// 	<p class="ggg">text</p>
// </div>
// let parent = document.querySelector('#parent');

// Найдите внутри родителя элементы с классом www и запишите 
// их в переменную elems1. Затем найдите внутри родителя элементы 
// с классом ggg и запишите их в переменную elems2. 
// let elems1 =[] ;
// let elems2 =[] ;
// let parent = document.querySelector('#parent');
// let objChild = parent.children ;
// for ( let beby in objChild)
// {
//     if ( objChild[beby].className === 'www'){
//         elems1.push(objChild[beby]);
//     }
//     else if ( objChild[beby].className === 'ggg' )
//     {
//         elems2.push(objChild[beby]);
//     }
// }
//  console.log(elems1);
//  console.log(elems2);