"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Logo from "../Logo";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-[#E5E5E5] bg-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-2.5">
        <Link href="/" className="flex-shrink-0">
          <Logo />
          <span className="sr-only">V-Verse</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* VV Demo Button */}
          <Button
            asChild
            className="rounded-full hidden bg-gradient-to-r from-[#016DEA] to-[#FA0101] hover:opacity-90 sm:inline-flex"
          >
            <Link href="/vv-demo">VV Demo</Link>
          </Button>

          {/* Login/Join Button */}
          <Button
            asChild
            className="rounded-full hidden bg-gradient-to-r from-[#016DEA] to-[#FA0101] hover:opacity-90 sm:inline-flex"
          >
            <Link href="/login">Log In / Join VV</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-gray-100 p-2 hover:bg-gray-200"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
