const hamSelector = 'hamburger-menu';
const checkboxSelector = 'input[type=checkbox]';
const checkedClassName = 'checked';
const focusClassName = 'focus';

const hamElement = document.querySelector(`.${hamSelector}`);
const checkbox = hamElement.querySelector(checkboxSelector);

checkbox.addEventListener('change', () => {
    if (checkbox.checked) hamElement.classList.add(checkedClassName);
    else hamElement.classList.remove(checkedClassName);
});

checkbox.addEventListener('focus', () => {
    if (checkbox.matches(':focus-visible'))
        hamElement.classList.add(focusClassName);
});

checkbox.addEventListener('blur', () => {
    hamElement.classList.remove(focusClassName);
});