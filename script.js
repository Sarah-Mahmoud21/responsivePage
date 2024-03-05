function toggleMenu() {
    let content = document.getElementById('hide-show');
    let button = document.getElementById('filters');

    let computedStyle = window.getComputedStyle(content);

    if (computedStyle.display === 'none') {
        content.style.display = 'block';
        button.innerText = 'Hide Menu';
    } else {
        content.style.display = 'none';
        button.innerText = 'Show Menu';
    }
}
