let mobile_menu = document.querySelector('.mobile_menu');
let bars = document.querySelector('header .bars');

if (bars) {
    bars.onclick = () => {
        mobile_menu.classList.toggle('active');
        bars.classList.toggle('active');
    }
}

const items = document.querySelectorAll('.accordions .accordion');

if (items.length) {
    items.forEach((item) => {
        const header = item.querySelector('.accordion_head');
        const content = item.querySelector('.accordion_body');
    
        header.addEventListener('click', () => {
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
            header.classList.toggle('active')
        });
    });
}