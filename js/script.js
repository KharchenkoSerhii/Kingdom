'use ctrict';
// !===========================================================================================
// функция ibg=======================================================
// function ibg() {

// 	let ibg = document.querySelectorAll(".ibg");
// 	for (var i = 0; i < ibg.length; i++) {
// 		if (ibg[i].querySelector('img')) {
// 			ibg[i].style.backgroundImage =
// 				'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
// 		}
// 	}
// }

// ibg();
// функция ibg=======================================================
// !===========================================================================================


// !===========================================================================================
// !burger============================================================
let burger = document.querySelector(".burger-menu");
let menuBody = document.querySelector(".menu__body");

let logoHeader = document.querySelector(".logo-header");

burger.addEventListener('click', function (event){
	burger.classList.toggle("menu-open");
	menuBody.classList.toggle("menu-open");
	logoHeader.classList.toggle("menu-open");
});
// !burger============================================================
// !===========================================================================================


// !===========================================================================================
// !добавление класса header-у при скроле
// ==================================================================
document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('.header');
  var headerHeight = header.offsetHeight;

  window.addEventListener('scroll', function() {
    var scroll = window.scrollY || window.pageYOffset;

    if (scroll >= headerHeight) {
      header.classList.add('headerScroll');
    } else {
      header.classList.remove('headerScroll');
    }
  });
});
// ===================================================================
// !добавление класса header-у при скроле
// !===========================================================================================


// !===========================================================================================
// !якоря - Плавная прокрутка
// ===================================================================
// статическое определение высоты HEADER-а

// const anchors = document.querySelectorAll('a[href*="#"]');
// const headerHeight = document.querySelector('.header').offsetHeight;
// // console.log(anchors);
// for (let anchor of anchors) {
// 	anchor.addEventListener("click", function (event) {
// 		event.preventDefault();
// 		const blockID = anchor.getAttribute('href');
// 		const targetBlock = document.querySelector(blockID);

// 		if (targetBlock) {
// 			const offsetTop = targetBlock.offsetTop - headerHeight;

// 			window.scrollTo({
// 				top: offsetTop,
// 				behavior: "smooth"
// 			});
// 		}
// 	});
// }
// ===================================================================
// динамическое определение высоты HEADER-а

document.addEventListener('DOMContentLoaded', function() {
  var header = document.querySelector('.header');
  var initialHeaderHeight = header.offsetHeight;

  // Добавляем обработчик события scroll на окно
  window.addEventListener('scroll', function() {
    var scroll = window.scrollY || window.pageYOffset;

    if (scroll >= initialHeaderHeight) {
      header.classList.add('headerScroll');
    } else {
      header.classList.remove('headerScroll');
    }
  });

  // Обработка якорных ссылок
  const anchors = document.querySelectorAll('a[href*="#"]');
  for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
      event.preventDefault();
      const blockID = anchor.getAttribute('href');
      const targetBlock = document.querySelector(blockID);

      if (targetBlock) {
        // Получаем актуальную высоту шапки в момент клика
        const currentHeaderHeight = header.offsetHeight;

        const offsetTop = targetBlock.offsetTop - currentHeaderHeight;

					// когда burger имеет класс (menu-open) при нажатии на якорь бургер теряет доп. классы и закрывается
			if (burger.classList.contains("menu-open")) {
					burger.classList.remove("menu-open");
				menuBody.classList.remove("menu-open");
				logoHeader.classList.remove("menu-open");
				// document.body.classList.remove("lock"); // класс для запрета скролла страницы
			}  
		  
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        });
      }
    });
  }
});
// ===================================================================

//  Этот код обрабатывает событие прокрутки страницы и устанавливает активный класс
// для ссылки в навигации(.header nav a), соответствующей текущему разделу на странице.

// window.addEventListener('scroll', function () {
// 	let sections = document.querySelectorAll('section[id]');
// 	let scrollPosition = window.scrollY;

// 	sections.forEach(function (section) {
// 		let id = section.getAttribute('id');
// 		let sectionTop = section.offsetTop - headerHeight - 1;

