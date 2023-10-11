const modalRegister = document.querySelector('.modal-register');
console.log(modalRegister);

const buttonOrderService = document.querySelector('.order-service');
console.log(buttonOrderService); 

const crossModalRegister = document.querySelector('.cross');
console.log(crossModalRegister);

const buttonSend = document.querySelector('.send');
console.log(buttonSend);

const buttonContacts = document.querySelector('.contacts-a');
console.log(buttonContacts);

buttonOrderService.addEventListener('click', function() {
    modalRegister.classList.add('active');
})

buttonContacts.addEventListener('click', function() {
    modalRegister.classList.add('active');
})

crossModalRegister.addEventListener('click', function() {
    modalRegister.classList.remove('active');
})

buttonSend.addEventListener('click', function() {
    modalRegister.classList.remove('active');
})
