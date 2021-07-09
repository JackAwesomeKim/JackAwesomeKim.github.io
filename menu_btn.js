const menu_btn = document.getElementsByClassName('menu-btn')[0];
const navigator = document.getElementsByTagName('nav')[0];
const menu_list = navigator.getElementsByTagName('ul')[0];

menu_btn.addEventListener('click', function () {
    if (navigator.classList.length == 0 || navigator.classList.contains('open')) {
        navigator.classList.remove('open');
        navigator.classList.add('close');
        menu_list.style.visibility = 'hidden';
        menu_btn.innerText = '>>';

    }
    else {
        navigator.classList.remove('close');
        navigator.classList.add('open');
        menu_list.style.visibility = '';
        menu_btn.innerText = '<<';
    }
});