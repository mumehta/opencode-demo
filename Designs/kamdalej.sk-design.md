---
version: alpha
name: WhereNext
description: A warm, human-centered civic guidance system with airy layouts and orange-led calls to action.
colors:
  primary: "#c14000"
  primary-70: "#e25a12"
  primary-40: "#f39b1a"
  secondary: "#756c66"
  tertiary: "#e0dbd7"
  neutral: "#ffffff"
  surface: "#f7f3ef"
  on-surface: "#1a1716"
  border: "#e5e7eb"
  muted: "#f1ede9"
  error: "#d64545"
typography:
  headline-display:
    fontFamily: "Mark Offc For MC"
    fontSize: "64px"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "0px"
  headline-lg:
    fontFamily: "Mark Offc For MC"
    fontSize: "48px"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "0px"
  headline-md:
    fontFamily: "Mark Offc For MC"
    fontSize: "24px"
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: "0px"
  headline-sm:
    fontFamily: "Mark Offc For MC"
    fontSize: "22px"
    fontWeight: 300
    lineHeight: 1.115
    letterSpacing: "0px"
  body-lg:
    fontFamily: "Mark Offc For MC"
    fontSize: "18px"
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: "-0.24px"
  body-md:
    fontFamily: "Mark Offc For MC"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: "-0.24px"
  body-sm:
    fontFamily: "Mark Offc For MC"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0px"
  label-lg:
    fontFamily: "Mark Offc For MC"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0px"
  label-md:
    fontFamily: "Mark Offc For MC"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0px"
  label-sm:
    fontFamily: "Mark Offc For MC"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.04em"
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px
  xl: 32px
  full: 9999px
spacing:
  xs: 12px
  sm: 22px
  md: 40px
  lg: 80px
  xl: 112px
  gutter: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "7px 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.primary-70}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "7px 24px"
    height: "52px"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "7px 24px"
    height: "52px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
    height: "52px"
  chip:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
---

# WhereNext

## Overview
WhereNext feels approachable, civic, and reassuring rather than corporate or flashy. The page uses a spacious editorial layout, soft neutrals, and a strong orange accent to guide people through an important life-task with clarity and warmth. The tone is human, practical, and optimistic, aimed at users who may need fast guidance and low-friction decision making.

