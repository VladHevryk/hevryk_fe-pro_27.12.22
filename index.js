const add = document.querySelector('#add');

function addNewText (prompt) {
  const div = document.createElement('div');
  div.classList.add('new_text');
  div.innerHTML = `<span>${prompt}</span>`;
  div.addEventListener('click', function(e){
    this.classList.toggle('change_bg');
  });
  return div;
};

const input = document.querySelector('#input');
input.addEventListener('click', function(e){
  add.appendChild(addNewText(prompt('add text')));
});

const output = document.querySelector('#output');
output.addEventListener('click', function(e){
  const removeDiv = document.querySelectorAll('.new_text');
  const removeDivLen = removeDiv.length-1;
  removeDiv[removeDivLen].remove();
});

