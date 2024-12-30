let a = document.getElementsByClassName('right_nav')[0];
let b = document.getElementsByClassName('menu_icon')[0];
function change() {
    if (a.style.display === 'none' || a.style.display === '') {
        a.style.display = 'block';
        b.classList.add('active');
    } else {
        a.style.display = 'none';
        b.classList.remove('active');
    }
}