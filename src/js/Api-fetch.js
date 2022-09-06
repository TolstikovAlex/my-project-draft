// const API_KEY = '4c72667d32b2e08beebedbc40d9b510d';
// https://api.themoviedb.org/3/movie/550?api_key=4c72667d32b2e08beebedbc40d9b510d
// export function fetchCountries(name) {
//   return fetch(
//     `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
// fetch('https://jsonplaceholder.typicode')
//   .then(res => res.json())
//   .then(data => console.log(data));
// export function fetchCountries(name) {
//   return fetch(
//     `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
fetch(
  'https://api.themoviedb.org/3/movie/550?api_key=4c72667d32b2e08beebedbc40d9b510d'
)
  .then(res => res.json())
  .then(data => console.log(data));
