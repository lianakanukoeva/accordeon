function Accordion() {
    let items = document.querySelectorAll('.accordion__item');
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function (e) {
            e.preventDefault();
            if (items[i].classList.contains('accordion__active')) {
                items[i].classList.remove('accordion__active')
            } else {
                for (let i = 0; i < items.length; i++) {
                    items[i].classList.remove('accordion__active')
                }
                items[i].classList.add('accordion__active');
            }
        });
    }
}
Accordion();