import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className="home-view">
      <h2>Modular FE Architecture · 2026-ready</h2>
      <p>
        This project now uses a feature-first React architecture with routes, services, guards, custom hooks,
        and application state.
      </p>
      <Link className="cta" to="/gallery">
        Open Gallery Experience
      </Link>
    </section>
  );
};

export default HomePage;
