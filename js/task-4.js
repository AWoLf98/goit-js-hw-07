'use strict';

// Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


// так як завдання одиничне не використовую окрему змінну
document.body.querySelector('form.login-form').addEventListener('submit', event => {
  event.preventDefault();
  const currEven = event.currentTarget;

  const email = currEven.elements['email'];
  const pass = currEven.elements['password'];

  const emailVal = email.value.trim();
  const passVal = pass.value.trim();
  if (emailVal === '' || passVal === '') {
    alert('All form fields must be filled in');
  } else {
    //вирішив спробувати обчислювані властивості
    console.log({
      [email.getAttribute('name')]: emailVal,
      [pass.getAttribute('name')]: passVal,
    });
    currEven.reset();
  }
});