import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  bodyClassName?: string;
  children: ReactNode;
}

export default function Layout({ bodyClassName, children }: LayoutProps) {
  return (
    <div className={`wrapper ${bodyClassName ?? ''}`}>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
