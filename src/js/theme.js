const refs = {
  switchTheme: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'theme';

const changeTheme = theme => {
  if (theme === Theme.DARK) {
    refs.body.classList.remove(Theme.L);
    refs.body.classList.add(Theme.DARK);
    refs.switchTheme.checked = true;
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
  }
};

changeTheme(localStorage.getItem(STORAGE_KEY));

const switchClick = () => {
  const newTheme = refs.switchTheme.checked ? Theme.DARK : Theme.LIGHT;
  localStorage.setItem(STORAGE_KEY, newTheme);
  changeTheme(newTheme);
};

refs.switchTheme.addEventListener('change', switchClick);
