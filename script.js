const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const resultScreen = document.getElementById('resultScreen');
const starterForm = document.getElementById('starterForm');
const guessForm = document.getElementById('guessForm');
const restartBtn = document.getElementById('restartBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const startInfiniteBtn = document.getElementById('startInfiniteBtn');
const dailyChallengeBtn = document.getElementById('dailyChallengeBtn');
const hintBtn = document.getElementById('hintBtn');
const playerNameInput = document.getElementById('playerNameInput');
const guessInput = document.getElementById('guessInput');
const chainLength = document.getElementById('chainLength');
const scoreValue = document.getElementById('scoreValue');
const targetWord = document.getElementById('targetWord');
const statusMessage = document.getElementById('statusMessage');
const board = document.getElementById('board');
const attemptCounter = document.getElementById('attemptCounter');
const finalScore = document.getElementById('finalScore');
const finalChain = document.getElementById('finalChain');
const resultHeading = document.getElementById('resultHeading');
const resultMessage = document.getElementById('resultMessage');
const livesDisplay = document.getElementById('livesDisplay');
const hintsDisplay = document.getElementById('hintsDisplay');
const leaderboardList = document.getElementById('leaderboardList');
const leaderboardDate = document.getElementById('leaderboardDate');
const timerValue = document.getElementById('timerValue');
const bonusPop = document.getElementById('bonusPop');
const enterBtn = document.getElementById('enterBtn');
const categoriesToggleBtn = document.getElementById('categoriesToggleBtn');
const categoryPicker = document.getElementById('categoryPicker');
const continuePrompt = document.getElementById('continuePrompt');
const continueHeading = document.getElementById('continueHeading');
const continueMessage = document.getElementById('continueMessage');
const continueYesBtn = document.getElementById('continueYesBtn');
const watchAdBtn = document.getElementById('watchAdBtn');
const buyLivesBtn = document.getElementById('buyLivesBtn');
const continueNoBtn = document.getElementById('continueNoBtn');

const STARTING_LIVES = 3;
const STARTING_HINTS = 2;
const ROUND_TIME_LIMIT = 30;
const HINT_MILESTONE = 10;
const DAILY_LEADERBOARD_KEY = 'synonym-chain-daily-leaderboard';
const PLAYER_NAME_KEY = 'synonym-chain-player-name';
const starterPool = [
  'happy', 'sad', 'angry', 'brave', 'calm', 'nervous', 'excited', 'proud', 'jealous', 'curious',
  'confident', 'anxious', 'cheerful', 'gloomy', 'furious', 'delighted', 'worried', 'content', 'bored', 'eager',
  'grateful', 'ashamed', 'hopeful', 'lonely', 'surprised', 'relaxed', 'embarrassed', 'terrified', 'joyful', 'miserable',
  'kind', 'cruel', 'honest', 'generous', 'selfish', 'polite', 'rude', 'loyal', 'stubborn', 'humble',
  'arrogant', 'patient', 'shy', 'friendly', 'wise', 'foolish', 'smart', 'clever', 'gentle', 'fierce',
  'timid', 'bold', 'cautious', 'reckless', 'sincere', 'cunning', 'big', 'small', 'huge', 'tiny',
  'wide', 'narrow', 'thick', 'thin', 'tall', 'short', 'deep', 'shallow', 'round', 'flat',
  'massive', 'compact', 'enormous', 'miniature', 'broad', 'slender', 'fast', 'slow', 'quick', 'swift',
  'sluggish', 'rapid', 'hasty', 'brisk', 'gradual', 'sudden', 'hot', 'cold', 'warm', 'cool',
  'freezing', 'scorching', 'mild', 'chilly', 'icy', 'tropical', 'beautiful', 'ugly', 'pretty', 'plain',
  'elegant', 'shabby', 'neat', 'messy', 'tidy', 'sloppy', 'gorgeous', 'attractive', 'handsome', 'fancy',
  'dull', 'vivid', 'bright', 'dark', 'colorful', 'drab', 'strong', 'weak', 'powerful', 'feeble',
  'sturdy', 'fragile', 'robust', 'delicate', 'mighty', 'tough', 'easy', 'hard', 'difficult', 'simple',
  'complex', 'complicated', 'tricky', 'straightforward', 'effortless', 'challenging', 'sweet', 'sour', 'bitter', 'salty',
  'spicy', 'bland', 'tasty', 'delicious', 'fragrant', 'foul', 'loud', 'quiet', 'noisy', 'silent',
  'soft', 'harsh', 'shrill', 'melodious', 'smooth', 'rough', 'silky', 'coarse', 'sticky', 'slippery',
  'bumpy', 'good', 'bad', 'excellent', 'terrible', 'great', 'awful', 'superb', 'poor', 'fine',
  'wonderful', 'horrible', 'mediocre', 'outstanding', 'decent', 'old', 'new', 'ancient', 'modern', 'young',
  'aged', 'fresh', 'stale', 'antique', 'contemporary', 'clean', 'dirty', 'filthy', 'spotless', 'grimy',
  'pristine', 'rich', 'wealthy', 'broke', 'prosperous', 'needy', 'true', 'false', 'real', 'fake',
  'genuine', 'sunny', 'cloudy', 'rainy', 'stormy', 'foggy', 'clear', 'funny', 'serious', 'strange'
];

const categoryPools = {
  food: [
    'pizza', 'bread', 'cheese', 'apple', 'cake', 'soup', 'coffee', 'candy', 'banana', 'chocolate',
    'burger', 'sandwich', 'cookie', 'pasta', 'salad', 'soda', 'sausage', 'popcorn', 'honey', 'butter'
  ],
  sport: [
    'football', 'boxing', 'swimming', 'running', 'wrestling', 'cycling', 'golf', 'basketball', 'tennis', 'rugby',
    'baseball', 'hockey', 'volleyball', 'skiing', 'surfing', 'athletics', 'gymnastics', 'cricket', 'marathon', 'sprint'
  ],
  games: [
    'puzzle', 'riddle', 'contest', 'tournament', 'challenge', 'quiz', 'match', 'competition', 'rivalry', 'trivia',
    'gamble', 'wager', 'dare', 'mission', 'adventure', 'strategy', 'tactic', 'teamwork'
  ],
  animals: [
    'dog', 'cat', 'lion', 'tiger', 'wolf', 'fox', 'snake', 'eagle', 'shark', 'bear',
    'horse', 'elephant', 'rabbit', 'mouse', 'deer', 'monkey', 'owl', 'frog', 'whale', 'dolphin',
    'spider', 'butterfly', 'turtle', 'penguin', 'kangaroo'
  ]
};

const categoryLabels = {
  food: 'Food',
  sport: 'Sport',
  games: 'Games',
  animals: 'Animals'
};

const brokenSynonyms = [
  'broken', 'shattered', 'snapped', 'severed', 'fractured', 'split',
  'cracked', 'busted', 'destroyed', 'splintered', 'smashed', 'disconnected'
];

// Get a free key at https://dictionaryapi.com/register/index (Thesaurus product) and paste it here.
// Leave blank to skip straight to the Datamuse/local fallback below.
const MERRIAM_WEBSTER_API_KEY = '75c601c6-0458-4930-be2c-c3598179dcea';

const clueMap = {
  glad: 'happy or pleased',
  cheerful: 'full of happiness and good spirit',
  joyful: 'filled with joy or delight',
  pleased: 'satisfied or happy with something',
  content: 'peacefully satisfied',
  delighted: 'very pleased or thrilled',
  fearless: 'without fear',
  bold: 'brave and confident',
  courageous: 'willing to face danger or difficulty',
  valiant: 'showing courage and determination',
  daring: 'willing to take risks',
  peaceful: 'calm and free from disturbance',
  serene: 'calm and peaceful',
  tranquil: 'quiet and relaxed',
  silent: 'making no sound',
  still: 'not moving or making noise',
  clever: 'quick to understand or solve problems',
  intelligent: 'having good understanding and learning',
  bright: 'full of light or very smart',
  swift: 'moving very fast',
  rapid: 'happening or moving quickly',
  speedy: 'quick and efficient',
  furious: 'extremely angry',
  irritated: 'annoyed or slightly angry',
  cross: 'angry or upset',
  powerful: 'having great strength or force',
  mighty: 'very strong or impressive',
  sturdy: 'strong and robust',
  robust: 'strong and not easily damaged',
  luminous: 'giving off light',
  shining: 'giving off bright light',
  glowing: 'giving off a soft light',
  vivid: 'bright and full of life',
  mild: 'gentle or not severe',
  tender: 'kind, gentle, and caring',
  amusing: 'causing laughter or smiles',
  hilarious: 'very funny',
  comical: 'funny in a playful way',
  witty: 'showing clever humor',
  playful: 'full of fun and amusement'
};

const fallbackSynonyms = {
  happy: ['glad', 'cheerful', 'joyful', 'pleased', 'content', 'delighted'],
  brave: ['fearless', 'bold', 'courageous', 'valiant', 'daring'],
  calm: ['peaceful', 'serene', 'tranquil', 'quiet', 'still'],
  smart: ['clever', 'intelligent', 'bright', 'quick', 'astute'],
  quiet: ['silent', 'still', 'soft', 'peaceful', 'muted'],
  kind: ['gentle', 'generous', 'nice', 'friendly', 'caring'],
  quick: ['swift', 'rapid', 'speedy', 'fast', 'nimble'],
  angry: ['furious', 'irritated', 'mad', 'upset', 'cross'],
  strong: ['powerful', 'mighty', 'sturdy', 'robust', 'solid'],
  bright: ['luminous', 'shining', 'glowing', 'vivid', 'radiant'],
  gentle: ['mild', 'soft', 'tender', 'kind', 'meek'],
  funny: ['amusing', 'hilarious', 'comical', 'witty', 'playful'],
  sad: ['miserable', 'upset', 'blue', 'unhappy', 'sorrowful'],
  tiny: ['miniature', 'small', 'little', 'minute', 'petite'],
  old: ['ancient', 'aged', 'elderly', 'vintage', 'former'],
  warm: ['cozy', 'toasty', 'heated', 'mild', 'friendly'],
  large: ['big', 'huge', 'enormous', 'vast', 'immense'],
  fast: ['swift', 'rapid', 'speedy', 'quick', 'nimble'],
  good: ['great', 'excellent', 'fine', 'superb', 'quality'],
  difficult: ['hard', 'challenging', 'tough', 'complex', 'trying']
};

const synonymsCache = new Map();
const definitionCache = new Map();

let starter = '';
let currentWord = '';
let chain = [];
let score = 0;
let lives = STARTING_LIVES;
let hints = STARTING_HINTS;
let gameOver = false;
let inFlight = false;
let selectedMode = 'infinite';
let selectedCategory = null;
let leaderboardSaved = false;
let timerRemaining = ROUND_TIME_LIMIT;
let timerInterval = null;

function vibrate(pattern) {
  if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
    navigator.vibrate(pattern);
  }
}

