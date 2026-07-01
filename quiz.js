const TIME_LIMIT_SECONDS = 30 * 60;

let questions = [];
let currentIndex = 0;
let score = 0;
let wrong = [];
let timerId = null;
let secondsLeft = TIME_LIMIT_SECONDS;
let state = 'selecting';
let selectedIds = new Set();

const el = {
  screenHome: document.getElementById('screen-home'),
  screenQuiz: document.getElementById('screen-quiz'),
  screenResults: document.getElementById('screen-results'),
  screenQuestions: document.getElementById('screen-questions'),

  btnStart: document.getElementById('btn-start'),
  btnQuestionsMenu: document.getElementById('btn-questions'),
  btnQuestionsBack: document.getElementById('btn-questions-back'),
  btnResultsHome: document.getElementById('btn-results-home'),
  btnRetryWrong: document.getElementById('btn-retry-wrong'),

  questionCounter: document.getElementById('question-counter'),
  questionText: document.getElementById('question-text'),
  multiHint: document.getElementById('multi-hint'),
  options: document.getElementById('options'),
  actionBtn: document.getElementById('action-btn'),
  timerText: document.getElementById('timer-text'),

  resultsScore: document.getElementById('results-score'),
  resultsWrong: document.getElementById('results-wrong'),
  resultsWrongTitle: document.getElementById('results-wrong-title'),

  questionsList: document.getElementById('questions-list'),
  modeSelect: document.getElementById('quiz-mode'),
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(name) {
  el.screenHome.hidden = name !== 'home';
  el.screenQuiz.hidden = name !== 'quiz';
  el.screenResults.hidden = name !== 'results';
  el.screenQuestions.hidden = name !== 'questions';
}

function goHome() {
  if (timerId) clearInterval(timerId);
  showScreen('home');
}

function getQuestionPool() {
  const mode = el.modeSelect ? el.modeSelect.value : 'all';
  const all = Array.isArray(QUIZ_QUESTIONS) ? QUIZ_QUESTIONS : [];
  switch (mode) {
    case 'range-1-30':    return all.slice(0, 30);
    case 'range-31-60':   return all.slice(30, 60);
    case 'range-61-90':   return all.slice(60, 90);
    case 'range-91-120':  return all.slice(90, 120);
    case 'random-30':     return shuffle(all).slice(0, 30);
    case 'all':
    default:              return all;
  }
}

function startQuiz() {
  const pool = getQuestionPool();
  if (pool.length === 0) {
    alert('No questions available for the selected mode.');
    return;
  }
  startQuizWithPool(pool);
}

function startQuizWithPool(pool) {
  questions = shuffle(pool);
  currentIndex = 0;
  score = 0;
  wrong = [];
  secondsLeft = TIME_LIMIT_SECONDS;
  state = 'selecting';
  selectedIds = new Set();
  showScreen('quiz');
  renderQuestion();
  startTimer();
}

function retryWrong() {
  if (wrong.length === 0) return;
  const pool = wrong.map(w => w.question);
  startQuizWithPool(pool);
}

function startTimer() {
  if (timerId) clearInterval(timerId);
  updateTimer();
  timerId = setInterval(() => {
    secondsLeft--;
    updateTimer();
    if (secondsLeft <= 0) {
      clearInterval(timerId);
      finishQuiz();
    }
  }, 1000);
}

function updateTimer() {
  const m = Math.floor(secondsLeft / 60);
  const s = secondsLeft % 60;
  el.timerText.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function renderQuestion() {
  const q = questions[currentIndex];
  state = 'selecting';
  selectedIds = new Set();

  el.questionCounter.textContent = `QUESTION: ${currentIndex + 1} OF ${questions.length} QUESTIONS`;
  el.questionText.textContent = q.question;
  el.multiHint.hidden = q.type !== 'multi';

  el.options.innerHTML = '';
  q.options.forEach(opt => {
    const node = document.createElement('div');
    node.className = 'option';
    node.dataset.type = q.type;
    node.dataset.id = opt.id;

    const marker = document.createElement('span');
    marker.className = 'option-marker';

    const text = document.createElement('span');
    text.className = 'option-text';
    text.textContent = opt.text;

    node.appendChild(marker);
    node.appendChild(text);
    node.addEventListener('click', () => onOptionClick(opt.id, q.type));
    el.options.appendChild(node);
  });

  el.actionBtn.textContent = 'ANSWER';
  el.actionBtn.disabled = true;
}

function onOptionClick(id, type) {
  if (state !== 'selecting') return;
  if (type === 'single') {
    selectedIds.clear();
    selectedIds.add(id);
  } else {
    if (selectedIds.has(id)) selectedIds.delete(id);
    else selectedIds.add(id);
  }
  refreshOptionStyles();
  el.actionBtn.disabled = selectedIds.size === 0;
}

function refreshOptionStyles() {
  el.options.querySelectorAll('.option').forEach(node => {
    if (selectedIds.has(node.dataset.id)) node.classList.add('selected');
    else node.classList.remove('selected');
  });
}

function onActionClick() {
  if (state === 'selecting') {
    if (selectedIds.size === 0) return;
    revealAnswer();
  } else {
    nextQuestion();
  }
}

function revealAnswer() {
  state = 'reviewing';
  const q = questions[currentIndex];
  const correctIds = new Set(q.options.filter(o => o.isCorrect).map(o => o.id));

  const isMulti = q.type === 'multi';
  el.options.querySelectorAll('.option').forEach(node => {
    node.classList.add('locked');
    node.classList.remove('selected');
    const id = node.dataset.id;
    const isCorrect = correctIds.has(id);
    const wasSelected = selectedIds.has(id);
    if (isMulti) {
      if (isCorrect && wasSelected) node.classList.add('correct');
      else if (isCorrect && !wasSelected) node.classList.add('correct', 'missed');
      else if (wasSelected) node.classList.add('wrong');
    } else {
      if (isCorrect) node.classList.add('correct');
      else if (wasSelected) node.classList.add('wrong');
    }
  });

  const isAllCorrect = selectedIds.size === correctIds.size &&
    [...selectedIds].every(id => correctIds.has(id));

  if (isAllCorrect) score++;
  else wrong.push({ question: q, userSelectedIds: [...selectedIds] });

  el.actionBtn.textContent = 'NEXT';
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex >= questions.length) {
    finishQuiz();
    return;
  }
  renderQuestion();
}

function finishQuiz() {
  if (timerId) clearInterval(timerId);
  showScreen('results');
  el.resultsScore.textContent =
    `You answered ${score} out of ${questions.length} questions correctly.`;

  el.btnRetryWrong.hidden = wrong.length === 0;

  if (wrong.length === 0) {
    el.resultsWrongTitle.hidden = true;
    el.resultsWrong.innerHTML = '';
    return;
  }

  el.resultsWrongTitle.hidden = false;
  el.resultsWrong.innerHTML = '';
  wrong.forEach(({ question, userSelectedIds }) => {
    const userSet = new Set(userSelectedIds);
    const item = document.createElement('div');
    item.className = 'results-wrong-item';

    const qNode = document.createElement('p');
    qNode.className = 'results-q';
    qNode.textContent = question.question;
    item.appendChild(qNode);

    const optsWrap = document.createElement('div');
    optsWrap.className = 'results-options';
    question.options.forEach(o => {
      const optNode = document.createElement('div');
      optNode.className = 'results-opt';
      const wasPicked = userSet.has(o.id);
      if (o.isCorrect) optNode.classList.add('correct');
      else if (wasPicked) optNode.classList.add('user-wrong');

      const marker = document.createElement('span');
      marker.className = 'results-opt-marker';
      if (wasPicked) {
        marker.textContent = o.isCorrect ? '✓' : '✕';
        marker.classList.add(o.isCorrect ? 'pick-ok' : 'pick-bad');
      } else {
        marker.textContent = '';
      }

      const text = document.createElement('span');
      text.className = 'results-opt-text';
      text.textContent = o.text;

      optNode.appendChild(marker);
      optNode.appendChild(text);
      optsWrap.appendChild(optNode);
    });
    item.appendChild(optsWrap);
    el.resultsWrong.appendChild(item);
  });
}

function showQuestionsScreen() {
  renderQuestionsList();
  showScreen('questions');
}

function renderQuestionsList() {
  el.questionsList.innerHTML = '';
  const list = Array.isArray(QUIZ_QUESTIONS) ? QUIZ_QUESTIONS : [];
  if (list.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'questions-empty';
    empty.textContent = 'No questions in questions.js yet.';
    el.questionsList.appendChild(empty);
    return;
  }
  list.forEach((q, i) => {
    const item = document.createElement('div');
    item.className = 'q-item';

    const header = document.createElement('div');
    header.className = 'q-item-header';

    const num = document.createElement('span');
    num.className = 'q-item-num';
    num.textContent = `#${i + 1}`;

    const badge = document.createElement('span');
    badge.className = 'q-item-badge';
    badge.textContent = q.type === 'multi' ? 'MULTI' : 'SINGLE';

    header.appendChild(num);
    header.appendChild(badge);

    const text = document.createElement('p');
    text.className = 'q-item-text';
    text.textContent = q.question;

    const opts = document.createElement('ul');
    opts.className = 'q-item-options';
    q.options.forEach(o => {
      const li = document.createElement('li');
      if (o.isCorrect) li.classList.add('correct');
      li.textContent = o.text;
      opts.appendChild(li);
    });

    item.appendChild(header);
    item.appendChild(text);
    item.appendChild(opts);
    el.questionsList.appendChild(item);
  });
}

el.btnStart.addEventListener('click', startQuiz);
el.btnQuestionsMenu.addEventListener('click', showQuestionsScreen);
el.btnQuestionsBack.addEventListener('click', goHome);
el.btnResultsHome.addEventListener('click', goHome);
el.btnRetryWrong.addEventListener('click', retryWrong);
el.actionBtn.addEventListener('click', onActionClick);

showScreen('home');
