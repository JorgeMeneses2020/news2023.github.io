window.addEventListener('load', () => {
    const btn_menu = document.querySelector('#icono-menu');
    const barra2 = document.querySelector('#barra2');
    const container = document.querySelector('#container');

    btn_menu.addEventListener('click', (e) => {

        barra2.classList.toggle('active');
        container.classList.toggle('opacity');
        console.log(barra2);
        // barra2.style.display = 'block';
        var rutaActual = e.target.getAttribute('src');
        if (rutaActual == "./assets/images/icon-menu.svg") {
            e.target.setAttribute('src', "./assets/images/icon-menu-close.svg");
            // container.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        } else {
            e.target.setAttribute('src', "./assets/images/icon-menu.svg");
            // barra2.style.display = 'none';
            // container.style.backgroundColor = "#FEFDF9";
        }
    })
});