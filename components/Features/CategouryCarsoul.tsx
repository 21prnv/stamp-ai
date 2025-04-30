"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

interface Category {
  id: string;
  name: string;
  count: number;
  color: string;
}

export default function CategoryCarousel() {
  const categories: Category[] = [
    {
      id: "newsletters",
      name: "Newsletters",
      count: 32,
      color: "bg-orange-200",
    },
    { id: "bills", name: "Bills", count: 51, color: "bg-blue-500" },
    { id: "school", name: "School", count: 10, color: "bg-yellow-400" },
    { id: "work", name: "Work", count: 14, color: "bg-slate-500" },
    {
      id: "social-media",
      name: "Social Media",
      count: 25,
      color: "bg-purple-400",
    },
    { id: "travel", name: "Travel", count: 8, color: "bg-sky-400" },
    { id: "finance", name: "Finance", count: 19, color: "bg-green-300" },
    { id: "health", name: "Health & Fitness", count: 3, color: "bg-red-200" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate carousel
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % categories.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, categories.length]);

  const visibleItems = () => {
    const items = [];
    for (let i = 0; i < 6; i++) {
      const index = (activeIndex + i) % categories.length;
      items.push(categories[index]);
    }
    return items;
  };

  return (
    <div className="md:w-full w-[350px] md:max-w-[400px] mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6 overflow-hidden">
      <h2 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6 text-gray-800">
        Categories
      </h2>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setHoveredItem(null);
        }}
      >
        <LayoutGroup>
          <motion.div className="flex flex-col space-y-2 sm:space-y-3">
            <AnimatePresence initial={false} mode="popLayout">
              {visibleItems().map((category, index) => (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 1,
                    layout: { type: "spring", stiffness: 300, damping: 25 },
                  }}
                  className="relative"
                >
                  <motion.div
                    className={`relative flex items-center justify-between p-2 sm:p-3 rounded-md ${
                      hoveredItem === category.id
                        ? "bg-gray-50 z-10"
                        : "bg-white"
                    }`}
                    whileHover={{
                      scale: 1.04,
                      backgroundColor: "#f8fafc",
                      boxShadow:
                        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.05)",
                      zIndex: 10,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      },
                    }}
                    onMouseEnter={() => setHoveredItem(category.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {category.id === "school" && (
                      <motion.div
                        className="absolute left-0 top-0 w-0.5 sm:w-1 h-full bg-blue-500"
                        initial={{ scaleY: 0 }}
                        animate={{
                          scaleY: hoveredItem === category.id ? 1 : 0,
                          opacity: hoveredItem === category.id ? 1 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    )}

                    <div className="flex items-center">
                      <div
                        className={`w-4 h-4 sm:w-6 sm:h-6 rounded ${category.color} mr-2 sm:mr-4`}
                      ></div>
                      <span className="text-gray-700 text-base sm:text-lg">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-gray-500 font-medium text-lg sm:text-xl">
                      {category.count}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </div>
  );
}
