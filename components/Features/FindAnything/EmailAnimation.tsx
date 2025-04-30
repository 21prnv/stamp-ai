"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const emailPool = [
  {
    id: 1,
    sender: "Stamp Marketing Team",
    date: "Jan 10",
    subject: "Get Ready! Something Big is Coming...",
    preview: "Hi John, We're thrilled to give you a sneak peek at s...",
    read: false,
  },
  {
    id: 2,
    sender: "Founders at Stamp",
    date: "Jan 8",
    subject: "It's Here! Introducing Stamp",
    preview: "Hello John, The wait is over! We're excited to annou...",
    read: false,
  },
  {
    id: 3,
    sender: "Stamp Newsletter",
    date: "Jan 7",
    subject: "Unlock the Power of Semantic Search",
    preview: "Hi, Did you know that Stamp can help you find anyt...",
    read: false,
  },
  {
    id: 4,
    sender: "Product Team",
    date: "Jan 12",
    subject: "Product Launch Feedback Needed",
    preview: "Hi John, We'd love to hear your thoughts on our recent launch...",
    read: false,
  },
  {
    id: 5,
    sender: "Customer Success",
    date: "Jan 11",
    subject: "Your Product Launch Guide",
    preview: "Here's everything you need to know about getting started with...",
    read: false,
  },
  {
    id: 6,
    sender: "Stamp Analytics",
    date: "Jan 9",
    subject: "Product Launch Metrics",
    preview: "The numbers are in! Check out how the launch performed across...",
    read: false,
  },
];

export default function EmailCarousel() {
  const [isHovering, setIsHovering] = useState(false);
  const [visibleEmails, setVisibleEmails] = useState(emailPool.slice(0, 3));
  const animationIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(3);
  const isAnimatingRef = useRef(false);

  const rotateEmails = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    setVisibleEmails((prev: any) => {
      const nextEmail = emailPool[currentIndexRef.current % emailPool.length];
      const uniqueNextEmail = {
        ...nextEmail,
        id: `${nextEmail.id}-${Date.now()}`,
      };

      return [uniqueNextEmail, ...prev.slice(0, 2)];
    });

    currentIndexRef.current += 1;

    setTimeout(() => {
      isAnimatingRef.current = false;
    }, 800);
  };

  useEffect(() => {
    if (isHovering) {
      animationIntervalRef.current = setInterval(rotateEmails, 2000);
    } else {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
        animationIntervalRef.current = null;
      }
    }

    return () => {
      if (animationIntervalRef.current) {
        clearInterval(animationIntervalRef.current);
      }
    };
  }, [isHovering]);

  const cardVariants = {
    hidden: {
      y: -20,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.2,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.03,
        duration: 0.3,
        ease: [0.32, 0.72, 0, 1],
      },
    }),
    exit: {
      y: 40,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.2,
        ease: [0.32, 0.72, 0, 1],
      },
    },
  };

  return (
    <div
      className="max-w-2xl mx-auto p-2 sm:p-4 bg-white cursor-pointer rounded-lg sm:rounded-xl shadow-lg"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Search Input */}
      <div className="relative mb-4 sm:mb-6">
        <div className="absolute inset-y-0 left-2 sm:left-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-8 sm:pl-10 pr-3 py-2 sm:py-3 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 text-base sm:text-lg"
          placeholder="Emails about the new product launch"
          readOnly
        />
      </div>

      {/* Email List Container */}
      <div className="relative overflow-hidden h-[360px] sm:h-[420px]">
        <AnimatePresence mode="popLayout">
          <div className="space-y-2 sm:space-y-3 w-full sm:w-[400px]">
            {visibleEmails.map((email, index) => (
              <motion.div
                key={email.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                className="w-full p-3 sm:p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start">
                  <div className="h-2 w-2 sm:h-3 sm:w-3 mt-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  <div className="ml-3 sm:ml-4 flex-grow min-w-0">
                    <div className="flex justify-between items-center gap-2">
                      <h3 className="text-base sm:text-lg font-medium text-gray-800 truncate">
                        {email.sender}
                      </h3>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        <span className="text-xs sm:text-sm text-gray-500">
                          {email.date}
                        </span>
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                      </div>
                    </div>
                    <h4 className="text-sm sm:text-base font-light text-gray-700 mt-0.5 sm:mt-1 truncate">
                      {email.subject}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5 sm:mt-1 line-clamp-1">
                      {email.preview}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}
