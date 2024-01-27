'use strict';

// Напиши скрипт створення й очищення колекції елементів з наступним функціоналм.
// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.
// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.
// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру. Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.
// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.
// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonCreate = document.body.querySelector('#controls > button[data-create]');
const buttonDestroy = document.body.querySelector('#controls > button[data-destroy]');

// events
buttonCreate.addEventListener('click', function () {
  const inputNumber = document.body.querySelector('#controls > input[type="number"]');
  //
  if (inputNumber.value >= 1 && inputNumber.value <= 100) {
    createBoxes(inputNumber.value);
  } else {
    alert('Bad number! min="1" max="100" step="1"');
  }
  inputNumber.value = '';
});

buttonDestroy.addEventListener('click', destroyBoxes);

//handlers
function createBoxes(amount) {
  //якщо цю функцію прибрати то квадрати будуть надбудовуватись, а не стиратись і малюватись заново.
  destroyBoxes();
  const boxes = document.getElementById('boxes');
  let boxElements = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    let last = 30;

    // 0) реалізовував з розрахунком що destroyBoxes() можна прибрати;
    // 1) реалізував для кожно елементу чрз значення ширини попереднього елементу
    // 2) також можна визначати ширину дочірнього ел перед циклом, а нові обраховувати математично, але так як lastElementChild це властивість не бачу принципової різниці в цих підходах
    if (boxes.lastElementChild !== null) {
      const tempWidth = boxes.lastElementChild.style.width;
      last = 10 + parseInt(tempWidth.slice(0, tempWidth.length - 2));
    }

    box.style.width = box.style.height = `${10 * i + last}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxElements.push(box);
  }
  boxes.append(...boxElements);
}

function destroyBoxes() {
  document.querySelectorAll('div#boxes > div').forEach(el => el.remove());
}