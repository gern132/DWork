// footer-social
let firstSvg = document.querySelector('.first-svg'),
    firstSvg1 = document.querySelector('.first-svg1'),
    firstSvg2 = document.querySelector('.first-svg2'),
    firstSvg3 = document.querySelector('.first-svg3'),
    bg = document.querySelector('.footer__block-social');

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

// reviews

const leftArrow = document.querySelector('.left'),
    rightArrow = document.querySelector('.right'),
    text = document.querySelectorAll('.review__block-text');

    let slideIndex = 1;

    function showSlides(n) {
        if (n > text.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = text.length;
        }
        text.forEach(item => item.style.display = 'none');
        text[slideIndex - 1].style.display = 'block';
    }
    function plussSlides(n) {
        showSlides(slideIndex += n);
    }

    leftArrow.addEventListener('click', () => {
        plussSlides(-1);
    });

    rightArrow.addEventListener('click', () => {
        plussSlides(1);
    });

    showSlides(slideIndex);

    // scroll
    const getTop = () => window.scrollY;
let strela = document.querySelector('.arrow');
let hide = document.querySelector('.arrow-hidden');
let check = 2600;

const updateDashoffset = () => {};
window.addEventListener('scroll', () => {
    updateDashoffset();

if (getTop() > check) {
    hide.classList.remove('arrow-hidden')
}else {
    hide.classList.add('arrow-hidden')
}
});

strela.addEventListener('click' , strelaClick);

function strelaClick() {
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});    
}
// plus > arrow

const arrowRight = document.querySelector('.right-0'),
    arrowRight1 = document.querySelector('.right-1'),
    job = document.querySelector('.first-switch'),
    job1 = document.querySelector('.second-switch'),
    plus = document.querySelector('.plus'),
    plus1 = document.querySelector('.plus1');

    job.addEventListener('mouseover', () => {
        arrowRight.style.display = 'block';
        arrowRight.style.transition = '.3s';
        plus.style.display = 'none';
        plus.style.transition = '.3s';
    });

    job.addEventListener('mouseout', () => {
        arrowRight.style.display = '';
        plus.style.display = '';
        plus.style.transition = '.3s';
        arrowRight.style.transition = '.3s';
    });

    job1.addEventListener('mouseover', () => {
        arrowRight1.style.display = 'block';
        arrowRight1.style.transition = '.3s';
        plus1.style.display = 'none';
        plus1.style.transition = '.3s';
    });

    job1.addEventListener('mouseout', () => {
        arrowRight1.style.display = '';
        plus1.style.display = '';
        plus1.style.transition = '.3s';
        arrowRight1.style.transition = '.3s';
    });
