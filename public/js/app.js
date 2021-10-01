console.log('Client Side JS File Loaded');

const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');

const clearInput = () => {
  searchElement.value = '';
}

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const location = searchElement.value;

  fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if(data.error) {
        console.log(`an error occured: ${data.error}`);
        clearInput();
      } else {
        console.log(data.location);
        console.log(data.forecast.data);
        clearInput();
      }
    })
  })

});