function normalizeWord(value) {
  return String(value || '').trim().toLowerCase().replace(/[^a-z]/g, '');
}

function getDailyChallengeDate() {
  return new Date().toISOString().slice(0, 10);
}

function hashString(value) {
  return Array.from(value).reduce((total, character) => {
    return (total * 31 + character.charCodeAt(0)) >>> 0;
  }, 0);
}

function getSystemStarter(mode) {
  if (mode === 'daily') {
    const dateKey = getDailyChallengeDate();
    const seed = hashString(dateKey) % starterPool.length;
    return starterPool[seed];
  }

  if (mode === 'categories' && selectedCategory && categoryPools[selectedCategory]) {
    const pool = categoryPools[selectedCategory];
    return pool[Math.floor(Math.random() * pool.length)];
  }

  return starterPool[Math.floor(Math.random() * starterPool.length)];
}

function getPlayerName() {
  const value = normalizeWord(playerNameInput.value || 'Player');
  return value ? value.toUpperCase() : 'PLAYER';
}

function renderLeaderboard() {
  const today = getDailyChallengeDate();
  const raw = localStorage.getItem(DAILY_LEADERBOARD_KEY);
  const entries = raw ? JSON.parse(raw) : {};
  const list = entries[today] || [];
  leaderboardDate.textContent = today;

  leaderboardList.innerHTML = '';
  if (!list.length) {
    const empty = document.createElement('li');
    empty.innerHTML = '<span class="rank">—</span><span class="player">No entries yet</span><span class="score">0</span>';
    leaderboardList.appendChild(empty);
    return;
  }

  list.slice(0, 10).forEach((entry, index) => {
    const item = document.createElement('li');
    item.innerHTML = `
      <span class="rank">${index + 1}</span>
      <span class="player">${entry.playerName}</span>
      <span class="score">${entry.score}</span>
    `;
    leaderboardList.appendChild(item);
  });
}

