// 2.1
const divVacio = document.createElement('div');
document.body.appendChild(divVacio);

// 2.2
const divConP = document.createElement('div');
const pDentro = document.createElement('p');
divConP.appendChild(pDentro);
document.body.appendChild(divConP);

// 2.3
const divCon6P = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p');
  divCon6P.appendChild(p);
}
document.body.appendChild(divCon6P);

// 2.4
const pDinamico = document.createElement('p');
pDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(pDinamico);

// 2.5
const h2Insert = document.querySelector('h2.fn-insert-here');
h2Insert.textContent = 'Wubba Lubba dub dub';

// 2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
apps.forEach(app => {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
});
document.body.appendChild(ul);

// 2.7
document.querySelectorAll('.fn-remove-me').forEach(el => el.remove());

// 2.8
const allDivs = document.querySelectorAll('body > div');
if (allDivs.length >= 2) {
  const pMedio = document.createElement('p');
  pMedio.textContent = 'Voy en medio!';
  allDivs[0].after(pMedio);
}

// 2.9
document.querySelectorAll('div.fn-insert-here').forEach(div => {
  const p = document.createElement('p');
  p.textContent = 'Voy dentro!';
  div.appendChild(p);
});
