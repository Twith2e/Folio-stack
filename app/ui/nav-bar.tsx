import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="py-5 px-12 shadow-md">
      <Image alt="Logo" src="/logo.png" width={130} height={20} />
    </nav>
  );
}
