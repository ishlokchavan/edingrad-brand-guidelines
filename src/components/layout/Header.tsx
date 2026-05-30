'use client';

import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onMenu: () => void;
  onSearch: () => void;
}

export function Header({ onMenu, onSearch }: HeaderProps) {
  return (
    <header className="ud-header">
      <div className="hl">
        <button className="hbtn mob" id="menuBtn" aria-label="Menu" onClick={onMenu}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
        <a href="#top" className="wmk">
          <b>Edingrad</b>
          <span>Brand Guidelines</span>
        </a>
      </div>
      <div className="hr">
        <ThemeToggle />
        <span className="sep" />
        <button className="hbtn" id="searchBtn" aria-label="Search" onClick={onSearch}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </button>
        <span className="sep" />
        <a className="hbtn" href="https://www.edingrad.com" target="_blank" rel="noopener noreferrer" aria-label="Visit site">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
          </svg>
        </a>
      </div>
    </header>
  );
}
