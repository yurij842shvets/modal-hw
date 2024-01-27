const burgerMenuButton = document.querySelector('.burger-menu__span');
console.log(burgerMenuButton);

const contactsWindow = document.querySelector('.contacts_window');
console.log(contactsWindow);

const crossWindow = document.querySelector('.cross-window_cross');
console.log(crossWindow);

burgerMenuButton.addEventListener('click', function() {
    contactsWindow.classList.add('active');
    burgerMenuButton.style.display = 'none';
})
crossWindow.addEventListener('click', function() {
    contactsWindow.classList.remove('active');
    burgerMenuButton.style.display = 'block';
})
burgerMenuButton.addEventListener('click', function() {
    burgerMenuButton.classList.add('not-active');
})
