// 1.1 Botón y evento click
const btn = document.createElement('button');
btn.id = 'btnToClick';
btn.textContent = 'Haz click aquí';
document.body.appendChild(btn);
btn.addEventListener('click', function(event) {
  console.log('Evento click:', event);
});

// 1.2 Evento focus en input
const inputFocus = document.querySelector('input.focus');
inputFocus.addEventListener('focus', function(event) {
  console.log('Valor al enfocar:', event.target.value);
});

// 1.3 Evento input en input
const inputValue = document.querySelector('input.value');
inputValue.addEventListener('input', function(event) {
  console.log('Valor en input:', event.target.value);
});
