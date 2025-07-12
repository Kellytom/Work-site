
import { h } from 'preact';
import { useState } from 'preact/hooks';
import type { JSX } from 'preact';

const DATA = [
  { title: 'Backgrounds', url: '/backgrounds', description: 'CSS backgrounds and patterns.' },
  { title: 'DaisyUI', url: '/daisyui-showcase', description: 'DaisyUI component showcase.' },
  { title: 'CSS Guide', url: '/starlight-css-guide', description: 'Starlight CSS guide.' },
  { title: 'Bulma Demo', url: '/bulma', description: 'Bulma CSS demo.' },
  { title: 'FF2 Navbar Demo', url: '/ff2-navbar-demo', description: 'This demo page.' },
  { title: 'Frames', url: '/frames', description: 'UI frames.' },
  { title: 'Frames Pale', url: '/frames-pale', description: 'Pale UI frames.' },
  { title: 'Menu 2', url: '/menu2/sub1', description: 'Menu 2 subpage.' },
  { title: 'Menu 3', url: '/menu3/sub1', description: 'Menu 3 subpage.' },
  { title: 'Menu 4', url: '/menu4/sub1', description: 'Menu 4 subpage.' },
  { title: 'Menu 5', url: '/menu5/sub1', description: 'Menu 5 subpage.' },
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof DATA[0][]>([]);
  // Debug: log query and results on every render
  console.log('query:', query, 'results:', results);


  function handleInput(e: JSX.TargetedEvent<HTMLInputElement, Event>) {
    const value = e.currentTarget.value;
    setQuery(value);
    if (value.trim() === '') {
      setResults([]);
      return;
    }
    const filtered = DATA.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.description.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  }


  function handleSearch(e: Event) {
    e.preventDefault();
  }

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <form className="search-form" role="search" aria-label="Site search" autoComplete="off" onSubmit={handleSearch}>
        <label htmlFor="search-input" className="visually-hidden">Search</label>
        <input
          id="search-input"
          name="search-input"
          type="search"
          placeholder="Search..."
          aria-label="Search site content"
          value={query}
          onInput={handleInput}
          required
          autoComplete="off"
        />
      </form>
      <ul
        className="search-results"
        style={{
          margin: 0,
          padding: 0,
          listStyle: 'none',
          position: 'absolute',
          left: 0,
          right: 0,
          top: '100%',
          zIndex: 1000,
          background: '#fff',
          boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
          borderRadius: '0 0 8px 8px',
          maxHeight: '300px',
          overflowY: 'auto',
          minWidth: '200px',
        }}
      >
        {results.length > 0 && query.trim() !== '' ? (
          results.map(item => (
            <li className="search-result-item" style={{ padding: '0.3em 0', borderBottom: '1px solid #eee' }} key={item.url}>
              <a href={item.url} style={{ color: '#0070f3', textDecoration: 'underline' }}>{item.title}</a>
              <div style={{ fontSize: '0.9em', color: '#666' }}>{item.description}</div>
            </li>
          ))
        ) : query.trim() !== '' ? (
          <li style={{ color: '#888', padding: '0.3em 0' }}>No results found.</li>
        ) : null}
      </ul>
    </div>
  );
}
