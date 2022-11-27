import Box from 'services/Box';
import { NavItem } from './Navigation.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' }
];

export const Navigation = () => {
  return (
    <Box as='header' p={4} borderBottom='1px solid green'>
      <Box as='nav' display='flex'>
        {navItems.map(({ href, text }) => (
          <NavItem to={href} key={href}>
            {text}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
}