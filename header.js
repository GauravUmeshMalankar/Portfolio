(function () {
  const HEADER_HTML = `
  <nav class="flex items-center justify-between px-6 py-4 border-b border-gray-200">
   <div class="font-bold text-lg">Portfolio</div>
   <ul class="hidden sm:flex space-x-6 font-semibold text-sm">
    <li><a class="hover:underline" href="index.html">Home</a></li>
    <li><a class="hover:underline" href="https://drive.google.com/file/d/1XCIbnE_AJQoNeWZRWVe2Vx8KUdgqg4zA/view?usp=drive_link">Biodata</a></li>
    <li><a class="hover:underline" href="Education.html">Education</a></li>
    <li><a class="hover:underline" href="skills.html">Skills</a></li>
    <li><a class="hover:underline" href="projects.html">Projects</a></li>
    <li><a class="hover:underline" href="achieve.html">Achievements</a></li>
   </ul>
   <div class="flex space-x-6 text-black text-lg">
    <button id="theme-toggle" aria-label="Toggle theme" class="focus:outline-none">
     <i id="theme-icon" class="fas fa-moon"></i>
    </button>
   </div>
  </nav>
  `;

  function injectHeader() {
    const placeholder = document.getElementById('header-placeholder');
    if (!placeholder) return;
    placeholder.outerHTML = HEADER_HTML;
    initTheme();
  }

  function initTheme() {
    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.remove('light', 'dark');
    body.classList.add(savedTheme);
    themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

    toggleButton.addEventListener('click', () => {
      const isDark = body.classList.contains('dark');
      body.classList.remove('light', 'dark');
      if (isDark) {
        body.classList.add('light');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
      } else {
        body.classList.add('dark');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectHeader);
  } else {
    injectHeader();
  }
})();