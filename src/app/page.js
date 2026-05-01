import CourseCard from "@/components/CourseCard";
import Hero from "@/components/Hero";
import Instructor from "@/components/Instructor";
import LearningTipCard from "@/components/LearningTips";
import TopRatedCourse from "@/components/TopRatedCourse";
import TrendingCourses from "@/components/TrendingCourses";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Hero/>
     <TopRatedCourse/>
     <LearningTipCard/>
     <TrendingCourses/>
     <Instructor/>
    </div>
  );
}
