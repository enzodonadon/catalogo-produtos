import {produtos} from './produtos.js';

const catalogo = document.querySelector('#catalog');

function mostrar(lista) {
    catalogo.innerHTML = ""; 

    for (let i = 0; i < lista.length; i++) {
        const item = document.createElement('li');
        item.innerHTML = `  <div class="top-box-item">
                                <div class="product-type">${lista[i].tipo}</div>
                                <img src="${lista[i].imagem}" alt="${lista[i].marca} ${lista[i].modelo}" class="product-image">
                            </div>   
                            <div class="line-box-item"></div>
                            <div class="bottom-box-item">
                                <p class="product-info product-marca">${lista[i].marca}</p>
                                <h3 class="product-info product-modelo">${lista[i].modelo}</h3>
                                <p class="product-info product-specs">${lista[i].specs}</p>
                                <p class="product-info product-preco">${lista[i].preco}</p>
                                <button type="click" class="btn-comprar-item product-info">Comprar</button>
                            </div>`;
        item.setAttribute('class', 'item card');
        catalogo.appendChild(item);
}

    const aviso = document.querySelector('#no-results');

    if (lista.length === 0) {
        aviso.hidden = false;
        aviso.textContent = 'Nenhum produto encontrado.';
    } else {
        aviso.hidden = true;
    }
}

mostrar(produtos);

const form = document.querySelector('form');

form.addEventListener('submit', function (evento) {
    evento.preventDefault(); // impede o formulário de recarregar a página
    
    const busca = document.getElementById('fsearch').value.toLowerCase();

    const produtos_filtrados = produtos.filter(function (produto) {
        return Object.values(produto).some(function (campo) {   // .some() verifica se existe ao menos campo neste produto
            return campo.toString().toLowerCase().includes(busca);
        });
    });

    mostrar(produtos_filtrados);
});