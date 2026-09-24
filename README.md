# 🛒 Catálogo de Produtos

Um catálogo de produtos eletrônicos com busca em tempo real, feito com **HTML, CSS e JavaScript puro** (sem frameworks ou bibliotecas). O projeto exibe uma vitrine de cards com imagem, marca, modelo, especificações e preço, e permite filtrar os itens por qualquer informação do produto.

## ✨ Funcionalidades

- **Vitrine dinâmica:** os cards são gerados via JavaScript a partir de uma lista de produtos, sem HTML repetido.
- **Busca por qualquer campo:** pesquisa por marca, modelo, especificações, preço ou categoria (ex.: `samsung`, `notebook`, `OLED`, `4K`).
- **Sem diferenciação de maiúsculas/minúsculas:** a busca normaliza o texto para minúsculas.
- **Mensagem de "nenhum resultado":** feedback ao usuário quando a busca não retorna produtos.
- **Etiqueta de categoria:** cada card mostra o tipo do produto (notebook, celular, tablet, videogame etc.).
- **Interface com efeitos:** hover nos cards (elevação) e nos botões, foco destacado no campo de busca e transições suaves.
- **Tema com variáveis CSS:** paleta de cores centralizada em `:root`, o que facilita a personalização.

## 📦 Categorias do catálogo

Notebooks, celulares, tablets, videogames, televisões, relógios, caixas de som, fones, câmeras, mouses, teclados e leitores digitais, totalizando **26 produtos** de marcas como Apple, Samsung, Sony, Lenovo, ASUS, Dell, LG, JBL, Canon, Logitech, entre outras.

## 🗂️ Estrutura do projeto

├── index.html
└── assets/
    ├── css/
    │ └── style.css
    ├── js/
    │ └── script.js
    └── images/
      └── (imagens dos produtos em .webp)


## 🚀 Como executar

Não há dependências nem etapa de build.

1. Clone o repositório:
```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
```
2. Abra o arquivo `index.html` no navegador
   (ou use uma extensão como o *Live Server* do VS Code).

## 🧠 Como funciona

**Dados:** os produtos ficam em um array no `script.js`, onde cada item é uma lista com a estrutura:

```js
["Marca", "Modelo", "Especificações", "Preço", "categoria", "caminho/da/imagem.webp"]
```

**Renderização:** a função `mostrar(lista)` limpa o catálogo e cria um `<li>` para cada produto, injetando o card com `innerHTML`. Também controla a exibição da mensagem "Nenhum produto encontrado."

**Busca:** ao enviar o formulário, o `submit` é interceptado com `preventDefault()` e o array é filtrado com `.filter()` + `.some()`, verificando se o termo digitado aparece em **qualquer** campo do produto. O resultado é passado novamente para `mostrar()`.

## ➕ Adicionando novos produtos

Basta incluir uma nova linha no array `produtos` em `assets/js/script.js` e colocar a imagem correspondente em `assets/images/`:

```js
["Marca", "Modelo", "Specs", "R$ 0.000", "categoria", "assets/images/arquivo.webp"],
```

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3
- JavaScript ES6 (manipulação do DOM, eventos, `filter`, `some`, template literals)

## 🔮 Melhorias futuras

- Filtro por categoria e faixa de preço
- Mudança de array para classe/objeto
- Ordenação (menor/maior preço, A-Z)
- Carrinho de compras funcional no botão "Comprar"
- Layout responsivo para telas menores (media queries)
- Busca em tempo real enquanto digita
- Migração dos dados para um arquivo `.json`

## 📄 Licença

Este projeto está sob a licença MIT.