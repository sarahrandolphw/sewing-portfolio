import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <h1>Sarah Randolph Warren</h1>
      <nav className="nav">
        <Link href="/">PORTFOLIO</Link>
        <Link href="/about">ABOUT</Link>
      </nav>
    </header>
  );
}
