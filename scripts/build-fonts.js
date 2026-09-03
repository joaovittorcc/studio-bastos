#!/usr/bin/env node
/**
 * Baixa as fontes do Google Fonts e as grava em fonts/ para serem servidas
 * pelo próprio domínio.
 *
 * Por que auto-hospedar em vez de linkar fonts.googleapis.com direto:
 * o site inteiro usa Material Symbols para os ícones. Quando a requisição ao
 * Google falha (rede ruim, DNS, bloqueio corporativo), a fonte de ícones não
 * carrega e cada <span class="material-symbols-outlined">search</span> aparece
 * como a palavra "search" na tela — o mesmo vale para "science", "location_on",
 * "content_cut" etc. O site fica visivelmente quebrado. Servindo local, não.
 *
 * O Material Symbols é baixado já subsetado apenas nos ícones que o site usa
 * (ICONS abaixo): 19 KB em vez dos ~3 MB da fonte completa. Ao adicionar um
 * ícone novo no HTML/JS, inclua o nome dele em ICONS e rode `npm run build:fonts`.
 *
 * Uso: npm run build:fonts
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
const OUT_DIR = path.join(__dirname, '..', 'fonts');
const KEEP_SUBSETS = ['latin', 'latin-ext']; // site é pt-BR

const ICONS = [
    'auto_awesome', 'chat', 'content_cut', 'info', 'location_on', 'palette',
    'photo_camera', 'science', 'search', 'search_off', 'spa', 'star', 'visibility',
].join(',');

const TEXT_CSS_URL =
    'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;600&family=Playfair+Display:wght@500;600&display=swap';
const ICONS_CSS_URL =
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' +
    `&icon_names=${ICONS}&display=block`;

const curl = (url, binary) =>
    execFileSync('curl', ['-sS', '--fail', '-A', UA, '--max-time', '40', url], {
        maxBuffer: 64 * 1024 * 1024,
        encoding: binary ? 'buffer' : 'utf8',
    });

// Hanken Grotesk e Playfair Display são fontes variáveis: o Google devolve o
// MESMO arquivo para os dois pesos declarados. Gravamos uma vez só e apontamos
// as duas regras @font-face para ele.
const byHash = new Map();
function saveWoff2(url, preferredName) {
    const buf = curl(url, true);
    const hash = crypto.createHash('md5').update(buf).digest('hex');
    if (byHash.has(hash)) return byHash.get(hash);
    fs.writeFileSync(path.join(OUT_DIR, preferredName), buf);
    byHash.set(hash, preferredName);
    console.log(`  ${preferredName} (${(buf.length / 1024).toFixed(1)} KB)`);
    return preferredName;
}

fs.mkdirSync(OUT_DIR, { recursive: true });
for (const f of fs.readdirSync(OUT_DIR)) {
    if (f.endsWith('.woff2')) fs.unlinkSync(path.join(OUT_DIR, f));
}

const out = [];

console.log('Baixando fontes de texto...');
for (const block of curl(TEXT_CSS_URL).split(/(?=\/\*)/)) {
    const subset = block.trim().match(/^\/\*\s*([a-z-]+)\s*\*\//)?.[1];
    if (!subset || !KEEP_SUBSETS.includes(subset)) continue;
    const family = block.match(/font-family:\s*'([^']+)'/)[1];
    const weight = block.match(/font-weight:\s*(\d+)/)[1];
    const url = block.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/)[1];
    const name = saveWoff2(url, `${family.toLowerCase().replace(/ /g, '-')}-${weight}-${subset}.woff2`);
    out.push(block.replace(url, name).trim());
}

console.log('Baixando Material Symbols (subsetado)...');
const iconsCss = curl(ICONS_CSS_URL);
const iconsUrl = iconsCss.match(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/)[1];
out.push(iconsCss.replace(iconsUrl, saveWoff2(iconsUrl, 'material-symbols-outlined.woff2')).trim());

const header = `/* GERADO POR scripts/build-fonts.js — NÃO EDITE À MÃO.
 * Rode \`npm run build:fonts\` para regerar.
 *
 * Fontes auto-hospedadas para que uma falha de rede até o Google não quebre a
 * página: sem a fonte de ícones, todo <span class="material-symbols-outlined">
 * vira o nome do ícone em texto puro ("search", "science", "location_on").
 */

`;
fs.writeFileSync(path.join(OUT_DIR, 'fonts.css'), header + out.join('\n\n') + '\n');
console.log(`\nfonts/fonts.css gerado — ${byHash.size} arquivo(s) woff2 únicos.`);
