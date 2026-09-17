# Plan: Jana Apartman — Mockups + Static Booking Roadmap

Build a host-anywhere static site for **Jana Apartman** (Balatonkeresztúr, bike-tourism niche). Goal #1: deliver **5 distinct look-and-feel mockups** to pick from. Stack stays plain HTML/CSS/JS (no build) so the booking layer can be swapped later. Booking uses Google Calendar as the free backend — read availability via the **Calendar API + referrer-restricted API key** (raw `.ics` won't work from browser due to CORS), with a GCal-embed iframe fallback.

**Steps**

*Phase 0 — Scaffold (do first)*
1. Create folder skeleton: `assets/css`, `assets/js`, `assets/img`, `mockups/`, `i18n/`.
2. Add shared placeholder content: apartment blurb, bike/e-bike-charging feature list, amenities, gallery placeholders — reused across all mockups.

*Phase 1 — Mockups (the current goal, steps parallel to each other)*
3. Each mockup = one self-contained HTML file with the same section skeleton: Hero → About → Bike & e-bike charging → Amenities → Gallery → **Availability + Booking (placeholder calendar)** → Location/attractions → Contact → language switcher → footer.
4. Design directions:
   - **Lakeside Calm** — airy, light, blue/sand, big hero, minimalist.
   - **Cycling Bold** — sporty, green/orange, dynamic diagonals, energetic.
   - **Boutique Glass** — dark, elegant serif, glassmorphism transparent cards.
   - **Warm Rustic** — cozy, earthy, wood texture, rounded.
   - **Nordic Minimal** — whitespace-heavy, single accent color.
5. Build `mockups/index.html` — a compare/gallery page linking all five.

*Phase 2 — Build chosen design (later)*
6. Turn picked mockup into the real responsive site; wire i18n JSON (HU/EN/DE) via `data-i18n` + tiny switcher; add SEO/OpenGraph + accessibility.

*Phase 3 — Booking integration (later)*
7. `availability.js` provider reading Google Calendar `events.list`; render free/busy grid; booking **request** via Formspree/Google Form/mailto (owner confirms + marks event manually). Design leaves room to merge Airbnb/Booking.com `.ics` feeds later.

**Relevant files** (to be created)
- `mockups/lakeside-calm.html`, `mockups/cycling-bold.html`, `mockups/boutique-glass.html`, `mockups/warm-rustic.html`, `mockups/nordic-minimal.html` — the 5 alternatives
- `mockups/index.html` — comparison gallery
- `assets/css/*`, `assets/js/*`, `assets/img/*` — shared placeholder styles/scripts/images
- `i18n/hu.json`, `i18n/en.json`, `i18n/de.json` — text dictionaries (stubs in Phase 1)
- `assets/js/availability.js` — booking provider interface stub (real impl Phase 3)

**Verification**
1. Open each `mockups/*.html` directly in a browser (file://) — must render fully with **no build step and no server**.
2. Compare page links to all five and loads offline.
3. Responsive check at mobile/tablet/desktop widths.
4. Confirm the availability section is a visible placeholder (real data deferred to Phase 3).

**Decisions**
- Included now: 5 static mockups + shared placeholder content + compare page.
- Deferred: full i18n wiring, real Google Calendar data, contact-form backend, OTA sync.
- Interpreted "transparent" as *clear/intuitive*; the **Boutique Glass** mockup also literally uses transparency (glassmorphism).

**Further Considerations**
1. **Photos** — do you have real photos of the apartment/bikes, or use placeholder stock imagery for mockups? *A: use placeholders now / B: you'll provide assets.*
2. **Contact-form service** for booking requests later — *A: Formspree (free tier), B: Google Form embed, C: plain mailto link.*
3. **5th mockup** — keep Nordic Minimal, or swap for a different vibe? *A: keep 5, B: different theme, C: 4 is enough.*
