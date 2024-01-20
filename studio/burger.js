const burgerMenuButton = document.querySelector('.burger-menu');
console.log(burgerMenuButton);

const contactsWindow = document.querySelector('.contacts_window');
console.log(contactsWindow);

const crossWindow = document.querySelector('.cross-window_cross');
console.log(crossWindow);

burgerMenuButton.addEventListener('click', function() {
    contactsWindow.classList.add('active');
})
crossWindow.addEventListener('click', function() {
    contactsWindow.classList.remove('active');
})
// burgerMenuButton.addEventListener('click', function() {
//     burgerMenuButton.classList.add('not-active')
// })
