const menuBurger = document.getElementById('menuBurger');
const mobileVersionWidth = 1368;
menuBurger.onclick = function (event) {
    document.getElementsByClassName('mobile_version')[0].classList.toggle('menu_active');
    document.querySelectorAll('#menuBurger span')[0].classList.toggle('active_burger');
    menuBurger.classList.toggle('margin_138');
}

let isDropDownOpened = false;

document.getElementById('timeZoneSelector').onclick = function (event) {
    if (event.target.tagName === "P") {
        if (document.body.clientWidth > mobileVersionWidth) {
            isDropDownOpened = true;
        }
        if (!isDropDownOpened) {
            event.currentTarget.querySelectorAll('p').forEach((p) => {
                p.classList.remove('hide');
            });
            event.currentTarget.querySelectorAll('p.active').forEach((p) => {
                p.classList.remove('margin_bottom', 'triangle_up');
                p.classList.add('triangle_down');
            });
            isDropDownOpened = true;
        } else {
            event.currentTarget.querySelectorAll('p.active').forEach((p) => {
                p.classList.remove('triangle_down', 'margin_bottom', 'order_first', 'active');
            });
            event.currentTarget.querySelectorAll('p').forEach((p) => {
                p.classList.add('hide');
            });
            event.target.classList.add('triangle_up', 'order_first', 'margin_bottom', 'active');
            event.target.classList.remove('hide');
            isDropDownOpened = false;
        }
    }

}
