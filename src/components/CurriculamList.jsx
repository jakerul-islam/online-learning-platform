import React from 'react';

const badges = [
  { label: "Web Development",   dot: "bg-orange-500",  style: "bg-orange-50 border-orange-200 text-orange-900" },
  { label: "UI/UX Design",      dot: "bg-blue-500",    style: "bg-blue-50 border-blue-200 text-blue-900" },
  { label: "Digital Marketing", dot: "bg-teal-500",    style: "bg-teal-50 border-teal-200 text-teal-900" },
  { label: "Node.js",           dot: "bg-green-600",   style: "bg-green-50 border-green-200 text-green-900" },
  { label: "React.js",          dot: "bg-sky-500",     style: "bg-sky-50 border-sky-200 text-sky-900" },
  { label: "Graphic Design",    dot: "bg-yellow-500",  style: "bg-yellow-50 border-yellow-200 text-yellow-900" },
  { label: "Next.js",           dot: "bg-gray-600",    style: "bg-gray-100 border-gray-300 text-gray-800" },
  { label: "Python",            dot: "bg-emerald-600", style: "bg-emerald-50 border-emerald-300 text-emerald-900" },
  { label: "Video Editing",     dot: "bg-rose-500",    style: "bg-rose-50 border-rose-200 text-rose-900" },
];

const stats = [
  {
    num: "১০০০+",
    label: "ভিডিও লেসন",
    sub: "কুইজ, নোট ও এক্সপ্লোরেশনসহ প্রতিটি ভিডিও",
    color: "text-blue-700",
    bg: "bg-blue-50",
    bar: "bg-blue-500",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="13" rx="2" stroke="#378ADD" strokeWidth="1.8"/>
        <path d="M10 9l4 2.5-4 2.5V9z" fill="#378ADD"/>
        <path d="M8 20h8" stroke="#378ADD" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "৩০+",
    label: "হ্যান্ডস-অন প্রজেক্ট",
    sub: "রিয়েল-ওয়ার্ল্ড প্রজেক্ট বানাও নিজে",
    color: "text-green-700",
    bg: "bg-green-50",
    bar: "bg-green-500",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <polyline points="16 18 22 12 16 6" stroke="#639922" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" stroke="#639922" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "১০+",
    label: "অ্যাসাইনমেন্ট",
    sub: "প্র্যাকটিস করে দক্ষতা যাচাই করো",
    color: "text-red-600",
    bg: "bg-red-50",
    bar: "bg-red-500",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="#E24B4A" strokeWidth="1.8"/>
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="#E24B4A" strokeWidth="1.8"/>
        <path d="M9 12h6M9 16h4" stroke="#E24B4A" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const CurriculamList = () => {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          0%   { opacity: 0; transform: translateY(32px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes badgePop {
          0%   { opacity: 0; transform: scale(0.7); }
          70%  { transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes barGrow {
          0%   { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes pulseRing {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes headingSlide {
          0%   { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .curr-heading  { animation: headingSlide 0.6s cubic-bezier(0.23,1,0.32,1) both; }
        .curr-sub      { animation: fadeUp 0.6s 0.15s cubic-bezier(0.23,1,0.32,1) both; }

        .badge-item {
          opacity: 0;
          animation: badgePop 0.45s cubic-bezier(0.34,1.56,0.64,1) both;
        }

        .stat-card {
          opacity: 0;
          animation: fadeUp 0.6s cubic-bezier(0.23,1,0.32,1) both;
        }
        .stat-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.08); }
        .stat-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }

        .bar-fill {
          width: 0%;
          animation: barGrow 1s 0.8s cubic-bezier(0.23,1,0.32,1) both;
        }

        .pulse-ring {
          animation: pulseRing 1.4s ease-out infinite;
        }

        .badge-item:hover {
          transform: translateY(-3px) scale(1.05);
          transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }

        .divider-line {
          animation: barGrow 0.8s 0.3s ease both;
          width: 0%;
        }
      `}</style>

      <div className="my-10 px-2">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="curr-sub text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">
            কোর্স কারিকুলাম
          </p>
          <h2 className="curr-heading text-3xl md:text-4xl font-bold mb-2">
            এই কোর্সে তুমি{" "}
            <span className="text-purple-600">কি শিখবে?</span>
          </h2>
          <p className="curr-sub text-sm text-gray-400">দক্ষতা অর্জন করো, ক্যারিয়ার গড়ো</p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-10">
          {badges.map((b, i) => (
            <div
              key={i}
              className={`badge-item flex items-center gap-2 border px-4 py-2 rounded-full text-sm font-semibold cursor-default ${b.style}`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {/* Pulsing dot */}
              <span className="relative flex items-center justify-center w-2 h-2">
                <span className={`pulse-ring absolute inline-flex w-full h-full rounded-full ${b.dot} opacity-60`}
                  style={{ animationDelay: `${i * 0.15}s` }} />
                <span className={`relative inline-flex w-2 h-2 rounded-full ${b.dot}`} />
              </span>
              {b.label}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="max-w-3xl mx-auto mb-10 h-[1px] bg-gray-100 overflow-hidden rounded-full">
          <div className="divider-line h-full bg-gradient-to-r from-purple-300 via-blue-300 to-teal-300" />
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <div
              key={i}
              className="stat-card bg-white border border-gray-100 rounded-2xl p-5 overflow-hidden relative"
              style={{ animationDelay: `${0.3 + i * 0.12}s` }}
            >
              {/* Subtle bg circle */}
              <div className={`absolute -top-5 -right-5 w-20 h-20 rounded-full ${s.bg} opacity-60`} />

              <div className="flex items-start gap-4 relative z-10">
                <div className={`w-14 h-14 rounded-xl ${s.bg} flex items-center justify-center flex-shrink-0`}>
                  {s.icon}
                </div>
                <div className="text-left flex-1">
                  <p className={`text-2xl font-bold ${s.color}`}>{s.num}</p>
                  <p className="text-sm font-semibold text-gray-700">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">{s.sub}</p>
                </div>
              </div>

              {/* Animated progress bar at bottom */}
              <div className="mt-4 h-[3px] bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`bar-fill h-full rounded-full ${s.bar}`}
                  style={{ animationDelay: `${0.6 + i * 0.15}s` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CurriculamList;