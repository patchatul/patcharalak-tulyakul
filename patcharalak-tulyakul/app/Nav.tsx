'use client';
import Icon1 from "../public/Icon1.svg";
import Link from "next/link";
import Image from "next/image";
import { spawnIconBurst } from "./Effects";

function Nav() {
  return (
    <div className="flex items-center justify-evenly">
      <h1 className="text-4xl flex font-medium">
        <Link href="/">Patcharalak Tulyakul</Link>
      </h1>

      <Image src={Icon1} alt="" className="App-logo h-20 w-20"  onClick={() => spawnIconBurst(Icon1.src)} />

      <nav className="gap-4 text-2xl font-medium md:flex md:flex-row  hidden">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/certificates">Certificates</Link>
      </nav>
      
    </div>
  );
}

export default Nav;
