const produtos = [
    ["Samsung", "Galaxy Book4", "Core i5, 8GB RAM, SSD 512GB", "R$ 3.300", "notebook", "assets/images/galaxybook4.webp"],
    ["Lenovo", "IdeaPad Slim 3", "Core i5, 8GB RAM, SSD 512GB", "R$ 3.100", "notebook", "assets/images/lenovoideapad3.webp"],
    ["ASUS", "Vivobook 15", "Core i5, 8GB RAM, SSD 512GB", "R$ 3.000", "notebook", "assets/images/asusvivobook.webp"],
    ["Acer", "Aspire 5", "Core i5, 8GB RAM, SSD 256GB", "R$ 2.800", "notebook", "assets/images/aceraspire5.webp"],
    ["Dell", "Inspiron 15", "Core i5, 8GB RAM, SSD 512GB", "R$ 3.400", "notebook", "assets/images/dellinspiron15.webp"],
    ["VAIO", "FE16", "Core i5, 16GB RAM, SSD 512GB", "R$ 3.200", "notebook", "assets/images/vaiofe16.webp"],
    ["Apple", "MacBook Air M2", "Chip M2, 8GB RAM, SSD 256GB", "R$ 6.800", "notebook", "assets/images/macbookair2.webp"],
    ["Apple", "iPhone 15", "128GB, Tela 6.1\", Câmera 48MP", "R$ 4.800", "celular", "assets/images/iphone15.webp"],
    ["Samsung", "Galaxy S24", "128GB, 8GB RAM, Tela 6.2\"", "R$ 4.200", "celular", "assets/images/galaxys24.webp"],
    ["Motorola", "Edge 50 Pro", "256GB, 12GB RAM, Tela 6.7\"", "R$ 3.100", "celular", "assets/images/edge50pro.webp"],
    ["Xiaomi", "Redmi Note 13", "256GB, 8GB RAM, Tela 6.67\"", "R$ 1.400", "celular", "assets/images/redminote13.webp"],
    ["Apple", "iPad Air M2", "128GB, Tela 11\", Wi-Fi", "R$ 5.300", "tablet", "assets/images/ipadairm2.webp"],
    ["Samsung", "Galaxy Tab S9 FE", "128GB, 6GB RAM, Tela 10.9\"", "R$ 2.600", "tablet", "assets/images/galaxytabs9.webp"],
    ["Sony", "PlayStation 5", "SSD 825GB, Controle DualSense", "R$ 3.700", "videogame", "assets/images/playstation5.webp"],
    ["Microsoft", "Xbox Series X", "SSD 1TB, 4K HDR", "R$ 4.100", "videogame", "assets/images/xboxseriesx.webp"],
    ["Nintendo", "Switch OLED", "64GB, Tela 7\" OLED", "R$ 2.100", "videogame", "assets/images/nintendoswitcholed.webp"],
    ["LG", "Smart TV OLED55C3", "55\", 4K, 120Hz, HDMI 2.1", "R$ 5.500", "televisão", "assets/images/lgoled.webp"],
    ["Samsung", "Smart TV QLED Q60C", "50\", 4K, Modo Game", "R$ 2.700", "televisão", "assets/images/tvsamsungoled.webp"],
    ["Apple", "Watch Series 9", "GPS, Caixa de Alumínio 45mm", "R$ 3.200", "relógio", "assets/images/watchseries9.webp"],
    ["Samsung", "Galaxy Watch 6", "BT 44mm, Monitor Cardíaco", "R$ 1.500", "relógio", "assets/images/watch6BT.webp"],
    ["JBL", "Boombox 3", "80W RMS, Bluetooth, IP67", "R$ 2.300", "caixa de som", "assets/images/jblboombox.webp"],
    ["Sony", "WH-1000XM5", "Fone Bluetooth, Cancelamento de Ruído", "R$ 2.200", "fone", "assets/images/sonyWH-1000XM5fone.webp"],
    ["Apple", "AirPods Pro (2ª Geração)", "Cancelamento Ativo de Ruído, MagSafe", "R$ 1.800", "fone", "assets/images/airpodspro2geracao.webp"],
    ["Canon", "EOS Rebel T7", "Lente 18-55mm, 24.1MP, Wi-Fi", "R$ 2.900", "câmera", "assets/images/cameracanonEOSRebelT7.webp"],
    ["Logitech", "G Pro X Superlight", "Mouse Gamer Sem Fio, 25K DPI", "R$ 700", "mouse", "assets/images/logitechgproxsuperlight.webp"],
    ["Razer", "BlackWidow V4", "Teclado Mecânico RGB, Switch Green", "R$ 1.100", "teclado", "assets/images/razerBlackWidowV4.webp"],
    ["Amazon", "Kindle Paperwhite", "16GB, Tela 6.8\", À Prova D'água", "R$ 750", "leitor digital", "assets/images/amazonkindlepaperwhit.webp"]
];

const catalogo = document.querySelector('#catalog');

function mostrar(lista) {
    catalogo.innerHTML = ""; 

    for (let i = 0; i < lista.length; i++) {
        const marca = lista[i][0];
        const modelo = lista[i][1];
        const specs = lista[i][2];
        const preco = lista[i][3];
        const tipo = lista[i][4];
        const image_url = lista[i][5];

        const item = document.createElement('li');
        item.innerHTML = `  <div class="top-box-item">
                                <div class="product-type">${tipo}</div>
                                <img src="${image_url}" alt="${marca} ${modelo}" class="product-image">
                            </div>   
                            <div class="line-box-item"></div>
                            <div class="bottom-box-item">
                                <p class="product-info product-marca">${marca}</p>
                                <h3 class="product-info product-modelo">${modelo}</h3>
                                <p class="product-info product-specs">${specs}</p>
                                <p class="product-info product-preco">${preco}</p>
                                <button class="btn-comprar-item product-info">Comprar</button>
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
        return produto.some(function (campo) {   // .some() verifica se existe ao menos campo neste produto
            return campo.toString().toLowerCase().includes(busca);
        });
    });

    mostrar(produtos_filtrados);
});