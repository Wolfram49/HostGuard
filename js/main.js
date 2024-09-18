document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnLoginPopup = document.querySelector('.btnLogin-popup');
    const menuBtn = document.querySelector('.menu-btn');
    const navigation = document.querySelector('.navigation');

    // Функция для проверки размера экрана и скрытия/показа элементов
    function updateMenuVisibility() {
        if (window.innerWidth <= 768) {
            navigation.classList.remove('active'); // Убираем активное состояние меню
            menuBtn.style.display = 'block'; // Показываем кнопку меню
        } else {
            navigation.classList.remove('active'); // Убираем активное состояние меню на больших экранах
            menuBtn.style.display = 'none'; // Скрываем кнопку меню на больших экранах
        }
    }

    // Обновляем видимость меню при загрузке страницы и переходе на другую страницу
    updateMenuVisibility(); // Вызов сразу после загрузки страницы

    // Обновляем видимость меню при изменении размера окна
    window.addEventListener('resize', updateMenuVisibility);

    // Переключение форм логина и регистрации
    if (registerLink) {
        registerLink.addEventListener('click', () => {
            wrapper.classList.add('active');
        });
    }

    if (loginLink) {
        loginLink.addEventListener('click', () => {
            wrapper.classList.remove('active');
        });
    }

    // Обработчик клика для меню на маленьких экранах
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            this.classList.toggle('active'); // Анимация иконки
            navigation.classList.toggle('active'); // Показать/скрыть навигацию
        });
    }

    // Перенаправление на страницу логина
    if (btnLoginPopup) {
        btnLoginPopup.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }
});
