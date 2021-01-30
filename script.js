// footer-social
let firstSvg = document.querySelector('.first-svg');
let firstSvg1 = document.querySelector('.first-svg1');
let firstSvg2 = document.querySelector('.first-svg2');
let firstSvg3 = document.querySelector('.first-svg3');
let bg = document.querySelector('.footer__block-social');

firstSvg.addEventListener('mouseover', () => {
    bg.style.background = ' rgb(71, 227, 255)';
    bg.style.transition = '.3s';
});
firstSvg.addEventListener('mouseout', () => {
    bg.style.background = '#111922';
    bg.style.transition = '.3s';
});


firstSvg1.addEventListener('mouseover', () => {
    bg.style.background = ' rgb(129, 13, 195)';
    bg.style.transition = '.3s';
});
firstSvg1.addEventListener('mouseout', () => {
    bg.style.background = '#111922';
});

firstSvg2.addEventListener('mouseover', () => {
    bg.style.background = ' rgb(52, 106, 255)';
    bg.style.transition = '.3s';
});
firstSvg2.addEventListener('mouseout', () => {
    bg.style.background = '#111922';
});

firstSvg3.addEventListener('mouseover', () => {
    bg.style.background = '  rgb(126, 255, 52)';
    bg.style.transition = '.3s';
});
firstSvg3.addEventListener('mouseout', () => {
    bg.style.background = '#111922';
});
