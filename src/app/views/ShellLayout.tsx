import { NavLink, Outlet } from 'react-router-dom';

export const ShellLayout = () => {
  return (
    <div className="app-shell">
      <header className="topbar">
        <p className="label">[ React + TypeScript + feature architecture ]</p>
        <h1>Da Vinci Gallery Platform</h1>
        <nav className="nav-links" aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
