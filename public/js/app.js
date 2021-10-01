console.log('Client Side JS File Loaded');

const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

const clearInput = () => {
  searchElement.value = '';
}

const clearResults = () => {
  messageOne.textContent = ''
  messageTwo.textContent = ''
}


weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const location = searchElement.value;
  clearResults();
  clearInput();
  messageOne.textContent = 'Loading...'

  fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if(data.error) {
        messageOne.textContent = `${data.error}`
      } else {
        messageOne.textContent = `${data.location}`
        messageTwo.textContent = `${data.forecast.data}`
      }
    })
  })
});