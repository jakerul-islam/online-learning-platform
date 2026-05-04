"use client";

import React from "react";
import { motion } from "framer-motion";

const tips = [
  {
    title: "Active Recall",
    tag: "Memory",
    icon: "🧠",
    desc: "Test yourself after learning instead of re-reading. This strengthens long-term memory.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Pomodoro Technique",
    tag: "Focus",
    icon: "⏱️",
    desc: "Work 25 mins, break 5 mins. Stay focused and avoid burnout.",
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "Spaced Repetition",
    tag: "Retention",
    icon: "🗓️",
    desc: "Review content over increasing intervals for better memory retention.",
    color: "from-orange-400 to-red-400",
  },
  {
    title: "Feynman Technique",
    tag: "Understanding",
    icon: "🚀",
    desc: "Explain simply. If you can't, you don’t understand it yet.",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Time Blocking",
    tag: "Planning",
    icon: "🎯",
    desc: "Schedule study time like meetings to avoid distractions.",
    color: "from-teal-400 to-cyan-500",
  },
  {
    title: "Single Tasking",
    tag: "Productivity",
    icon: "🔕",
    desc: "Focus on one task at a time for better results.",
    color: "from-yellow-400 to-amber-500",
  },
];

const LearningTipCard = () => {
  return (
    <section className="my-10">
      <h2 className="font-bold text-2xl mb-6 text-center">
        Learning Tips ✨
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-gray-200/20 to-white/10"
          >
            {/* Gradient border glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500 bg-gradient-to-br from-purple-500/30 to-blue-500/30" />

            {/* Card */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-3 h-full">
              
              {/* Top */}
              <div className="flex justify-between items-center">
                <div className={`text-2xl bg-gradient-to-r ${tip.color} bg-clip-text text-transparent`}>
                  {tip.icon}
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                  {tip.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800">
                {tip.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500">
                {tip.desc}
              </p>

              {/* Hover line */}
              <div className="mt-auto h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-purple-500 to-blue-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LearningTipCard;