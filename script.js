//fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => response.json()).then((json) => console.log(json));

//Axios ek library hai jiske help se hum data fetch kar sakte hai bina 2 baar .then() use kiye

import axios from 'axios'

axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
  console.log(response.data);
});

// const a = 10
// console.log(a);
