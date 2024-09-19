document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnLoginPopup = document.querySelector('.btnLogin-popup');
    const menuBtn = document.querySelector('.menu-btn');
    const navigation = document.querySelector('.navigation');

    function updateMenuVisibility() {
        if (window.innerWidth <= 1050) {
            menuBtn.style.display = 'block'; 
        } else {
            menuBtn.style.display = 'none'; 
        }
    }

    updateMenuVisibility(); 

    window.addEventListener('resize', updateMenuVisibility);

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

    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            this.classList.toggle('active'); 
            navigation.classList.toggle('active'); 
        });
    }

    if (btnLoginPopup) {
        btnLoginPopup.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }

    // Обработчик для закрытия навигации при клике вне ее
    document.addEventListener('click', (event) => {
        if (!navigation.contains(event.target) && !menuBtn.contains(event.target)) {
            navigation.classList.remove('active'); // Закрываем панель
            menuBtn.classList.remove('active'); // Убираем активный класс у кнопки меню
        }
    });
});
