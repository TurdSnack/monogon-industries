'use strict';

// ── Job listing modal (careers.html only — no-ops elsewhere) ──────
(function () {
  const modal = document.getElementById('job-modal');
  if (!modal) return;

  const modalTitle = document.getElementById('job-modal-title');
  const modalBody  = document.getElementById('job-modal-body');
  const backdrop   = document.getElementById('job-modal-backdrop');
  const closeBtn   = document.getElementById('job-modal-close');

  function openJob(row) {
    modalTitle.textContent = row.dataset.title || 'Position';
    modalBody.innerHTML = row.dataset.desc || '';
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
  function closeJob() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('tr.job-row').forEach(row => {
    row.addEventListener('click', () => openJob(row));
    row.tabIndex = 0;
    row.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openJob(row); }
    });
  });

  backdrop.addEventListener('click', closeJob);
  closeBtn.addEventListener('click', closeJob);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeJob();
  });
})();

// ── Address bar clock (cosmetic) ───────────────────────────────────
(function () {
  const el = document.querySelector('[data-clock]');
  if (!el) return;
  const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
  function tick() {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    el.textContent = `${days[d.getDay()]} ${hh}:${mm} MYTHOS-STANDARD`;
  }
  tick();
  setInterval(tick, 15000);
})();

// eslint-disable-next-line no-console
console.log(
  '%cIf you can read this, you\'re past the frontend.',
  'color:#4e9bcf;font-family:monospace;font-size:12px;'
);
console.log(
  '%cMonoSec logs devtools sessions. Allegedly.\nFirst rule of LavaGang: talk about LavaGang.\nLeaked board archive -> https://turdsnack.github.io/slz-lore-clipboards/',
  'color:#888;font-family:monospace;font-size:11px;'
);
