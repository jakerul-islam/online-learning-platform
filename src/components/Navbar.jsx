"use client";
import { authClient, signOut } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const userData = authClient.useSession();

  const user = userData.data?.user;

  

  console.log(user, "user from navbar");

  return (
    <div className="border-b px-2 mb-6">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <h3 className="font-black text-lg">SkillSphere</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-courses"}>All Courses</Link>
          </li>

          <li>
            <Link href={"/profile"}>My Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          {!user && (
            <ul className="flex items-center gap-3  text-sm">
              <li>
                <Link href={"/signup"}><Button variant="outline">Sign Up</Button></Link>
              </li>
              <li>
                <Link href={"/signin"}><Button className={'bg-slate-600'}>Sign In</Button></Link>
              </li>
            </ul>
          )}
          {user && (
            <div>
              <Avatar>
                <Avatar.Image
                  alt={user?.name}
                  src={user?.image}
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Link href={'/'}><Button onClick={()=>signOut()} variant="danger">SignOut</Button></Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
