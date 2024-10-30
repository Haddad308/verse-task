"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  TicketIcon,
  PointerIcon,
} from "lucide-react";

export default function Footer() {
  const socialIcons = [
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Youtube className="h-5 w-5" />, href: "#" },
    { icon: <TicketIcon className="h-5 w-5" />, href: "#" },
    { icon: <PointerIcon className="h-5 w-5" />, href: "#" },
  ];

  return (
    <footer className="bg-[linear-gradient(62deg,#016DEA_27.41%,#FA0101_95.02%)] text-white">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Company Info */}
          <div className="space-y-8 lg:col-span-1">
            <div className="text-4xl font-bold">
              <span className="text-red-500">V</span>verse
            </div>
            <p className="text-sm/relaxed">
              Proudly, The 1st of It&apos;s Kind Worldwide, AIO Digital Platform
              For The Global Community Of The Veterinary Industry
            </p>

            {/* Asia Office */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Asia Head Office</h3>
              <div className="space-y-2">
                <Link
                  href="mailto:info@myvverse.com"
                  className="flex items-center gap-2 text-sm hover:underline"
                >
                  <span>✉</span> info@myvverse.com
                </Link>
                <Link
                  href="tel:+971527956665"
                  className="flex items-center gap-2 text-sm hover:underline"
                >
                  <span>📞</span> +971 52 7956665
                </Link>
                <p className="flex items-center gap-2 text-sm">
                  <span>📍</span> Virtually Managed From UAE-Dubai
                </p>
              </div>
            </div>

            {/* Africa Office */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Africa Head Office</h3>
              <div className="space-y-2">
                <Link
                  href="mailto:info@myvverse.com"
                  className="flex items-center gap-2 text-sm hover:underline"
                >
                  <span>✉</span> info@myvverse.com
                </Link>
                <Link
                  href="tel:+20100898200"
                  className="flex items-center gap-2 text-sm hover:underline"
                >
                  <span>📞</span> +20 100898200
                </Link>
                <p className="flex items-center gap-2 text-sm">
                  <span>📍</span> Virtually Managed From Egypt-Cairo
                </p>
              </div>
            </div>

            {/* Social Media Sections */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold">VV Arabic SM - MENA</h3>
                <div className="mt-2 flex flex-wrap gap-4">
                  {socialIcons.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="hover:text-gray-300"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold">VV English SM - Global</h3>
                <div className="mt-2 flex flex-wrap gap-4">
                  {socialIcons.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="hover:text-gray-300"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:grid-cols-4">
            {/* The Story Column */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">The Story</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    The Dream
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    The People
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    The Timeline
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Branding
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Income Streams
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Networking
                  </Link>
                </li>
              </ul>
            </div>

            {/* The Vs Column */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">The Vs</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    V-Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    V-Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    V-Nation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    V-Tube
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    V-Jobs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    V-Lance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    V-Market
                  </Link>
                </li>
              </ul>
            </div>

            {/* VV Assets Column */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">VV Assets</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Blog Posts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Social Page
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Social Groups
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Channels
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Shorts
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* VV Profiles Column */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">VV Profiles</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Personal Profiles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    Entity Profiles
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    V-Blog Authors
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    V-Nation Authors
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    V-Tube Authors
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    V-Candidates
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline">
                    V-Employers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm">Copyright © 2024 V-Verse</p>
          <p className="text-sm">
            Built with ❤️ By{" "}
            <Link
              href="https://area-h.com"
              className="hover:underline"
              target="_blank"
            >
              Area-H
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
