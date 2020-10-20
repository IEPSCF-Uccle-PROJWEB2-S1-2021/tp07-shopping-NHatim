// Écrivez votre code JavaScript ici.
const selecBtnAdd = document.querySelector('button');
selecBtnAdd.className = 'add.btn';
const selectUl = document.querySelector('ul');
const buttonDel = document.createElement('button');
let count = 0;


const renderItems = () => {

  if (document.querySelector('input').value === '') {
    return alert('Mauvaise valeur')
  }
  buttonDel.className = 'btn-del' + count;
  const selectBtnDel = '.'+buttonDel.className;
  const liAdd = document.createElement('li');
  liAdd.className = 'li' + count;
  const selectLi = '.'+liAdd.className;
  const spanAdd = document.createElement('span');
  const spanValue = document.querySelector('input').value;
  spanAdd.innerHTML = spanValue;
  liAdd.appendChild(spanAdd);
  buttonDel.innerHTML = 'Delete';

  liAdd.appendChild(buttonDel.cloneNode(true));
  selectUl.appendChild(liAdd)
  document.querySelector('input').value = '';

  count++;
  document.querySelector(selectBtnDel).addEventListener('click', (evt) => {
    evt.stopPropagation();
    document.querySelector(selectLi).remove();

  })

  document.querySelector('input').focus();

}

selecBtnAdd.addEventListener('click', renderItems)
