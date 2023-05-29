import { BiHome } from 'react-icons/bi';
import {GiBattleMech} from 'react-icons/gi';
import { NavItem } from './AppBar.styled';
import css from './AppBar.module.css';

const navItems = [
  { href: '/', text: 'Home', icon: BiHome },
  { href: 'hero', text: 'Search hero', icon: GiBattleMech },
];

export const Appbar = () => {
  return (
    <div className={css.AppBar}>
      {navItems.map(({ href, text, icon: Icon }) => (
        <NavItem to={href} key={href}>
          <Icon size="18" />
          {text}
        </NavItem>
      ))}
    </div>
  );
};
