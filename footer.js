(function () {
  const FOOTER_HTML = `
    <footer class="px-6 sm:px-16 py-6">
      <p class="w-full text-xs mt-6 pt-6 border-t footer-divider text-center">
        &copy; <span id="footer-year"></span> Gaurav Umesh Malankar. All rights reserved.
      </p>
    </footer>
  `;

  function injectFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;
    placeholder.outerHTML = FOOTER_HTML;

    const yearEl = document.getElementById('footer-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFooter);
  } else {
    injectFooter();
  }
})();