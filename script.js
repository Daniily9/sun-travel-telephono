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
  changeLanguage('uk');
});

function changeLanguage(language) {
  var translations = {
      uk: {
          aboutUs: "Про нас",
          tours: "Тури",
          contactUs: "Контакти",
          ToursText: "Тури",
          searchPlaceholder: "Пошук турів..",
          country1: "Франція",
          country2: "Туреччина",
          country3: "Єгипет",
          country4: "Іспанія",
          country5: "Італія",
          country6: "Балі",
          country7: "Велика Британія",
          country8: "Греція",
          country9: "Індія",
          price1: "Ціна 20000 грн",
          price2: "Ціна 18000 грн",
          price3: "Ціна 30000 грн",
          price4: "Ціна 35000 грн",
          price5: "Ціна 40000 грн",
          price6: "Ціна 50000 грн",
          price7: "Ціна 55000 грн",
          price8: "Ціна 65000 грн",
          price9: "Ціна 45000 грн"
      },
      en: {
          aboutUs: "About Us",
          tours: "Tours",
          contactUs: "Contact Us",
          ToursText: "Tours",
          searchPlaceholder: "Search tours..",
          country1: "France",
          country2: "Turkey",
          country3: "Egypt",
          country4: "Spain",
          country5: "Italy",
          country6: "Bali",
          country7: "United Kingdom",
          country8: "Greece",
          country9: "India",
          price1: "Price 20000 UAH",
          price2: "Price 18000 UAH",
          price3: "Price 30000 UAH",
          price4: "Price 35000 UAH",
          price5: "Price 40000 UAH",
          price6: "Price 50000 UAH",
          price7: "Price 55000 UAH",
          price8: "Price 65000 UAH",
          price9: "Price 45000 UAH"
      }
  };

  document.getElementById('aboutUs').textContent = translations[language].aboutUs;
  document.getElementById('tours').textContent = translations[language].tours;
  document.getElementById('contactUs').textContent = translations[language].contactUs;
  document.getElementById('ToursText').textContent = translations[language].ToursText;
  document.getElementById('mySearch').setAttribute('placeholder', translations[language].searchPlaceholder);
  document.getElementById('country1').textContent = translations[language].country1;
  document.getElementById('country2').textContent = translations[language].country2;
  document.getElementById('country3').textContent = translations[language].country3;
  document.getElementById('country4').textContent = translations[language].country4;
  document.getElementById('country5').textContent = translations[language].country5;
  document.getElementById('country6').textContent = translations[language].country6;
  document.getElementById('country7').textContent = translations[language].country7;
  document.getElementById('country8').textContent = translations[language].country8;
  document.getElementById('country9').textContent = translations[language].country9;
  document.getElementById('price1').textContent = translations[language].price1;
  document.getElementById('price2').textContent = translations[language].price2;
  document.getElementById('price3').textContent = translations[language].price3;
  document.getElementById('price4').textContent = translations[language].price4;
  document.getElementById('price5').textContent = translations[language].price5;
  document.getElementById('price6').textContent = translations[language].price6;
  document.getElementById('price7').textContent = translations[language].price7;
  document.getElementById('price8').textContent = translations[language].price8;
  document.getElementById('price9').textContent = translations[language].price9;
  document.querySelectorAll('.lang').forEach(function(el) {
    el.classList.remove('active');
});
document.getElementById('lang-' + language).classList.add('active');
}

function myFunction() {
  var input, filter, div, divs, a, i, txtValue;
  input = document.getElementById('mySearch');
  filter = input.value.toUpperCase();
  div = document.getElementsByClassName('Tours');
  for (i = 0; i < div.length; i++) {
    divs = div[i].getElementsByClassName('tour1-3');
    for (j = 0; j < divs.length; j++) {
      a = divs[j].getElementsByClassName("text2")[1];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        divs[j].style.transition = "opacity 0.5s"; // Додаємо плавну зміну прозорості
        divs[j].style.display = "";
      } else {
        divs[j].style.transition = "opacity 0.5s"; // Додаємо плавну зміну прозорості
        divs[j].style.display = "none";
      }
    }
  }
}

function myFunctionMobile() {
  var input, filter, div, divs, a, i, j, txtValue;
  input = document.getElementById('mySearchMobile');
  filter = input.value.toUpperCase();
  div = document.getElementsByClassName('Tours');
  for (i = 0; i < div.length; i++) {
    divs = div[i].getElementsByClassName('tour1-3');
    for (j = 0; j < divs.length; j++) {
      a = divs[j].getElementsByClassName("text2")[1];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        divs[j].style.display = "";
      } else {
        divs[j].style.display = "none";
      }
    }
  }
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
