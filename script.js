// Terminal typing sequence for the hero
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const lines = [
    { el: document.getElementById('typeLine1'), text: 'Nokukhanya Ntisa — Final-year BCom Information Systems, University of Johannesburg' },
    { el: document.getElementById('typeLine2'), text: 'Data Analytics · AI Automation · Cybersecurity' },
    { el: document.getElementById('typeLine3'), text: 'Open to graduate roles in data & fintech →' }
  ];

  if (reduceMotion) {
    lines.forEach(l => { if (l.el) l.el.textContent = l.text; });
    return;
  }

  function typeLine(line, speed, done) {
    if (!line.el) return done();
    let i = 0;
    const interval = setInterval(() => {
      line.el.textContent = line.text.slice(0, i + 1);
      i++;
      if (i >= line.text.length) {
        clearInterval(interval);
        setTimeout(done, 250);
      }
    }, speed);
  }

  function run(index) {
    if (index >= lines.length) return;
    typeLine(lines[index], 18, () => run(index + 1));
  }

  // Slight delay so it starts after page paint
  setTimeout(() => run(0), 400);
})();

// Reveal panels on scroll
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll('.panel, .footer');
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  targets.forEach(t => { t.style.opacity = 0; t.style.transform = 'translateY(16px)'; t.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  targets.forEach(t => observer.observe(t));
})();
