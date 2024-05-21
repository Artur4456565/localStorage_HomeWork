document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const message = document.getElementById('message');
    const output = document.getElementById('result');
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // функция для проверки типа пароля, если тип password, тогда меняет на текст 
    function togglePasswordVisibility(input, toggleIcon) {
        if (input.type === 'password') {
            input.type = 'text';
            toggleIcon.textContent = '👁️‍🗨️';
        } else {
            input.type = 'password';
            toggleIcon.textContent = '👁️';
        }
    }

    // событие по клику переключать пароль видимый/невидимый
    togglePassword.addEventListener('click', () => {
        togglePasswordVisibility(password, togglePassword);
    });

    // событие по клику переключать подтверждения пароля видимый/невидимый
    toggleConfirmPassword.addEventListener('click', () => {
        togglePasswordVisibility(confirmPassword, toggleConfirmPassword);
    });

    // отправка формы регистрации, событие по кнопке отправить
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const gender = document.getElementById('gender').value;
        const terms = document.getElementById('terms').checked;

        // проверка совпадения пароля и подтверждения пароля
        if (password.value !== confirmPassword.value) {
            alert('Пароли не совпадают');
            return;
        }

        // проверка чекбокса согласия с условиями
        if (!terms) {
            alert('Необходимо согласиться с условиями');
            return;
        }
        
        // таймер для скрытия сообщения через 5 секунды
        message.classList.remove('hidden');
        setTimeout(() => {
            message.classList.add('hidden');
        }, 5000);

        // вывод данных на странице
        output.innerHTML = `
            <h3>Введенные данные:</h3>
            <p>Имя пользователя: ${username}</p>
            <p>Пароль: ${password}</p>
            <p>Пол: ${gender === 'male' ? 'Мужской' : 'Женский'}</p>
        `;
    });
});