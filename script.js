// script.js
const tituloElement = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const linkElement = document.getElementById('link');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo aos elementos
tituloElement.innerText = 'Título do Projeto';
linkElement.innerText = 'Visite o site da Proz Educação';
linkElement.href = 'https://prozeducacao.com.br';

// Adicionando itens à lista não ordenada
const itensNaoOrdenados = ['Item 1', 'Item 2', 'Item 3'];
itensNaoOrdenados.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item;
    listaNaoOrdenada.appendChild(li);
});

// Adicionando itens à lista ordenada
const itensOrdenados = [
    { texto: 'Google', link: 'https://www.google.com' },
    { texto: 'GitHub', link: 'https://github.com' },
    { texto: 'LinkedIn', link: 'https://www.linkedin.com' }
];
itensOrdenados.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${item.link}" target="_blank">${item.texto}</a>`;
    listaOrdenada.appendChild(li);
});