// 		if (sectionTop < scrollPosition) {
// 			let navLink = document.querySelector('.header nav a[href="#' + id + '"]');
// 			if (navLink) {
// 				// Remove 'active' class from all links in .header
// 				document.querySelectorAll('.header a').forEach(function (link) {
// 					link.classList.remove('active');
// 				});

// 				// Add 'active' class to the current link
// 				navLink.classList.add('active');
// 			}
// 		}
// 	});
// });
// ==================================================================
// !якоря - Плавная прокрутка
// !===========================================================================================


// !===========================================================================================
// !Слайдер ----  slider-swiper
// ==================================================================

// Name - hero__slider===============================================
const heroSlider = new Swiper('.hero__slider', {
	speed: 500,
	loop: true,
	// loopedSlides: 10,
	// loopAdditionalSlides: 10,
	slidesPerView: 1,
	centeredSlides: true,
	centeredSlides: false, // Отключить центрирование активного слайда
	initialSlide: 0, // Начальный слайд
  	// spaceBetween: 10, // Расстояние между слайдами (можно изменить по желанию)
  	// slideToClickedSlide: true, // Переключение на кликнутый слайд
  	// watchSlidesVisibility: true, // Следить за видимостью слайдов
	// slidesPerView: "auto",
			
	
	effect: 'cube',	
	cubeEffect: {
		SlideShadows: true,
		shadow: false,
		shadowOffset: 20,
		shadowScale: 0.9,
	},

		
	// navigation: {
	// 	nextEl: '.reviews__button-next',
	// 	prevEl: '.reviews__button-prev',
	// },

	navigation: {
		nextEl: '.controll-hero__button-next',
		prevEl: '.controll-hero__button-prev',
	},

	// pagination: {
	// 	el: '.hero-slider__pagination',
	// 	type: 'bullets',
	// 	clickable: true,
	// },
	// loop: true,
	// autoHeight: true,
});
// ==================================================================

// Name - hero__slider-mini==========================================
const heroSliderMini = new Swiper('.hero__slider-mini', {
	speed: 500,
	loop: true,
	// loopedSlides: 10,
	// loopAdditionalSlides: 10,
	slidesPerView: 1,
	// slideToClickedSlide: true,
	centeredSlides: true,
	centeredSlides: false, // Отключить центрирование активного слайда
	initialSlide: 0, // Начальный слайд
	allowTouchMove: false,
	// navigation: {
	// 	nextEl: '.controll-hero__button-next',
	// 	prevEl: '.controll-hero__button-prev',
	// },
});
// ==================================================================

// Соединение слайдеров hero__slider + hero__slider-mini через control
heroSlider.controller.control = heroSliderMini;
// heroSliderMini.controller.control = heroSlider;
// =================================================================

// Name - reviews__swiper===========================================
const reviewsSlider = new Swiper('.reviews__swiper', {
	speed: 500,
	loop: true,
	slidesPerView: 1,
	centeredSlides: true,
	centeredSlides: false, // Отключить центрирование активного слайда
	initialSlide: 0, // Начальный слайд
	autoHeight: true,

	navigation: {
		nextEl: '.reviews__arrow-next',
		prevEl: '.reviews__arrow-prev',
	},

});
// ==================================================================

// ==================================================================
// !Слайдер ----  slider-swiper
// !===========================================================================================


// !===========================================================================================
//! Валидация INPUT-a=================================================

const input = document.querySelector('.input'); 

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}

function onInput() {
    if (isEmailValid(input.value)) {
        input.style.borderColor = 'green';
    } else {
        input.style.borderColor = 'red';
    }
}

input.addEventListener('input', onInput);

//! Валидация INPUT-a=================================================
// !===========================================================================================





// !===========================================================================================
//! изменение поведение текста placeholder в <input>==========
    // document.addEventListener('DOMContentLoaded', function () {
    //     const inputField = document.getElementById('emailInput');

    //     // Добавляем обработчик события фокусировки
    //     inputField.addEventListener('focus', function () {
    //         inputField.removeAttribute('placeholder'); // Удаляем placeholder
    //     });

    //     // Добавляем обработчик события потери фокуса
    //     inputField.addEventListener('blur', function () {
    //         inputField.setAttribute('placeholder', 'Enter email address'); // Восстанавливаем placeholder
    //     });
	// });
