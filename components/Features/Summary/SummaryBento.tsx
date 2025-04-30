"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

export default function AnimatedDemoRequest() {
  const [isHovering, setIsHovering] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [showActionItems, setShowActionItems] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const summaryTimerRef = useRef<NodeJS.Timeout | null>(null);
  const actionItemsTimerRef = useRef<NodeJS.Timeout | null>(null);
  const typewriterRef = useRef<NodeJS.Timeout | null>(null);

  const summaryText =
    "Juna Clementine, a project manager, requests a demo of Stamp to learn how it can help them save time managing their inbox and writing emails.";

  const handleMouseEnter = () => {
    setIsHovering(true);
    resetAnimation();
    startAnimation();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    clearAllTimers();

    setTimeout(() => {
      setShowSummary(false);
      setShowActionItems(false);
      setTypedText("");
      setIsTyping(false);
    }, 300);
  };

  const clearAllTimers = () => {
    if (summaryTimerRef.current) clearTimeout(summaryTimerRef.current);
    if (actionItemsTimerRef.current) clearTimeout(actionItemsTimerRef.current);
    if (typewriterRef.current) clearTimeout(typewriterRef.current);
  };

  const resetAnimation = () => {
    clearAllTimers();
    setShowSummary(false);
    setShowActionItems(false);
    setTypedText("");
    setIsTyping(false);
  };

  const startAnimation = () => {
    summaryTimerRef.current = setTimeout(() => {
      setShowSummary(true);
      startTypewriter();
    }, 300);

    actionItemsTimerRef.current = setTimeout(() => {
      setShowActionItems(true);
    }, 1500);
  };

  const startTypewriter = () => {
    setIsTyping(true);
    let i = 0;
    const speed = 20;

    const type = () => {
      if (i < summaryText.length) {
        setTypedText(summaryText.substring(0, i + 1));
        i++;
        typewriterRef.current = setTimeout(type, speed);
      } else {
        setIsTyping(false);
      }
    };

    type();
  };

  useEffect(() => {
    return () => {
      clearAllTimers();
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center z-10 p-2 sm:p-4">
      <motion.div
        className="w-full max-w-[95vw] sm:max-w-3xl bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-3 sm:p-6">
          <AnimatePresence>
            {showSummary && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl sm:text-2xl font-light text-gray-800 mb-2 sm:mb-4"
                >
                  Summary
                </motion.h2>
                <div className="text-sm sm:text-base text-gray-600 leading-relaxed mb-1 min-h-[60px] sm:min-h-[80px]">
                  {typedText}
                  {isTyping && (
                    <span className="inline-block w-1 h-4 ml-0.5 bg-gray-500 animate-pulse" />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showActionItems && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl sm:text-2xl font-light text-gray-800 mb-2 sm:mb-4"
                >
                  Action Items
                </motion.h2>

                <div className="grid sm:grid-cols-2 gap-2 sm:gap-4 mb-3">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="border rounded-lg p-3 sm:p-5 relative"
                  >
                    <div className="pr-8 sm:pr-10">
                      <p className="font-light text-gray-800 mb-2 text-[11px] sm:text-[12px]">
                        Review Juna Clementine's demo request and check team ...
                      </p>
                    </div>
                    <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-green-300 flex items-center justify-center text-green-500">
                      <Check size={14} className="sm:w-[18px] sm:h-[18px]" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="border rounded-lg p-3 sm:p-5 relative"
                  >
                    <div className="pr-8 sm:pr-10">
                      <p className="font-light text-gray-800 mb-2 text-[11px] sm:text-[12px]">
                        Respond to Juna Clementine to acknowledge her request
                        ...
                      </p>
                    </div>
                    <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-green-300 flex items-center justify-center text-green-500">
                      <Check size={14} className="sm:w-[18px] sm:h-[18px]" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {(showSummary || showActionItems) && (
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                exit={{ opacity: 0, scaleX: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t my-6 origin-left"
              />
            )}
          </AnimatePresence>

          <div>
            <h2 className="text-xl sm:text-2xl font-light text-gray-800 mb-3 sm:mb-6">
              Request for a demo of Stamp
            </h2>

            <div className="flex items-start gap-2 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg sm:text-xl font-semibold">
                J
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start flex-wrap">
                  <div>
                    <h3 className="text-lg sm:text-xl font-light text-gray-700">
                      Juna Clementine
                    </h3>
                    <p className="text-sm text-gray-500">To: Me</p>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">
                    Sat, Jan 18, 9:57 PM
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600">
                  <p className="mb-3 sm:mb-4">Hi Stamp Team,</p>
                  <p className="text-sm sm:text-base">
                    My name is Juna Clementine, and I'm a project manager at a
                    tech startup. I came across Stamp through a colleague and
                    I'm interested in learning how it can help me save time
                    managing my inbox and writing emails. I'm particularly
                    interested in the auto-reply feature.
                  </p>
                  <p className="mt-4">
                    I'm available for a demo on Tuesdays and Thursdays after 2
                    PM PST. Would any of those times work for you?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
