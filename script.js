let modalOpenRegistration = document.querySelector('.js-modal-open-registration');
let modalOpenEnter = document.querySelector('.js-modal-open-enter');
let modalRegistration = document.querySelector('.modal_registration');
let modalEnter = document.querySelector('.modal_enter');
let overlay = document.querySelector('#overlay-modal');
let formRegistration = document.forms.registration;
let formEnter = document.forms.enter;
let buttonExit = document.getElementsByName('button_exit');
let buttonRegistration = document.getElementsByName('button_registration');
let buttonEnter = document.getElementsByName('button_enter');
let aboutUser = document.querySelector('.content');

// ===============Главный экран==================
modalOpenRegistration.addEventListener('click', function(){
    modalRegistration.style.display = 'block';
    overlay.style.display = 'block';
});

modalOpenEnter.addEventListener('click', function(){
    modalEnter.style.display = 'block';
    overlay.style.display = 'block';
});

// ==================Кнопки выхода=======================
buttonExit.forEach(function(item){
    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener('click', function() {
        modalRegistration.style.display = 'none';
        modalEnter.style.display = 'none';
        aboutUser.style.display = 'none';
        overlay.style.display = 'none';
     });
});

// Проверка заполнения полей
function fieldValidation(object) {
    for (let key in object) {
        if(object[key] === '') {
            return false;
        } 
    }
    return true;
}

let userList = [];

// ===================Форма регистрации==================
buttonRegistration[0].addEventListener('click', function() {
    
    let user = {};
    user.login = formRegistration.elements.registration_login.value;
    user.password = formRegistration.elements.registration_password.value;
    user.name = formRegistration.elements.registration_name.value;
    user.age = formRegistration.elements.registration_age.value;
    
    if (fieldValidation(user)) {
        userList.push(user);
        formRegistration.reset();
        localStorage.setItem('user', JSON.stringify(user));
        modalRegistration.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        alert ('Maybe, something is missing!')
    } 
});
// ==================Форма входа=====================

buttonEnter[0].addEventListener('click', function() {
    let signInUser = {
        login: formEnter.elements.enter_login.value,
        password: formEnter.elements.enter_password.value,
    }
    let userCheck;

    if (fieldValidation(userCheck)) {
        userCheck =  userList.find(function(item) {
            if(item.login === signInUser.login && item.password === signInUser.password) {
                return true
            } else {
                alert('Something went wrong! Check the entered data!')
            }   
        }) 
    } else {
        alert ('Maybe, something is missing!')
        return false;
        formEnter.reset();
    } 
    
    if(userCheck) {
        modalEnter.style.display = 'none';
        overlay.style.display = 'block';
        aboutUser.style.display = 'block';
        let span = document.querySelectorAll('span');
        span[0].innerHTML = signInUser.login;
        span[1].innerHTML = signInUser.password;
    }
});


