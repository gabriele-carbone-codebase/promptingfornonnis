

## Update Privacy Policy for Analytics & Tracking Tools

### What changes

Update both EN and IT translation files to reflect the new tracking services: **Google Analytics (with Consent Mode Advanced)**, **Clickio** (consent management), and **Microsoft Clarity** (session recordings/heatmaps).

### Sections to update

**Section 2 (What Data We Collect)** — Add a new bullet about analytics data collected automatically (pages visited, device info, interaction patterns, session recordings).

**Section 4 (Data Sharing)** — Rewrite to disclose the three third-party services and what data they process:
- **Google Analytics** — anonymized usage/traffic data, with Google Consent Mode v2 Advanced
- **Clickio** — consent management platform (CMP) that manages cookie preferences
- **Microsoft Clarity** — session recordings and heatmaps (anonymized)

**Section 7 (Cookies)** — Complete rewrite. Replace "only essential cookies" with:
- Essential cookies (authentication/session)
- Analytics cookies (Google Analytics)
- Performance cookies (Microsoft Clarity)
- Consent is managed via **Clickio CMP** — users can change preferences at any time
- Mention Google Consent Mode Advanced ensures no tracking fires without consent

**New Section 9 (Consent Management)** — Add a dedicated section explaining Clickio CMP, how users can manage/withdraw consent, and that Google Consent Mode Advanced is used.

Renumber existing section 8 ("Changes to This Policy") to section 10.

### Files to modify
- `src/i18n/translations/en.ts` — privacy sections s2, s4, s7, s8 + add s9, s10
- `src/i18n/translations/it.ts` — same sections in Italian
- `src/pages/Privacy.tsx` — add rendering for the two new sections (s9, s10)

