let likeButton1 = document.getElementById('like-button1');
let likeButton2 = document.getElementById('like-button2');
let likeButton3 = document.getElementById('like-button3');
let likeButton4 = document.getElementById('like-button4');
let likeButton5 = document.getElementById('like-button5');
let likeButton6 = document.getElementById('like-button6');
likeButton1.addEventListener('click', function() {

        // Перевіряємо, чи є вже клас 'fas' (заповнене серце) 
        if (this.classList.contains('fas')) {
            // Якщо є, робимо його незаповненим 
            this.classList.remove('fas');
            this.classList.add('far');
        } else {
            // Якщо немає, робимо його заповненим
            this.classList.remove('far');
            this.classList.add('fas');
        }        
    }) 
    likeButton2.addEventListener('click', function() {

    // Перевіряємо, чи є вже клас 'fas' (заповнене серце) 
    if (this.classList.contains('fas')) {
        // Якщо є, робимо його незаповненим
        this.classList.remove('fas');
        this.classList.add('far');
    } else {
            // Якщо немає, робимо його заповненим 
            this.classList.remove('far'); 
            this.classList.add('fas');
        }
    })
    likeButton3.addEventListener('click', function() {

    // Перевіряємо, чи є вже клас 'fas' (заповнене серце) 
    if (this.classList.contains('fas')) {
        // Якщо є, робимо його незаповненим
        this.classList.remove('fas');
        this.classList.add('far');
    } else {
            // Якщо немає, робимо його заповненим 
            this.classList.remove('far'); 
            this.classList.add('fas');
        }
    })
    likeButton4.addEventListener('click', function() {

    // Перевіряємо, чи є вже клас 'fas' (заповнене серце) 
    if (this.classList.contains('fas')) {
        // Якщо є, робимо його незаповненим
        this.classList.remove('fas');
        this.classList.add('far');
    } else {
            // Якщо немає, робимо його заповненим 
            this.classList.remove('far'); 
            this.classList.add('fas');
        }
    })
    likeButton5.addEventListener('click', function() {

    // Перевіряємо, чи є вже клас 'fas' (заповнене серце) 
    if (this.classList.contains('fas')) {
        // Якщо є, робимо його незаповненим
        this.classList.remove('fas');
        this.classList.add('far');
    } else {
            // Якщо немає, робимо його заповненим 
            this.classList.remove('far'); 
            this.classList.add('fas');
        }
    })
    likeButton6.addEventListener('click', function() {

    // Перевіряємо, чи є вже клас 'fas' (заповнене серце) 
    if (this.classList.contains('fas')) {
        // Якщо є, робимо його незаповненим
        this.classList.remove('fas');
        this.classList.add('far');
    } else {
            // Якщо немає, робимо його заповненим 
            this.classList.remove('far'); 
            this.classList.add('fas');
        }
    })

    // Функція для отримання значення кукі за ім'ям
function getCookieValue(cookieName) {
    // Розділяємо всі куки на окремі частини
    const cookies = document.cookie.split(';');

    // Шукаємо куки з вказаним ім'ям
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim(); // Видаляємо зайві пробіли

        // Перевіряємо, чи починається поточне кукі з шуканого імені
        if (cookie.startsWith(cookieName + '=')) {
            // Якщо так, повертаємо значення кукі
            return cookie.substring(cookieName.length + 1); // +1 для пропуску символу "="
        }
    }
    // Якщо кукі з вказаним іменем не знайдено, повертаємо порожній рядок або можна повернути null
    return '';
}

let themeBtn = document.querySelector("#themeToggle")

function setTheme (theme) {
    if (theme='light') {
        document.body.classList.add("light-theme");
        themeBtn.innerHTML = '<i class="bi bi-moon"></i>';
    } else {
        document.body.classList.remove("light-theme");
        themeBtn.innerHTML = '<i class="bi bi-brightness-high"></i>';
    }
}

let theme = getCookieValue('theme')
setTheme (theme)

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle('light-theme'); // Перемикаємо клас теми
    if (theme == 'light') {
        theme ='dark'
    } else {
        theme ='light'
    }
    setTheme (theme)
    // зберігаємо JSON рядок у кукі
    document.cookie = `theme=${theme}; max-age=${60 * 60 * 24 * 7}; path=/`;
})

// Очікуємо завантаження сторінки
document.addEventListener('DOMContentLoaded', function() {
    // Отримуємо всі написи для анімації
    const textElements = document.querySelectorAll('.fade-in-text');

    // Додаємо клас "show" для запуску анімації
    textElements.forEach(element => {
        element.classList.add('show');
    });
});