## Colors
- **Primary (#c14000):** A saturated burnt orange used for the main CTA buttons, small section labels, and the energetic brand accent. It carries the interface and gives the system a helpful, action-oriented feel.
- **Primary highlight (#e25a12):** A slightly lighter orange-red useful for hover states and visual transitions where the brand needs a warmer lift without losing intensity.
- **Primary glow (#f39b1a):** A brighter amber-orange that works well for decorative arcs and illustration support, adding movement and optimism.
- **Secondary (#756c66):** A muted warm gray-brown used for supporting copy, secondary navigation, and less prominent UI text. It keeps the interface calm and readable.
- **Neutral (#ffffff):** Pure white for cards, buttons, and open content areas. It helps the composition feel clean, light, and trustworthy.
- **Surface (#f7f3ef):** A soft cream background that replaces stark white in large areas, creating a gentle paper-like atmosphere.
- **On-surface (#1a1716):** A near-black charcoal used for headlines and high-emphasis text. It delivers strong contrast while staying slightly softer than pure black.
- **Border (#e5e7eb):** A subtle cool border tone for inputs and card outlines, keeping controls defined without feeling heavy.
- **Muted (#f1ede9):** An off-white neutral for subtle chips or gentle UI fills when a component needs quiet emphasis.
- **Error (#d64545):** A clear semantic red for validation and danger states, designed to stay distinct from the brand orange.

## Typography
The system uses a single custom family, Mark Offc For MC, across headings, body text, and controls. It gives the UI a coherent, editorial voice with light weights for large display copy and slightly stronger weights for labels and buttons.

Headlines are intentionally airy and refined: `headline-display` is large and light for the hero, while `headline-md` and `headline-sm` handle section prompts and form questions. Body text uses the same family at smaller sizes with a modest negative letter-spacing, which helps long paragraphs feel polished and compact without looking tight.

Labels and actions are slightly heavier to improve scanability, especially in navigation, buttons, and form controls. Uppercase microcopy appears in small orange prompts, where tighter spacing and strong contrast make the instruction feel like a clear step marker.

## Layout
The page favors a wide, fluid hero composition with a centered content corridor rather than a strict boxed grid. Large outer margins and generous vertical breathing room create a calm, guided experience, while the hero art and quiz card overlap to add depth and narrative flow.

Spacing follows a simple, humane rhythm based on 12px, 22px, 40px, 80px, and 112px increments. Small UI gaps stay compact, but major section separations and hero-to-card transitions open up dramatically. Cards and form areas use internal padding around 16px to 24px, while large panels rely on much broader whitespace to reduce cognitive load.

## Elevation & Depth
Depth is subtle and mostly achieved through tonal layering rather than strong shadow stacks. The interface leans on white cards over warm surfaces, with gentle borders and soft shadowing to separate interactive panels from the background.

The main quiz card reads as a floating centerpiece because of its oversized rounded shape, clean white fill, and soft ambient shadow. Inputs and buttons remain mostly flat, which keeps the UI calm and accessible while letting the orange accent supply emphasis.

## Shapes
The shape language is soft and friendly, with rounded pills for primary actions and medium radii for inputs and cards. Interactive controls feel approachable rather than technical, and the larger quiz container uses an extra-large radius to create a welcoming, organic silhouette.

Overall, the system balances gentle corners with a strong, structured composition. This keeps it from feeling overly playful while still making the interface warm and non-intimidating.

## Components
**Buttons**
- Use `button-primary` for the main action. It is a pill-shaped orange button with white text, compact vertical padding, and a 52px height.
- Use `button-secondary` for less prominent actions. Keep it white with a subtle border and warm gray text so it reads as supportive rather than competing with the primary CTA.
- Use `button-link` for tertiary actions or inline navigation. It should stay flat, underlined, and lightweight.
- Hover states should remain color-led rather than shadow-led; `button-primary-hover` can shift slightly lighter or brighter, but should not change shape.
- Button labels should stay concise and use `label-md` sizing for clarity.

**Cards**
- Cards should use `card` with a white background, subtle border, and `rounded.md`.
- Keep card shadows minimal or absent unless the card must float above a larger surface.
- In large feature cards, allow the radius to grow to pill-like or organic shapes, but preserve the calm white-on-surface contrast.

**Inputs**
- Inputs should be white, bordered, and softly rounded with `input`.
- Use a 52px control height, generous internal padding, and clear placeholder text in the secondary text color.
- Icons inside inputs should be small and restrained; they should support the field rather than dominate it.

**Chips and micro-labels**
- Use `chip` for small contextual pills, tags, or step markers.
- Chips should use muted fills and dark text for readability, with `label-sm` typography to keep them compact.
- Uppercase or all-caps microcopy can be used sparingly for process cues, especially in orange.

**Navigation**
- Top navigation is minimal and text-forward. Use bold-ish body or label sizing, no heavy backgrounds, and keep spacing generous between items.
- The language switcher can use a bordered pill treatment similar to secondary buttons.

## Do's and Don'ts
- Do keep the orange primary color reserved for actions, prompts, and key brand emphasis.
- Do use light typography weights for large headlines to preserve the editorial tone.
- Do preserve generous whitespace around hero content and major quiz surfaces.
- Do keep controls soft, rounded, and approachable, especially buttons and form fields.
- Don't introduce dark, heavy shadows that make the interface feel corporate or dated.
- Don't use multiple competing accent colors; the system depends on one strong orange family.
- Don't over-tighten spacing; the layout should feel open and reassuring.
- Don't switch to a geometric or condensed type style; the custom serif-like editorial voice is core to the brand.