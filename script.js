document.addEventListener('DOMContentLoaded', function() {
    generatePics();
});

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
function generatePics() {
    let picturesContainer = document.getElementsByClassName('pictures')[0];

    for (let i = 0; i < 15; i++) {
        let figure = document.createElement('figure');

        let img = document.createElement('img');
        img.src = 'https://i.pinimg.com/564x/fe/ca/c0/fecac007779f56c19a9892dedefa2ba0.jpg';
        img.alt = 'dress';

        let figcaption = document.createElement('figcaption');
        figcaption.textContent = 'Pink Short Dress';

        let button = document.createElement('button');
        button.textContent = 'Add to Cart';
        
    

        figure.appendChild(img);
        figure.appendChild(figcaption);
        figure.appendChild(button);

        // Append the figure to the pictures container
        picturesContainer.appendChild(figure);
      
}
}
