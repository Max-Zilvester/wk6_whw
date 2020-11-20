document.addEventListener('DOMContentLoaded', () => {

const form = document.querySelector('#car-form');
form.addEventListener('submit', handleCarForm);

const button = document.querySelector('#button');
button.addEventListener('click', handleButtonClick)


});

const handleCarForm = function(event){
event.preventDefault();
const newCarListItem = document.createElement('li');
newCarListItem.textContent = `Car Make: ${event.target.make.value}. 
Car Model: ${event.target.model.value}.
Category: ${event.target.category.value}.
`
const carList = document.querySelector('ul');
carList.appendChild(newCarListItem);
document.getElementById('car-form').reset();
};

const handleButtonClick = function(event){
    const carList = document.getElementById('car-list');
    carList.removeChild(carList.lastElementChild);
};