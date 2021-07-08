
const tooltip_list_html = document.getElementsByClassName('tooltiptext');
const tooltip_list = Array.prototype.slice.call(tooltip_list_html);

const football_switch = document.getElementById('football-switch')
    .getElementsByTagName('input')[0]



football_switch.addEventListener('click', function () {
    if (football_switch.checked) {
        tooltip_list.forEach(tooltip => {
            tooltip.classList.add('active')
        });
    } else {
        tooltip_list.forEach(tooltip => {
            tooltip.classList.remove('active')
        });
    }
});