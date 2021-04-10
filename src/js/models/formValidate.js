// =========== Form ===========
const form = document.getElementById("form");
form.addEventListener("submit", formSend);


function formValidate(form) {
    let formError = 0;
    let formReq = document.querySelectorAll("._req");
    for (let index = 0; index < formReq.length; index++) { // идем по каждому элементу массива
        const input = formReq[index]; // каждый текущий элемент записываем в переменную input
        formRemoveError(input); // удаляем класс "_error" у текущего поля
        if (input.getAttribute("type") == "tel" && input.value.length < 17) {
            formAddError(input); // если имя пустое, то добавляем класс "_error"
            formError++;
        }
        if (input.value === "") {
            formAddError(input); // если имя пустое, то добавляем класс "_error"
            formError++;
        }
    }
    return formError;
};

function formAddError(input) {
    input.classList.add("_error"); // добавляем класс "_error" самому элементу
};

function formRemoveError(input) {
    input.classList.remove("_error");// удаляем класс "_error" у самого элемента
};

function formSend(e) {
    e.preventDefault();
    // Проверка на правильность введенных данных
    let error = formValidate(form); // в этой переменной будем хранить кол-во ошибок(т.е. есть они или нет)
    if (error == 0) { // ошибок нет - делаем отправку формы
        form.classList.add("_sending"); // чтобы пользователь видел, что что-то происходит(отправка формы)
        setTimeout(() => {
            form.reset();
            form.classList.remove("_sending");
        }, 2500)
    }
};

// =========== /Form ===========