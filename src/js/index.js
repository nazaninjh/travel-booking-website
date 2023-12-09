/* eslint-disable linebreak-style */
import '../css/style.css';

// eslint-disable-next-line no-unused-expressions
'use strict';
// start of header
const formSubmitBtn = document.querySelector('.header-form-submit-btn');
const addClassToForm = () => {
  const headerForm = document.querySelector('.header-package-form');
  const countryInputFields = Array.from(headerForm.querySelectorAll('.country-field'));
  for (let i = 0; i < countryInputFields.length; i++ ) {
    if (countryInputFields[i].value.length <= 0 || countryInputFields[i].value.includes('exp')) {
      countryInputFields[i].classList.remove('is-required');
      countryInputFields[i].classList.add('is-invalid');
    } else {
      countryInputFields[i].classList.remove('is-required');
      countryInputFields[i].classList.add('is-valid');
    }
  }  
};
formSubmitBtn.addEventListener('click', addClassToForm);
// add a function to add destination
const addDestinationBtn = document.querySelector('.header-add-destination-btn');
addDestinationBtn.addEventListener('click', addDestination);
function addDestination (event) {
  event.preventDefault();
  const secondForm = document.getElementById('second-destination');
  const addDestinationHtml = ` <div class='form-floating mb-3'>
    <input class='form-control is-required country-field' list='datalistOptions'  required
     id='added-destination'
     placeholder='exp: Lauterbrunen'
     value='exp: Lauterbrunen'>
    <label for='added-destination' class='form-label'>
      Enter destination (country, region or city)
    </label>
    </div>
    <datalist id='datalistOptions'>
    <option value='San Francisco'>
    <option value='New York'>
    <option value='Seattle'>
    <option value='Los Angeles'>
    <option value='Chicago'>
    </datalist>`
  addDestinationBtn.insertAdjacentHTML('beforebegin',
    addDestinationHtml
  );
};
// add date input when clicked
const dateContainer = document.querySelector('.date-form-cont');
const date = dateContainer.querySelector('.date');
const dateRangeTxt = date.querySelector('.date-range-txt');
const startDateBtn = dateContainer.querySelector('.header-start-date');
const endDateBtn = dateContainer.querySelector('.header-end-date')
startDateBtn.addEventListener('click', ()=> {
  startDateBtn.remove();
  const startDateHtml = `<input type='date' name='startDate' id='start-date'>
    <img src='./pics/form-arrow-vector.png'>`;
  dateRangeTxt.insertAdjacentHTML('afterend', startDateHtml );
});
endDateBtn.addEventListener('click', () => {
  endDateBtn.remove();
  const endDateHtml = `<input type='date' name='endDate' id='end-date'>`;
  date.insertAdjacentHTML('beforeend', endDateHtml);
})

// end of header