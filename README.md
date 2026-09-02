# Studio Bastos — Vitrine Digital (Catálogo de Serviços)

Site demo de vitrine digital para pitch. Construído a partir de export do Google Stitch, com dados reais confirmados via pesquisa (`prompt_design_stitch.md`). Não é um site de agendamento online: não existe carrinho, sacola, calendário de horários ou formulário de reserva — cada card tem um botão **"Agende pelo WhatsApp"** que abre uma conversa já com o nome do serviço preenchido.

## Catálogo Demonstrativo

Todos os serviços estão marcados com `exemplo: true` em `js/servicos-data.js`, e o site mostra um aviso fixo no topo: "VITRINE DEMONSTRATIVA". Não existe catálogo de serviços publicado pelo Studio Bastos em nenhum site próprio — a ficha de pesquisa só confirma, em fonte primária (Google Maps), que o negócio é um salão de beleza especializado em **tricologia/terapia capilar**, também oferecendo manicure, pedicure e corte feminino.

O próprio prompt de design lista "categorias prováveis" (sem nome de serviço específico, descrição detalhada ou preço confirmado): Avaliação/tratamento capilar (tricologia), corte, manicure, sobrancelhas, maquiagem. As **5 categorias do site replicam exatamente essa lista**. Dentro de cada uma, os nomes de serviço usados são genéricos e plausíveis (ex: "Avaliação Capilar", "Corte Feminino"), nunca os nomes clínicos específicos que o export do Stitch inventou.

Nenhuma foto de serviço é usada no grid (todos os cards são "sem foto") — as únicas fotos do export do Stitch que poderiam ilustrar um serviço específico eram fotos de ambiente/equipe genéricas, sem vínculo com nenhum tratamento em particular, então nenhuma foi forçada a ilustrar um card específico.

## Dados reais confirmados

- Endereço: Av. C-197, Qd534 Lt01 nº1208, Jardim América, Goiânia-GO
- Nota: 4,9★ (45 avaliações) no Google Maps
- Instagram: [@studiobastos_](https://instagram.com/studiobastos_), 2.791 seguidores, 337 posts — ativo (post de 15/08/2026)
- Telefone/WhatsApp: (62) 99274-2808

**⚠️ Atenção — WhatsApp não confirmado por handshake real:** o número (62) 99274-2808 é convergente em duas fontes primárias (Google Maps e o link direto da bio do Instagram, `api.whatsapp.com/send?phone=5562992742808`), mas **não houve teste real de conversa no wa.me**. Validar com o cliente antes de qualquer uso real.

**Horário de funcionamento: não confirmado.** A ficha de pesquisa não traz horário de atendimento em nenhuma fonte primária — por isso o site **não exibe nenhum horário**, nem um badge de "aberto agora". O export do Stitch (tela `contato_studio_bastos`) trazia um horário fabricado ("Seg a Sáb, 09h às 19h") que não tem respaldo em nenhuma fonte e foi descartado.

**"+25 anos" tratado como tradição local, não como fato cravado:** a ficha registra isso como inferência de avaliações de clientes no Google, não como dado oficial confirmado pelo salão. Por isso o hero usa a frase "Tradição local em tricologia", sem afirmar um número exato de anos — conforme pedido explícito do próprio prompt de design.

## O que o export do Stitch precisou de ajuste

O export trouxe 4 telas (`in_cio`, `servi_os`, `sobre`, `contato`), todas puxando para um site institucional multi-página com agendamento — bem diferente da vitrine de catálogo único que este briefing pediu:

- **Serviços clínicos específicos inventados**: a tela `servi_os_studio_bastos` gerava nomes e descrições de tratamento extremamente específicos e tecnicamente detalhados (ex: "Análise de Couro Cabeludo com dermatoscópio digital", "Terapia Detox Capilar", "Microagulhamento Capilar", "Tratamentos de Reconstrução" com "aminoácidos de alta performance") — nenhum desses nomes ou protocolos aparece na ficha de pesquisa. Foram **descartados**. Os serviços usados no site final são genéricos e diretamente derivados das 5 categorias confirmadas (ex: "Avaliação Capilar (Diagnóstico)", "Tratamento Capilar Personalizado"), todos marcados como exemplo.
- **Preços fabricados**: nenhum preço da tela `servi_os` foi reaproveitado — o Stitch não chegou a mostrar preços nos cards de serviço, mas o briefing original já pedia "a partir de R$X" como placeholder; os valores usados aqui (R$ 35 a R$ 150) são redondos e plausíveis para o segmento, claramente marcados como exemplo.
- **Botão "Agendar" e formulário de contato completo (nome/telefone/assunto/mensagem) na tela `contato_studio_bastos`**: isso monta um fluxo de agendamento/formulário que o briefing pediu explicitamente para NÃO existir ("não monte sacola, carrinho, cupom... nem calculadora de frete" — e, por extensão do padrão do lote, nada de calendário/formulário de reserva). O formulário foi **removido**; o CTA de contato do site é só o botão flutuante e os links de rodapé, todos abrindo o WhatsApp.
- **E-mail fabricado (`contato@studiobastos.com.br`) e telefone placeholder (`(62) 99999-9999`)** na tela `contato_studio_bastos`: nenhum dos dois é real — a ficha só confirma o WhatsApp (62) 99274-2808. Nenhum e-mail é usado no site.
- **Mapa institucional (imagem de mapa genérica gerada por IA)**: descartado — o endereço real aparece só como texto no rodapé, sem mapa fabricado.
- **Múltiplas páginas (Início/Serviços/Sobre/Contato) com nav por âncora `href="#"` sem destino real**: consolidado em uma única página (`index.html`), como vitrine de catálogo — igual ao padrão do restante do lote. A navegação usa scroll suave para seções reais (categorias, rodapé) em vez de links quebrados.
- **Foto de hero reaproveitada**: a foto de ambiente/tratamento capilar sereno da tela `in_cio_studio_bastos` (sem UI, texto ou marca de concorrente embutidos) foi mantida como imagem de cabeçalho — é uma foto ilustrativa gerada por IA, não um ativo de marca real do salão.
- **Logo**: o export não gerou um ícone de logo separado para este cliente (diferente de outros do lote) — o header usa só o nome em texto ("Studio Bastos"), até que o cliente forneça um logo real.
- **Paleta e tipografia**: mantidas exatamente como veio no `DESIGN.md` do export ("Botanical Clinical Elegance" — verde botânico profundo, dourado como acento, branco clínico, Playfair Display + Hanken Grotesk), sem nenhum ajuste.
- **Sem carrinho/sacola/agendamento online**: nenhuma das 4 telas trazia carrinho — mantido: cada card só tem "Agende pelo WhatsApp", sem acumular pedido, sem checkout, sem calendário.

## Rodando localmente

```bash
npm install
npm run dev
```

Sobe o Tailwind em modo watch + live-server na porta **5008**.

Para gerar o CSS de produção sem subir servidor:

```bash
npm run build:css
```

## Pendente de validação com o cliente

- Confirmar que (62) 99274-2808 é WhatsApp Business ativo (não houve teste real de conversa).
- Catálogo real completo, com nomes, descrições, fotos e preços de verdade (o que está aqui é só estrutura + 6 itens de exemplo, sem foto).
- Horário de funcionamento (não confirmado em nenhuma fonte da pesquisa).
- Logo real da marca (não há ativo de marca gerado ou confirmado para este cliente).
- Se "+25 anos" pode ser afirmado como fato (hoje é só inferência de avaliações, tratada como "tradição local" no site).
