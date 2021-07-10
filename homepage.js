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
        seconds.push(counter + 0.1 * i);
        if (i == profile_info_list[j].length - 1) { counter += 0.1 * i }
    }
}


for (let j = 0; j < profile_info_list.length; j++) {
    let letterCount = 0;
    for(let k = 0;k < j ;k++){
        letterCount += profile_info_list[k].length;
    }

    for (let i = 0; i < profile_info_list[j].length; i++) {
        setTimeout(setTextmessage, 500 * seconds[letterCount + i], j, i, profile_info_list[j]);
    }
}

function setTextmessage(order, h, text) {
    let list = document.getElementsByClassName('profile-info')[0]
        .getElementsByTagName('li');
    list[order].innerText = text.slice(0, h + 1);
}