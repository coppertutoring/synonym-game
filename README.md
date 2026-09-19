# Synonym Chain

A lightweight mobile-friendly word game. Keep the chain alive by finding valid synonyms, one word at a time, before the timer runs out.

## Features

- Infinite, daily challenge, and category-based modes
- Responsive layout built for phones, with an on-screen path that grows as you play
- Hints, lives, and a timer that rewards correct guesses
- Score summary after each run
- No build step required

## Run locally

From the project folder, serve it with a local static file server:

```bash
cd C:/Users/lewis/synonym-game
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Synonym data source

Synonyms are looked up in this order, per word, and cached in memory:

1. **Merriam-Webster Thesaurus API** – used only if you set an API key (see below).
2. **Datamuse API** – free, no key required, used automatically otherwise.
3. **Built-in fallback list** – a small local list, used only if both APIs are unreachable.

To enable Merriam-Webster (more authoritative, curated synonyms):

1. Register for a free key for the **Thesaurus** product at https://dictionaryapi.com/register/index.
2. Open `script.js` and paste it into `MERRIAM_WEBSTER_API_KEY` near the top of the file.

The free tier has a daily request cap, and since this is a static site with no backend, the key is visible in the page's JS — fine for personal/local use, but don't rely on it if you deploy this publicly at scale.

## Files

- `index.html` – main game UI
- `style.css` – mobile-first styling
- `script.js` – game logic and question generation
