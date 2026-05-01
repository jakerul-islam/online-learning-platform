import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const Instructor = () => {
    return (
        <div className='my-7'>
            <h2 className='font-bold text-2xl'>Our Instructors</h2>
            
            
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            
                           <Card>
            
                           <div>
                             <Image src={"https://i.ibb.co.com/BVFzcnKh/Generated-Image-September-12-2025-5-06-AM.png"}  width={300} height={300} alt=''
                             className="rounded-2xl w-full h-full object-cover p-2"
                            />
                           </div>
                            <div className="p-4 space-y-2">
                                   
                                   {/* Title */}
                                   <h2 className="text-lg font-semibold line-clamp-2">
                                   Instructor: Forhad Hossain
                                   </h2>
                           
                                   {/* Instructor */}
                                   <p className="text-sm text-gray-500">
                                      Python for Data Science & Machine Learning
                                   </p>
                           
                                   {/* Rating */}
                                 
                           
                                  
                                  
                                 </div>
                           </Card>
                           <Card>
            
                           <div>
                             <Image src={"https://i.ibb.co.com/NdmhnZ8h/image.png"}  width={300} height={300} alt=''
                             className="rounded-2xl w-full h-full object-cover p-2"
                            />
                           </div>
                            <div className="p-4 space-y-2">
                                   
                                   {/* Title */}
                                   <h2 className="text-lg font-semibold line-clamp-2">
                                    Instructor: Jakerul islam
                                   </h2>
                           
                                   {/* Instructor */}
                                   <p className="text-sm text-gray-500">
                                     Freelancing & Personal Branding Masterclass
                                   </p>
                           
                                   {/* Rating */}
                                  
                           
                                   
                                 
                                 </div>
                           </Card>
                           <Card>
            
                           <div>
                             <Image src={"https://i.ibb.co.com/nq4cHvL1/image.png"}  width={300} height={300} alt=''
                             className="rounded-2xl w-full h-full object-cover p-2"
                            />
                           </div>
                            <div className="p-4 space-y-2">
                                   
                                   {/* Title */}
                                   <h2 className="text-lg font-semibold line-clamp-2">
                                  Instructor:Jhankar Mahbub
                                   </h2>
                           
                                   {/* Instructor */}
                                   <p className="text-sm text-gray-500">
                                    Video Editing with Premiere Pro & After Effects  
                                   </p>
                           
                                  
                           
                                   
                                 </div>
                           </Card>
                        </div>
        </div>
    );
};

export default Instructor;