function saveDailyLeaderboardEntry() {
  if (selectedMode !== 'daily') {
    return;
  }

  const today = getDailyChallengeDate();
  const raw = localStorage.getItem(DAILY_LEADERBOARD_KEY);
  const entries = raw ? JSON.parse(raw) : {};
  const boardEntries = entries[today] || [];

  boardEntries.push({
    playerName: getPlayerName(),
    score,
    chain: chain.length,
    timestamp: Date.now()
  });

  boardEntries.sort((a, b) => b.score - a.score || b.chain - a.chain);
  entries[today] = boardEntries.slice(0, 10);
  localStorage.setItem(DAILY_LEADERBOARD_KEY, JSON.stringify(entries));
  renderLeaderboard();
}

function cleanThesaurusEntry(rawWord) {
  return normalizeWord(String(rawWord || '').replace(/\{[^}]*\}/g, ''));
}

async function fetchMerriamWebsterEntries(word) {
  if (!MERRIAM_WEBSTER_API_KEY) {
    return null;
  }

  const apiUrl = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${encodeURIComponent(word)}?key=${MERRIAM_WEBSTER_API_KEY}`;

  try {
    const response = await fetch(apiUrl, { mode: 'cors' });
    if (!response.ok) {
      throw new Error('Could not fetch Merriam-Webster thesaurus data');
    }

    const payload = await response.json();
    const entries = Array.isArray(payload)
      ? payload.filter((entry) => {
          if (!entry || typeof entry !== 'object' || !entry.meta) {
            return false;
          }
          // Keep only entries for this exact headword (drop cross-referenced phrases
          // like "happy-go-lucky" or "happy hunting ground" that MW bundles in.
          const headword = normalizeWord(String(entry.meta.id || '').split(':')[0]);
          return headword === word;
        })
      : [];

    // A payload of plain strings (or only unrelated phrase entries) means "word not found".
    return entries.length ? entries : null;
  } catch (error) {
    console.warn('Merriam-Webster lookup failed, falling back.', error);
    return null;
  }
}

async function fetchMerriamWebsterSynonyms(word) {
  const entries = await fetchMerriamWebsterEntries(word);
  if (!entries) {
    return null;
  }

  // A word can have several distinct senses (e.g. "bright" as in light vs.
  // "bright" as in clever), each with its own synonym group. Combine every
  // sense's synonyms so any of them can be accepted as a valid guess.
  return Array.from(
    new Set(
      entries
        .flatMap((entry) => (entry.meta && entry.meta.syns) || [])
        .flat()
        .map(cleanThesaurusEntry)
        .filter((entry) => entry && entry !== word)
    )
  );
}

async function fetchMerriamWebsterDefinition(word) {
  const entries = await fetchMerriamWebsterEntries(word);
  if (!entries) {
    return null;
  }

  const entryWithDefinition = entries.find((entry) => Array.isArray(entry.shortdef) && entry.shortdef.length > 0);
  return entryWithDefinition ? entryWithDefinition.shortdef[0] : null;
}

async function fetchFreeDictionaryDefinition(word) {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`, { mode: 'cors' });
    if (!response.ok) {
      throw new Error('Could not fetch dictionary definition');
    }

    const payload = await response.json();
    const definition = payload?.[0]?.meanings?.[0]?.definitions?.[0]?.definition;
    return definition || null;
  } catch (error) {
    console.warn('Free dictionary lookup failed, falling back.', error);
    return null;
  }
}

