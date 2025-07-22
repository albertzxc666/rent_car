document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.header__burger');
  const nav = document.querySelector('.header__nav');
  const body = document.body;

  burger.addEventListener('click', function() {
    // Переключаем классы для анимации бургера
    burger.classList.toggle('header__burger--active');
    
    // Переключаем видимость навигации
    nav.classList.toggle('header__nav--active');
    
    // Блокируем скролл при открытом меню
    body.classList.toggle('body--no-scroll');
  });

  // Закрываем меню при клике на ссылку
  const navLinks = document.querySelectorAll('.header__link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      burger.classList.remove('header__burger--active');
      nav.classList.remove('header__nav--active');
      body.classList.remove('body--no-scroll');
    });
  });

  // Закрываем меню при клике вне его
  document.addEventListener('click', function(event) {
    if (!burger.contains(event.target) && !nav.contains(event.target)) {
      burger.classList.remove('header__burger--active');
      nav.classList.remove('header__nav--active');
      body.classList.remove('body--no-scroll');
    }
  });
}); 