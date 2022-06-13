console.log(" 1. Вёрстка валидная +10 \n 2. Вёрстка семантическая +18 \n 3. Вёрстка соответствует макету +48 \n 4. Требования к css + 12 \n 5. Интерактивность, реализуемая через css +20 \n ");

// ПРОСТОЙ СПОСОБ
// const portfolioBtn = document.querySelector('.winter');
// const portfolioImage = document.querySelector('.first');

// portfolioBtn.addEventListener('click', () => {
//   portfolioImage.src = "./assets/img/winter/1.jpg";
// });

// const portfolioBtnSec = document.querySelector('.winter');
// const portfolioImageSec = document.querySelector('.second');

// portfolioBtnSec.addEventListener('click', () => {
//   portfolioImageSec.src = "./assets/img/winter/2.jpg";
// });

// const portfolioBtnThi = document.querySelector('.winter');
// const portfolioImageThi = document.querySelector('.third');

// portfolioBtnThi.addEventListener('click', () => {
//   portfolioImageThi.src = "./assets/img/winter/3.jpg";
// });

// const portfolioBtnFou = document.querySelector('.winter');
// const portfolioImageFou = document.querySelector('.fourth');

// portfolioBtnFou.addEventListener('click', () => {
//   portfolioImageFou.src = "./assets/img/winter/4.jpg";
// });

// const portfolioBtnFif = document.querySelector('.winter');
// const portfolioImageFif = document.querySelector('.fifth');

// portfolioBtnFif.addEventListener('click', () => {
//   portfolioImageFif.src = "./assets/img/winter/5.jpg";
// });

// const portfolioBtnSix = document.querySelector('.winter');
// const portfolioImageSix = document.querySelector('.sixth');

// portfolioBtnSix.addEventListener('click', () => {
//   portfolioImageSix.src = "./assets/img/winter/6.jpg";
// });
// ПРОСТОЙ СПОСОБ

const portfolioBtn = document.querySelector('.winter');
const portfolioImages = document.querySelectorAll('.portfolio-img');
portfolioBtn.addEventListener('click', () => {
    portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
});

const portfolioBtnSpring = document.querySelector('.spring');
const portfolioImagesSpring = document.querySelectorAll('.portfolio-img');
portfolioBtnSpring.addEventListener('click', () => {
    portfolioImagesSpring.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
});

const portfolioBtnSummer = document.querySelector('.summer');
const portfolioImagesSummer = document.querySelectorAll('.portfolio-img');
portfolioBtnSummer.addEventListener('click', () => {
    portfolioImagesSummer.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
});

const portfolioBtnAutumn = document.querySelector('.autumn');
const portfolioImagesAutumn = document.querySelectorAll('.portfolio-img');
portfolioBtnAutumn.addEventListener('click', () => {
    portfolioImagesAutumn.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
});


console.log("Ваша отметка - 20 балла(ов) \n Отзыв по пунктам ТЗ: \n Не выполненные/не засчитанные пункты: \n 1) кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными \n 2) при клике по надписи ru англоязычная страница переводится на русский язык \n 3) при клике по надписи en русскоязычная страница переводится на английский язык \n 4) надписи en или ru, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем \n 5) тёмная тема приложения сменяется светлой \n 6) светлая тема приложения сменяется тёмной \n 7) после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) \n 8) выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы \n 9) сложные эффекты для кнопок при наведении и/или клике \n Все оставшиеся пункты выполнены и не имеют комментариев проверяющего. ");

function sign(x) {
  x.classList.toggle("change");
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
const nav = document.querySelector('.nav-list');
function toggleMenu() {
  nav.classList.toggle('show');
}
nav.addEventListener('click', toggleMenu);

console.log('Ваша отметка - 57 балла(ов) \n Отзыв по пунктам ТЗ: \n Частично выполненные пункты: \n 1) блок header — 3 балл(а) \n 2) секция hero — 3 балл(а) \n 3) секция skills — 3 балл(а) \n 4) секция portfolio — 3 балл(а) \n 5) секция video — 3 балл(а) \n 6) секция price — 3 балл(а) \n 7) секция contacts — 3 балл(а) \n 8) блок footer — 3 балл(а) \n 9) при нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку — 2 балл(а) \n 10) при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку — 2 балл(а) \n Все оставшиеся пункты выполнены и не имеют комментариев проверяющего.');

