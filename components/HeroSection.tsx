"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="w-full overflow-hidden border-2 shadow-lg rounded-xl my-5 bg-white py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="bg-gradient-to-r from-[#016DEA] via-[#8B4FE3] to-[#A259FF] bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none">
              You&apos;re About
              <br />
              To Be Unleashed
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Select One Of VV AWESOME Plans Below To Discover Your True
              Potential, You Will Need To Make Sure That Your Account Wallet is
              All Set To Proceed Successfully
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                asChild
                className="bg-gradient-to-r from-[#016DEA] to-[#FA0101] hover:opacity-90 rounded-full"
              >
                <Link href="/my-wallet">
                  Go To My Wallet
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - YouTube Video */}
          <div className="relative aspect-video overflow-hidden rounded-xl ">
            <div className="absolute inset-0 bg-gray-100">
              {isPlaying ? (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/qYNy-Ne6kA4?si=4LiSLr90hhKPsSw6"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="relative h-full w-full">
                  <Image
                    width={600}
                    height={400}
                    src="/video-poster.jpg"
                    alt="Video thumbnail"
                    className="h-full w-full object-cover"
                  />
                  <button
                    onClick={playVideo}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-white/90 p-4 shadow-lg transition-transform hover:scale-110"
                  >
                    <Play className="h-8 w-8 text-blue-600" />
                    <span className="sr-only">Play video</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
