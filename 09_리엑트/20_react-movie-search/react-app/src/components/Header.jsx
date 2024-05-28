import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="gnb_wrap">
      <ul className="gnb">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/react-query">React Query</Link>
        </li>
        <li>
          <Link to="/parallel-query">Parallel Query</Link>
        </li>
      </ul>
    </nav>
  );
}
