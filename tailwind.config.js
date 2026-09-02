// Paleta e tokens extraídos de
// stitch-export/.../botanical_clinical_elegance/DESIGN.md
// (tema "Botanical Clinical Elegance" gerado pelo Stitch para este cliente —
// NÃO reaproveita a paleta de nenhum outro projeto do repositório).
//
// Observação: o DESIGN.md não define tokens de spacing separados para margem
// horizontal (tipo "margin-mobile"/"margin-desktop" do tema do Aconchego) —
// só "gutter" (24px, gap entre componentes) e "section-padding-mobile/desktop"
// (padding vertical entre seções). Por isso o index.html usa px-4/md:px-8
// (padrão que o próprio export do Stitch usa no header/hero) e px-gutter no
// conteúdo, em vez de inventar um token de margem que não existe na ficha.
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface": "#fff8f5",
        "surface-dim": "#e1d8d4",
        "surface-bright": "#fff8f5",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#fbf2ed",
        "surface-container": "#f5ece7",
        "surface-container-high": "#efe6e2",
        "surface-container-highest": "#e9e1dc",
        "on-surface": "#1e1b18",
        "on-surface-variant": "#414846",
        "inverse-surface": "#34302c",
        "inverse-on-surface": "#f8efea",
        "outline": "#717976",
        "outline-variant": "#c1c8c4",
        "surface-tint": "#43655c",
        "primary": "#01261f",
        "on-primary": "#ffffff",
        "primary-container": "#1a3c34",
        "on-primary-container": "#83a69c",
        "inverse-primary": "#aacec3",
        "secondary": "#775a19",
        "on-secondary": "#ffffff",
        "secondary-container": "#fed488",
        "on-secondary-container": "#785a1a",
        "tertiary": "#21211d",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#363632",
        "on-tertiary-container": "#a19f99",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "primary-fixed": "#c5eadf",
        "primary-fixed-dim": "#aacec3",
        "on-primary-fixed": "#00201a",
        "on-primary-fixed-variant": "#2b4d44",
        "secondary-fixed": "#ffdea5",
        "secondary-fixed-dim": "#e9c176",
        "on-secondary-fixed": "#261900",
        "on-secondary-fixed-variant": "#5d4201",
        "tertiary-fixed": "#e5e2db",
        "tertiary-fixed-dim": "#c9c6c0",
        "on-tertiary-fixed": "#1c1c18",
        "on-tertiary-fixed-variant": "#474742",
        "background": "#fff8f5",
        "on-background": "#1e1b18",
        "surface-variant": "#e9e1dc"
      },
      borderRadius: {
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "base": "8px",
        "container-max": "1280px",
        "gutter": "24px",
        "section-padding-mobile": "64px",
        "section-padding-desktop": "120px"
      },
      fontFamily: {
        "display-lg": ["Playfair Display", "serif"],
        "display-lg-mobile": ["Playfair Display", "serif"],
        "headline-md": ["Playfair Display", "serif"],
        "headline-sm": ["Playfair Display", "serif"],
        "body-lg": ["Hanken Grotesk", "sans-serif"],
        "body-md": ["Hanken Grotesk", "sans-serif"],
        "label-caps": ["Hanken Grotesk", "sans-serif"]
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-lg-mobile": ["36px", { lineHeight: "1.2", fontWeight: "600" }],
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "500" }],
        "headline-sm": ["24px", { lineHeight: "1.4", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.1em", fontWeight: "600" }]
      }
    }
  },
  plugins: []
};
