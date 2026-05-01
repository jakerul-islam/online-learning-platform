import Image from 'next/image';
import React from 'react';

const CourseDetailsPage = async({params}) => {
    const {id}= await params;

    const res = await fetch('https://online-learning-platform-self-nine.vercel.app/data.json')
    const courses = await res.json();

    const course = courses.find(c=> c.id == id)

 
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border">
      
      {/* Image */}
      <div className=" ">
        <Image
          src={course.image}
            // fill
            width={200} height={200}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={course.title}
          className="rounded-2xl w-full h-full object-cover p-2"
          
        />
       
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        
        {/* Title */}
        <h2 className="text-lg font-semibold line-clamp-2">
          {course.title}
        </h2>

        <p className='font-bold'>Description: {course.description}</p>

        {/* Instructor */}
        <p className="text-sm text-gray-500">
          Instructor: {course.instructor}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          ⭐ {course.rating}
        </div>

        <div className='flex justify-between items-center'>

            <p className='text-gray-500'>Level: {course.level}</p>
            <p className='text-gray-500'>Duration: {course.duration}</p>
        </div>

        <div>
            <h2 className='font-bold '>Category: {course.category}</h2>
            
        </div>

      
      </div>
    </div>
    );
};

export default CourseDetailsPage;