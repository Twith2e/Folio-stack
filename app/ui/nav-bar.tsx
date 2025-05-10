import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-5 px-12 shadow-md flex justify-between items-center">
      <Link href="/">
        <Image alt="Logo" src="/logo.png" width={130} height={20} />
      </Link>
      <div className="flex gap-3">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
