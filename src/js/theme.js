const refs = {
  selectTheme: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'theme';

const changeTheme = theme => {
  if (theme === Theme.DARK) {
    refs.body.classList.toggle(Theme.DARK);
    refs.body.classList.add(Theme.DARK);
    refs.selectTheme.checked = true;
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
  }
};

changeTheme(localStorage.getItem(STORAGE_KEY));

function onchangeThemeClick() {
  const newTheme = refs.selectTheme.checked ? Theme.DARK : Theme.LIGHT;
  localStorage.setItem(STORAGE_KEY, newTheme);
  changeTheme(newTheme);
}

refs.selectTheme.addEventListener('change', onchangeThemeClick);