async function fetchWordDefinition(word) {
  const normalized = normalizeWord(word);

  if (!normalized) {
    return null;
  }

  if (definitionCache.has(normalized)) {
    return definitionCache.get(normalized);
  }

  const definition =
    (await fetchMerriamWebsterDefinition(normalized)) ||
    (await fetchFreeDictionaryDefinition(normalized)) ||
    clueMap[normalized] ||
    null;

  if (definition) {
    definitionCache.set(normalized, definition);
  }

  return definition;
}

async function fetchDatamuseRelation(word, param) {
  const apiUrl = `https://api.datamuse.com/words?${param}=${encodeURIComponent(word)}&max=200`;

  try {
    const response = await fetch(apiUrl, { mode: 'cors' });
    if (!response.ok) {
      throw new Error('Could not fetch synonyms');
    }

    const payload = await response.json();
    return (payload || []).map((entry) => normalizeWord(entry.word)).filter((entry) => entry && entry !== word);
  } catch (error) {
    console.warn('Datamuse failed.', error);
    return [];
  }
}

async function fetchDatamuseSynonyms(word) {
  // rel_syn = tight synonyms, ml = broader "means like" matches. Datamuse only
  // honors one relation per request, so union two separate calls to widen the pool.
  const [tight, broad] = await Promise.all([
    fetchDatamuseRelation(word, 'rel_syn'),
    fetchDatamuseRelation(word, 'ml')
  ]);

  return Array.from(new Set([...tight, ...broad]));
}

async function fetchSynonyms(word) {
  const normalized = normalizeWord(word);

  if (!normalized) {
    return [];
  }

  if (synonymsCache.has(normalized)) {
    return synonymsCache.get(normalized);
  }

  const [merriamWebsterSynonyms, datamuseSynonyms] = await Promise.all([
    fetchMerriamWebsterSynonyms(normalized),
    fetchDatamuseSynonyms(normalized)
  ]);

  const combined = Array.from(new Set([...(merriamWebsterSynonyms || []), ...datamuseSynonyms]));

  const synonyms = combined.length > 0 ? combined : fallbackSynonyms[normalized] || [];
  synonymsCache.set(normalized, synonyms);
  return synonyms;
}

