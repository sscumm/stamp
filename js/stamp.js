const showMenu = () => {
    const menu = document.getElementById('site-menu');
    if (menu) {
        menu.classList.add('visible');
    }
}

const hideMenu = () => {
    const menu = document.getElementById('site-menu');
    if (menu) {
        menu.classList.remove('visible');
    }
}

const toggleMenu = () => {
    const menu = document.getElementById('site-menu');
    if (menu) {
        menu.classList.toggle('visible');
    }
}