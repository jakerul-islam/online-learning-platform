


"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const tips = [
  {
    title: "Active Recall",
    tag: "Memory",
    icon: "🧠",
    desc: "Test yourself after learning instead of re-reading. This strengthens long-term memory.",
    color: "from-purple-500 to-indigo-500",
    bar: "from-purple-500 to-indigo-500",
    tagStyle: "bg-purple-100 text-purple-700",
    borderHover: "hover:border-purple-400",
  },
  {
    title: "Pomodoro Technique",
    tag: "Focus",
    icon: "⏱️",
    desc: "Work 25 mins, break 5 mins. Stay focused and avoid burnout.",
    color: "from-green-400 to-emerald-500",
    bar: "from-green-400 to-emerald-500",
    tagStyle: "bg-green-100 text-green-700",
    borderHover: "hover:border-green-400",
  },
  {
    title: "Spaced Repetition",
    tag: "Retention",
    icon: "🗓️",
    desc: "Review content over increasing intervals for better memory retention.",
    color: "from-orange-400 to-red-400",
    bar: "from-orange-400 to-red-400",
    tagStyle: "bg-orange-100 text-orange-700",
    borderHover: "hover:border-orange-400",
  },
  {
    title: "Feynman Technique",
    tag: "Understanding",
    icon: "🚀",
    desc: "Explain simply. If you can't, you don't understand it yet.",
    color: "from-pink-500 to-rose-500",
    bar: "from-pink-500 to-rose-500",
    tagStyle: "bg-pink-100 text-pink-700",
    borderHover: "hover:border-pink-400",
  },
  {
    title: "Time Blocking",
    tag: "Planning",
    icon: "🎯",
    desc: "Schedule study time like meetings to avoid distractions.",
    color: "from-teal-400 to-cyan-500",
    bar: "from-teal-400 to-cyan-500",
    tagStyle: "bg-teal-100 text-teal-700",
    borderHover: "hover:border-teal-400",
  },
  {
    title: "Single Tasking",
    tag: "Productivity",
    icon: "🔕",
    desc: "Focus on one task at a time for better results.",
    color: "from-yellow-400 to-amber-500",
    bar: "from-yellow-400 to-amber-500",
    tagStyle: "bg-yellow-100 text-yellow-700",
    borderHover: "hover:border-yellow-400",
  },
];

const cardVariants = {
  hidden: { opacity: 0, rotateY: 90, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
    },
  }),
};

const TipCard = ({ tip, index }) => {
  const cardRef = useRef(null);
  const shimmerRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 14;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -14;
    card.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  const handleMouseEnter = () => {
    const shimmer = shimmerRef.current;
    if (!shimmer) return;
    shimmer.classList.remove("animate-shimmer");
    void shimmer.offsetWidth; // reflow to restart animation
    shimmer.classList.add("animate-shimmer");
  };

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
        .animate-shimmer {
          animation: shimmer 0.6s ease forwards;
        }
      `}</style>

      <motion.div
        custom={index}
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        viewport={{ once: true }}
        className={`relative group rounded-2xl p-[1px] bg-gradient-to-br border ${tip.borderHover} from-gray-200/20 to-white/10 transition-colors duration-300`}
      >
        {/* Gradient glow — same as original */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition duration-500 bg-gradient-to-br from-purple-500/30 to-blue-500/30" />

        {/* Card inner */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-3 h-full overflow-hidden transition-[box-shadow] duration-200"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Shimmer overlay */}
          <div
            ref={shimmerRef}
            className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full"
          />

          {/* Top row — same as original */}
          <div className="flex justify-between items-center">
            <span
              className={`text-2xl bg-gradient-to-r ${tip.color} bg-clip-text text-transparent transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.35] group-hover:-rotate-[8deg] inline-block`}
            >
              {tip.icon}
            </span>
            <span className={`text-xs px-3 py-1 rounded-full font-medium ${tip.tagStyle}`}>
              {tip.tag}
            </span>
          </div>

          {/* Title — same as original */}
          <h3 className="text-lg font-bold text-gray-800">{tip.title}</h3>

          {/* Description — same as original */}
          <p className="text-sm text-gray-500">{tip.desc}</p>

          {/* Bottom bar — replaces original hover line, now gradient + smooth slide */}
          <div
            className={`mt-auto h-[2px] w-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r ${tip.bar}`}
          />
        </div>
      </motion.div>
    </>
  );
};

const LearningTipCard = () => {
  return (
    <section className="my-10">
      <h2 className="font-bold text-2xl mb-6 text-center">Learning Tips ✨</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <TipCard key={index} tip={tip} index={index} />
        ))}
      </div>
    </section>
  );
};

export default LearningTipCard;