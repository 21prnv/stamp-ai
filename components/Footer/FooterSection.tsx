// components/FooterSection.tsx
import { Linkedin, Youtube, TwitterIcon } from "lucide-react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

export default function FooterSection() {
  return (
    <div className="bg-[#F4F4F4] w-full relative overflow-hidden">
      <BackgroundBeamsWithCollision>
        <div className="text-center relative py-36 px-4  z-10">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
              opacity: 1,
            }}
          />
          <h2 className="text-4xl md:text-6xl font-medium text-gray-900">
            What are you waiting for?
          </h2>
          <p className="text-2xl text-gray-600 mt-4">
            Take control of your email and your day.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <button className="px-6 py-3 border border-gray-300 rounded-md text-sm cursor-pointer font-light text-gray-900 hover:bg-gray-100 transition">
              Request Demo
            </button>
            <button className="px-6 py-3 bg-black text-white rounded-md text-sm cursor-pointer font-light hover:bg-gray-800 transition">
              Get Started
            </button>
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      <footer className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center justify-center space-y-6 md:space-y-0 md:flex-row md:justify-between relative z-10">
        <div className="flex flex-col  items-center space-y-2">
          <div className="flex items-center space-x-2">
            <img src="/logo.webp" alt="Stamp Logo" />
          </div>

          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2025 Stamp AI, Inc.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-black" />
            </a>
            <a href="#" aria-label="X (Twitter)">
              <TwitterIcon className="w-5 h-5 text-gray-600 hover:text-black" />
            </a>
            <a href="#" aria-label="YouTube">
              <Youtube className="w-5 h-5 text-gray-600 hover:text-black" />
            </a>
          </div>
          <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-6">
            <a href="#" className="text-sm text-gray-600 hover:text-black">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-black">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
