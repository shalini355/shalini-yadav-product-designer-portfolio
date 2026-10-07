---
name: Kai Calm
colors:
  surface: '#fbf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#eae8e5'
  surface-container-highest: '#e4e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#424843'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f0ed'
  outline: '#727972'
  outline-variant: '#c2c8c1'
  surface-tint: '#476551'
  primary: '#476551'
  on-primary: '#ffffff'
  primary-container: '#7a9a83'
  on-primary-container: '#143120'
  inverse-primary: '#adcfb6'
  secondary: '#635789'
  on-secondary: '#ffffff'
  secondary-container: '#d2c4fd'
  on-secondary-container: '#5a4f80'
  tertiary: '#59605c'
  on-tertiary: '#ffffff'
  tertiary-container: '#8d948f'
  on-tertiary-container: '#262d29'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c9ebd1'
  primary-fixed-dim: '#adcfb6'
  on-primary-fixed: '#032111'
  on-primary-fixed-variant: '#304d3a'
  secondary-fixed: '#e8deff'
  secondary-fixed-dim: '#cdbef8'
  on-secondary-fixed: '#1e1341'
  on-secondary-fixed-variant: '#4b3f70'
  tertiary-fixed: '#dde4de'
  tertiary-fixed-dim: '#c1c8c3'
  on-tertiary-fixed: '#161d1a'
  on-tertiary-fixed-variant: '#414844'
  background: '#fbf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2df'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: '0'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '500'
    lineHeight: 22px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.015em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
---

## Brand & Style

This design system is crafted for a sanctuary experience: low-arousal, deeply grounding, and emotionally restorative. Designed primarily for mobile-first mental wellness rituals, check-ins, guided breathing, and journaling, the interface rejects high-intensity visual stimuli, urgent micro-interactions, and aggressive contrast.

### Core Tenets
- **Low Sensory Load:** Absence of pure black `#000000` or sterile `#FFFFFF`. Visual hierarchy relies on tone-on-tone shifts, gentle tints, and generous negative space rather than heavy delineation.
- **Empathetic Tactility:** Organic pill geometries and deep pebble contours emulate natural stones and smooth water-worn materials, inducing psychological ease.
- **Soft Diffusion & Respiration:** Micro-surfaces employ ambient, tinted halos and translucent frosted planes that echo natural light moving through linen or morning fog.

## Colors

The palette draws directly from botanical and geological stillness: soothing sage, muted contemplative lavender, warm linen, and soft slate.

### Palette Hierarchy & Intent
- **Canvas (`#FAF8F5`):** Warm, reassuring alabaster base. Eliminates digital glare during late-night anxiety or dawn reflections.
- **Secondary Canvas / Tonal Shift (`#F3EFEA`):** Oatmeal wash for inset modules, navigation backdrops, and unselected states.
- **Primary Sage Core (`#7A9A83`):** Herbal, centering green for key action triggers, progress indicators, and active breathing pulses. Deepened with `#4B6B55` for accessible text and high-contrast iconography.
- **Secondary Lavender (`#9B8EC4`):** Restorative, dreamy lilac used sparingly for reflective prompts, sleep tracks, mood logs, and highlights. Supported by `#EDE8F5` for pill fills and `#5D5086` for deep accents.
- **Text & Neutral Contrast:** Primary copy uses warm slate `#2C3531` to ensure WCAG AAA legibility while avoiding the clinical harshness of jet black. Secondary copy uses tranquil moss-charcoal `#626D68`.

## Typography

The design system relies on single-family consistency using Plus Jakarta Sans across all display, body, and label roles. Its subtle geometric warmth, rounded terminals, and wide open apertures eliminate cognitive strain while preserving exceptional clarity.

### Implementation Principles
- **Generous Line Ratios:** Body copy keeps an unhurried 1.55–1.6× line-height ratio, offering comfortable breathing room between thoughts.
- **Tonal Subduing Over Downscaling:** Instead of shrinking metadata to microscopic levels, de-emphasize less critical copy by shifting from `#2C3531` to `#626D68` at 13px or 15px.
- **Pacing:** Never hyphenate headings; limit body columns to 45–60 characters per line to minimize saccadic eye fatigue.

## Layout & Spacing

