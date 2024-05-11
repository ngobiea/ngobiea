'use client';
import Navigation from '../nav';
import { usePathname } from 'next/navigation';

const MainNav = () => {
  const path = usePathname();
  const isShowNav =
    path.startsWith('/projects') ||
    path.startsWith('/contact') ||
    path.startsWith('/skills') ||
    path.startsWith('/about');
  let nav = <></>;
  if (isShowNav) {
    nav = <Navigation />;
  }
  if (path.startsWith('/projects/')) {
    nav = <></>;
  }
  return nav;
};

export default MainNav;
