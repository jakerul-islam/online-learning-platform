"use client";

import CourseCard from '@/components/CourseCard';
import React, { useEffect, useState } from 'react';

const AllCoursesPage = () => {
    const [courses, setCourses] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState(""); 

    useEffect(() => {
        fetch('https://online-learning-platform-self-nine.vercel.app/data.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    
    const handleSearch = () => {
        setQuery(search);
    };


    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <h2 className='font-bold text-2xl my-4'>All courses</h2>

            {/* Search Input + Button */}
            <div className="flex gap-2 mb-6">
                <input
                    type="text"
                    placeholder="Search courses..."
                    className="border p-2 rounded "
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <button
                    onClick={handleSearch}
                    className="bg-blue-600 text-white px-4 rounded"
                >
                    Search
                </button>
            </div>

            {/* Courses Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    filteredCourses.length > 0 ? (
                        filteredCourses.map(course => (
                            <CourseCard course={course} key={course.id} />
                        ))
                    ) : (
                        <p className="text-center col-span-3 text-gray-500">
                            No courses found
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default AllCoursesPage;


// import CourseCard from '@/components/CourseCard';
// import React from 'react';

// const AllCoursesPage =async () => {
//      const res = await fetch('https://online-learning-platform-self-nine.vercel.app/data.json');
//     const courses = await res.json()
// console.log(courses, 'all courses page')
//     return (
//         <div>
//             <h2 className='font-bold text-2xl my-4'>All courses</h2>

//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
//                 {
//                     courses.map(course=> <CourseCard course={course} key={course.id}/>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default AllCoursesPage;