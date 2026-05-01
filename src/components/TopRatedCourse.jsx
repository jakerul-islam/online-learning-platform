import React from 'react';
import CourseCard from './CourseCard';

const TopRatedCourse =async () => {

    const res = await fetch('https://online-learning-platform-self-nine.vercel.app/data.json');
    const topRatedCourse = await res.json()

    const courses = topRatedCourse.slice(0,3)

    // console.log(courses, 'top 3 course')
    return (
        <div className='my-5'>

            <h2 className='text-2xl font-bold my-3'> Top Rated courses</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    courses.map(course=> <CourseCard course={course} key={course.id}/>)
                }
            </div>
            
        </div>
    );
};

export default TopRatedCourse;