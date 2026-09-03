// Studio Bastos — vitrine digital (sem carrinho, sem sacola, sem agenda online).
// Cada card tem um botão "Agende pelo WhatsApp" que abre uma conversa já
// preenchida com o nome do serviço. Nada é acumulado, não existe checkout.

// (62) 99274-2808 — confirmado no Google Maps E no link direto da bio do
// Instagram (@studiobastos_), que aponta para
// api.whatsapp.com/send?phone=5562992742808. Duas fontes primárias
// convergentes, mas não houve teste real de conversa no wa.me — validar
// com o cliente antes de publicar de verdade.
const WHATSAPP_NUMBER = '5562992742808';
const INSTAGRAM_URL = 'https://instagram.com/studiobastos_';

const WHATSAPP_ICON_SVG = '<svg aria-hidden="true" class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>';

function agendarPeloWhatsapp(servicoId) {
    const servico = window.SERVICOS.find(s => s.id === servicoId);
    if (!servico) return;
    const texto = encodeURIComponent(`Olá! Vim pelo site do Studio Bastos e gostaria de agendar: ${servico.nome}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank');
}

function abrirWhatsappGenerico(mensagem) {
    const texto = encodeURIComponent(mensagem || 'Olá! Vim pelo site do Studio Bastos e gostaria de saber mais sobre os serviços.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank');
}

function abrirInstagram() {
    window.open(INSTAGRAM_URL, '_blank');
}

function irParaContato() {
    const footer = document.getElementById('footer-contato');
    if (footer) footer.scrollIntoView({ behavior: 'smooth' });
}

function irParaServicos() {
    const servicos = document.getElementById('servicos-container');
    if (servicos) servicos.scrollIntoView({ behavior: 'smooth' });
}

// --- Barra de categorias -----------------------------------------------------
// As "pills" da barra são âncoras (<a href="#tricologia">) para seções que o
// renderServicos cria dinamicamente. Como a busca pode remover seções inteiras do
// DOM, uma pill podia acabar apontando para uma seção que não existe mais: o clique
// não fazia nada e a pill continuava com aparência de clicável. As funções abaixo
// mantêm a barra coerente com o que está de fato na tela.

const CLASSES_PILL_ATIVA = ['bg-primary-container', 'text-on-primary-container'];
const CLASSES_PILL_INATIVA = ['bg-surface-container-high', 'text-on-surface'];

function pillsCategorias() {
    return Array.from(document.querySelectorAll('#category-nav a[href^="#"]'));
}

function categoriaDaPill(pill) {
    return pill.getAttribute('href').slice(1);
}

function destacarPill(pillAtiva) {
    pillsCategorias().forEach((pill) => {
        const ativa = pill === pillAtiva;
        pill.classList.remove(...(ativa ? CLASSES_PILL_INATIVA : CLASSES_PILL_ATIVA));
        pill.classList.add(...(ativa ? CLASSES_PILL_ATIVA : CLASSES_PILL_INATIVA));
    });
}

// Esconde as pills cujas seções a busca filtrou (clicar nelas não levaria a lugar
// nenhum) e garante que o destaque fique sempre numa pill visível.
function sincronizarPills(categoriasVisiveis) {
    const visiveis = pillsCategorias().filter((pill) => {
        const disponivel = categoriasVisiveis.includes(categoriaDaPill(pill));
        pill.classList.toggle('hidden', !disponivel);
        return disponivel;
    });
    const destaqueSumiu = !visiveis.some((pill) => pill.classList.contains('bg-primary-container'));
    if (destaqueSumiu && visiveis.length > 0) destacarPill(visiveis[0]);
}

document.addEventListener('DOMContentLoaded', () => {
    renderServicos();

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => renderServicos(e.target.value));
    }

    // O scroll em si fica por conta da âncora nativa + html { scroll-behavior: smooth };
    // o recuo para o título não ficar atrás das barras fixas vem da classe
    // .scroll-target aplicada nas seções. Aqui só cuidamos do destaque visual.
    pillsCategorias().forEach((pill) => {
        pill.addEventListener('click', (e) => destacarPill(e.currentTarget));
    });
});

function formatPreco(preco) {
    return `a partir de R$ ${preco.toFixed(2).replace('.', ',')}`;
}

function renderServicos(termoBusca) {
    if (!window.SERVICOS || !window.CATEGORIAS) {
        console.error('Dados do catálogo não carregados (servicos-data.js)');
        return;
    }
    const servicosContainer = document.getElementById('servicos-container');
    if (!servicosContainer) return;
    servicosContainer.innerHTML = '';
    const termo = (termoBusca || '').trim().toLowerCase();
    const categoriasVisiveis = [];

    Object.keys(window.CATEGORIAS).forEach((catKey) => {
        const cat = window.CATEGORIAS[catKey];
        let servicos = window.SERVICOS.filter((s) => s.categoria === catKey);
        if (termo) {
            servicos = servicos.filter((s) =>
                (s.nome || '').toLowerCase().includes(termo) ||
                (s.descricao || '').toLowerCase().includes(termo)
            );
        }
        if (servicos.length === 0) return;

        categoriasVisiveis.push(catKey);
        const section = document.createElement('section');
        section.id = catKey;
        // .scroll-target recua a âncora pela altura real das barras fixas (--sticky-h).
        section.className = 'scroll-target';
        section.innerHTML = `
            <div class="mb-4">
                <h2 class="font-headline-md text-headline-md text-primary flex items-center gap-2">
                    <span class="material-symbols-outlined">${cat.icone}</span>
                    ${cat.titulo}
                </h2>
                <p class="font-body-md text-body-md text-on-surface-variant">${cat.descricao}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter" id="${catKey}-grid"></div>
        `;
        servicosContainer.appendChild(section);
        const grid = document.getElementById(`${catKey}-grid`);
        servicos.forEach((servico) => grid.appendChild(servico.imagem ? createCardComFoto(servico) : createCardSemFoto(servico)));
    });

    sincronizarPills(categoriasVisiveis);

    if (servicosContainer.children.length === 0) {
        servicosContainer.innerHTML = `
            <div class="flex flex-col items-center justify-center text-center py-16 opacity-70">
                <span class="material-symbols-outlined text-5xl mb-3 text-outline">search_off</span>
                <p class="text-on-surface-variant mb-4">Nenhum serviço encontrado. Tente outra busca.</p>
                <button onclick="document.getElementById('search-input').value=''; renderServicos();" class="text-primary underline font-bold">Limpar busca</button>
            </div>
        `;
    }
}

function createCardComFoto(servico) {
    const card = document.createElement('div');
    card.className = 'clinical-card rounded-lg overflow-hidden flex flex-col';
    card.innerHTML = `
        <div class="relative aspect-square w-full bg-surface-container-high">
            <img class="w-full h-full object-cover" src="${servico.imagem}" alt="${servico.nome}">
            <div class="absolute top-3 right-3 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps px-3 py-1 rounded-full shadow-sm">${formatPreco(servico.preco)}</div>
            ${servico.destaque ? '<div class="absolute top-3 left-3 bg-primary-container/90 text-on-primary-container font-label-caps text-label-caps px-2 py-1 rounded-md backdrop-blur-sm">Destaque</div>' : ''}
        </div>
        <div class="p-4 flex flex-col flex-grow">
            <h3 class="font-headline-sm text-headline-sm text-on-surface mb-1">${servico.nome}</h3>
            <p class="font-body-md text-body-md text-on-surface-variant/80 mb-4 flex-grow">${servico.descricao}</p>
            <button onclick="agendarPeloWhatsapp('${servico.id}')" class="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-caps text-label-caps py-3 rounded transition-all shadow-sm">
                ${WHATSAPP_ICON_SVG}
                Agende pelo WhatsApp
            </button>
        </div>
    `;
    return card;
}

function createCardSemFoto(servico) {
    const card = document.createElement('div');
    card.className = 'clinical-card rounded-lg p-4 flex flex-col';
    card.innerHTML = `
        <!-- flex-wrap é o que impede o badge de preço de vazar do card: em coluna
             estreita (grid de 3 no desktop) o título em Playfair + o badge com
             whitespace-nowrap não cabiam na mesma linha e o badge era cortado pela
             borda. Sem espaço, ele agora desce para a linha de baixo. -->
        <div class="flex flex-wrap justify-between items-start gap-x-3 gap-y-2 mb-1">
            <h3 class="font-headline-sm text-headline-sm text-on-surface">${servico.nome}</h3>
            <span class="shrink-0 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps px-3 py-1 rounded-full shadow-sm whitespace-nowrap">${formatPreco(servico.preco)}</span>
        </div>
        ${servico.destaque ? '<span class="inline-block w-max mb-2 bg-primary-container/20 text-primary font-label-caps text-label-caps px-2 py-1 rounded-md">Destaque</span>' : ''}
        <p class="font-body-md text-body-md text-on-surface-variant/80 mb-4 flex-grow">${servico.descricao}</p>
        <button onclick="agendarPeloWhatsapp('${servico.id}')" class="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-caps text-label-caps py-3 rounded transition-all shadow-sm">
            ${WHATSAPP_ICON_SVG}
            Agende pelo WhatsApp
        </button>
    `;
    return card;
}
