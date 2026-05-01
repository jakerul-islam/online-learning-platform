import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TrendingCourses =async () => {

   const res = await fetch('https://online-learning-platform-self-nine.vercel.app/data.json');
    const course = await res.json()

    console.log(course, ' from trending page')
    
    return (
        <div>
            <h2 className='font-bold text-2xl'>Trending Courses</h2>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

               <Card>

               <div>
                 <Image src={"https://i.ibb.co.com/ds7G2bL4/image.png"}  width={300} height={300} alt=''
                 className="rounded-2xl w-full h-full object-cover p-2"
                />
               </div>
                <div className="p-4 space-y-2">
                       
                       {/* Title */}
                       <h2 className="text-lg font-semibold line-clamp-2">
                        Python for Data Science & Machine Learning
                       </h2>
               
                       {/* Instructor */}
                       <p className="text-sm text-gray-500">
                         Instructor: Dr. Imran Khan
                       </p>
               
                       {/* Rating */}
                       <div className="flex items-center gap-1 text-yellow-500 text-sm">
                         ⭐ 4
                       </div>
               
                       {/* Button */}
                       <Button variant="outline" className={'w-full'}>View Details</Button>
                     </div>
               </Card>
               <Card>

               <div>
                 <Image src={"https://i.ibb.co.com/NM1xBQz/image.png"}  width={300} height={300} alt=''
                 className="rounded-2xl w-full h-full object-cover p-2"
                />
               </div>
                <div className="p-4 space-y-2">
                       
                       {/* Title */}
                       <h2 className="text-lg font-semibold line-clamp-2">
                        Freelancing & Personal Branding Masterclass
                       </h2>
               
                       {/* Instructor */}
                       <p className="text-sm text-gray-500">
                         Instructor: Mehedi Hasan
                       </p>
               
                       {/* Rating */}
                       <div className="flex items-center gap-1 text-yellow-500 text-sm">
                         ⭐ 4.8
                       </div>
               
                       {/* Button */}
                       <Button variant="outline" className={'w-full'}>View Details</Button>
                     </div>
               </Card>
               <Card>

               <div>
                 <Image src={"https://i.ibb.co.com/G3sQ8rVZ/image.png"}  width={300} height={300} alt=''
                 className="rounded-2xl w-full h-full object-cover p-2"
                />
               </div>
                <div className="p-4 space-y-2">
                       
                       {/* Title */}
                       <h2 className="text-lg font-semibold line-clamp-2">
                       Video Editing with Premiere Pro & After Effects
                       </h2>
               
                       {/* Instructor */}
                       <p className="text-sm text-gray-500">
                         Instructor:Shakil Ahmed
                       </p>
               
                       {/* Rating */}
                       <div className="flex items-center gap-1 text-yellow-500 text-sm">
                         ⭐ 4.9
                       </div>
               
                       {/* Button */}
                      <Button variant="outline" className={'w-full'}>View Details</Button>
                     </div>
               </Card>
            </div>
        </div>
    );
};

export default TrendingCourses;