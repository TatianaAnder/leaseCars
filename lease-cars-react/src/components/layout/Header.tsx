import { NavLink, useLocation } from 'react-router-dom';
import { useFavorites } from '../../hooks/useFavorites';

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'menu__list-link menu__list-link--active' : 'menu__list-link';

export default function Header() {
  const { favoriteIds } = useFavorites();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <header className={`header ${isHome ? 'header-main' : ''}`}>
      <div className="container">
        <div className="header__inner">
          <NavLink to="/" className="logo">
            <img src="/images/logo.svg" alt="D&M Lease Cars" className="logo__img" />
          </NavLink>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__list-item">
                <NavLink to="/new-car" className={navLinkClass}>
                  New Cars
                </NavLink>
              </li>
              <li className="menu__list-item">
                <span className="menu__list-link" aria-disabled="true">
                  Pre-owned Cars
                </span>
              </li>
              <li className="menu__list-item">
                <span className="menu__list-link" aria-disabled="true">
                  Finance
                </span>
              </li>
              <li className="menu__list-item">
                <span className="menu__list-link" aria-disabled="true">
                  Lease vs Buy
                </span>
              </li>
              <li className="menu__list-item">
                <NavLink to="/contacts" className={navLinkClass}>
                  Contact Us
                </NavLink>
              </li>
              <li className="menu__list-item">
                <span className="menu__favorites" title="Cars you favorited">
                  ♥ Favorites
                  <span className="menu__favorites-count">{favoriteIds.length}</span>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
