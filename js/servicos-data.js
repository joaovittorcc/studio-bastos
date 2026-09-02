/**
 * CATÁLOGO DE SERVIÇOS - Studio Bastos
 *
 * FORMATO DE CADA SERVIÇO:
 * {
 *   id, categoria (tricologia|corte|manicure|sobrancelhas|maquiagem), nome, descricao,
 *   preco: número (valor "a partir de" — formatado como "a partir de R$X" pelo main.js),
 *   imagem: "https://..." ou null,
 *   destaque: false,
 *   exemplo: true          // true = item de demonstração
 * }
 *
 * IMPORTANTE: Todos os itens abaixo são EXEMPLOS (exemplo: true).
 * Não existe catálogo de serviços publicado pelo Studio Bastos em nenhum site próprio —
 * a ficha de pesquisa (prompt_design_stitch.md) só confirma, em fonte primária (Google
 * Maps), que o negócio é um salão de beleza especializado em tricologia/terapia capilar,
 * também oferecendo manicure, pedicure e corte feminino. O próprio prompt de design lista
 * "categorias prováveis": Avaliação/tratamento capilar (tricologia), corte, manicure,
 * sobrancelhas, maquiagem — nenhuma delas veio com nome de serviço específico, descrição
 * detalhada ou preço confirmado.
 *
 * As 5 categorias abaixo replicam exatamente essa lista da ficha. Dentro de cada uma, os
 * nomes de serviço são genéricos e plausíveis (ex: "Avaliação Capilar", "Corte Feminino"),
 * NÃO os nomes de serviço específicos e descrições clínicas detalhadas que o export do
 * Stitch inventou (ex: "Análise de Couro Cabeludo com dermatoscópio digital", "Terapia
 * Detox Capilar", "Microagulhamento Capilar") — esses nomes e descrições não têm respaldo
 * na ficha e foram descartados daqui. Ver README para detalhes do que foi ajustado.
 *
 * Nenhuma foto de serviço é usada no grid (todos os cards são "sem foto"), pelo mesmo
 * motivo documentado no README: as únicas fotos do export do Stitch que poderiam ilustrar
 * um serviço específico traziam texto/UI fabricado embutido na imagem (mockup de site,
 * nome de tratamento, botões) — inadequadas para uso direto.
 */

window.CATEGORIAS = {
    'tricologia': {
        titulo: 'Tricologia / Terapia Capilar',
        icone: 'science',
        descricao: 'A especialidade da casa — avaliação e tratamento do couro cabeludo e dos fios.'
    },
    'corte': {
        titulo: 'Corte Feminino',
        icone: 'content_cut',
        descricao: 'Cortes personalizados, com acabamento e finalização.'
    },
    'manicure': {
        titulo: 'Manicure e Pedicure',
        icone: 'spa',
        descricao: 'Cuidado completo para mãos e pés.'
    },
    'sobrancelhas': {
        titulo: 'Sobrancelhas',
        icone: 'visibility',
        descricao: 'Design e cuidado para valorizar o olhar.'
    },
    'maquiagem': {
        titulo: 'Maquiagem',
        icone: 'palette',
        descricao: 'Maquiagem para eventos e ocasiões especiais.'
    }
};

window.SERVICOS = [
    {
        id: 'avaliacao-capilar',
        categoria: 'tricologia',
        nome: 'Avaliação Capilar (Diagnóstico)',
        descricao: 'Análise do couro cabeludo e dos fios para identificar a causa de queda, oleosidade ou ressecamento e indicar o tratamento mais adequado. Primeiro passo antes de qualquer terapia capilar.',
        preco: 80,
        imagem: null,
        destaque: true,
        exemplo: true
    },
    {
        id: 'tratamento-capilar-personalizado',
        categoria: 'tricologia',
        nome: 'Tratamento Capilar Personalizado',
        descricao: 'Protocolo de terapia capilar definido a partir do diagnóstico. Exemplo ilustrativo de como o catálogo real de tratamentos pode ser detalhado — sessões, produtos e valores reais a definir com a casa.',
        preco: 150,
        imagem: null,
        destaque: false,
        exemplo: true
    },
    {
        id: 'corte-feminino',
        categoria: 'corte',
        nome: 'Corte Feminino',
        descricao: 'Corte personalizado ao formato do rosto, com lavagem e finalização.',
        preco: 60,
        imagem: null,
        destaque: false,
        exemplo: true
    },
    {
        id: 'manicure-pedicure',
        categoria: 'manicure',
        nome: 'Manicure e Pedicure',
        descricao: 'Cuidado completo para unhas das mãos e dos pés, com esmaltação.',
        preco: 45,
        imagem: null,
        destaque: false,
        exemplo: true
    },
    {
        id: 'design-sobrancelhas',
        categoria: 'sobrancelhas',
        nome: 'Design de Sobrancelhas',
        descricao: 'Modelagem personalizada para valorizar o olhar.',
        preco: 35,
        imagem: null,
        destaque: false,
        exemplo: true
    },
    {
        id: 'maquiagem-social',
        categoria: 'maquiagem',
        nome: 'Maquiagem Social',
        descricao: 'Maquiagem para eventos e ocasiões especiais.',
        preco: 120,
        imagem: null,
        destaque: false,
        exemplo: true
    }
];
