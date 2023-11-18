document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('grid');
    const verifyButton = document.getElementById('verifyButton');
    const message = document.getElementById('message');

    // Initialize the grid
    for (let i = 0; i < 4; i++) { // 2x2 grid
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.addEventListener('click', function() {
            this.classList.toggle('active');
        });
        grid.appendChild(gridItem);
    }

    // Add verification logic here
    verifyButton.addEventListener('click', function() {
        let activeItems = document.querySelectorAll('.grid-item.active').length;
        if (activeItems === correctNumber) { // Set 'correctNumber' to your criteria
            message.textContent = 'Captcha verified!';
            message.style.color = 'green';
        } else {
            message.textContent = 'Captcha failed. Try again.';
            message.style.color = 'red';
        }
    });
});
