function toggleMenu() {
    let content = document.getElementsByClassName('boxes')[0];
    let button = document.getElementById('filters');

    let computedStyle = window.getComputedStyle(content);

    if (computedStyle.display === 'none') {
        content.style.display = 'block';
        button.innerHTML = '<i class="fas fa-bars"></i>' + ' Hide filters';
    } else {
        content.style.display = 'none';
        button.innerHTML = '<i class="fas fa-bars"></i>' + ' Show filters';
    }
}
