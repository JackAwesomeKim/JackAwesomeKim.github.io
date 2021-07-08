/*
    text
    - Jack Kim
    - frontend Engineer          
    - football, music                         
    - wannabe a brilliant frontend berserker 
*/
const profile_info_list = ['Jack Kim', 'frontend Engineer', 'football, music', 'Wannabe a brilliant frontend berserker'];
const seconds = [];
let counter = 1;
for (let j = 0; j < profile_info_list.length; j++) {
    for (let i = 0; i < profile_info_list[j].length; i++) {
        seconds.push(counter + 0.05 * i);
        if (i == profile_info_list[j].length - 1) { counter += 0.05 * i }
    }
}
console.log(seconds);


for (let j = 0; j < profile_info_list.length; j++) {
    for (let i = 0; i < profile_info_list[j].length; i++) {
        setTimeout(setTextmessage, 500 * seconds[i], j, i, profile_info_list[j]);
    }
}

function setTextmessage(order, h, text) {
    let list = document.getElementsByClassName('profile-info')[0]
        .getElementsByTagName('li');
    list[order].innerText = text.slice(0, h + 1);
}

