import Link from 'next/link';

const navItems = [
  { href: '/work', label: 'Work' },
  { href: '/builds', label: 'Builds' },
  { href: '/about', label: 'About' }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#05070e]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-2 py-4 sm:px-0">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Jack Codet
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="mailto:hello@example.com"
            className="rounded-full border border-slate-600 px-4 py-2 text-slate-200 transition hover:bg-slate-800/80"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
