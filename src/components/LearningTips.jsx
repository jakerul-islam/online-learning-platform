import React from "react";

const LearningTipCard = () => {
  return (
    <div className="my-7">
        <h2 className="font-bold text-2xl my-5">Learning Tips </h2>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        

      {/* Card 1 - Active Recall */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl">
            🧠
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-600">
            Memory
          </span>
        </div>
        <p className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
          Study Technique
        </p>
        <h3 className="text-lg font-bold text-gray-800 leading-snug -mt-1">
          Active Recall
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          After each lesson, close your notes and write down everything you remember. Testing yourself strengthens memory far better than re-reading.
        </p>
        <a href="#" className="text-sm font-semibold text-indigo-500 hover:text-indigo-700 transition-colors self-start">
          Read more ↓
        </a>
      </div>

      {/* Card 2 - Pomodoro Technique */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
            ⏱️
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-600">
            Focus
          </span>
        </div>
        <p className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
          Time Management
        </p>
        <h3 className="text-lg font-bold text-gray-800 leading-snug -mt-1">
          Pomodoro Technique
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          Work in focused 25-minute blocks, then take a 5-minute break. After 4 pomodoros, take a longer 15–30 minute break to recharge.
        </p>
        <a href="#" className="text-sm font-semibold text-indigo-500 hover:text-indigo-700 transition-colors self-start">
          Read more ↓
        </a>
      </div>

      {/* Card 3 - Spaced Repetition */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-2xl">
            🗓️
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-orange-600">
            Retention
          </span>
        </div>
        <p className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
          Study Technique
        </p>
        <h3 className="text-lg font-bold text-gray-800 leading-snug -mt-1">
          Spaced Repetition
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          Review material at increasing intervals — 1 day, 3 days, 1 week, 2 weeks. This technique exploits how your brain consolidates memories.
        </p>
        <a href="#" className="text-sm font-semibold text-indigo-500 hover:text-indigo-700 transition-colors self-start">
          Read more ↓
        </a>
      </div>

      {/* Card 4 - The Feynman Technique */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-2xl">
            🚀
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-pink-100 text-pink-600">
            Understanding
          </span>
        </div>
        <p className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
          Study Technique
        </p>
        <h3 className="text-lg font-bold text-gray-800 leading-snug -mt-1">
          The Feynman Technique
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          Explain a concept in simple terms as if teaching a child. When you get stuck, go back to the source. Simplicity reveals true understanding.
        </p>
        <a href="#" className="text-sm font-semibold text-indigo-500 hover:text-indigo-700 transition-colors self-start">
          Read more ↓
        </a>
      </div>

      {/* Card 5 - Time Blocking */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-2xl">
            🎯
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-100 text-teal-600">
            Planning
          </span>
        </div>
        <p className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
          Time Management
        </p>
        <h3 className="text-lg font-bold text-gray-800 leading-snug -mt-1">
          Time Blocking
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          Schedule specific learning blocks in your calendar and treat them like meetings. Assign tasks to time slots to remove decision fatigue.
        </p>
        <a href="#" className="text-sm font-semibold text-indigo-500 hover:text-indigo-700 transition-colors self-start">
          Read more ↓
        </a>
      </div>

      {/* Card 6 - Single-Tasking */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-2xl">
            🔕
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-100 text-amber-600">
            Productivity
          </span>
        </div>
        <p className="text-[11px] font-semibold tracking-widest text-gray-400 uppercase">
          Focus
        </p>
        <h3 className="text-lg font-bold text-gray-800 leading-snug -mt-1">
          Single-Tasking
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          Close all unrelated tabs, silence notifications, and give 100% attention to one subject. Multitasking reduces output quality significantly.
        </p>
        <a href="#" className="text-sm font-semibold text-indigo-500 hover:text-indigo-700 transition-colors self-start">
          Read more ↓
        </a>
      </div>

    </div>
    </div>
  );
};

export default LearningTipCard;