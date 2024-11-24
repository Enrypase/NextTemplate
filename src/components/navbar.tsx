import Link from "next/link";

export default function Navbar(props: { logged?: boolean }) {
  return (
    <nav className="flex justify-between max-w-screen-lg m-auto">
      <Link href="/">
        <p>Home</p>
      </Link>
      <Link href="/user">
        <p>User</p>
      </Link>
      {props.logged ? "Logged YEY " : "NOT Logged :(("}
    </nav>
  );
}
