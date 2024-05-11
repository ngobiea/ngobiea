'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type ReactNode } from 'react';
interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: Readonly<NavLinkProps>) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `flex items-center text-gray-100`
          : `flex items-center text-gray-500 hover:text-gray-100`
      }
    >
      {children}
    </Link>
  );
}
