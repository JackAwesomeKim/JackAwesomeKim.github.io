var svgns = "http://www.w3.org/2000/svg";

const intros = document.getElementsByClassName('intro-1');
const intro = intros[intros.length - 1];
const introAnchor = intro.getElementsByTagName('a')[0];


function addRect() {
    //  window.innerHeight
    //  window.innerWidth
    const randomCircleHeight = (Math.random() * window.innerHeight).toString();
    const randomCircleWidth = (Math.random() * window.innerWidth).toString();

    const circleSize = Math.random() * 100;
    const color = Math.round(0xffffff * (Math.random() * (1 - 0.5) + 0.5)).toString(16)

    var circle = document.createElementNS(svgns, 'circle');
    circle.setAttributeNS(null, 'cx', randomCircleWidth);
    circle.setAttributeNS(null, 'cy', randomCircleHeight);
    circle.setAttributeNS(null, 'r', circleSize);
    circle.setAttributeNS(null, 'stroke', '#' + color);
    circle.setAttributeNS(null, 'fill', '#' + color);
    document.getElementById('svgOne').appendChild(circle);
}

for (let i = 0; i < 250; i++) {
    setTimeout(addRect, 2500 + Math.random() * 2000);
}

/* +++++++++++++++++++ */

let welcomeText = 'welcome!';

let seconds = [1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35];
for (let i = 0; i < welcomeText.length; i++) {
    setTimeout(setTextmessage, 3000 * seconds[i], welcomeText[i]);
}


function setTextmessage(text) {
    introAnchor.innerText += text;
}


const introList = document.getElementsByClassName('intro-1');
const lastIntro = introList[introList.length - 1];
setTimeout(introRegistration, 3000);

function introRegistration() {
    lastIntro.onmouseover = function (e) {
        this.style.color = 'black';
        this.style.backgroundColor = 'white';
        this.style.cursor = 'default';
    }
    introAnchor.href = './homepage';
}