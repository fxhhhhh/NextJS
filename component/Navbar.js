import Link from 'next/link';

const Navbar = () => (
  <nav>
    <Link href={"/"}> HOME</Link>
    <Link href={"../posts/first-post"}> ABOUT</Link>
  </nav>
);

export default Navbar;
