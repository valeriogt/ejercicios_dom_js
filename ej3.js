// 1.1 Lista de países
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement('ul');
countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ulCountries.appendChild(li);
});
document.body.appendChild(ulCountries);

// 1.2 Elimina .fn-remove-me
const removeMe = document.querySelector('.fn-remove-me');
if (removeMe) removeMe.remove();

// 1.3 Lista de coches en el div
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divPrintHere = document.querySelector('div[data-function="printHere"]');
const ulCars = document.createElement('ul');
cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
});
divPrintHere.appendChild(ulCars);

// 1.4 Serie de divs con h4 e img
const countriesList = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const divContainer = document.createElement('div');
divContainer.id = 'countries-container';
countriesList.forEach(item => {
  const div = document.createElement('div');
  div.className = 'country-block';

  const h4 = document.createElement('h4');
  h4.textContent = item.title;
  const img = document.createElement('img');
  img.src = item.imgUrl;

  div.appendChild(h4);
  div.appendChild(img);

  divContainer.appendChild(div);
});
document.body.appendChild(divContainer);

// 1.5 Botón que elimina el último div
const btnRemoveLast = document.createElement('button');
btnRemoveLast.textContent = 'Eliminar último';
btnRemoveLast.onclick = function() {
  const container = document.getElementById('countries-container');
  if (container && container.lastElementChild) {
    container.lastElementChild.remove();
  }
};
document.body.appendChild(btnRemoveLast);

// 1.6 Botón para eliminar individualmente cada div
const divContainer2 = document.createElement('div');
divContainer2.id = 'countries-container-2';
countriesList.forEach(item => {
  const div = document.createElement('div');
  div.className = 'country-block';

  const h4 = document.createElement('h4');
  h4.textContent = item.title;
  const img = document.createElement('img');
  img.src = item.imgUrl;

  // Botón de eliminar individual
  const btnRemove = document.createElement('button');
  btnRemove.textContent = 'Eliminar este';
  btnRemove.onclick = function() {
    div.remove();
  };

  div.appendChild(h4);
  div.appendChild(img);
  div.appendChild(btnRemove);

  divContainer2.appendChild(div);
});
document.body.appendChild(divContainer2);
