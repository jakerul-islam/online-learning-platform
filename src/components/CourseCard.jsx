// "use client";

// import { Button } from "@heroui/react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const CourseCard = ({ course }) => {
//   const { id,title, instructor, rating, image } = course;

//   return (
//     <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 border">
      
//       {/* Image */}
//       <div className=" ">
//         <Image
//           src={image}
//             // fill
//             width={300} height={300}
//             // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           alt={title}
//           className="rounded-2xl w-full h-full object-cover p-2"
          
//         />
       
//       </div>

//       {/* Content */}
//       <div className="p-4 space-y-2">
        
//         {/* Title */}
//         <h2 className="text-lg font-semibold line-clamp-2">
//           {title}
//         </h2>

//         {/* Instructor */}
//         <p className="text-sm text-gray-500">
//           Instructor: {instructor}
//         </p>

//         {/* Rating */}
//         <div className="flex items-center gap-1 text-yellow-500 text-sm">
//           ⭐ {rating}
//         </div>

//         {/* Button */}
//        <Link href={`/all-courses/${id}`}><Button variant="secondary" className={'w-full'}>View Details</Button></Link>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;


"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const CourseCard = ({ course }) => {
  const { id, title, instructor, rating, image } = course;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl border"
    >
      
      {/* Image */}
      <div className="overflow-hidden">
        <motion.div whileHover={{ scale: 1.08 }}>
          <Image
            src={image}
            width={300}
            height={300}
            alt={title}
            className="rounded-2xl w-full h-full object-cover p-2 transition duration-300"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        
        {/* Title */}
        <h2 className="text-lg font-semibold line-clamp-2">
          {title}
        </h2>

        {/* Instructor */}
        <p className="text-sm text-gray-500">
          Instructor: {instructor}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 text-sm">
          ⭐ {rating}
        </div>

        {/* Button */}
        <Link href={`/all-courses/${id}`}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="secondary" className="w-full">
              View Details
            </Button>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;