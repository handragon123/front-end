import './App.css';
import { useState, createContext } from 'react';
import Header from './Header';
import Footer from './Footer';

// 전역컨텍스트 생성
export const ThemeContext = createContext(null);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className="app">
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        <Header />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}
