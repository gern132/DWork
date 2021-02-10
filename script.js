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
let check = 2000;

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
// burger 

let menu = document.querySelector('.header-logo'),
    menuMobile = document.querySelector('.header-logo-mobile'),
    burger = document.querySelector('.burger-open'),
    cancle = document.querySelector('.burger-cancle'),
    body = document.body;

    function disable() {
        body.classList.add('dis');
    }
    function enable() {
        body.classList.remove('dis');
    }

    menuMobile.addEventListener('click', (ds) => {
        burger.style.opacity = '1';
        burger.style.visibility = 'visible';
        disable();
    });

    menu.addEventListener('click', (ds) => {
        burger.style.opacity = '1';
        burger.style.visibility = 'visible';
        disable();
    });

    cancle.addEventListener('click', () => {
        burger.style.opacity = '';
        burger.style.visibility = '';
        enable();
    });

    // article-open

    let click = document.querySelector('.first-vakansy'),
        cancleS = document.querySelector('.cancle'),
        workOpen =  document.querySelector('.work-open');  
        
        click.addEventListener('click', (ds) => {
            workOpen.style.opacity = '1';
            workOpen.style.visibility = 'visible';
            disable();
        });
    
        cancleS.addEventListener('click', () => {
            workOpen.style.opacity = '';
            workOpen.style.visibility = '';
            enable();
        });

        let click1 = document.querySelector('.second-vacansy'),
        cancleS1 = document.querySelector('.cancle1'),
        workOpen1 =  document.querySelector('.work-open1');
        
        click1.addEventListener('click', (ds) => {
            workOpen1.style.opacity = '1';
            workOpen1.style.visibility = 'visible';
            disable();
        });
    
        cancleS1.addEventListener('click', () => {
            workOpen1.style.opacity = '';
            workOpen1.style.visibility = '';
            enable();
        });

        let click2 = document.querySelector('.third-vacansy'),
        cancleS2 = document.querySelector('.cancle2'),
        workOpen2 =  document.querySelector('.work-open2');

        click2.addEventListener('click', (ds) => {
            workOpen2.style.opacity = '1';
            workOpen2.style.visibility = 'visible';
            disable();
        });
    
        cancleS2.addEventListener('click', () => {
            workOpen2.style.opacity = '';
            workOpen2.style.visibility = '';
            enable();
        });

        let click3 = document.querySelector('.fourth-vacansy'),
        cancleS3 = document.querySelector('.cancle3'),
        workOpen3 =  document.querySelector('.work-open3');

        click3.addEventListener('click', (ds) => {
            workOpen3.style.opacity = '1';
            workOpen3.style.visibility = 'visible';
            disable();
        });
    
        cancleS3.addEventListener('click', () => {
            workOpen3.style.opacity = '';
            workOpen3.style.visibility = '';
            enable();
        });