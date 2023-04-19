'use strict'
 
//proof of life

const header = document.getElementById('header');
const title = document.createElement('h1');

title.id = 'headerTitle'

title.textContent = 'DOMS Forms';
header.appendChild(title)

// DOM Form

const form = document.getElementsByTagName('*')[0];
const label = document.createElement('label');
const input = document.createElement('input');
const submit = document.createElement('input');
const feild = document.getElementById('first');
const content = document.createElement('textarea')
const main = document.getElementById('main');

label.textContent = 'Topic:';
input.type = 'text';
input.id = 'title';
input.name = 'input';
content.id = 'info';
content.name = 'content';
content.rows = '5';
content.cols = '30';
submit.type = 'submit';

feild.appendChild(label);
feild.appendChild(input);
feild.appendChild(content);
feild.appendChild(submit);

form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault();

    const title = event.target.input.value;
    const content = event.target.content.value;

    const h1 = document.createElement('h1')
    const p = document.createElement('p')

    h1.textContent = (title);
    p.textContent = (content);

    const formContent = document.getElementById('render');

    formContent.appendChild(h1);
    formContent.appendChild(p);
}
