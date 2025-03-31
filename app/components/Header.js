import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <h1>Sarah Randolph Warren</h1>
      <nav className="nav">
        <Link href="/" className="nav-link">
          PORTFOLIO
        </Link>
        <Link href="/about" className="nav-link">
          ABOUT
        </Link>
      </nav>
    </header>
  );
}