function updateHud() {
  chainLength.textContent = chain.length;
  scoreValue.textContent = score;
  attemptCounter.textContent = `${Math.max(0, chain.length - 1)} words`;
  timerValue.textContent = `${timerRemaining}s`;

  livesDisplay.innerHTML = '';
  for (let index = 0; index < lives; index += 1) {
    const token = document.createElement('span');
    token.className = 'token life';
    token.textContent = '♥';
    livesDisplay.appendChild(token);
  }

  hintsDisplay.innerHTML = '';
  for (let index = 0; index < hints; index += 1) {
    const token = document.createElement('span');
    token.className = 'token hint';
    token.textContent = '💡';
    hintsDisplay.appendChild(token);
  }
}

function renderBoard() {
  board.style.setProperty('--flow', `${-(Math.max(chain.length - 1, 0)) * 80}px`);
  board.innerHTML = '';

  if (chain.length === 0) {
    return;
  }

  chain.forEach((word, index) => {
    const node = document.createElement('div');
    node.className = `path-node ${index === chain.length - 1 ? 'current' : ''}`;
    node.textContent = word.toUpperCase();
    board.appendChild(node);

    if (index > 0 && index % HINT_MILESTONE === 0) {
      const hintMarker = document.createElement('div');
      hintMarker.className = 'path-node path-reward path-reward--hint';
      hintMarker.textContent = '💡';
      hintMarker.setAttribute('aria-label', 'Hint earned');
      board.appendChild(hintMarker);
    }
  });

  const inputWord = normalizeWord(guessInput.value);
  if (inputWord && inputWord !== currentWord) {
    const currentNode = document.createElement('div');
    currentNode.className = 'path-node current hint';
    currentNode.textContent = inputWord.toUpperCase();
    board.appendChild(currentNode);
  }

  // The ribbon line must span the full scrollable chain, not just the
  // visible viewport, otherwise it scrolls out of view and never returns
  // once the chain grows past the board's original width.
  board.style.setProperty('--ribbon-width', `${Math.max(0, board.scrollWidth - 44)}px`);

  requestAnimationFrame(() => {
    const maxScroll = Math.max(0, board.scrollWidth - board.clientWidth + 12);
    board.scrollTo({ left: maxScroll, behavior: 'smooth' });
  });
}

function updateStatus(message, tone = 'neutral') {
  statusMessage.textContent = message;
  statusMessage.style.color = tone === 'error' ? '#fca5a5' : tone === 'success' ? '#86efac' : '#a7bad9';
}

