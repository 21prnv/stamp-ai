"use client";

import FilterOutTheNoiseGrid from "@/components/Features/Categorie/FilterOutTheNoiseGrid";
import FindAnythingGrid from "@/components/Features/FindAnything/FindAnythingGrid";
import ReplyInSecondBentoGrid from "@/components/Features/ReplyInSecond/ReplyInSecondBento";
import SummaryGrid from "@/components/Features/Summary/SummaryGrid";
import FooterSection from "@/components/Footer/FooterSection";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const [videoHeight, setVideoHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const laptopRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Function to handle image click
  const handleImageClick = () => {
    setShowVideo(true);
  };

  // Update video height based on laptop image height
  useEffect(() => {
    if (laptopRef.current) {
      setVideoHeight(laptopRef.current.height - 140);
    }
  }, []);

  // Cursor gradient animation

  return (
    <div>
      <div
        className="min-h-screen bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: "url('/bg.svg')" }}
      >
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0 }}
        />

        <div className="container mx-auto px-4 relative">
          {/* Navigation */}
          <nav className="flex items-center justify-between py-6 relative">
            <div className="flex items-center justify-center">
              <img src="/logo.webp" alt="Stamp Logo" />
              {/* Desktop Menu */}
              <div className="hidden md:flex ml-6 space-x-6">
                <a href="#" className="text-gray-800 font-medium">
                  Overview
                </a>
                <a href="#" className="text-gray-800 font-medium">
                  Features
                </a>
                <a href="#" className="text-gray-800 font-medium">
                  Pricing
                </a>
                <a href="#" className="text-gray-800 font-medium">
                  About
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Sign In Button */}
            <button className="hidden md:block cursor-pointer bg-black text-white px-4 py-2 rounded-full font-light">
              Sign In
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-2 py-4 md:hidden">
                <div className="flex flex-col space-y-4 px-4">
                  <a href="#" className="text-gray-800 font-medium">
                    Overview
                  </a>
                  <a href="#" className="text-gray-800 font-medium">
                    Features
                  </a>
                  <a href="#" className="text-gray-800 font-medium">
                    Pricing
                  </a>
                  <a href="#" className="text-gray-800 font-medium">
                    About
                  </a>
                  <button className="bg-black cursor-pointer text-white px-4 py-2 rounded-full font-light w-full">
                    Sign In
                  </button>
                </div>
              </div>
            )}
          </nav>

          {/* Hero Section */}
          <div className="flex flex-col items-center mt-12 md:mt-24">
            <div className="w-full text-center">
              <h1 className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight ">
                Your AI-Powered Second Brain for Email
              </h1>
              <p className="mt-6 text-gray-600 leading-relaxed">
                The inbox that handles your email for you. Say goodbye to email
                overload and hello to your second brain.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium cursor-pointer">
                  Schedule a Demo
                </button>
                <button className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-medium cursor-pointer">
                  Contact Sales
                </button>
              </div>
            </div>

            {/* Laptop Display Section */}
            <div className="w-full h-full flex justify-center items-center mt-12 relative">
              <div className="relative h-full w-full max-w-6xl mx-auto">
                {showVideo && (
                  <div className="absolute z-10 md:left-6 h-full left-1 md:-top-[63px] md:bottom-0 bottom-6 w-full flex justify-center items-center rounded-2xl">
                    <iframe
                      src="https://www.youtube.com/embed/pLrj4Gtgg6Y?si=0-nkUlurkNB4mHGd"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      className="w-full md:max-w-3xl max-w-[250px] md:h-auto h-[200px]"
                      style={{
                        height: `${videoHeight}px`,
                        minHeight: "150px",
                        borderRadius: "1rem",
                      }}
                    ></iframe>
                  </div>
                )}

                {/* Laptop Image */}
                <div className="relative w-full ">
                  <Image
                    ref={laptopRef}
                    src="/mac.svg"
                    alt="Laptop"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="md:ml-20 ml-5"
                    style={{ width: "100%", height: "auto" }}
                  />
                  {!showVideo && (
                    <div className="absolute md:bottom-10 md:left-5 z-50 bottom-3 right-0 w-full h-full flex justify-center items-center">
                      <div className="play-button-container relative md:w-[100px] md:h-[100px] w-[50px] h-[50px] hover:shadow-lg transition-shadow duration-300 rounded-full cursor-pointer">
                        <Image
                          src="/play.svg"
                          alt="Play Button"
                          width={120}
                          height={120}
                          onClick={handleImageClick}
                        />
                        <div className="wave"></div>
                        <div className="wave wave2"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .play-button-container {
            position: relative;
            display: inline-block;
          }

          .wave {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            background: blue; /* Brighter blue color */
            box-shadow: 0 0 20px rgba(37, 99, 235, 0.7); /* Blue glow effect */
            opacity: 0;
            z-index: -1;
          }

          .play-button-container:hover .wave {
            animation: wave 1.5s infinite ease-out;
          }

          .wave2 {
            animation-delay: 0.3s;
            background: rgba(
              37,
              99,
              235,
              0.4
            ); /* Slightly different blue for second wave */
          }

          @keyframes wave {
            0% {
              transform: translate(-50%, -50%) scale(0);
              opacity: 0.6;
            }
            100% {
              transform: translate(-50%, -50%) scale(1.5);
              opacity: 0;
            }
          }
        `}</style>
      </div>
      <div className="md:px-10 md:py-10 py-2 px-2 gap-4 mx-auto flex flex-col max-w-7xl">
        <ReplyInSecondBentoGrid />
        <div className="flex md:flex-row flex-col justify-between gap-3">
          <FilterOutTheNoiseGrid />
          <SummaryGrid />
        </div>
        <FindAnythingGrid />
        <FooterSection />
      </div>
    </div>
  );
}
