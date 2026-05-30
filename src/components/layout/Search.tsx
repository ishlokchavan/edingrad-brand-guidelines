'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { buildSearchIndex } from '@/lib/sections';

interface SearchProps {
  open: boolean;
  onClose: () => void;
}

export function Search({ open, onClose }: SearchProps) {
  const index = useMemo(() => buildSearchIndex(), []);
  const [query, setQuery] = useState('');
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return index.slice(0, 8);
    const seen = new Set<string>();
    return index
      .filter((e) => e.label.toLowerCase().includes(q) || e.section.toLowerCase().includes(q))
      .filter((e) => {
        const key = e.anchor + e.label;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, 10);
  }, [query, index]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setSel(0);
      // focus after the overlay paints
      const t = setTimeout(() => inputRef.current?.focus(), 30);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => setSel(0), [query]);

  const go = (anchor: string) => {
    onClose();
    if (typeof window !== 'undefined') window.location.hash = `#${anchor}`;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSel((s) => Math.min(s + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSel((s) => Math.max(s - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const r = results[sel];
      if (r) go(r.anchor);
    }
  };

  if (!open) return null;

  return (
    <div
      className="search-ov open"
      id="searchOv"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="search-box">
        <input
          ref={inputRef}
          id="searchInput"
          type="text"
          placeholder="Search the guidelines\u2026"
          autoComplete="off"
          aria-label="Search the guidelines"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <div className="search-res" id="searchRes">
          {results.map((r, i) => (
            <a
              key={r.anchor + r.label}
              href={`#${r.anchor}`}
              className={i === sel ? 'sel' : undefined}
              onMouseEnter={() => setSel(i)}
              onClick={(e) => {
                e.preventDefault();
                go(r.anchor);
              }}
            >
              <span>{r.label}</span>
              <span className="grp">{r.section}</span>
            </a>
          ))}
          {results.length === 0 && (
            <a href="#top" onClick={(e) => { e.preventDefault(); onClose(); }}>
              <span>No matches</span>
              <span className="grp">Try another term</span>
            </a>
          )}
        </div>
        <div className="search-hint">{'\u2191\u2193'} to navigate {'\u00b7'} Enter to open {'\u00b7'} Esc to close</div>
      </div>
    </div>
  );
}
