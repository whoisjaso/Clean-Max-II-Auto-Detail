# Design

## Overview

Clean Max II Auto Detail uses a bright local storefront system: sky-blue painted wall texture, sunshine-yellow service panels, royal-blue signage typography, red price and phone accents, and simple shine details. The page should look like a high-visibility service board adapted into a responsive website.

## Color Palette

- Sky Blue: `#6EC1E4`
- Sunshine Yellow: `#FFD100`
- Royal Blue: `#0D47A1`
- Deep Blue: `#063B8E`
- White: `#FFFFFF`
- Charcoal: `#333333`
- Red Accent: `#D71920`

## Typography

- Display: `Anton`, `Bebas Neue`, `Arial Narrow`, `Impact`, sans-serif
- Body and UI: `Montserrat`, `Segoe UI`, sans-serif
- Headings are bold, condensed, and sign-like.
- Body copy stays readable, direct, and capped to comfortable line lengths.

## Layout

- Single-page brand site with sticky navigation and sticky mobile bottom actions.
- Hero uses an asymmetrical service-bay composition with prominent logo, short headline, and immediate call, services, and directions actions.
- Pricing uses six HTML service-board panels with dotted leader rows.
- Major sections use full-width color bands, not nested section cards.
- Mobile pricing behaves like an accordion and remains readable without shrinking desktop boards.

## Components

- Badge logo: yellow frame, royal-blue face, bold `CLEAN MAX II` text, `AUTO DETAIL` subline, shine mark.
- Buttons: pill CTAs, yellow primary, blue secondary, red used only for phone or urgent action.
- Pricing rows: service name, dotted leader, red price.
- Gallery cards: real generated detailing images, blue border, yellow label strip.
- Forms: white fields on blue or yellow panels, strong labels, visible focus rings.

## Motion

- Subtle reveal, card lift, and image scale transitions.
- GSAP ScrollTrigger is used when available.
- Native IntersectionObserver fallback keeps content visible without external scripts.
- Reduced-motion users get instant state changes.
