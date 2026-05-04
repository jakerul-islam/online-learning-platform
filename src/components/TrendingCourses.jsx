


import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const courses = [
  {
    image: "https://i.ibb.co.com/ds7G2bL4/image.png",
    title: "Python for Data Science & Machine Learning",
    instructor: "Dr. Imran Khan",
    rating: "4.0",
    color: "from-blue-500 to-indigo-500",
    glow: "group-hover:shadow-blue-300/50",
    tag: "Data Science",
    tagStyle: "bg-blue-100 text-blue-700",
  },
  {
    image: "https://i.ibb.co.com/NM1xBQz/image.png",
    title: "Freelancing & Personal Branding Masterclass",
    instructor: "Mehedi Hasan",
    rating: "4.8",
    color: "from-purple-500 to-pink-500",
    glow: "group-hover:shadow-purple-300/50",
    tag: "Business",
    tagStyle: "bg-purple-100 text-purple-700",
  },
  {
    image: "https://i.ibb.co.com/G3sQ8rVZ/image.png",
    title: "Video Editing with Premiere Pro & After Effects",
    instructor: "Shakil Ahmed",
    rating: "4.9",
    color: "from-orange-400 to-rose-500",
    glow: "group-hover:shadow-orange-300/50",
    tag: "Design",
    tagStyle: "bg-orange-100 text-orange-700",
  },
];

const TrendingCourses = async () => {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          0%   { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
        @keyframes headingReveal {
          0%   { opacity: 0; transform: translateX(-24px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .course-card {
          animation: fadeUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .shimmer-layer {
          transition: none;
        }
        .course-card:hover .shimmer-layer {
          animation: shimmer 0.7s ease forwards;
        }
        .trending-heading {
          animation: headingReveal 0.5s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        .img-zoom img {
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .course-card:hover .img-zoom img {
          transform: scale(1.07);
        }
        .bar-line {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .course-card:hover .bar-line {
          transform: scaleX(1);
        }
      `}</style>

      <div>
        <h2 className="trending-heading font-bold text-2xl mb-6 text-gray-800">
          Trending Courses 🔥
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`course-card group relative rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-md transition-shadow duration-300 ${course.glow} hover:shadow-xl cursor-pointer`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {/* Shimmer overlay */}
              <div className="shimmer-layer pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full" />

              {/* Image with zoom */}
              <div className="img-zoom relative overflow-hidden rounded-t-2xl h-48">
                <Image
                  src={course.image}
                  width={600}
                  height={300}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${course.tagStyle}`}>
                  {course.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 space-y-2 relative">
                <h2 className="text-base font-semibold text-gray-800 line-clamp-2 group-hover:text-gray-900 transition-colors duration-200">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-400">
                  👨‍🏫 {course.instructor}
                </p>
                <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
                  ⭐ {course.rating}
                  <span className="text-gray-300 text-xs ml-1">/ 5.0</span>
                </div>
                <div className={`bar-line h-[2px] w-full rounded-full bg-gradient-to-r ${course.color}`} />
                <Button variant="outline" className="w-full mt-1 transition-all duration-300 group-hover:bg-gray-50">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrendingCourses;