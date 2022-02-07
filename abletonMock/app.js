const menuToggler = document.querySelector('.menuToggler');
const navItems = document.querySelectorAll('#mainNav .navItem');
const mainNav = document.querySelector('#mainNav');
const vertLines = document.querySelectorAll('.vertLine');
const horzLines = document.querySelectorAll('.horzLine');
const navSpaceHolder = document.querySelector('#navSpaceHolder');
const menuArrow = document.querySelector('#menuArrow');

let toggle = true;
let mediaQ = window.matchMedia('(min-width: 1025px)');

const revert = m => {
    if (m.matches) {
        menuArrow.innerText = '▼';
        navSpaceHolder.style.display = 'none';
        mainNav.style.backgroundColor = 'white';
        for (let i = 0; i < vertLines.length; i++) {
            vertLines[i].style.backgroundColor = 'black';
            horzLines[i].style.backgroundColor = 'black';
        }
        menuToggler.style.color = 'black';
        for (let item of navItems) {
            item.classList.remove('active');
            item.style.color = 'black';
        }
        navItems[7].style.color = 'blue';
    }
    toggle = true;
}

mediaQ.addListener(revert);

menuToggler.addEventListener('click', () => {
    if (toggle) {
        menuArrow.innerText = '▲';
        navSpaceHolder.style.display = 'static';
        mainNav.style.position = 'absolute';
        mainNav.style.backgroundColor = 'blue';
        for (let i = 0; i < vertLines.length; i++) {
            vertLines[i].style.backgroundColor = 'white';
            horzLines[i].style.backgroundColor = 'white';
        }
        menuToggler.style.color = 'white';
        toggle = false;
    } else {
        menuArrow.innerText = '▼';
        navSpaceHolder.style.display = 'none';
        mainNav.style.position = 'static';
        mainNav.style.backgroundColor = 'white';
        for (let i = 0; i < vertLines.length; i++) {
            vertLines[i].style.backgroundColor = 'black';
            horzLines[i].style.backgroundColor = 'black';
        }
        menuToggler.style.color = 'black';
        toggle = true;
    }
    for (let item of navItems) {
        item.classList.toggle('active');
        item.style.color = 'white';
    }
});

