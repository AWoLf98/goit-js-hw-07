'use strict';

// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const countItems = document.body.querySelectorAll('#categories > li.item');

console.log('Number of categories: ' + countItems.length);

countItems.forEach(el =>
  console.log(
    `Category: ${el.querySelector('h2').textContent}\nElements: ${el.querySelectorAll('li').length}`
  )
);
