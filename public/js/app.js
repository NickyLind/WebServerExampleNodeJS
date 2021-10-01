console.log('Client Side JS File Loaded');

fetch('http://puzzle.mead.io/puzzle').then((response) => {
  response.json().then((data) => {
    console.log(data.puzzle);
  })
});

fetch('http://localhost:3000/weather?address=vancouver,washington').then((response) => {
  response.json().then((data) => {
    if(data.error) {
      console.log(`an error occured: ${data.error}`);
    } else {
      console.log(data.location);
      console.log(data.forecast.data);
    }
  })
})