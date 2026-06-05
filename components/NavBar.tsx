import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/types/memory-foam', label: 'Memory Foam' },
  { href: '/types/hybrid', label: 'Hybrid' },
  { href: '/types/innerspring', label: 'Innerspring' }
];

export default function NavBar() {
  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          Springdoo
        </Link>
        <nav className="nav-links" aria-label="Mattress types navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
