document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const slidesContainer = document.querySelector('.slides');

  let currentSlide = 0;
  let slideInterval;

  // Функция переключения слайда
  function showSlide(index) {
    // Обработка крайних случаев
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Обновляем индикаторы
    indicators.forEach((indicator, i) => {
      indicator.classList.remove('active');
      if (i === currentSlide) {
        indicator.classList.add('active');
      }
    });
  }

  // Автопрокрутка
  function startAutoSlide() {
    slideInterval = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000); // Смена каждые 5 секунд
  }

  // Остановка автопрокрутки при наведении
  document.querySelector('.slider-container').addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });

  document.querySelector('.slider-container').addEventListener('mouseleave', () => {
    startAutoSlide();
  });

  // Обработчики кнопок
  prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
  nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

  // Обработчики индикаторов
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => showSlide(index));
  });

  // Запуск автопрокрутки
  startAutoSlide();

  // Инициализация первого слайда
  showSlide(0);
});
