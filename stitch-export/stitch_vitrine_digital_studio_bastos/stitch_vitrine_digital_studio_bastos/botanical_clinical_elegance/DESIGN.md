---
name: Botanical Clinical Elegance
colors:
  surface: '#fff8f5'
  surface-dim: '#e1d8d4'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf2ed'
  surface-container: '#f5ece7'
  surface-container-high: '#efe6e2'
  surface-container-highest: '#e9e1dc'
  on-surface: '#1e1b18'
  on-surface-variant: '#414846'
  inverse-surface: '#34302c'
  inverse-on-surface: '#f8efea'
  outline: '#717976'
  outline-variant: '#c1c8c4'
  surface-tint: '#43655c'
  primary: '#01261f'
  on-primary: '#ffffff'
  primary-container: '#1a3c34'
  on-primary-container: '#83a69c'
  inverse-primary: '#aacec3'
  secondary: '#775a19'
  on-secondary: '#ffffff'
  secondary-container: '#fed488'
  on-secondary-container: '#785a1a'
  tertiary: '#21211d'
  on-tertiary: '#ffffff'
  tertiary-container: '#363632'
  on-tertiary-container: '#a19f99'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c5eadf'
  primary-fixed-dim: '#aacec3'
  on-primary-fixed: '#00201a'
  on-primary-fixed-variant: '#2b4d44'
  secondary-fixed: '#ffdea5'
  secondary-fixed-dim: '#e9c176'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4201'
  tertiary-fixed: '#e5e2db'
  tertiary-fixed-dim: '#c9c6c0'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#474742'
  background: '#fff8f5'
  on-background: '#1e1b18'
  surface-variant: '#e9e1dc'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-padding-desktop: 120px
  section-padding-mobile: 64px
  gutter: 24px
  container-max: 1280px
---

## Brand & Style

The design system is built on a "Botanical Clinical" narrative—a fusion of rigorous scientific expertise (Trichology) and high-end restorative wellness. The goal is to evoke trust through precision while maintaining a sense of organic luxury.

The visual style is **Modern Minimalism** with **Tactile** accents. It prioritizes vast negative space, high-quality photography, and a sophisticated interplay between "Pure White" clinical surfaces and "Botanical Green" warmth. The emotional response should be one of immediate calm, professional assurance, and premium hospitality.

Key visual pillars include:
- **Serenity through Space:** Avoidance of clutter to reflect the mental clarity of a spa experience.
- **Organic Precision:** Using geometric grids to house fluid, organic imagery and textures.
- **Lustrous Details:** Subtle gold accents that mimic the shimmer of healthy hair fibers.

## Colors

This design system utilizes a palette rooted in nature and prestige:

- **Primary (Deep Botanical Green):** Represents growth, health, and deep-rooted expertise. Used for primary brand moments and deep-background sections.
- **Secondary (Soft Gold):** Represents luxury, the "crown," and healthy hair luster. Used sparingly for highlights, call-to-actions, and decorative dividers.
- **Tertiary (Earthy Sand):** A soft, warm neutral used for surface backgrounds to prevent the clinical white from feeling sterile.
- **Pure White (#FFFFFF):** The base for the "clinical" feel, ensuring the UI feels hygienic and high-contrast.
- **Text (Charcoal):** Not pure black, but a deep charcoal to maintain a softer, more sophisticated legibility.

## Typography

The typographic hierarchy relies on the contrast between the authoritative, literary **Playfair Display** and the modern, precise **Hanken Grotesk**.

- **Headlines:** Use Playfair Display. It should feel editorial. Large headings should use slightly tighter letter-spacing to appear more sophisticated.
- **Body Text:** Use Hanken Grotesk. It provides a clean, contemporary counterpoint that ensures clinical information is easy to digest.
- **Labels:** Small labels, such as "Specialty" or "Category," should always be in Hanken Grotesk with increased letter-spacing and uppercase styling to denote a "label" status without feeling aggressive.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain an editorial, "lookbook" feel, transitioning to a fluid model on mobile.

- **Rhythm:** An 8px base unit drives all spacing.
- **Desktop:** 12-column grid with wide 120px vertical padding between sections to allow the brand to "breathe."
- **Tablet:** 8-column grid with 32px margins.
- **Mobile:** 4-column grid with 20px margins. 
- **Alignment:** Content is generally center-aligned for brand storytelling and left-aligned for informational/clinical data.

## Elevation & Depth

To maintain the high-end wellness aesthetic, the design system avoids heavy shadows in favor of **Tonal Layers** and **Soft Ambient Depth**.

- **Surface Levels:** Use the Earthy Sand color for secondary containers against a Pure White background to create depth without using drop shadows.
- **Shadows:** When necessary (e.g., for floating booking buttons), use "Whisper Shadows"—extremely diffused, 15% opacity primary-tinted shadows (e.g., `#1A3C34` at 5% opacity) rather than pure black.
- **Overlays:** Glassmorphism should be used for mobile navigation menus: a 20px background blur with a semi-transparent White (#FFFFFFCC) fill to simulate frosted glass treatment rooms.

## Shapes

The shape language is **Soft and Precise**. It uses "Soft" (0.25rem) corners to avoid the cold sharpness of 0px corners while staying away from the "bubbly" feel of fully rounded UI.

- **Large Components:** Cards and image containers use `rounded-lg` (0.5rem) to feel welcoming.
- **Buttons:** Primarily rectangular with a slight `0.25rem` radius to maintain a professional, clinical stance.
- **Imagery:** Use organic masking (circles or soft arches) occasionally for portraits of specialists to contrast with the rigid grid.

## Components

### Buttons
- **Primary:** Deep Botanical Green background, White text. No border. Fixed height of 48px.
- **Secondary:** Transparent background, Gold border (1px), Gold text. For "Learn More" or secondary actions.
- **Ghost:** No background or border. Underlined with a 1px Gold line on hover.

### Inputs
- **Style:** Bottom-border only for a minimal, sophisticated look. Label sits above in `label-caps`. Focus state changes the bottom border from Grey to Gold.

### Cards
- **Clinical Cards:** Pure white background, 1px Earthy Sand border. Used for service descriptions or hair health tips.
- **Wellness Cards:** Earthy Sand background, no border. Used for testimonials or atmosphere photos.

### Progress Indicators (Therapy Steps)
- Use thin, 1px Gold lines to connect steps in a therapy process, emphasizing a journey toward hair health.

### Lists
- Use custom bullets: a small, 4px Gold dot for service inclusions to maintain the premium feel.