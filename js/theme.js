(function() {
  'use strict';

  var THEME_KEY = 'theme';

  function getTheme() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateToggleButton(theme);
  }

  function updateToggleButton(theme) {
    var toggle = document.getElementById('theme-toggle');
    var sunIcon = document.getElementById('theme-icon-dark');
    var moonIcon = document.getElementById('theme-icon-light');
    if (!toggle || !sunIcon || !moonIcon) return;

    if (theme === 'light') {
      sunIcon.style.display = '';
      moonIcon.style.display = 'none';
      toggle.setAttribute('aria-label', 'Switch to dark mode');
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = '';
      toggle.setAttribute('aria-label', 'Switch to light mode');
    }
  }

  function init() {
    var currentTheme = getTheme();
    updateToggleButton(currentTheme);

    var toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', function() {
        var newTheme = getTheme() === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
      });
    }

    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem(THEME_KEY)) {
          setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