//! изменение поведение текста placeholder в <input>==========
// !===========================================================================================


// !===========================================================================================
//! перемещение элементов html================================

let actionHeader = document.querySelector(".action-header");
let menu_Body = document.querySelector(".menu__body");
let header_Body = document.querySelector(".header__body");

// Функция для выполнения действий при изменении размера экрана
function handleResize() {
    // Получаем текущую ширину экрана
    let screenWidth = window.innerWidth;
    // Проверяем условие: если ширина экрана меньше () пикселей
	if (screenWidth < 767) {

		menu_Body.append(actionHeader);
        // Выполняем действия, которые нужно сделать при ширине экрана < ()
        // Здесь можно добавить другие действия, которые нужно выполнить
	} else {
		header_Body.append(actionHeader);
        // Выполняем действия, которые нужно сделать при ширине экрана >= ()
        // Здесь можно добавить другие действия, которые нужно выполнить
    }
}

// Добавляем обработчик события изменения размера окна
window.addEventListener('resize', handleResize);

// Вызываем функцию handleResize() при загрузке страницы для первоначальной проверки размера экрана
handleResize();
//! перемещение элементов html================================
// !===========================================================================================


// !===========================================================================================
// ! rating - для звезд=======================================
const ratings = document.querySelectorAll(".rating");

if (ratings.length > 0) {
	initRatings();
}

// основная функция
function initRatings() {
	let ratingActive;
	let ratingValue;
	// пробегаем по всем рейтингам на странице
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}


	// инициализируем конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);
		setRatingActiveWidth();

		if (rating.classList.contains("rating_set")) {
			setRating(rating);
		}

	}

	// инициализация переменных
	function initRatingVars(rating) {
		ratingActive = rating.querySelector(".rating__active");
		ratingValue = rating.querySelector(".rating__value");
	}

	// изменяем ширину активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}

	// возможность указывать оценку
	function setRating(rating) {
		const ratingItems = rating.querySelectorAll(".rating__item")
		for (let index = 0; index < ratingItems.length; index++) {
			const ratingItem = ratingItems[index];
			ratingItem.addEventListener("mouseenter", function (e) {
				// обновление переменных
				initRatingVars(rating);
				// обновление активных звезд
				setRatingActiveWidth(ratingItem.value);
			});
			ratingItem.addEventListener("mouseleave", function (e) {
				// обновление активных звезд
				setRatingActiveWidth();
			});
			ratingItem.addEventListener("click", function (e) {
				// обновление переменных
				initRatingVars(rating);
				
				if (rating.dataset.ajax) {
					// отправить на сервер
					setRatingValue(ratingItem.value, rating);
				} else {
					// отобразить указанную оценку
					ratingValue.innerHTML = index + 1;
					setRatingActiveWidth();
				}
				
			});
		}
	}
}
// ! rating - для звезд=======================================
// !===========================================================================================


// !===========================================================================================
// ! галерея =================================================
    lightGallery(document.getElementById('lightgallery'), {
      selector: '.gallery__image',
      plugins: [lgThumbnail, lgZoom],
		speed: 500,
	  licenseKey: '', // Оставьте пустым для бесплатной версии или введите свой ключ
	});

// ! галерея =================================================
// !===========================================================================================


// !===========================================================================================
// ! кнопка вверх =================================================
const goToTop = document.querySelector(".go-top");

// goToTop.addEventListener("click", goTop);
if (goToTop) {
    goToTop.addEventListener("click", goTop);
}
window.addEventListener("scroll", trackScroll);

function trackScroll() {
	const offset = window.pageYOffset;
	const coords = document.documentElement.clientHeight;
	if (offset > coords) {
		goToTop.classList.add("active");
	} else {
		goToTop.classList.remove("active");
	}
}

function goTop() {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -75);
		setTimeout(goTop, 0);
	}
}
// ! кнопка вверх =================================================
// !===========================================================================================