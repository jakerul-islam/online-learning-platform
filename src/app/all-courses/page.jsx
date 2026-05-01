import CourseCard from '@/components/CourseCard';
import React from 'react';

const AllCoursesPage =async () => {
     const res = await fetch('https://online-learning-platform-self-nine.vercel.app/data.json');
    const courses = await res.json()
console.log(courses, 'all courses page')
    return (
        <div>
            <h2 className='font-bold text-2xl my-4'>All courses</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {
                    courses.map(course=> <CourseCard course={course} key={course.id}/>)
                }
            </div>
        </div>
    );
};

export default AllCoursesPage;