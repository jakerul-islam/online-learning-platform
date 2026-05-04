import Image from 'next/image';
import React from 'react';

const instructors = [
  {
    image: "https://i.ibb.co.com/BVFzcnKh/Generated-Image-September-12-2025-5-06-AM.png",
    name: "Forhad Hossain",
    course: "Python for Data Science & Machine Learning",
    tag: "Data Science",
    color: "from-blue-500 to-indigo-500",
    tagStyle: "bg-blue-100 text-blue-700",
    students: "12.4k",
    exp: "5 yrs",
  },
  {
    image: "https://i.ibb.co.com/NdmhnZ8h/image.png",
    name: "Jakerul Islam",
    course: "Freelancing & Personal Branding Masterclass",
    tag: "Business",
    color: "from-purple-500 to-pink-500",
    tagStyle: "bg-purple-100 text-purple-700",
    students: "9.1k",
    exp: "7 yrs",
  },
  {
    image: "https://i.ibb.co.com/nq4cHvL1/image.png",
    name: "Jhankar Mahbub",
    course: "Video Editing with Premiere Pro & After Effects",
    tag: "Design",
    color: "from-orange-400 to-rose-500",
    tagStyle: "bg-orange-100 text-orange-700",
    students: "18.7k",
    exp: "10 yrs",
  },
];

const Instructor = () => {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          0%   { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatAvatar {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
        .instructor-card {
          animation: fadeUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .instructor-card:hover .avatar-wrap {
          animation: floatAvatar 2s ease-in-out infinite;
        }
        .instructor-card:hover .shimmer-layer {
          animation: shimmer 0.7s ease forwards;
        }
        .ring-glow {
          transition: box-shadow 0.4s ease;
        }
        .instructor-card:hover .ring-glow {
          box-shadow: 0 0 0 4px white, 0 0 0 7px rgba(139,92,246,0.4);
        }
        .bar-line {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .instructor-card:hover .bar-line {
          transform: scaleX(1);
        }
        .stat-pill {
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .instructor-card:hover .stat-pill {
          transform: translateY(-2px);
        }
      `}</style>

      <div className="my-7">
        <h2 className="font-bold text-2xl mb-6 text-gray-800">
          Meet Our Instructors 🎓
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((ins, index) => (
            <div
              key={index}
              className="instructor-card group relative bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {/* Shimmer */}
              <div className="shimmer-layer pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full" />

              {/* Top gradient banner */}
              <div className={`h-24 w-full bg-gradient-to-r ${ins.color} relative`}>
                <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full ${ins.tagStyle}`}>
                  {ins.tag}
                </span>
              </div>

              {/* Avatar — overlaps banner */}
              <div className="flex justify-center -mt-12 mb-3">
                <div className="avatar-wrap ring-glow rounded-full border-4 border-white overflow-hidden w-24 h-24 shadow-md">
                  <Image
                    src={ins.image}
                    width={96}
                    height={96}
                    alt={ins.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="px-5 pb-5 text-center space-y-1">
                <h2 className="text-base font-bold text-gray-800">{ins.name}</h2>
                <p className="text-xs text-gray-400 line-clamp-2">{ins.course}</p>

                {/* Stats */}
                <div className="flex justify-center gap-3 pt-2">
                  <div className="stat-pill flex flex-col items-center bg-gray-50 rounded-xl px-4 py-2">
                    <span className="text-sm font-bold text-gray-800">{ins.students}</span>
                    <span className="text-[10px] text-gray-400">Students</span>
                  </div>
                  <div className="stat-pill flex flex-col items-center bg-gray-50 rounded-xl px-4 py-2">
                    <span className="text-sm font-bold text-gray-800">{ins.exp}</span>
                    <span className="text-[10px] text-gray-400">Experience</span>
                  </div>
                </div>

                {/* Animated bar */}
                <div className={`bar-line mt-3 h-[2px] w-full rounded-full bg-gradient-to-r ${ins.color}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Instructor;