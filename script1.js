document.addEventListener("DOMContentLoaded", function() {
    var loadingBar = document.getElementById("loadingBar");
    var loadingBarContainer = document.querySelector(".loading-bar-container");
    var wrapper = document.querySelector(".wrapper");

    setTimeout(function() {
        loadingBar.style.width = "100%";
        setTimeout(function() {
            loadingBarContainer.classList.add("fade-out"); // Додаємо клас для початку анімації зникнення
            waitForAnimationToEnd();
        }, 1000); // Затримка перед початком анімації зникнення контейнера
    }, 10); // Невелика затримка перед анімацією завантажувальної панелі

    function waitForAnimationToEnd() {
        var animationDuration = 1000; // Тривалість анімації в мілісекундах
        setTimeout(function() {
            if (window.getComputedStyle(loadingBarContainer).getPropertyValue('opacity') === '0') {
                // Якщо анімація завершилася, показуємо wrapper
                wrapper.classList.add("fade-in");
            } else {
                // Якщо анімація ще не завершилася, продовжуємо очікувати
                waitForAnimationToEnd();
            }
        }, animationDuration);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // При завантаженні сторінки UA має бути активована
    changeLanguageabout('uk');
});

function changeLanguageabout(language) {
    var translations = {
        uk: {
            aboutUs: "Про нас",
            tours: "Тури",
            contactUs: "Контакти",
            aboutUsText: "Про нас",
            abus1: "Ми - туристична агенція, яка допомагає нашим клієнтам знайти найкращі тури та подорожі за доступними цінами. Наша мета - зробити подорожі доступними для кожного, незалежно від бюджету та побажань.",
            abus2: "Ми пропонуємо широкий вибір турів, які включають в себе все необхідне для комфортної та безпечної подорожі. Наша команда професіоналів з радістю допоможе вам знайти найкращий варіант для вашої наступної подорожі.",
            abus3: "Ми пишаємося своїми успішними проектами та задоволеними клієнтами, які повертаються до нас знову та знову."
        },
        en: {
            aboutUs: "About Us",
            tours: "Tours",
            contactUs: "Contact Us",
            aboutUsText: "About Us",
            abus1: "We are a travel agency that helps our clients find the best tours and trips at affordable prices. Our goal is to make travel accessible to everyone, regardless of budget and preferences.",
            abus2: "We offer a wide selection of tours that include everything you need for a comfortable and safe journey. Our team of professionals is happy to help you find the best option for your next trip.",
            abus3: "We take pride in our successful projects and satisfied clients who return to us again and again."
        }
    };

    document.getElementById('aboutUs').textContent = translations[language].aboutUs;
    document.getElementById('tours').textContent = translations[language].tours;
    document.getElementById('contactUs').textContent = translations[language].contactUs;
    document.getElementById('aboutUsText').textContent = translations[language].aboutUsText;
    document.getElementById('abus1').textContent = translations[language].abus1;
    document.getElementById('abus2').textContent = translations[language].abus2;
    document.querySelectorAll('.lang').forEach(function(el) {
        el.classList.remove('active');
    });
    document.getElementById('lang-' + language).classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
    // При завантаженні сторінки UA має бути активована
    changeLanguagecontact('uk');
});

function changeLanguagecontact(language) {
    var translations = {
        uk: {
            aboutUs: "Про нас",
            tours: "Тури",
            contactUs: "Контакти",
            ContactText: "Контакти",
            abus1: "Наш e-mail: suntravel@gmail.com",
            abus2: "Наш телефон: +380507489631",
        },
        en: {
            aboutUs: "About Us",
            tours: "Tours",
            contactUs: "Contact Us",
            ContactText: "Contact Us",
            abus1: "Our e-mail: suntravel@gmail.com",
            abus2: "Our Phone: +380507489631",    
        }
    };

    document.getElementById('aboutUs').textContent = translations[language].aboutUs;
    document.getElementById('tours').textContent = translations[language].tours;
    document.getElementById('contactUs').textContent = translations[language].contactUs;
    document.getElementById('ContactText').textContent = translations[language].ContactText;
    document.getElementById('abus1').textContent = translations[language].abus1;
    document.getElementById('abus2').textContent = translations[language].abus2;
    document.querySelectorAll('.lang').forEach(function(el) {
        el.classList.remove('active');
    });
    document.getElementById('lang-' + language).classList.add('active');
}

document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.desctop-nav').classList.toggle('open');
})

function darkmode() {
    const body = document.body;
    const sunImg = document.querySelector('.sun-img');
    const globeImg = document.querySelector('.earth-img');
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';

    localStorage.setItem('darkmode', !wasDarkmode);
    body.classList.toggle('dark-mode', !wasDarkmode);
    sunImg.src = !wasDarkmode ? 'moon.png' : 'sun.png';
    sunImg.alt = !wasDarkmode ? 'moon' : 'sun';
    globeImg.src = !wasDarkmode ? 'globe1.png' : 'globe.png';
    globeImg.alt = !wasDarkmode ? 'globe1' : 'globe';
}

document.querySelector('.theme').addEventListener('click', darkmode);

document.addEventListener('DOMContentLoaded', function() {
    const isDarkmode = localStorage.getItem('darkmode') === 'true';
    const sunImg = document.querySelector('.sun-img');
    const globeImg = document.querySelector('.earth-img');
    document.body.classList.toggle('dark-mode', isDarkmode);
    sunImg.src = isDarkmode ? 'moon.png' : 'sun.png';
    sunImg.alt = isDarkmode ? 'moon' : 'sun';
    globeImg.src = isDarkmode ? 'globe1.png' : 'globe.png';
    globeImg.alt = isDarkmode ? 'globe1' : 'globe';
});