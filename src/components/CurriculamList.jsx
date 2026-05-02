import Image from 'next/image';
import React from 'react';

const CurriculamList = () => {
    return (
    <div className='my-10'>
  <h2 className='font-bold text-2xl text-center text-blue-300'>Course Curriculum</h2>

  <div className="text-center py-12">

    {/* Heading */}
    {/* <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">কোর্স কারিকুলাম</p> */}
    <h2 className="text-3xl md:text-4xl font-bold mb-2">
      এই কোর্সে তুমি{" "}
      <span className="text-purple-600">কি শিখবে?</span>
    </h2>
    <p className="text-sm text-gray-400 mb-10">দক্ষতা অর্জন করো, ক্যারিয়ার গড়ো</p>

    {/* Tech Badges */}
    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-12">

      <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-900 px-4 py-2 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-transform">
        <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0"></span>
        Web Development
      </div>

      <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-transform">
        <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
        UI/UX Design
      </div>

      <div className="flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-900 px-4 py-2 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-transform">
        <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0"></span>
        Digital Marketing
      </div>

      <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-900 px-4 py-2 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-transform">
        <span className="w-2 h-2 rounded-full bg-green-600 flex-shrink-0"></span>
        Node.js
      </div>

      <div className="flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-900 px-4 py-2 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-transform">
        <span className="w-2 h-2 rounded-full bg-sky-500 flex-shrink-0"></span>
        React.js
      </div>

      <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-900 px-4 py-2 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-transform">
        <span className="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></span>
        Graphic Design
      </div>

      <div className="flex items-center gap-2 bg-gray-100 border border-gray-300 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-transform">
        <span className="w-2 h-2 rounded-full bg-gray-500 flex-shrink-0"></span>
        Next.js
      </div>

      <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-900 px-4 py-2 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-transform">
        <span className="w-2 h-2 rounded-full bg-emerald-600 flex-shrink-0"></span>
        Python
      </div>

      <div className="flex items-center gap-2 bg-gray-200 border border-gray-400 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-transform">
        <span className="w-2 h-2 rounded-full bg-gray-600 flex-shrink-0"></span>
        Video Editing
      </div>

    </div>

    {/* Divider */}
    <hr className="border-t border-gray-200 my-8 max-w-3xl mx-auto" />

    {/* Stat Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">

      {/* Videos */}
      <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-5 hover:border-gray-300 transition-colors">
        <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="13" rx="2" stroke="#378ADD" strokeWidth="1.8"/>
            <path d="M10 9l4 2.5-4 2.5V9z" fill="#378ADD"/>
            <path d="M8 20h8" stroke="#378ADD" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="text-left">
          <p className="text-2xl font-bold text-blue-700">১০০০+</p>
          <p className="text-sm font-semibold text-gray-600">ভিডিও লেসন</p>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">কুইজ, নোট ও এক্সপ্লোরেশনসহ প্রতিটি ভিডিও</p>
        </div>
      </div>

      {/* Projects */}
      <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-5 hover:border-gray-300 transition-colors">
        <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <polyline points="16 18 22 12 16 6" stroke="#639922" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="8 6 2 12 8 18" stroke="#639922" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="text-left">
          <p className="text-2xl font-bold text-green-700">৩০+</p>
          <p className="text-sm font-semibold text-gray-600">হ্যান্ডস-অন প্রজেক্ট</p>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">রিয়েল-ওয়ার্ল্ড প্রজেক্ট বানাও নিজে</p>
        </div>
      </div>

      {/* Assignments */}
      <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-5 hover:border-gray-300 transition-colors">
        <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="#E24B4A" strokeWidth="1.8"/>
            <rect x="9" y="3" width="6" height="4" rx="1" stroke="#E24B4A" strokeWidth="1.8"/>
            <path d="M9 12h6M9 16h4" stroke="#E24B4A" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="text-left">
          <p className="text-2xl font-bold text-red-600">১০+</p>
          <p className="text-sm font-semibold text-gray-600">অ্যাসাইনমেন্ট</p>
          <p className="text-xs text-gray-400 mt-1 leading-relaxed">প্র্যাকটিস করে দক্ষতা যাচাই করো</p>
        </div>
      </div>

    </div>
  </div>
</div>
    );
};

export default CurriculamList;