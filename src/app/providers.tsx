'use client';

import { ThemeProvider } from '@material-tailwind/react';
interface ProviderProps {
  children: React.ReactNode;
}

export default function Providers({ children }: Readonly<ProviderProps>) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
