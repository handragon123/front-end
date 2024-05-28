import { useContext } from 'react';
import { ThemeContext } from './App';

export default function Header() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  console.log(isDarkMode, toggleTheme);

  return (
    <header className={`header ${isDarkMode ? 'dark_theme' : ''}`}>
      <h2>Header</h2>
      <button type="button" onClick={toggleTheme}>
        Toggle {isDarkMode ? 'Light' : 'Dark'}
      </button>
    </header>
  );
}
