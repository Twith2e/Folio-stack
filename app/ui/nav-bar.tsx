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
    <nav className="py-5 px-6 lg:px-12 shadow-md flex justify-between items-center">
      <Link className="hidden lg:flex" href="/">
        <Image alt="Logo" src="/logo.png" width={130} height={20} />
      </Link>
      <Link className="lg:hidden flex" href="/">
        <Image alt="Logo" src="/favicon.png" width={30} height={20} />
      </Link>
      <ul className="flex items-center gap-3 text-lg">
        <li>
          <a className="no-underline" href="">
            Features
          </a>
        </li>
        <li>
          <a className="no-underline" href="">
            Pricing
          </a>
        </li>
      </ul>
      <div className="flex gap-3">
        <SignedOut>
          <SignInButton>
            <button className="bg-[#4F46E5] p-3 rounded-md text-white text-sm font-medium active:scale-103 transition-all duration-200">
              <span>Get Started</span>
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="border border-[#4F46E5] py-1 px-3 rounded-md text-[#4F46E5] text-sm font-medium active:scale-103 transition-all duration-200">
              <span>Sign Up</span>
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