Layouts adhere to an unhurried, single-column or soft dual-column mobile flow, scaling outward seamlessly for tablets.

### Fluid Adaptation
- **Mobile (<640px):** Single vertical stack with `margin: 1.25rem` (20px) outer padding. Content cards span the full readable width without horizontal edge collisions.
- **Tablet (640px–1024px):** 6-column fluid structure, max-width constrained to 680px for meditation player screens and 840px for dashboard views, with outer margins widening to `2rem`.
- **Rhythm:** Spacing between unlinked concepts must always be at least `space-xl` (36px). Never compress elements to avoid vertical scrolling; users experiencing distress prefer scrolling over dense, cluttered interfaces.

## Elevation & Depth

Spatial layering relies on ambient botanical light and soft translucency rather than physical height or dropped shadows.

### Atmospheric Tiers
- **Tier 0 (Base Canvas):** Solid `#FAF8F5`.
- **Tier 1 (Resting Cards & Surfaces):** `#FFFFFF` at 85% opacity mixed with subtle frosted diffusion (`backdrop-filter: blur(16px)`). Bound by a feather-light 1px border of `rgba(122, 154, 131, 0.12)`.
- **Tier 2 (Elevated & Active Floating Modals):** Pure white `#FFFFFF` overlay anchored by an ultra-diffused, tinted shadow: `0 12px 36px -8px rgba(75, 107, 85, 0.08)`. Never use pure gray or black shadow casts.
- **Tier 3 (Subtle Inset Wells):** Backgrounds for input fields and time logs use `#F3EFEA` flat fills with no inset shadow, preserving calmness.

## Shapes

The design system embraces level 3 pill and pebble contours. Sharp edges create subconscious tension; hyper-radii create warmth and tactile approachability.

### Radii Application
- **Interactive Controls:** All buttons, filters, chips, and audio scrubbers utilize full pill caps (`border-radius: 9999px`).
- **Containers & Cards:** Primary cards employ `24px` to `32px` (`rounded-2xl` to `rounded-3xl`), mimicking smooth river stones.
- **Sheets & Modals:** Top edges curve at `32px` or `40px` with a softened 4px wide drag handle.

## Components

### Buttons
- **Primary:** Full pill container filled with Sage `#7A9A83`, labeled in white `#FFFFFF` (`label-lg`). Resting state has zero harsh shadow; press state scales slightly down (0.98 scale factor) with smooth 200ms ease-out transitions.
- **Secondary / Calming Ghost:** Full pill container with translucent surface (`rgba(232, 239, 233, 0.6)`), labeled in Deep Sage `#4B6B55`.
- **Tertiary:** Borderless, pure text button in `#626D68` with generous 12px vertical touch target clearance.

### Chips & Filter Pills
- Rendered in full pill capsules. Unselected: `#F3EFEA` background, `#626D68` text. Selected: `#EDE8F5` background, `#5D5086` text, framed by a delicate 1px border of `#9B8EC4`.

### Cards & Sanctuary Tiles
- Base background of `rgba(255, 255, 255, 0.8)` with a 1px border of `rgba(122, 154, 131, 0.14)`. Card interiors feature generous inner padding (`space-lg` / 24px) to keep text detached from perimeter borders.

### Input Fields & Reflections
- Multi-line journaling areas and prompt fields feature solid `#F3EFEA` background fills, 20px corner radii, and zero borders in resting states. Focus states trigger a soft glow: 1.5px border of `#7A9A83` and `0 0 0 4px rgba(122, 154, 131, 0.12)`. Caret is tinted Sage `#4B6B55`.

### Checkboxes, Mood Dials & Radio Toggles
- Avoid strict square checkboxes. Replace with circular selection rings: unselected rings use a 1.5px border of `rgba(98, 109, 104, 0.3)`. Selected rings animate smoothly inward to reveal a solid Sage `#7A9A83` central pearl with an organic checkmark in `#FAF8F5`.

### Specialized Mindful Components
- **Breathing Pacer:** A fluid circle oscillating in scale between 120px and 220px across 4-7-8 breathing tempos, utilizing a multi-stop gradient from `#E8EFE9` to `#EDE8F5`.
- **Mood Orb Selector:** Horizontal scroll of five organic pebbles with subtle shifting pastel gradients representing emotional states from "Drained" to "Restored."