function triggerRewardPopup(messages) {
  if (!bonusPop || !messages || !messages.length) {
    return;
  }

  bonusPop.innerHTML = messages.map(({ type, label }) => `<span class="pop-${type}">${label}</span>`).join('');
  bonusPop.classList.remove('show');
  void bonusPop.offsetWidth;
  bonusPop.classList.add('show');

  clearTimeout(triggerRewardPopup.timeoutId);
  triggerRewardPopup.timeoutId = setTimeout(() => {
    bonusPop.classList.remove('show');
  }, 900);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function runTimerInterval() {
  stopTimer();

  timerInterval = setInterval(() => {
    if (gameOver) {
      stopTimer();
      return;
    }

    timerRemaining = Math.max(0, timerRemaining - 1);
    updateHud();

    if (timerRemaining <= 0) {
      stopTimer();
      if (canOfferContinue()) {
        showContinuePrompt('time');
      } else {
        updateStatus('Time is up. Your run ends here.', 'error');
        endGame();
      }
    }
  }, 1000);
}

function canOfferContinue() {
  return lives > 0 || (isNativeApp && (rewardedAdReady || billingReady));
}

function showContinuePrompt(reason) {
  stopTimer();
  guessInput.blur();

  continueYesBtn.classList.toggle('hidden', lives <= 0);
  if (reason === 'lives') {
    continueHeading.textContent = 'Out of lives!';
    continueMessage.textContent = 'Get another life to keep your chain going.';
  } else {
    continueHeading.textContent = "Time's up!";
    continueMessage.textContent = 'Add 5 seconds to keep your chain going.';
  }

  updateMonetizationUI();
  continuePrompt.classList.remove('hidden');
}

function resumeRun(rewardMessages) {
  continuePrompt.classList.add('hidden');
  triggerRewardPopup(rewardMessages);
  updateHud();
  updateStatus('Back in it! Find a synonym for ' + currentWord.toUpperCase() + '.', 'success');
  guessInput.focus();
  runTimerInterval();
}

function startTimer() {
  timerRemaining = ROUND_TIME_LIMIT;
  updateHud();
  runTimerInterval();
}

function endGame() {
  gameOver = true;
  stopTimer();

  // Let the chain visibly snap apart before switching to the result screen,
  // otherwise the game screen (and the animation on it) disappears instantly.
  board.classList.add('chain-broken');

  const brokenWord = brokenSynonyms[Math.floor(Math.random() * brokenSynonyms.length)];
  resultHeading.textContent = `The chain is ${brokenWord}`;

  const finalValue = chain.length > 1 ? chain.length - 1 : 1;

  if (selectedMode === 'daily' && !leaderboardSaved) {
    saveDailyLeaderboardEntry();
    leaderboardSaved = true;
  }

  finalScore.textContent = score;
  finalChain.textContent = finalValue;

  if (score >= 80) {
    resultMessage.textContent = 'Excellent! You built a seriously long chain.';
  } else if (score >= 45) {
    resultMessage.textContent = 'Great job. Your chain is going strong.';
  } else if (score >= 20) {
    resultMessage.textContent = 'Solid chain. Try another starter word and push it further.';
  } else {
    resultMessage.textContent = 'Nice start. Find a few more synonyms to grow the chain.';
  }

  setTimeout(() => {
    startScreen.classList.add('hidden');
    gameScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
  }, 700);
}

async function prepareGame(newStarter, mode = selectedMode) {
  selectedMode = mode;

  // The starter pool is large now, so an occasional word may have thin synonym
  // data. For infinite/daily-random picks, retry with a fresh word rather than
  // dead-ending the run; the daily challenge must stay on its one seeded word.
  let picked = normalizeWord(newStarter || getSystemStarter(mode));
  let synonyms = [];
  const maxAttempts = mode === 'daily' ? 1 : 5;

  for (let attempt = 0; attempt < maxAttempts && picked; attempt += 1) {
    synonyms = await fetchSynonyms(picked);
    if (synonyms.length) {
      break;
    }
    if (attempt < maxAttempts - 1) {
      picked = getSystemStarter(mode);
    }
  }

  if (!picked || !synonyms.length) {
    updateStatus(
      mode === 'daily'
        ? 'That word does not seem to have a valid synonym list in the current dictionary data.'
        : 'Could not find a starter word with synonyms right now. Please try again.',
      'error'
    );
    return;
  }

  starter = picked;
  currentWord = picked;
  chain = [picked];
  score = 0;
  lives = STARTING_LIVES;
  hints = STARTING_HINTS;
  gameOver = false;
  inFlight = false;
  leaderboardSaved = false;
  board.classList.remove('chain-broken');
  continuePrompt.classList.add('hidden');
  stopTimer();

  startScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  restartBtn.classList.remove('hidden');

  targetWord.textContent = currentWord.toUpperCase();
  updateHud();
  renderBoard();
  guessInput.value = '';
  guessInput.focus();
  startTimer();
  const modeLabel =
    mode === 'daily'
      ? 'Daily challenge'
      : mode === 'categories'
        ? `${categoryLabels[selectedCategory] || 'Category'} run`
        : 'Infinite run';
  updateStatus(`${modeLabel}: find a synonym for ${currentWord.toUpperCase()} before time runs out.`, 'success');
}

async function useHint() {
  if (gameOver || inFlight || hints <= 0) {
    updateStatus(hints <= 0 ? 'No hints remaining.' : 'Hint unavailable right now.', 'error');
    return;
  }

  inFlight = true;
  const options = await fetchSynonyms(currentWord);
  const valid = options.filter((entry) => !chain.includes(entry) && entry !== currentWord);
  const hintWord = valid[Math.floor(Math.random() * valid.length)] || options[0];

  if (!hintWord) {
    inFlight = false;
    updateStatus('No synonym hint is available for this word right now.', 'error');
    return;
  }

  const definition = await fetchWordDefinition(hintWord);
  hints -= 1;
  inFlight = false;
  updateHud();

  updateStatus(
    definition
      ? `Hint: means something like “${definition}”.`
      : `Hint: think of another way to say “${currentWord.toUpperCase()}”.`,
    'success'
  );
}

async function submitGuess(event) {
  event.preventDefault();

  if (gameOver || inFlight) {
    return;
  }

  const guess = normalizeWord(guessInput.value);

  if (!guess) {
    updateStatus('Type a synonym before submitting.', 'error');
    return;
  }

  if (guess === currentWord) {
    updateStatus('Choose a synonym that is different from the current word.', 'error');
    guessInput.value = '';
    return;
  }

  if (chain.includes(guess)) {
    updateStatus('That word has already been used in this chain.', 'error');
    guessInput.value = '';
    return;
  }

  inFlight = true;
  const allowedSynonyms = await fetchSynonyms(currentWord);

  if (!allowedSynonyms.includes(guess)) {
    lives -= 1;
    vibrate(200);
    updateStatus(`“${guess.toUpperCase()}” is not a valid synonym of “${currentWord.toUpperCase()}”.`, 'error');
    guessInput.value = '';
    updateHud();

    if (lives <= 0) {
      if (canOfferContinue()) {
        showContinuePrompt('lives');
      } else {
        updateStatus('No lives remaining. The chain is broken.', 'error');
        endGame();
      }
      inFlight = false;
      return;
    }

    inFlight = false;
    return;
  }

  vibrate(15);
  chain.push(guess);
  score += 10 + Math.min(chain.length * 2, 32);
  currentWord = guess;
  targetWord.textContent = currentWord.toUpperCase();
  guessInput.value = '';

  const wordsFound = chain.length - 1;
  timerRemaining += 5;
  const rewardMessages = [{ type: 'time', label: '+5s' }];

  if (wordsFound % HINT_MILESTONE === 0) {
    hints += 1;
    rewardMessages.push({ type: 'hint', label: '+1 💡 hint' });
  }

  triggerRewardPopup(rewardMessages);
  updateHud();
  renderBoard();
  updateStatus('Nice. Now find a synonym for ' + currentWord.toUpperCase() + '.', 'success');
  inFlight = false;
}

starterForm.addEventListener('submit', (event) => {
  event.preventDefault();
});

function attachTouchActiveState(el) {
  // :hover doesn't reliably trigger on touch devices, so mirror it manually
  // for the brief moment a finger is actually pressed on the button.
  el.addEventListener('pointerdown', () => el.classList.add('glow-active'));
  el.addEventListener('pointerup', () => el.classList.remove('glow-active'));
  el.addEventListener('pointerleave', () => el.classList.remove('glow-active'));
  el.addEventListener('pointercancel', () => el.classList.remove('glow-active'));
}

document.querySelectorAll('.mode-btn').forEach(attachTouchActiveState);

startInfiniteBtn.addEventListener('click', () => {
  selectedMode = 'infinite';
  prepareGame(getSystemStarter('infinite'), 'infinite');
});

dailyChallengeBtn.addEventListener('click', () => {
  selectedMode = 'daily';
  prepareGame(getSystemStarter('daily'), 'daily');
});

categoriesToggleBtn.addEventListener('click', () => {
  const isOpen = categoryPicker.classList.toggle('hidden') === false;
  categoriesToggleBtn.setAttribute('aria-expanded', String(isOpen));
});

categoryPicker.addEventListener('click', (event) => {
  const chip = event.target.closest('.category-chip');
  if (!chip) {
    return;
  }

  selectedCategory = chip.dataset.category;
  selectedMode = 'categories';
  prepareGame(getSystemStarter('categories'), 'categories');
});

guessInput.addEventListener('input', () => {
  renderBoard();
});

// Tapping these buttons would otherwise steal focus from guessInput and
// close the on-screen keyboard; keep focus on the input instead.
[enterBtn, hintBtn].forEach((button) => {
  button.addEventListener('mousedown', (event) => {
    event.preventDefault();
  });
});

enterBtn.addEventListener('click', () => {
  if (!gameOver) {
    guessForm.requestSubmit();
  }
});

guessForm.addEventListener('submit', submitGuess);
hintBtn.addEventListener('click', useHint);

continueYesBtn.addEventListener('click', () => {
  if (lives <= 0) {
    return;
  }
  lives -= 1;
  timerRemaining += 5;
  vibrate(15);
  resumeRun([{ type: 'life', label: '-1 ♥ used' }, { type: 'time', label: '+5s' }]);
});

watchAdBtn.addEventListener('click', () => {
  showRewardedAd();
});

buyLivesBtn.addEventListener('click', () => {
  purchaseLivesPack();
});

continueNoBtn.addEventListener('click', () => {
  continuePrompt.classList.add('hidden');
  updateStatus('Your run ends here.', 'error');
  endGame();
});

restartBtn.addEventListener('click', () => {
  gameOver = true;
  stopTimer();
  startScreen.classList.remove('hidden');
  resultScreen.classList.add('hidden');
  gameScreen.classList.add('hidden');
  restartBtn.classList.add('hidden');
  guessInput.value = '';
  renderLeaderboard();
  updateStatus('Choose a mode to start your next chain.', 'neutral');
});

playAgainBtn.addEventListener('click', () => {
  stopTimer();
  startScreen.classList.remove('hidden');
  resultScreen.classList.add('hidden');
  gameScreen.classList.add('hidden');
  restartBtn.classList.add('hidden');
  guessInput.value = '';
  renderLeaderboard();
  updateStatus('Choose a mode to begin again.', 'neutral');
});

// ---------------------------------------------------------------------------
// Native monetization: AdMob rewarded ads + Google Play Billing.
// These SDKs only exist inside the wrapped Android app (via Capacitor); on
// the plain website window.Capacitor/window.CdvPurchase are simply absent,
// so isNativeApp is false and the watch-ad/buy-lives buttons stay hidden.
// ---------------------------------------------------------------------------

// Google's public TEST rewarded ad unit - safe to ship, always serves test
// ads. Replace with your own AdMob rewarded ad unit ID before publishing.
const REWARDED_AD_UNIT_ID = 'ca-app-pub-3940256099942544/5224354917';

// Placeholder SKU. Create a matching consumable in-app product with this
// exact ID in Play Console before this can complete a real purchase.
const LIVES_PACK_PRODUCT_ID = 'lives_pack_3';

const isNativeApp = !!(window.Capacitor && window.Capacitor.isNativePlatform && window.Capacitor.isNativePlatform());
let rewardedAdReady = false;
let billingReady = false;

function updateMonetizationUI() {
  watchAdBtn.classList.toggle('hidden', !(isNativeApp && rewardedAdReady));
  buyLivesBtn.classList.toggle('hidden', !(isNativeApp && billingReady));
}

async function prepareRewardedAd() {
  if (!isNativeApp) {
    return;
  }

  try {
    await window.Capacitor.Plugins.AdMob.prepareRewardVideoAd({ adId: REWARDED_AD_UNIT_ID });
    rewardedAdReady = true;
  } catch (error) {
    rewardedAdReady = false;
    console.warn('Rewarded ad failed to preload.', error);
  }
  updateMonetizationUI();
}

async function showRewardedAd() {
  if (!isNativeApp || !rewardedAdReady) {
    return;
  }

  try {
    await window.Capacitor.Plugins.AdMob.showRewardVideoAd();
  } catch (error) {
    console.warn('Rewarded ad failed to show.', error);
    updateStatus('Ad is not ready yet. Try again in a moment.', 'error');
  }
}

async function purchaseLivesPack() {
  if (!isNativeApp || !billingReady || !window.CdvPurchase) {
    return;
  }

  const product = window.CdvPurchase.store.get(LIVES_PACK_PRODUCT_ID);
  const offer = product && product.getOffer ? product.getOffer() : null;
  if (!offer) {
    updateStatus('Store is not ready yet. Try again in a moment.', 'error');
    return;
  }

  try {
    await window.CdvPurchase.store.order(offer);
  } catch (error) {
    console.warn('Purchase failed.', error);
    updateStatus('Purchase could not be completed.', 'error');
  }
}

async function initMonetization() {
  if (!isNativeApp) {
    return;
  }

  try {
    const { AdMob } = window.Capacitor.Plugins;
    await AdMob.initialize();
    AdMob.addListener('onRewardedVideoAdReward', () => {
      lives += 1;
      timerRemaining += 5;
      vibrate(15);
      resumeRun([{ type: 'life', label: '+1 ♥ from ad' }, { type: 'time', label: '+5s' }]);
    });
    AdMob.addListener('onRewardedVideoAdFailedToLoad', () => {
      rewardedAdReady = false;
      updateMonetizationUI();
    });
    AdMob.addListener('onRewardedVideoAdClosed', () => {
      prepareRewardedAd();
    });
    await prepareRewardedAd();
  } catch (error) {
    console.warn('AdMob unavailable.', error);
  }

  try {
    const { store, ProductType, Platform } = window.CdvPurchase;
    store.register({
      id: LIVES_PACK_PRODUCT_ID,
      type: ProductType.CONSUMABLE,
      platform: Platform.GOOGLE_PLAY
    });
    store.when(LIVES_PACK_PRODUCT_ID).approved((transaction) => {
      lives += 3;
      timerRemaining += 5;
      vibrate(15);
      transaction.finish();
      resumeRun([{ type: 'life', label: '+3 ♥ purchased' }, { type: 'time', label: '+5s' }]);
    });
    store.error((error) => console.warn('Store error.', error));
    await store.initialize([Platform.GOOGLE_PLAY]);
    billingReady = true;
  } catch (error) {
    console.warn('Play Billing unavailable.', error);
  }

  updateMonetizationUI();
}

initMonetization();

const savedPlayerName = localStorage.getItem(PLAYER_NAME_KEY);
if (savedPlayerName) {
  playerNameInput.value = savedPlayerName;
}

playerNameInput.addEventListener('input', () => {
  localStorage.setItem(PLAYER_NAME_KEY, playerNameInput.value);
});

renderLeaderboard();
updateHud();
renderBoard();
updateStatus('Choose a game mode to begin.', 'neutral');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch((error) => {
      console.warn('Service worker registration failed.', error);
    });
  });
}
