"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Bold,
  Italic,
  Underline,
  ChevronLeft,
  X,
  Paperclip,
  Calendar,
  Link2,
} from "lucide-react";

export default function EmailComposer() {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [popupClosing, setPopupClosing] = useState(false);
  const [useFormalText, setUseFormalText] = useState(true);
  const [showInformalText, setShowInformalText] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [typedText, setTypedText] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const typewriterRef = useRef<NodeJS.Timeout[]>([]);
  const popupRef = useRef<HTMLDivElement>(null);

  const formalText =
    "Thank you for providing the clarification and the helpful resources. I greatly appreciate your assistance. Please rest assured that I will reach out should I have any further inquiries.";
  const informalText =
    "Thank you so much for the clarification and the helpful links! I really appreciate it. I'll let you know if I have any questions moving forward.";

  const startTypewriter = () => {
    typewriterRef.current.forEach((timeout) => clearTimeout(timeout));
    typewriterRef.current = [];
    setTypedText("");
    const timeouts: NodeJS.Timeout[] = [];
    informalText.split("").forEach((char, index) => {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + char);
      }, 30 * index);
      timeouts.push(timeout);
    });
    typewriterRef.current = timeouts;
  };

  const closePopupWithAnimation = () => {
    setPopupClosing(true);
    setTimeout(() => {
      setShowSuggestion(false);
      setPopupClosing(false);
    }, 400);
  };

  useEffect(() => {
    if (isHovering) {
      setAnimationPhase(1);
      const popupTimeout = setTimeout(() => {
        setShowSuggestion(true);
        setAnimationPhase(2);
        timeoutRef.current = setTimeout(() => {
          closePopupWithAnimation();
          setTimeout(() => {
            setUseFormalText(false);
            setAnimationPhase(3);
            setTimeout(() => {
              setShowInformalText(true);
              setAnimationPhase(4);
              startTypewriter();
            }, 100);
          }, 300);
        }, 3000);
      }, 800);

      return () => {
        clearTimeout(popupTimeout);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        typewriterRef.current.forEach((timeout) => clearTimeout(timeout));
      };
    } else {
      setAnimationPhase(0);
      setShowSuggestion(false);
      setPopupClosing(false);
      setUseFormalText(true);
      setShowInformalText(false);
      setTypedText("");
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      typewriterRef.current.forEach((timeout) => clearTimeout(timeout));
      typewriterRef.current = [];
    }
  }, [isHovering]);

  const handleAccept = () => {
    closePopupWithAnimation();
    setTimeout(() => {
      setUseFormalText(false);
      setAnimationPhase(3);
      setTimeout(() => {
        setShowInformalText(true);
        setAnimationPhase(4);
        startTypewriter();
      }, 100);
    }, 300);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleReject = () => {
    closePopupWithAnimation();
    setAnimationPhase(0);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    typewriterRef.current.forEach((timeout) => clearTimeout(timeout));
  };

  return (
    <div
      className="max-w-2xl md:max-w-[40rem] cursor-pointer mx-auto max-h-[500px] border border-gray-200 rounded-lg shadow-sm bg-white transition-shadow duration-300 hover:shadow-md p-2 sm:p-4"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex items-center justify-between p-2 sm:p-4 border-b">
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="text-gray-500 hover:text-gray-700">
            <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
          </button>
          <h2 className="text-[14px] sm:text-[17px] font-light text-gray-500 font-sans">
            Reply
          </h2>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="text-gray-400">
            <span className="text-xl sm:text-2xl">−</span>
          </button>
          <button className="text-gray-400">
            <X size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      <div className="p-2 sm:p-4">
        <div className="flex items-center mb-3 sm:mb-4">
          <div className="w-8 sm:w-12 text-gray-600 text-sm sm:text-base">
            To
          </div>
          <div className="flex-1 relative">
            <div className="inline-block bg-gray-100 rounded px-2 py-1 text-xs sm:text-sm">
              cass@domain.com
            </div>
            <Input
              className="absolute inset-0 opacity-0 cursor-text"
              placeholder="Recipients"
            />
          </div>
          <div className="w-12 sm:w-16 flex justify-between text-gray-400 text-xs sm:text-sm">
            <span>Cc</span>
            <span>Bcc</span>
          </div>
        </div>

        <div className="h-px bg-gray-200 my-3 sm:my-4"></div>

        <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
          <button className="p-1 text-black">
            <Bold size={16} className="sm:w-5 sm:h-5" />
          </button>
          <button className="p-1 text-black">
            <Italic size={16} className="sm:w-5 sm:h-5" />
          </button>
          <button className="p-1 text-black">
            <Underline size={16} className="sm:w-5 sm:h-5" />
          </button>
        </div>

        <div className="relative">
          {showSuggestion && (
            <div
              ref={popupRef}
              className={`absolute right-0 top-32 z-10 bg-white border border-gray-200 rounded-lg shadow-lg p-3 sm:p-4 w-[280px] sm:w-[400px] ${
                popupClosing ? "animate-fadeOut" : "animate-fadeIn"
              }`}
            >
              <p className="text-[13px] sm:text-[15px] mb-3 sm:mb-4">
                Can you make this less formal?
              </p>
              <div className="flex justify-end gap-2">
                <Button
                  onClick={handleAccept}
                  className="bg-gray-900 hover:bg-gray-800 text-white text-[13px] sm:text-[15px] px-3 py-1 sm:px-4 sm:py-2 cursor-pointer"
                >
                  Accept
                </Button>
                <Button
                  onClick={handleReject}
                  variant="outline"
                  className="border-gray-300 text-[13px] sm:text-[15px] px-3 py-1 sm:px-4 sm:py-2 cursor-pointer"
                >
                  Reject
                </Button>
              </div>
            </div>
          )}

          <div className="min-h-[250px] sm:min-h-[300px] text-gray-800">
            <p className="mb-3 sm:mb-4 text-[13px] sm:text-[15px]">Hi Cass,</p>

            <p
              className={`mb-3 sm:mb-4 transition-all duration-700 text-[13px] sm:text-[15px] ${
                animationPhase >= 1 ? "bg-red-50" : ""
              }`}
            >
              {formalText}
            </p>

            {showInformalText && (
              <p className="mb-3 sm:mb-4 p-2 text-[13px] sm:text-[15px] bg-green-50 animate-fadeIn">
                {typedText}
                <span className="inline-block w-1 h-3 sm:h-4 ml-0.5 bg-gray-500 animate-blink"></span>
              </p>
            )}

            <p className="mb-3 sm:mb-4 text-[13px] sm:text-[15px]">
              Best,
              <br />
              Michelle
            </p>
          </div>
        </div>

        <div className="mt-3 sm:mt-4 border rounded-lg p-2 sm:p-3 flex items-center justify-between text-gray-500">
          <div className="flex items-center gap-1 sm:gap-2 text-[13px] sm:text-[15px]">
            <ChevronLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span>Reply Content Attached</span>
          </div>
          <X size={16} className="sm:w-[18px] sm:h-[18px]" />
        </div>
      </div>

      <div className="p-2 sm:p-4 flex items-center justify-between border-t">
        <button className="text-gray-500 text-sm sm:text-base">Save</button>
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="text-gray-400">
            <Link2 size={16} className="sm:w-5 sm:h-5" />
          </button>
          <button className="text-gray-400">
            <Paperclip size={16} className="sm:w-5 sm:h-5" />
          </button>
          <button className="text-gray-400">
            <Calendar size={16} className="sm:w-5 sm:h-5" />
          </button>
          <Button className="bg-gradient-to-b from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-white px-4 sm:px-8 text-sm sm:text-base">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
